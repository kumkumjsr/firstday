
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path("admin/", admin.site.urls),

    # Authentication
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),

    # Categories
    path("api/categories/", include("apps.categories.urls")),

    # Articles
    path("api/articles/", include("apps.articles.urls")),

    # Breaking News
    path("api/breaking-news/", include("apps.breaking_news.urls")),

    path("api/media/", include("apps.media.urls")),

    path("api/accounts/", include("apps.accounts.urls")),

    path("api/settings/", include("apps.settings_app.urls")),

    path("api/analytics/", include("apps.analytics.urls")),

    path(
    "api/videos/",
    include("apps.videos.urls")
),

]

if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT
    )
