
# from django.contrib.auth.password_validation import validate_password
# from rest_framework import serializers

# from .models import User


# class UserManagementSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(
#         write_only=True,
#         required=True,
#         validators=[validate_password]
#     )

#     class Meta:
#         model = User
#         fields = [
#             "id",
#             "username",
#             "email",
#             "first_name",
#             "last_name",
#             "password",
#             "role",
#             "profile_image",
#             "bio",
#             "phone",
#             "is_verified",
#             "is_active",
#             "is_staff",
#             "created_at",
#             "updated_at",
#         ]

#         read_only_fields = [
#             "id",
#             "is_staff",
#             "created_at",
#             "updated_at",
#         ]

#     def create(self, validated_data):
#         password = validated_data.pop("password")
#         role = validated_data.get("role", User.Role.READER)

#         user = User(**validated_data)
#         user.is_staff = role == User.Role.ADMIN
#         user.set_password(password)
#         user.save()

#         return user

#     def update(self, instance, validated_data):
#         password = validated_data.pop("password", None)

#         for attr, value in validated_data.items():
#             setattr(instance, attr, value)

#         if "role" in validated_data and not instance.is_superuser:
#             instance.is_staff = (
#                 instance.role == User.Role.ADMIN
#             )

#         if password:
#             instance.set_password(password)

#         instance.save()
#         return instance


# class PublicAuthorSerializer(serializers.ModelSerializer):
#     full_name = serializers.SerializerMethodField()

#     class Meta:
#         model = User
#         fields = [
#             "id",
#             "username",
#             "full_name",
#             "profile_image",
#             "bio",
#             "is_verified",
#         ]

#     def get_full_name(self, obj):
#         return obj.get_full_name() or obj.username




from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers

from .models import User


class UserManagementSerializer(serializers.ModelSerializer):

    password = serializers.CharField(
        write_only=True,
        required=False,
        allow_blank=True,
        validators=[validate_password]
    )

    class Meta:
        model = User

        fields = [
            "id",
            "username",
            "email",
            "first_name",
            "last_name",
            "password",
            "role",
            "profile_image",
            "bio",
            "phone",
            "is_verified",
            "is_active",
            "is_staff",
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "id",
            "is_staff",
            "created_at",
            "updated_at",
        ]

    def create(self, validated_data):
        password = validated_data.pop("password", None)

        if not password:
            raise serializers.ValidationError({
                "password": "Password is required."
            })

        role = validated_data.get(
            "role",
            User.Role.EDITOR
        )

        user = User(**validated_data)

        user.is_staff = role == User.Role.ADMIN

        user.set_password(password)

        user.save()

        return user

    def update(self, instance, validated_data):

        password = validated_data.pop(
            "password",
            None
        )

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        if not instance.is_superuser:
            instance.is_staff = (
                instance.role == User.Role.ADMIN
            )

        if password:
            instance.set_password(password)

        instance.save()

        return instance