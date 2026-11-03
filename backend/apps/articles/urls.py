
# from django.urls import path

# from .views import (
#     ArticleListCreateAPIView,
#     ArticleDetailAPIView,
#     FeaturedNewsListAPIView,
# )

# urlpatterns = [
#     path(
#         "featured/",
#         FeaturedNewsListAPIView.as_view(),
#         name="featured-news-list"
#     ),

#     path(
#         "",
#         ArticleListCreateAPIView.as_view(),
#         name="article-list-create"
#     ),

#     # Article by ID
#     path(
#         "<int:pk>/",
#         ArticleDetailAPIView.as_view(),
#         name="article-detail-by-id"
#     ),

#     # Article by slug
#     path(
#         "<slug:slug>/",
#         ArticleDetailAPIView.as_view(),
#         name="article-detail-by-slug"
#     ),
# ]




from django.urls import path

from .views import (
    ArticleListCreateAPIView,
    ArticleDetailAPIView,
    FeaturedNewsListAPIView,
)

urlpatterns = [
    # Featured Articles
    path(
        "featured/",
        FeaturedNewsListAPIView.as_view(),
        name="featured-news-list"
    ),

    # All Articles
    path(
        "",
        ArticleListCreateAPIView.as_view(),
        name="article-list-create"
    ),

    # Article by ID
    path(
        "<int:pk>/",
        ArticleDetailAPIView.as_view(),
        name="article-detail-by-id"
    ),

    # Article by Hindi / English Slug
    path(
        "<str:slug>/",
        ArticleDetailAPIView.as_view(),
        name="article-detail-by-slug"
    ),
]
