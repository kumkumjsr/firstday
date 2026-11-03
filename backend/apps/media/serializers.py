import os

from rest_framework import serializers
from .models import MediaAsset


class MediaAssetSerializer(serializers.ModelSerializer):

    file_url = serializers.SerializerMethodField()

    file_size = serializers.IntegerField(read_only=True)

    uploaded_by_name = serializers.CharField(
        source="uploaded_by.username",
        read_only=True
    )

    class Meta:
        model = MediaAsset

        fields = [
            "id",
            "title",
            "file",
            "file_url",
            "alt_text",
            "media_type",
            "file_size",
            "uploaded_by",
            "uploaded_by_name",
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "id",
            "uploaded_by",
            "uploaded_by_name",
            "file_url",
            "file_size",
            "created_at",
            "updated_at",
        ]

    def validate_file(self, value):

        allowed_extensions = [
            ".jpg",
            ".jpeg",
            ".png",
            ".webp",
            ".gif",
            ".mp4",
            ".webm",
            ".pdf",
        ]

        extension = os.path.splitext(value.name)[1].lower()

        if extension not in allowed_extensions:
            raise serializers.ValidationError(
                "Only JPG, JPEG, PNG, WEBP, GIF, MP4, WEBM and PDF files are allowed."
            )

        if value.size > 20 * 1024 * 1024:
            raise serializers.ValidationError(
                "File size cannot exceed 20 MB."
            )

        return value

    def validate(self, attrs):

        uploaded_file = attrs.get("file")

        if uploaded_file:
            extension = os.path.splitext(
                uploaded_file.name
            )[1].lower()

            if extension in [".jpg", ".jpeg", ".png", ".webp", ".gif"]:
                attrs["media_type"] = "IMAGE"

            elif extension in [".mp4", ".webm"]:
                attrs["media_type"] = "VIDEO"

            elif extension == ".pdf":
                attrs["media_type"] = "DOCUMENT"

        return attrs

    def get_file_url(self, obj):

        request = self.context.get("request")

        if not obj.file:
            return None

        try:
            url = obj.file.url

            if request:
                return request.build_absolute_uri(url)

            return url

        except ValueError:
            return None