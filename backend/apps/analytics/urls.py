# from django.urls import path
# from .views import DashboardAnalyticsAPIView, ArticleViewCountAPIView

# urlpatterns = [
#     path("dashboard/", DashboardAnalyticsAPIView.as_view(), name="dashboard-analytics"),
#     path("articles/<int:pk>/view/", ArticleViewCountAPIView.as_view(), name="article-view-count"),
# ]



from django.urls import path

from .views import (
    DashboardAnalyticsAPIView,
    ArticleViewCountAPIView,
    WeeklyPublishingAnalyticsAPIView,
)

urlpatterns = [
    path(
        "dashboard/",
        DashboardAnalyticsAPIView.as_view(),
        name="dashboard-analytics",
    ),
    path(
        "weekly-publishing/",
        WeeklyPublishingAnalyticsAPIView.as_view(),
        name="weekly-publishing-analytics",
    ),
    path(
        "articles/<int:pk>/view/",
        ArticleViewCountAPIView.as_view(),
        name="article-view-count",
    ),
]
