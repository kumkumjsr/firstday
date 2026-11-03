
# from django.urls import path
# from .views import (
#     CategoryListCreateAPIView,
#     CategoryDetailAPIView,
# )

# urlpatterns = [
#     path("", CategoryListCreateAPIView.as_view(), name="category-list-create"),
#     path("<slug:slug>/", CategoryDetailAPIView.as_view(), name="category-detail"),
# ]




from django.urls import path
from .views import (
    CategoryListCreateAPIView,
    CategoryDetailAPIView,
)

urlpatterns = [
    path(
        "",
        CategoryListCreateAPIView.as_view(),
        name="category-list-create"
    ),
    path("<str:slug>/", CategoryDetailAPIView.as_view(), name="category-detail"),
]
