
# from django.db.models import F, Q
# from django.utils import timezone

# from rest_framework import generics, permissions
# from rest_framework.response import Response
# from rest_framework.views import APIView

# from apps.articles.models import Article
# from apps.articles.serializers import ArticleSerializer
# from apps.categories.models import Category
# from apps.accounts.models import User
# from apps.breaking_news.models import BreakingNews


# class IsAdminRole(permissions.BasePermission):
#     def has_permission(self, request, view):
#         user = request.user
#         return user.is_authenticated and (
#             user.is_superuser or user.role in ["ADMIN", "EDITOR"]
#         )


# class DashboardAnalyticsAPIView(APIView):
#     permission_classes = [IsAdminRole]

#     def get(self, request):
#         now = timezone.now()

#         articles = Article.objects.all()
#         users = User.objects.all()

#         overview = {
#             "total_articles": articles.count(),
#             "published_articles": articles.filter(status="PUBLISHED").count(),
#             "draft_articles": articles.filter(status="DRAFT").count(),
#             "pending_articles": articles.filter(status="PENDING").count(),
#             "rejected_articles": articles.filter(status="REJECTED").count(),

#             "total_categories": Category.objects.count(),
#             "active_categories": Category.objects.filter(is_active=True).count(),

#             "total_users": users.count(),
#             "total_authors": users.filter(role="AUTHOR").count(),
#             "total_editors": users.filter(role="EDITOR").count(),
#             "total_admins": users.filter(role="ADMIN").count(),
#             "total_readers": users.filter(role="READER").count(),

#             "total_views": articles.aggregate(
#                 total=__import__("django.db.models", fromlist=["Sum"]).Sum("views_count")
#             )["total"] or 0,

#             "active_breaking_news": BreakingNews.objects.filter(
#                 is_active=True
#             ).filter(
#                 Q(starts_at__isnull=True) | Q(starts_at__lte=now),
#                 Q(ends_at__isnull=True) | Q(ends_at__gte=now)
#             ).count(),
#         }

#         recent_articles = articles.select_related(
#             "category", "author"
#         ).order_by("-created_at")[:5]

#         most_viewed_articles = articles.filter(
#             status="PUBLISHED"
#         ).select_related(
#             "category", "author"
#         ).order_by("-views_count")[:5]

#         return Response({
#             "overview": overview,
#             "recent_articles": ArticleSerializer(
#                 recent_articles, many=True, context={"request": request}
#             ).data,
#             "most_viewed_articles": ArticleSerializer(
#                 most_viewed_articles, many=True, context={"request": request}
#             ).data,
#         })


# class ArticleViewCountAPIView(APIView):
#     permission_classes = [permissions.AllowAny]

#     def post(self, request, pk):
#         updated = Article.objects.filter(
#             pk=pk,
#             status="PUBLISHED"
#         ).update(views_count=F("views_count") + 1)

#         if not updated:
#             return Response(
#                 {"error": "Published article not found."},
#                 status=404
#             )

#         article = Article.objects.get(pk=pk)

#         return Response({
#             "message": "Article view counted successfully.",
#             "views_count": article.views_count
#         })



from datetime import timedelta

from django.db.models import F, Q, Sum
from django.db.models.functions import TruncDate
from django.utils import timezone

from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.articles.models import Article
from apps.articles.serializers import ArticleSerializer
from apps.categories.models import Category
from apps.accounts.models import User
from apps.breaking_news.models import BreakingNews


class IsAdminRole(permissions.BasePermission):
    def has_permission(self, request, view):
        user = request.user
        return user.is_authenticated and (
            user.is_superuser or user.role in ["ADMIN", "EDITOR"]
        )


class DashboardAnalyticsAPIView(APIView):
    permission_classes = [IsAdminRole]

    def get(self, request):
        now = timezone.now()

        articles = Article.objects.all()
        users = User.objects.all()

        overview = {
            "total_articles": articles.count(),
            "published_articles": articles.filter(status="PUBLISHED").count(),
            "draft_articles": articles.filter(status="DRAFT").count(),
            "pending_articles": articles.filter(status="PENDING").count(),
            "rejected_articles": articles.filter(status="REJECTED").count(),

            "total_categories": Category.objects.count(),
            "active_categories": Category.objects.filter(is_active=True).count(),

            "total_users": users.count(),
            "total_authors": users.filter(role="AUTHOR").count(),
            "total_editors": users.filter(role="EDITOR").count(),
            "total_admins": users.filter(role="ADMIN").count(),
            "total_readers": users.filter(role="READER").count(),

            "total_views": articles.aggregate(
                total=Sum("views_count")
            )["total"] or 0,

            "active_breaking_news": BreakingNews.objects.filter(
                is_active=True
            ).filter(
                Q(starts_at__isnull=True) | Q(starts_at__lte=now),
                Q(ends_at__isnull=True) | Q(ends_at__gte=now)
            ).count(),
        }

        recent_articles = articles.select_related(
            "category", "author"
        ).order_by("-created_at")[:5]

        most_viewed_articles = articles.filter(
            status="PUBLISHED"
        ).select_related(
            "category", "author"
        ).order_by("-views_count")[:5]

        return Response({
            "overview": overview,
            "recent_articles": ArticleSerializer(
                recent_articles, many=True, context={"request": request}
            ).data,
            "most_viewed_articles": ArticleSerializer(
                most_viewed_articles, many=True, context={"request": request}
            ).data,
        })


class WeeklyPublishingAnalyticsAPIView(APIView):
    permission_classes = [IsAdminRole]

    def get(self, request):
        today = timezone.localdate()
        start_date = today - timedelta(days=6)

        daily_counts = (
            Article.objects.filter(
                status="PUBLISHED",
                published_at__date__gte=start_date,
                published_at__date__lte=today,
            )
            .annotate(day=TruncDate("published_at"))
            .values("day")
            .annotate(total=Sum(
                # Count each published article for its day.
                # This field is constant per row.
                "views_count"
            ))
            .order_by("day")
        )

        counts_by_day = {
            item["day"]: item["total"]
            for item in daily_counts
        }

        # Count articles, not views.
        from django.db.models import Count

        daily_counts = (
            Article.objects.filter(
                status="PUBLISHED",
                published_at__date__gte=start_date,
                published_at__date__lte=today,
            )
            .annotate(day=TruncDate("published_at"))
            .values("day")
            .annotate(total=Count("id"))
            .order_by("day")
        )

        counts_by_day = {
            item["day"]: item["total"]
            for item in daily_counts
        }

        days = []

        for offset in range(7):
            day = start_date + timedelta(days=offset)

            days.append({
                "date": day.isoformat(),
                "day": day.strftime("%a"),
                "articles": counts_by_day.get(day, 0),
            })

        return Response({
            "period": "last_7_days",
            "total_published": sum(item["articles"] for item in days),
            "activity": days,
        })


class ArticleViewCountAPIView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, pk):
        updated = Article.objects.filter(
            pk=pk,
            status="PUBLISHED"
        ).update(views_count=F("views_count") + 1)

        if not updated:
            return Response(
                {"error": "Published article not found."},
                status=404
            )

        article = Article.objects.get(pk=pk)

        return Response({
            "message": "Article view counted successfully.",
            "views_count": article.views_count
        })

