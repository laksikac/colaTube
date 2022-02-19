
import django_filters
from .models import Clip

class Clipfilter(django_filters.FilterSet):

    class Meta:
        model = Clip
        fields = ['title', 'uploader', 'description']
