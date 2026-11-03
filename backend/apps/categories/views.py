
from django.db import transaction

from rest_framework import generics, permissions, status
from rest_framework.response import Response

from .models import Category
from .serializers import CategorySerializer


class CategoryListCreateAPIView(generics.ListCreateAPIView):

    serializer_class = CategorySerializer

    def get_queryset(self):
        if self.request.user.is_authenticated and self.request.user.is_staff:
            return Category.objects.all()

        return Category.objects.filter(is_active=True)

    def get_permissions(self):
        if self.request.method in ["GET", "HEAD", "OPTIONS"]:
            return [permissions.AllowAny()]

        return [permissions.IsAdminUser()]

    def create(self, request, *args, **kwargs):

        # Bulk category creation
        if isinstance(request.data, list):

            serializer = self.get_serializer(
                data=request.data,
                many=True
            )

            serializer.is_valid(raise_exception=True)

            created_count = 0
            existing_count = 0
            categories = []

            with transaction.atomic():

                for item in serializer.validated_data:

                    category, created = Category.objects.get_or_create(
                        name=item["name"],
                        defaults=item
                    )

                    categories.append(category)

                    if created:
                        created_count += 1
                    else:
                        existing_count += 1

            result_serializer = self.get_serializer(
                categories,
                many=True
            )

            return Response(
                {
                    "message": "Categories processed successfully.",
                    "created_count": created_count,
                    "existing_count": existing_count,
                    "results": result_serializer.data
                },
                status=status.HTTP_201_CREATED
            )

        # Single category creation
        return super().create(request, *args, **kwargs)


class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):

    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAdminUser]
    lookup_field = "slug"
