
from rest_framework import generics, permissions

from .models import Video
from .serializers import VideoSerializer


class VideoListCreateAPIView(generics.ListCreateAPIView):

    serializer_class = VideoSerializer

    def get_queryset(self):
        queryset = Video.objects.select_related("author")

        if (
            self.request.user.is_authenticated
            and self.request.user.is_staff
        ):
            return queryset

        return queryset.filter(
            status=Video.Status.PUBLISHED
        )

    def get_permissions(self):
        if self.request.method in ["GET", "HEAD", "OPTIONS"]:
            return [permissions.AllowAny()]

        return [permissions.IsAdminUser()]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class VideoDetailAPIView(
    generics.RetrieveUpdateDestroyAPIView
):

    serializer_class = VideoSerializer

    def get_queryset(self):
        queryset = Video.objects.select_related("author")

        if (
            self.request.user.is_authenticated
            and self.request.user.is_staff
        ):
            return queryset

        return queryset.filter(
            status=Video.Status.PUBLISHED
        )

    def get_permissions(self):
        if self.request.method in ["GET", "HEAD", "OPTIONS"]:
            return [permissions.AllowAny()]

        return [permissions.IsAdminUser()]


class FeaturedVideoListAPIView(generics.ListAPIView):

    serializer_class = VideoSerializer

    permission_classes = [permissions.AllowAny]

    queryset = Video.objects.filter(
        is_featured=True,
        status=Video.Status.PUBLISHED
    ).select_related(
        "author"
    ).order_by(
        "-published_at",
        "-created_at"
    )
