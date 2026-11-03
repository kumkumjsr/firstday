from rest_framework import generics, permissions
from rest_framework.parsers import (
    MultiPartParser,
    FormParser,
    JSONParser,
)

from .models import SiteSettings
from .serializers import SiteSettingsSerializer


class IsAdminOrEditor(permissions.BasePermission):
    """
    Only ADMIN and EDITOR users can update website settings.
    Django superuser is also allowed.
    """

    def has_permission(self, request, view):
        user = request.user

        return (
            user.is_authenticated
            and (
                user.is_superuser
                or user.role in [
                    "ADMIN",
                    "EDITOR",
                ]
            )
        )


class SiteSettingsAPIView(generics.RetrieveUpdateAPIView):

    serializer_class = SiteSettingsSerializer

    queryset = SiteSettings.objects.all()

    parser_classes = [
        MultiPartParser,
        FormParser,
        JSONParser,
    ]

    def get_object(self):
        """
        Always return the single website settings record.
        Primary key is fixed to 1.
        """

        settings, created = (
            SiteSettings.objects.get_or_create(
                pk=1
            )
        )

        return settings

    def get_permissions(self):
        """
        Anyone can read website settings.

        Only ADMIN / EDITOR / Superuser can update.
        """

        if self.request.method in [
            "GET",
            "HEAD",
            "OPTIONS",
        ]:
            return [
                permissions.AllowAny()
            ]

        return [
            IsAdminOrEditor()
        ]