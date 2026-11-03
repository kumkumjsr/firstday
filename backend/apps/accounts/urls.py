
# from django.urls import path

# from .views import (
#     UserListCreateAPIView,
#     UserDetailAPIView,
#     AuthorListAPIView,
#     AuthorDetailAPIView,
# )

# urlpatterns = [
#     # Public Author APIs
#     path(
#         "authors/",
#         AuthorListAPIView.as_view(),
#         name="author-list",
#     ),

#     path(
#         "authors/<str:username>/",
#         AuthorDetailAPIView.as_view(),
#         name="author-detail",
#     ),

#     # Admin User Management APIs
#     path(
#         "users/",
#         UserListCreateAPIView.as_view(),
#         name="user-list-create",
#     ),

#     path(
#         "users/<int:pk>/",
#         UserDetailAPIView.as_view(),
#         name="user-detail",
#     ),
# ]


from django.urls import path

from .views import (
    UserListCreateAPIView,
    UserDetailAPIView,
)


urlpatterns = [

    path(
        "users/",
        UserListCreateAPIView.as_view(),
        name="user-list-create",
    ),

    path(
        "users/<int:pk>/",
        UserDetailAPIView.as_view(),
        name="user-detail",
    ),
]