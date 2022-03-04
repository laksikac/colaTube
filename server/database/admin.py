from django.contrib import admin

from .models import Clip


class ClipAdmin(admin.ModelAdmin):
    fieldsets = [
        ('title',        {'fields': ['title']}),
        ('uploader', {'fields': ['uploader']}),
        ('description',        {'fields': ['description']}),
        ('rating',             {'fields': ['rating']}),
        ('url',      {'fields': ['url']}),
        ('tags',      {'fields': ['tags']}),
        # ('date',      {'fields': ['date']}),
    ]


# Register your models here.
admin.site.register(Clip, ClipAdmin)