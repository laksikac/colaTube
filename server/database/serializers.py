from rest_framework import serializers
from database.models import Clip

class ClipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clip
        fields = ['id', 'title', 'uploader', 'description', 'rating', 'url', 'date']