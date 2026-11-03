
# from pathlib import Path
# import os
# from datetime import timedelta
# from dotenv import load_dotenv

# BASE_DIR = Path(__file__).resolve().parent.parent

# load_dotenv(BASE_DIR / ".env")

# # =====================================================
# # SECURITY SETTINGS
# # =====================================================

# SECRET_KEY = os.getenv("DJANGO_SECRET_KEY")

# if not SECRET_KEY:
#     raise ValueError("DJANGO_SECRET_KEY is missing from .env")

# DEBUG = os.getenv("DEBUG", "False").lower() == "true"

# ALLOWED_HOSTS = [
#     "localhost",
#     "127.0.0.1",
#     "0.0.0.0",
# ]

# # =====================================================
# # INSTALLED APPLICATIONS
# # =====================================================

# INSTALLED_APPS = [
#     # Django Default Apps
#     "django.contrib.admin",
#     "django.contrib.auth",
#     "django.contrib.contenttypes",
#     "django.contrib.sessions",
#     "django.contrib.messages",
#     "django.contrib.staticfiles",
#      "apps.videos",
#     # Third Party Apps
#     "rest_framework",
#     "corsheaders",

#     # Custom Apps
#     "apps.accounts.apps.AccountsConfig",
#     "apps.articles.apps.ArticlesConfig",
#     "apps.categories.apps.CategoriesConfig",
#     "apps.breaking_news.apps.BreakingNewsConfig",
#     "apps.media.apps.MediaConfig",
#     "apps.analytics.apps.AnalyticsConfig",
#     "apps.settings_app.apps.SettingsAppConfig",
# ]

# # =====================================================
# # MIDDLEWARE
# # =====================================================

# MIDDLEWARE = [
#     "django.middleware.security.SecurityMiddleware",
#     "django.contrib.sessions.middleware.SessionMiddleware",
#     "corsheaders.middleware.CorsMiddleware",
#     "django.middleware.common.CommonMiddleware",
#     "django.middleware.csrf.CsrfViewMiddleware",
#     "django.contrib.auth.middleware.AuthenticationMiddleware",
#     "django.contrib.messages.middleware.MessageMiddleware",
#     "django.middleware.clickjacking.XFrameOptionsMiddleware",
# ]

# # =====================================================
# # URL AND SERVER CONFIGURATION
# # =====================================================

# ROOT_URLCONF = "config.urls"

# TEMPLATES = [
#     {
#         "BACKEND": "django.template.backends.django.DjangoTemplates",
#         "DIRS": [],
#         "APP_DIRS": True,
#         "OPTIONS": {
#             "context_processors": [
#                 "django.template.context_processors.request",
#                 "django.contrib.auth.context_processors.auth",
#                 "django.contrib.messages.context_processors.messages",
#             ],
#         },
#     },
# ]

# WSGI_APPLICATION = "config.wsgi.application"
# ASGI_APPLICATION = "config.asgi.application"

# # =====================================================
# # POSTGRESQL DATABASE
# # =====================================================

# DATABASES = {
#     "default": {
#         "ENGINE": "django.db.backends.postgresql",
#         "NAME": os.getenv("DB_NAME"),
#         "USER": os.getenv("DB_USER"),
#         "PASSWORD": os.getenv("DB_PASSWORD"),
#         "HOST": os.getenv("DB_HOST", "localhost"),
#         "PORT": os.getenv("DB_PORT", "5432"),
#         "CONN_MAX_AGE": 60,
#     }
# }

# # =====================================================
# # CUSTOM USER MODEL
# # Configure before first migration
# # =====================================================

# AUTH_USER_MODEL = "accounts.User"

# # =====================================================
# # PASSWORD VALIDATION
# # =====================================================

# AUTH_PASSWORD_VALIDATORS = [
#     {
#         "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
#     },
#     {
#         "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
#     },
#     {
#         "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
#     },
#     {
#         "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
#     },
# ]

# # =====================================================
# # LANGUAGE AND TIME ZONE
# # =====================================================

# LANGUAGE_CODE = "en-us"
# TIME_ZONE = "Asia/Kolkata"

# USE_I18N = True
# USE_TZ = True

# # =====================================================
# # STATIC AND MEDIA FILES
# # =====================================================

# STATIC_URL = "static/"
# STATIC_ROOT = BASE_DIR / "staticfiles"

# MEDIA_URL = "/media/"
# MEDIA_ROOT = BASE_DIR / "mediafiles"

# DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# # =====================================================
# # CORS CONFIGURATION
# # =====================================================

# CORS_ALLOWED_ORIGINS = [
#     "http://localhost:5173",
#     "http://127.0.0.1:5173",
# ]

# # =====================================================
# # DJANGO REST FRAMEWORK
# # =====================================================

# REST_FRAMEWORK = {
#     "DEFAULT_AUTHENTICATION_CLASSES": [
#         "rest_framework_simplejwt.authentication.JWTAuthentication",
#     ],
#     "DEFAULT_PERMISSION_CLASSES": [
#         "rest_framework.permissions.AllowAny",
#     ],
# }

# # =====================================================
# # JWT AUTHENTICATION
# # =====================================================

# SIMPLE_JWT = {
#     "ACCESS_TOKEN_LIFETIME": timedelta(minutes=30),
#     "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
#     "AUTH_HEADER_TYPES": ("Bearer",),
# }

from pathlib import Path
import os
from datetime import timedelta
from dotenv import load_dotenv
import dj_database_url

BASE_DIR = Path(__file__).resolve().parent.parent

load_dotenv(BASE_DIR / ".env")

# =====================================================
# SECURITY SETTINGS
# =====================================================

SECRET_KEY = os.getenv("DJANGO_SECRET_KEY")

if not SECRET_KEY:
    raise ValueError("DJANGO_SECRET_KEY is missing from .env")

DEBUG = os.getenv("DEBUG", "False").lower() == "true"

ALLOWED_HOSTS = [
    "localhost",
    "127.0.0.1",
    "0.0.0.0",
    "firstday-9c55.onrender.com",
]

# =====================================================
# INSTALLED APPLICATIONS
# =====================================================

INSTALLED_APPS = [
    # Django Default Apps
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    # Videos
    "apps.videos",

    # Third Party Apps
    "rest_framework",
    "corsheaders",

    # Custom Apps
    "apps.accounts.apps.AccountsConfig",
    "apps.articles.apps.ArticlesConfig",
    "apps.categories.apps.CategoriesConfig",
    "apps.breaking_news.apps.BreakingNewsConfig",
    "apps.media.apps.MediaConfig",
    "apps.analytics.apps.AnalyticsConfig",
    "apps.settings_app.apps.SettingsAppConfig",
]

# =====================================================
# MIDDLEWARE
# =====================================================

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

# =====================================================
# URL AND SERVER CONFIGURATION
# =====================================================

ROOT_URLCONF = "config.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "config.wsgi.application"
ASGI_APPLICATION = "config.asgi.application"

# =====================================================
# POSTGRESQL DATABASE - NEON
# =====================================================

DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    raise ValueError("DATABASE_URL is missing from .env")

DATABASES = {
    "default": dj_database_url.parse(
        DATABASE_URL,
        conn_max_age=600,
        ssl_require=True,
    )
}

# =====================================================
# CUSTOM USER MODEL
# =====================================================

AUTH_USER_MODEL = "accounts.User"

# =====================================================
# PASSWORD VALIDATION
# =====================================================

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

# =====================================================
# LANGUAGE AND TIME ZONE
# =====================================================

LANGUAGE_CODE = "en-us"
TIME_ZONE = "Asia/Kolkata"

USE_I18N = True
USE_TZ = True

# =====================================================
# STATIC AND MEDIA FILES
# =====================================================

STATIC_URL = "static/"
STATIC_ROOT = BASE_DIR / "staticfiles"

MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "mediafiles"

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# =====================================================
# CORS CONFIGURATION
# =====================================================

CORS_ALLOWED_ORIGINS = [
    # Local frontend
    "http://localhost:5173",
    "http://127.0.0.1:5173",

    # Production frontend
    "https://hidustantime.netlify.app",
]

# =====================================================
# DJANGO REST FRAMEWORK
# =====================================================

REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ],
    "DEFAULT_PERMISSION_CLASSES": [
        "rest_framework.permissions.AllowAny",
    ],
}

# =====================================================
# JWT AUTHENTICATION
# =====================================================

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=30),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
    "AUTH_HEADER_TYPES": ("Bearer",),
}