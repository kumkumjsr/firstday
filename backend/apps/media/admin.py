from django.contrib import admin
from .models import MediaAsset


@admin.register(MediaAsset)
class MediaAssetAdmin(admin.ModelAdmin):

    list_display = (
        "title",
        "media_type",
        "uploaded_by",
        "created_at",
    )

    list_filter = (
        "media_type",
        "created_at",
    )

    search_fields = (
        "title",
        "alt_text",
        "file",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )

    ordering = ("-created_at",)