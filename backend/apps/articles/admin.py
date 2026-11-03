
from django.contrib import admin
from .models import Article


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):

    list_display = (
        "title",
        "category",
        "author",
        "language",
        "status",
        "is_featured",
        "is_breaking",
        "created_at",
    )

    list_filter = (
        "status",
        "category",
        "language",
        "is_featured",
        "is_breaking",
    )

    search_fields = ("title", "subtitle", "content")
    prepopulated_fields = {"slug": ("title",)}

    list_editable = ("status", "is_featured", "is_breaking")

    readonly_fields = ("views_count", "created_at", "updated_at")

    ordering = ("-created_at",)
