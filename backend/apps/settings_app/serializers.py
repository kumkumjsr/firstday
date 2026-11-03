from rest_framework import serializers

from .models import SiteSettings


class SiteSettingsSerializer(serializers.ModelSerializer):

    class Meta:
        model = SiteSettings

        fields = [
            "id",

            # Website
            "site_name",
            "tagline",
            "site_description",
            "logo",
            "favicon",

            # Contact
            "contact_email",
            "contact_phone",
            "address",

            # Social Media
            "facebook_url",
            "instagram_url",
            "youtube_url",
            "twitter_url",
            "linkedin_url",

            # Preferences
            "default_language",
            "enable_comments",
            "maintenance_mode",

            # SEO
            "seo_title",
            "seo_description",
            "seo_keywords",

            # Timestamps
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "id",
            "created_at",
            "updated_at",
        ]