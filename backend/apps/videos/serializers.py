from rest_framework import serializers

from .models import Video


class VideoSerializer(serializers.ModelSerializer):

    author_name = serializers.CharField(
        source="author.username",
        read_only=True
    )

    video_file_url = serializers.SerializerMethodField()

    thumbnail_url = serializers.SerializerMethodField()

    class Meta:
        model = Video

        fields = [
            "id",
            "title",
            "description",
            "video",
            "video_url",
            "video_file_url",
            "thumbnail",
            "thumbnail_url",
            "author",
            "author_name",
            "status",
            "is_featured",
            "views_count",
            "published_at",
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "id",
            "author",
            "views_count",
            "video_file_url",
            "thumbnail_url",
            "created_at",
            "updated_at",
        ]

    def get_video_file_url(self, obj):
        request = self.context.get("request")

        if not obj.video:
            return None

        if request:
            return request.build_absolute_uri(obj.video.url)

        return obj.video.url

    def get_thumbnail_url(self, obj):
        request = self.context.get("request")

        if not obj.thumbnail:
            return None

        if request:
            return request.build_absolute_uri(obj.thumbnail.url)

        return obj.thumbnail.url
