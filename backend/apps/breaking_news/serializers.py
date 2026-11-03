
from rest_framework import serializers
from .models import BreakingNews


class BreakingNewsSerializer(serializers.ModelSerializer):
    article_title = serializers.CharField(
        source="article.title",
        read_only=True
    )

    class Meta:
        model = BreakingNews
        fields = [
            "id",
            "title",
            "article",
            "article_title",
            "link",
            "is_active",
            "display_order",
            "starts_at",
            "ends_at",
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "id",
            "created_at",
            "updated_at",
        ]
