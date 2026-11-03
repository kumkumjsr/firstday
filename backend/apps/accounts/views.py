
# from rest_framework import generics, permissions

# from .models import User
# from .serializers import (
#     UserManagementSerializer,
#     PublicAuthorSerializer,
# )


# class IsAdminRole(permissions.BasePermission):
#     """
#     Only ADMIN role or Django superuser can manage users.
#     """

#     def has_permission(self, request, view):
#         user = request.user

#         return (
#             user.is_authenticated
#             and (
#                 user.is_superuser
#                 or user.role == User.Role.ADMIN
#             )
#         )


# class UserListCreateAPIView(generics.ListCreateAPIView):
#     serializer_class = UserManagementSerializer
#     permission_classes = [IsAdminRole]

#     queryset = User.objects.all().order_by("-created_at")


# class UserDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = UserManagementSerializer
#     permission_classes = [IsAdminRole]

#     queryset = User.objects.all()


# class AuthorListAPIView(generics.ListAPIView):
#     serializer_class = PublicAuthorSerializer
#     permission_classes = [permissions.AllowAny]

#     queryset = User.objects.filter(
#         role=User.Role.AUTHOR,
#         is_active=True,
#         is_verified=True,
#     ).order_by("first_name", "username")


# class AuthorDetailAPIView(generics.RetrieveAPIView):
#     serializer_class = PublicAuthorSerializer
#     permission_classes = [permissions.AllowAny]

#     lookup_field = "username"

#     queryset = User.objects.filter(
#         role=User.Role.AUTHOR,
#         is_active=True,
#         is_verified=True,
#     )



from rest_framework import generics, permissions

from .models import User
from .serializers import UserManagementSerializer


class IsAdminOrEditor(permissions.BasePermission):
    """
    ADMIN and EDITOR can manage users.
    Django superuser is also allowed.
    """

    def has_permission(self, request, view):

        user = request.user

        return (
            user.is_authenticated
            and (
                user.is_superuser
                or user.role in [
                    User.Role.ADMIN,
                    User.Role.EDITOR,
                ]
            )
        )


class UserListCreateAPIView(generics.ListCreateAPIView):

    serializer_class = UserManagementSerializer

    permission_classes = [
        IsAdminOrEditor
    ]

    queryset = User.objects.all().order_by(
        "-created_at"
    )


class UserDetailAPIView(
    generics.RetrieveUpdateDestroyAPIView
):

    serializer_class = UserManagementSerializer

    permission_classes = [
        IsAdminOrEditor
    ]

    queryset = User.objects.all()