from django.conf import settings
from django.db import models


class MediaAsset(models.Model):

    MEDIA_TYPES = [
        ("IMAGE", "Image"),
        ("VIDEO", "Video"),
        ("DOCUMENT", "Document"),
        ("OTHER", "Other"),
    ]

    title = models.CharField(max_length=200, blank=True)

    file = models.FileField(
        upload_to="media/%Y/%m/"
    )

    alt_text = models.TextField(blank=True)

    media_type = models.CharField(
        max_length=20,
        choices=MEDIA_TYPES,
        default="OTHER"
    )

    uploaded_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="uploaded_media"
    )

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Media Asset"
        verbose_name_plural = "Media Library"

    def __str__(self):
        return self.title or self.file.name

    @property
    def file_size(self):
        if self.file:
            return self.file.size
        return 