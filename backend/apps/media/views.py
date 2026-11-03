# from rest_framework import generics, permissions
# from rest_framework.parsers import (
#     MultiPartParser,
#     FormParser,
#     JSONParser,
# )

# from .models import MediaAsset
# from .serializers import MediaAssetSerializer


# class MediaAssetListCreateAPIView(generics.ListCreateAPIView):

#     serializer_class = MediaAssetSerializer

#     permission_classes = [permissions.IsAdminUser]

#     parser_classes = [
#         MultiPartParser,
#         FormParser,
#         JSONParser,
#     ]

#     queryset = MediaAsset.objects.select_related(
#         "uploaded_by"
#     ).all()

#     def perform_create(self, serializer):
#         serializer.save(uploaded_by=self.request.user)


# class MediaAssetDetailAPIView(generics.RetrieveUpdateDestroyAPIView):

#     serializer_class = MediaAssetSerializer

#     permission_classes = [permissions.IsAdminUser]

#     parser_classes = [
#         MultiPartParser,
#         FormParser,
#         JSONParser,
#     ]

#     queryset = MediaAsset.objects.select_related(
#         "uploaded_by"
#     ).all()



from rest_framework import generics, permissions
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser

from .models import MediaAsset
from .serializers import MediaAssetSerializer


class MediaAssetListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = MediaAssetSerializer
    permission_classes = [permissions.IsAdminUser]
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    queryset = MediaAsset.objects.select_related("uploaded_by").all()

    def perform_create(self, serializer):
        serializer.save(uploaded_by=self.request.user)


class MediaAssetDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = MediaAssetSerializer
    permission_classes = [permissions.IsAdminUser]
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    queryset = MediaAsset.objects.select_related("uploaded_by").all()


class PublicVideoListAPIView(generics.ListAPIView):
    serializer_class = MediaAssetSerializer
    permission_classes = [permissions.AllowAny]

    queryset = MediaAsset.objects.filter(
        media_type="VIDEO"
    ).order_by("-created_at")
