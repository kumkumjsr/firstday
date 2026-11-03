# from django.urls import path

# from .views import (
#     MediaAssetListCreateAPIView,
#     MediaAssetDetailAPIView,
# )


# urlpatterns = [
#     path(
#         "",
#         MediaAssetListCreateAPIView.as_view(),
#         name="media-list-create"
#     ),

#     path(
#         "<int:pk>/",
#         MediaAssetDetailAPIView.as_view(),
#         name="media-detail"
#     ),
# ]




from django.urls import path

from .views import (
    MediaAssetListCreateAPIView,
    MediaAssetDetailAPIView,
    PublicVideoListAPIView,
)

urlpatterns = [
    path("videos/", PublicVideoListAPIView.as_view(), name="public-video-list"),
    path("", MediaAssetListCreateAPIView.as_view(), name="media-list-create"),
    path("<int:pk>/", MediaAssetDetailAPIView.as_view(), name="media-detail"),
]
