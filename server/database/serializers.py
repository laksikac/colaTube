from rest_framework import serializers
from database.models import Clip
from django.forms.models import model_to_dict
from taggit.serializers import (TagListSerializerField,
                                TaggitSerializer)


class ClipSerializer(TaggitSerializer, serializers.ModelSerializer):

    tags = TagListSerializerField()

    class Meta:
        model = Clip
        fields = '__all__'


