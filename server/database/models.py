
import datetime
from re import T
from django.db import models
import django_filters






class Clip(models.Model):
    title = models.CharField(max_length=200)
    uploader = models.CharField(max_length=200)
    description = models.TextField()
    rating = models.IntegerField()
    url = models.CharField(max_length = 200)
    date = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.title



   

class Tag(models.Model):
    clip = models.ForeignKey(Clip, on_delete=models.CASCADE)
    tag = models.CharField(max_length = 200)


class User(models.Model):
    name = models.CharField(max_length=200)

class Review(models.Model):
    review = models.TextField()
    score = models.IntegerField()
