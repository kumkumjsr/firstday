
from django.db import models


class BreakingNews(models.Model):
    title = models.CharField(max_length=255)

    article = models.ForeignKey(
        "articles.Article",
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        related_name="breaking_news_items"
    )

    link = models.CharField(max_length=500, blank=True)
    is_active = models.BooleanField(default=True)
    display_order = models.PositiveIntegerField(default=0)

    starts_at = models.DateTimeField(blank=True, null=True)
    ends_at = models.DateTimeField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["display_order", "-created_at"]
        verbose_name_plural = "Breaking News"

    def __str__(self):
        return self.title
