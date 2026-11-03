
# from django.shortcuts import get_object_or_404

# from rest_framework import generics, permissions
# from .models import Article
# from .serializers import ArticleSerializer


# class ArticleListCreateAPIView(generics.ListCreateAPIView):
#     serializer_class = ArticleSerializer

#     def get_queryset(self):
#         queryset = Article.objects.select_related("category", "author")

#         if self.request.user.is_authenticated and self.request.user.is_staff:
#             return queryset

#         return queryset.filter(status=Article.Status.PUBLISHED)

#     def get_permissions(self):
#         if self.request.method in ["GET", "HEAD", "OPTIONS"]:
#             return [permissions.AllowAny()]

#         return [permissions.IsAdminUser()]

#     def perform_create(self, serializer):
#         serializer.save(author=self.request.user)


# class ArticleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = ArticleSerializer

#     def get_queryset(self):
#         queryset = Article.objects.select_related("category", "author")

#         if self.request.user.is_authenticated and self.request.user.is_staff:
#             return queryset

#         return queryset.filter(status=Article.Status.PUBLISHED)

#     def get_permissions(self):
#         if self.request.method in ["GET", "HEAD", "OPTIONS"]:
#             return [permissions.AllowAny()]

#         return [permissions.IsAdminUser()]

#     def get_object(self):
#         queryset = self.filter_queryset(self.get_queryset())

#         # Numeric URL: /api/articles/1/
#         if "pk" in self.kwargs:
#             article = get_object_or_404(
#                 queryset,
#                 pk=self.kwargs["pk"]
#             )

#         # Slug URL: /api/articles/article-slug/
#         else:
#             article = get_object_or_404(
#                 queryset,
#                 slug=self.kwargs["slug"]
#             )

#         self.check_object_permissions(self.request, article)
#         return article


# class FeaturedNewsListAPIView(generics.ListAPIView):
#     serializer_class = ArticleSerializer
#     permission_classes = [permissions.AllowAny]

#     queryset = Article.objects.filter(
#         is_featured=True,
#         status=Article.Status.PUBLISHED
#     ).select_related(
#         "category",
#         "author"
#     ).order_by(
#         "-published_at",
#         "-created_at"
#     )



from django.shortcuts import get_object_or_404

from rest_framework import generics, permissions

from .models import Article
from .serializers import ArticleSerializer


class IsAdminOrEditor(permissions.BasePermission):
    """
    Allow article management only to ADMIN and EDITOR users.
    """

    def has_permission(self, request, view):
        user = request.user

        if not user or not user.is_authenticated:
            return False

        # Django superuser
        if user.is_superuser:
            return True

        # Custom project roles
        return getattr(user, "role", None) in ["ADMIN", "EDITOR"]


class ArticleListCreateAPIView(generics.ListCreateAPIView):

    serializer_class = ArticleSerializer

    def get_queryset(self):
        queryset = Article.objects.select_related(
            "category",
            "author"
        )

        user = self.request.user

        if (
            user.is_authenticated
            and (
                user.is_superuser
                or getattr(user, "role", None) in ["ADMIN", "EDITOR"]
            )
        ):
            return queryset

        return queryset.filter(
            status=Article.Status.PUBLISHED
        )

    def get_permissions(self):
        if self.request.method in ["GET", "HEAD", "OPTIONS"]:
            return [permissions.AllowAny()]

        return [IsAdminOrEditor()]

    def perform_create(self, serializer):
        serializer.save(
            author=self.request.user
        )


class ArticleDetailAPIView(
    generics.RetrieveUpdateDestroyAPIView
):

    serializer_class = ArticleSerializer

    def get_queryset(self):
        queryset = Article.objects.select_related(
            "category",
            "author"
        )

        user = self.request.user

        if (
            user.is_authenticated
            and (
                user.is_superuser
                or getattr(user, "role", None) in ["ADMIN", "EDITOR"]
            )
        ):
            return queryset

        return queryset.filter(
            status=Article.Status.PUBLISHED
        )

    def get_permissions(self):
        if self.request.method in ["GET", "HEAD", "OPTIONS"]:
            return [permissions.AllowAny()]

        return [IsAdminOrEditor()]

    def get_object(self):
        queryset = self.filter_queryset(
            self.get_queryset()
        )

        # Numeric URL:
        # /api/articles/1/
        if "pk" in self.kwargs:

            article = get_object_or_404(
                queryset,
                pk=self.kwargs["pk"]
            )

        # Slug URL:
        # /api/articles/article-slug/
        else:

            article = get_object_or_404(
                queryset,
                slug=self.kwargs["slug"]
            )

        self.check_object_permissions(
            self.request,
            article
        )

        return article


class FeaturedNewsListAPIView(
    generics.ListAPIView
):

    serializer_class = ArticleSerializer

    permission_classes = [
        permissions.AllowAny
    ]

    queryset = Article.objects.filter(
        is_featured=True,
        status=Article.Status.PUBLISHED
    ).select_related(
        "category",
        "author"
    ).order_by(
        "-published_at",
        "-created_at"
    )
