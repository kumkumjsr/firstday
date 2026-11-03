
from django.urls import path

from .views import (
    BreakingNewsListCreateAPIView,
    BreakingNewsDetailAPIView,
)

urlpatterns = [
    path(
        "",
        BreakingNewsListCreateAPIView.as_view(),
        name="breaking-news-list-create"
    ),
    path(
        "<int:pk>/",
        BreakingNewsDetailAPIView.as_view(),
        name="breaking-news-detail"
    ),
]
