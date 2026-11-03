
from django.contrib import admin
from .models import BreakingNews


@admin.register(BreakingNews)
class BreakingNewsAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "article",
        "is_active",
        "display_order",
        "starts_at",
        "ends_at",
        "created_at",
    )

    list_filter = ("is_active", "created_at")
    search_fields = ("title",)
    list_editable = ("is_active", "display_order")
    ordering = ("display_order", "-created_at")
