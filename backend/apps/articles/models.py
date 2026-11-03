
from django.db import models
from django.conf import settings
from django.utils.text import slugify
from django.utils import timezone


class Article(models.Model):

    class Status(models.TextChoices):
        DRAFT = "DRAFT", "Draft"
        PENDING = "PENDING", "Pending Review"
        PUBLISHED = "PUBLISHED", "Published"
        REJECTED = "REJECTED", "Rejected"

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

    title = models.CharField(max_length=255)

    slug = models.SlugField(
        max_length=280,
        unique=True,
        blank=True,
        allow_unicode=True
    )

    subtitle = models.CharField(max_length=300, blank=True)
    content = models.TextField()
    excerpt = models.TextField(blank=True)

    category = models.ForeignKey(
        "categories.Category",
        on_delete=models.PROTECT,
        related_name="articles"
    )

    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name="articles"
    )

    featured_image = models.ImageField(
        upload_to="articles/",
        blank=True,
        null=True
    )

    language = models.CharField(
        max_length=5,
        choices=Language.choices,
        default=Language.HINDI
    )

    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.DRAFT
    )

    is_featured = models.BooleanField(default=False)
    is_breaking = models.BooleanField(default=False)
    views_count = models.PositiveIntegerField(default=0)

    published_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name_plural = "Articles"

    def save(self, *args, **kwargs):

        # Generate Hindi and English Unicode slug
        if not self.slug:
            base_slug = slugify(self.title, allow_unicode=True)

            if not base_slug:
                base_slug = "article"

            unique_slug = base_slug
            counter = 2

            while Article.objects.filter(
                slug=unique_slug
            ).exclude(pk=self.pk).exists():

                suffix = f"-{counter}"
                unique_slug = f"{base_slug[:280-len(suffix)]}{suffix}"
                counter += 1

            self.slug = unique_slug

        # Automatically set publication date
        if self.status == self.Status.PUBLISHED and not self.published_at:
            self.published_at = timezone.now()

        # Keep generated fields when update_fields is used
        update_fields = kwargs.get("update_fields")

        if update_fields is not None:
            update_fields = set(update_fields)

            if "slug" in update_fields or not self.pk:
                update_fields.add("slug")

            if "status" in update_fields:
                update_fields.add("published_at")

            kwargs["update_fields"] = update_fields

        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
