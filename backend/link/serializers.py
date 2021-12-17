from rest_framework import serializers
from .models import Link, ShortLink


class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = ("link", "shortlink", "created_at", "updated_at")


class ShortLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShortLink
        fields = ("linkId", "views", "created_at", "updated_at")
