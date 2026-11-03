
# from rest_framework import serializers
# from .models import Category


# class CategorySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Category
#         fields = [
#             "id",
#             "name",
#             "slug",
#             "description",
#             "image",
#             "is_active",
#             "display_order",
#             "created_at",
#             "updated_at",
#         ]
#         read_only_fields = ["id", "created_at", "updated_at"]





from rest_framework import serializers
from .models import Category


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category

        fields = [
            "id",
            "name",
            "slug",
            "description",
            "image",
            "is_active",
            "display_order",
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "id",
            "slug",
            "created_at",
            "updated_at",
        ]
