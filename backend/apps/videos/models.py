from django.db import models
from django.conf import settings
from django.utils import timezone


class Video(models.Model):

    class Status(models.TextChoices):
        DRAFT = "DRAFT", "Draft"
        PUBLISHED = "PUBLISHED", "Published"

    title = models.CharField(max_length=255)

    description = models.TextField(blank=True)

    video = models.FileField(
        upload_to="videos/",
        blank=True,
        null=True
    )

    video_url = models.URLField(
        blank=True,
        null=True
    )

    thumbnail = models.ImageField(
        upload_to="videos/thumbnails/",
        blank=True,
        null=True
    )

    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="videos"
    )

    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.DRAFT
    )

    is_featured = models.BooleanField(default=False)

    views_count = models.PositiveIntegerField(default=0)

    published_at = models.DateTimeField(
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-published_at", "-created_at"]

    def save(self, *args, **kwargs):
        if (
            self.status == self.Status.PUBLISHED
            and not self.published_at
        ):
            self.published_at = timezone.now()

        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
