# from io import BytesIO
# from urllib.request import Request, urlopen

# from django.core.files.base import ContentFile
# from rest_framework import serializers

# from .models import Article

from urllib.request import Request, urlopen

from django.core.files.base import ContentFile
from rest_framework import serializers

from .models import Article


class ImageOrURLField(serializers.Field):
    """
    Accepts either:
    1. Uploaded image file
    2. External image URL
    """

    def to_internal_value(self, data):
        # Uploaded file
        if hasattr(data, "read"):
            return data

        # External URL
        if isinstance(data, str):
            data = data.strip()

            if not data:
                return ""

            if data.startswith(("http://", "https://")):
                return data

            raise serializers.ValidationError(
                "Please provide a valid image URL starting with http:// or https://."
            )

        raise serializers.ValidationError(
            "Please upload an image file or provide an image URL."
        )

    def to_representation(self, value):
        if not value:
            return None

        try:
            request = self.context.get("request")

            url = value.url

            if request:
                return request.build_absolute_uri(url)

            return url

        except Exception:
            return None


class ArticleSerializer(serializers.ModelSerializer):

    category_name = serializers.CharField(
        source="category.name",
        read_only=True
    )

    author_name = serializers.CharField(
        source="author.username",
        read_only=True
    )

    featured_image = ImageOrURLField(
        required=False,
        allow_null=True
    )

    class Meta:
        model = Article

        fields = [
            "id",
            "title",
            "slug",
            "subtitle",
            "content",
            "excerpt",
            "category",
            "category_name",
            "author",
            "author_name",
            "featured_image",
            "language",
            "status",
            "is_featured",
            "is_breaking",
            "views_count",
            "published_at",
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "id",
            "author",
            "views_count",
            "created_at",
            "updated_at",
        ]

    def create(self, validated_data):

        image_data = validated_data.pop(
            "featured_image",
            None
        )

        article = Article.objects.create(
            **validated_data
        )

        if image_data:
            self._handle_image(
                article,
                image_data
            )

        return article

    def update(self, instance, validated_data):

        image_data = validated_data.pop(
            "featured_image",
            None
        )

        instance = super().update(
            instance,
            validated_data
        )

        if image_data:
            self._handle_image(
                instance,
                image_data
            )

        elif image_data == "":
            if instance.featured_image:
                instance.featured_image.delete(
                    save=False
                )

                instance.featured_image = None

                instance.save(
                    update_fields=["featured_image"]
                )

        return instance

    def _handle_image(self, article, image_data):

        # =====================================================
        # LOCAL UPLOADED FILE
        # =====================================================

        if hasattr(image_data, "read"):

            article.featured_image.save(
                image_data.name,
                image_data,
                save=True
            )

            return

        # =====================================================
        # EXTERNAL IMAGE URL
        # =====================================================

        if isinstance(image_data, str):

            image_url = image_data.strip()

            if not image_url.startswith(
                ("http://", "https://")
            ):
                raise serializers.ValidationError({
                    "featured_image": (
                        "Please provide a valid image URL."
                    )
                })

            try:

                request = Request(
                    image_url,
                    headers={
                        "User-Agent": (
                            "Mozilla/5.0 "
                            "(Windows NT 10.0; Win64; x64) "
                            "AppleWebKit/537.36 "
                            "Chrome/131.0 Safari/537.36"
                        )
                    }
                )

                with urlopen(
                    request,
                    timeout=20
                ) as response:

                    image_data_bytes = response.read()

                    content_type = response.headers.get(
                        "Content-Type",
                        ""
                    )

                # =================================================
                # CHECK CONTENT TYPE
                # =================================================

                if not content_type.lower().startswith(
                    "image/"
                ):
                    raise serializers.ValidationError({
                        "featured_image": (
                            "The provided URL does not point "
                            "to a valid image."
                        )
                    })

                # =================================================
                # FILE NAME
                # =================================================

                filename = (
                    image_url
                    .split("/")[-1]
                    .split("?")[0]
                    .strip()
                )

                if not filename:
                    filename = "article-image.jpg"

                # Remove unsafe filename characters
                filename = filename.replace(
                    "\\",
                    "_"
                ).replace(
                    "/",
                    "_"
                )

                # =================================================
                # SAVE IMAGE
                # =================================================

                article.featured_image.save(
                    filename,
                    ContentFile(image_data_bytes),
                    save=True
                )

                return

            except serializers.ValidationError:
                raise

            except Exception as error:

                raise serializers.ValidationError({
                    "featured_image": (
                        "Unable to download image from URL: "
                        f"{str(error)}"
                    )
                })

        raise serializers.ValidationError({
            "featured_image": (
                "Invalid image data."
            )
        })


# class ArticleSerializer(serializers.ModelSerializer):

#     category_name = serializers.CharField(
#         source="category.name",
#         read_only=True
#     )

#     author_name = serializers.CharField(
#         source="author.username",
#         read_only=True
#     )

#     featured_image = serializers.CharField(
#         required=False,
#         allow_blank=True,
#         allow_null=True
#     )

#     class Meta:
#         model = Article

#         fields = [
#             "id",
#             "title",
#             "slug",
#             "subtitle",
#             "content",
#             "excerpt",
#             "category",
#             "category_name",
#             "author",
#             "author_name",
#             "featured_image",
#             "language",
#             "status",
#             "is_featured",
#             "is_breaking",
#             "views_count",
#             "published_at",
#             "created_at",
#             "updated_at",
#         ]

#         read_only_fields = [
#             "id",
#             "author",
#             "views_count",
#             "created_at",
#             "updated_at",
#         ]

#     def create(self, validated_data):
#         image_url = validated_data.pop("featured_image", None)

#         article = Article.objects.create(**validated_data)

#         if image_url:
#             self._save_image_from_url(article, image_url)

#         return article

#     def update(self, instance, validated_data):
#         image_url = validated_data.pop("featured_image", None)

#         instance = super().update(
#             instance,
#             validated_data
#         )

#         if image_url:
#             self._save_image_from_url(
#                 instance,
#                 image_url
#             )

#         return instance

#     def _save_image_from_url(self, article, image_url):

#         if not image_url:
#             return

#         if not image_url.startswith(("http://", "https://")):
#             raise serializers.ValidationError({
#                 "featured_image": "Please provide a valid image URL."
#             })

#         try:
#             request = Request(
#                 image_url,
#                 headers={
#                     "User-Agent": "Mozilla/5.0"
#                 }
#             )

#             with urlopen(request, timeout=15) as response:
#                 image_data = response.read()

#                 content_type = response.headers.get(
#                     "Content-Type",
#                     ""
#                 )

#             if not content_type.startswith("image/"):
#                 raise serializers.ValidationError({
#                     "featured_image": "The provided URL is not an image."
#                 })

#             filename = image_url.split("/")[-1].split("?")[0]

#             if not filename:
#                 filename = "article-image.jpg"

#             article.featured_image.save(
#                 filename,
#                 ContentFile(image_data),
#                 save=True
#             )

#         except serializers.ValidationError:
#             raise

#         except Exception as error:
#             raise serializers.ValidationError({
#                 "featured_image": (
#                     f"Unable to download image: {str(error)}"
#                 )
#             })
# from rest_framework import serializers
# from .models import Article


# class ArticleSerializer(serializers.ModelSerializer):
#     category_name = serializers.CharField(
#         source="category.name",
#         read_only=True
#     )

#     author_name = serializers.CharField(
#         source="author.username",
#         read_only=True
#     )

#     class Meta:
#         model = Article
#         fields = [
#             "id",
#             "title",
#             "slug",
#             "subtitle",
#             "content",
#             "excerpt",
#             "category",
#             "category_name",
#             "author",
#             "author_name",
#             "featured_image",
#             "language",
#             "status",
#             "is_featured",
#             "is_breaking",
#             "views_count",
#             "published_at",
#             "created_at",
#             "updated_at",
#         ]

#         read_only_fields = [
#             "id",
#             "author",
#             "views_count",
#             "created_at",
#             "updated_at",
#         ]
