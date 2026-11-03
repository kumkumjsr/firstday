from django.db import models


class SiteSettings(models.Model):

    class Language(models.TextChoices):
        HINDI = "hi", "Hindi"
        ENGLISH = "en", "English"
        BENGALI = "bn", "Bengali"
        URDU = "ur", "Urdu"
        TAMIL = "ta", "Tamil"
        TELUGU = "te", "Telugu"
        MARATHI = "mr", "Marathi"
        GUJARATI = "gu", "Gujarati"
        PUNJABI = "pa", "Punjabi"
        ODIA = "or", "Odia"

    # =========================================================
    # WEBSITE INFORMATION
    # =========================================================

    site_name = models.CharField(
        max_length=150,
        default="HINDUSTAN.DIGITAL"
    )

    tagline = models.CharField(
        max_length=255,
        default="देश की खबर, देश की आवाज़",
        blank=True
    )

    site_description = models.TextField(
        blank=True
    )

    logo = models.ImageField(
        upload_to="settings/",
        blank=True,
        null=True
    )

    favicon = models.ImageField(
        upload_to="settings/",
        blank=True,
        null=True
    )

    # =========================================================
    # CONTACT INFORMATION
    # =========================================================

    contact_email = models.EmailField(
        blank=True
    )

    contact_phone = models.CharField(
        max_length=20,
        blank=True
    )

    address = models.TextField(
        blank=True
    )

    # =========================================================
    # SOCIAL MEDIA
    # =========================================================

    facebook_url = models.URLField(
        blank=True
    )

    instagram_url = models.URLField(
        blank=True
    )

    youtube_url = models.URLField(
        blank=True
    )

    twitter_url = models.URLField(
        blank=True
    )

    linkedin_url = models.URLField(
        blank=True
    )

    # =========================================================
    # WEBSITE PREFERENCES
    # =========================================================

    default_language = models.CharField(
        max_length=5,
        choices=Language.choices,
        default=Language.HINDI
    )

    enable_comments = models.BooleanField(
        default=False
    )

    maintenance_mode = models.BooleanField(
        default=False
    )

    # =========================================================
    # SEO
    # =========================================================

    seo_title = models.CharField(
        max_length=255,
        blank=True
    )

    seo_description = models.TextField(
        blank=True
    )

    seo_keywords = models.TextField(
        blank=True
    )

    # =========================================================
    # TIMESTAMPS
    # =========================================================

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    # =========================================================
    # META
    # =========================================================

    class Meta:
        verbose_name = "Website Settings"
        verbose_name_plural = "Website Settings"

    # =========================================================
    # SINGLE SETTINGS RECORD
    # =========================================================

    def save(self, *args, **kwargs):
        self.pk = 1
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        raise ValueError(
            "Website settings cannot be deleted."
        )

    def __str__(self):
        return self.site_name
# from django.db import models


# class SiteSettings(models.Model):

#     class Language(models.TextChoices):
#         HINDI = "hi", "Hindi"
#         ENGLISH = "en", "English"
#         BENGALI = "bn", "Bengali"
#         URDU = "ur", "Urdu"
#         TAMIL = "ta", "Tamil"
#         TELUGU = "te", "Telugu"
#         MARATHI = "mr", "Marathi"
#         GUJARATI = "gu", "Gujarati"
#         PUNJABI = "pa", "Punjabi"
#         ODIA = "or", "Odia"

#     # Website Information
#     site_name = models.CharField(
#         max_length=150,
#         default="HINDUSTAN.DIGITAL"
#     )

#     tagline = models.CharField(
#         max_length=255,
#         default="देश की खबर, देश की आवाज़",
#         blank=True
#     )

#     site_description = models.TextField(blank=True)

#     logo = models.ImageField(
#         upload_to="settings/",
#         blank=True,
#         null=True
#     )

#     favicon = models.ImageField(
#         upload_to="settings/",
#         blank=True,
#         null=True
#     )

#     # Contact Information
#     contact_email = models.EmailField(blank=True)
#     contact_phone = models.CharField(max_length=20, blank=True)
#     address = models.TextField(blank=True)

#     # Social Media Links
#     facebook_url = models.URLField(blank=True)
#     instagram_url = models.URLField(blank=True)
#     youtube_url = models.URLField(blank=True)
#     twitter_url = models.URLField(blank=True)
#     linkedin_url = models.URLField(blank=True)

#     # Website Preferences
#     default_language = models.CharField(
#         max_length=5,
#         choices=Language.choices,
#         default=Language.HINDI
#     )

#     enable_comments = models.BooleanField(default=True)
#     maintenance_mode = models.BooleanField(default=False)

#     # SEO Information
#     seo_title = models.CharField(max_length=255, blank=True)
#     seo_description = models.TextField(blank=True)
#     seo_keywords = models.TextField(blank=True)

#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)

#     class Meta:
#         verbose_name = "Website Settings"
#         verbose_name_plural = "Website Settings"

#     def save(self, *args, **kwargs):
#         self.pk = 1
#         super().save(*args, **kwargs)

#     def delete(self, *args, **kwargs):
#         raise ValueError("Website settings cannot be deleted.")

#     def __str__(self):
#         return self.site_name
