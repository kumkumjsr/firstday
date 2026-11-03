
from django.db.models import Q
from django.utils import timezone

from rest_framework import generics, permissions

from .models import BreakingNews
from .serializers import BreakingNewsSerializer


class BreakingNewsListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = BreakingNewsSerializer

    def get_queryset(self):
        now = timezone.now()

        queryset = BreakingNews.objects.select_related("article")

        if self.request.user.is_authenticated and self.request.user.is_staff:
            return queryset

        return queryset.filter(
            is_active=True
        ).filter(
            Q(starts_at__isnull=True) | Q(starts_at__lte=now),
            Q(ends_at__isnull=True) | Q(ends_at__gte=now)
        )

    def get_permissions(self):
        if self.request.method in ["GET", "HEAD", "OPTIONS"]:
            return [permissions.AllowAny()]

        return [permissions.IsAdminUser()]


class BreakingNewsDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = BreakingNewsSerializer
    permission_classes = [permissions.IsAdminUser]
    queryset = BreakingNews.objects.select_related("article").all()
