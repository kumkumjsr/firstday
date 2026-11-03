from django.urls import path

from .views import (
    VideoListCreateAPIView,
    VideoDetailAPIView,
    FeaturedVideoListAPIView,
)


urlpatterns = [
    path(
        "featured/",
        FeaturedVideoListAPIView.as_view(),
        name="featured-video-list"
    ),

    path(
        "",
        VideoListCreateAPIView.as_view(),
        name="video-list-create"
    ),

    path(
        "<int:pk>/",
        VideoDetailAPIView.as_view(),
        name="video-detail"
    ),
]
