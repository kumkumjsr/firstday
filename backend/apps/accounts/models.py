
# from django.contrib.auth.models import AbstractUser
# from django.db import models


# class User(AbstractUser):

#     class Role(models.TextChoices):
#         ADMIN = "ADMIN", "Admin"
#         EDITOR = "EDITOR", "Editor"
#         AUTHOR = "AUTHOR", "Author"
#         READER = "READER", "Reader"

#     role = models.CharField(
#         max_length=20,
#         choices=Role.choices,
#         default=Role.READER,
#     )

#     profile_image = models.ImageField(
#         upload_to="users/profiles/",
#         blank=True,
#         null=True,
#     )

#     bio = models.TextField(blank=True)

#     phone = models.CharField(
#         max_length=15,
#         blank=True,
#     )

#     is_verified = models.BooleanField(default=False)

#     created_at = models.DateTimeField(auto_now_add=True)

#     updated_at = models.DateTimeField(auto_now=True)

#     def __str__(self):
#         return f"{self.username} ({self.role})"



from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):

    class Role(models.TextChoices):
        ADMIN = "ADMIN", "Admin"
        EDITOR = "EDITOR", "Editor"

    role = models.CharField(
        max_length=20,
        choices=Role.choices,
        default=Role.EDITOR,
    )

    profile_image = models.ImageField(
        upload_to="users/profiles/",
        blank=True,
        null=True,
    )

    bio = models.TextField(blank=True)

    phone = models.CharField(
        max_length=15,
        blank=True,
    )

    is_verified = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.username} ({self.role})"