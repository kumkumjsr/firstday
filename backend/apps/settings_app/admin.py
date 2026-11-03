
from django.contrib import admin
from .models import SiteSettings


@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):

    list_display = (
        "site_name",
        "default_language",
        "maintenance_mode",
        "updated_at",
    )

    fieldsets = (
        ("Website Information", {
            "fields": (
                "site_name",
                "tagline",
                "site_description",
                "logo",
                "favicon",
            )
        }),

        ("Contact Information", {
            "fields": (
                "contact_email",
                "contact_phone",
                "address",
            )
        }),

        ("Social Media", {
            "fields": (
                "facebook_url",
                "instagram_url",
                "youtube_url",
                "twitter_url",
                "linkedin_url",
            )
        }),

        ("Website Preferences", {
            "fields": (
                "default_language",
                "enable_comments",
                "maintenance_mode",
            )
        }),

        ("SEO Settings", {
            "fields": (
                "seo_title",
                "seo_description",
                "seo_keywords",
            )
        }),

        ("Timestamps", {
            "fields": (
                "created_at",
                "updated_at",
            )
        }),
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )

    def has_add_permission(self, request):
        return not SiteSettings.objects.exists()
