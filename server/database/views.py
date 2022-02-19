
from cgitb import lookup
from database.serializers import ClipSerializer
from database.models import Clip
from rest_framework import viewsets

from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser

from rest_framework.decorators import action
from rest_framework.response import Response
from django.http.response import Http404
from django.db.models import Q

# Create your views here.
from rest_framework import filters


class ClipViewSet(viewsets.ModelViewSet):
    queryset = Clip.objects.all()
    serializer_class = ClipSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['id','title', 'uploader','description','rating']

        


        
@csrf_exempt
def ClipApi(request,id=0):
        if request.method=='GET':
            clips = Clip.objects.all()
            clips_serializer = ClipSerializer(clips, many=True)
            return JsonResponse(clips_serializer.data, safe=False)

        elif request.method=='POST':
            clip_data=JSONParser().parse(request)
            clip_serializer = ClipSerializer(data=clip_data)
            if clip_serializer.is_valid():
                clip_serializer.save()
                return JsonResponse("Added Successfully!!" , safe=False)
            return JsonResponse("Failed to Add.",safe=False)
        
        elif request.method=='PUT':
            clip_data = JSONParser().parse(request)
            clip=Clip.objects.get(id=clip_data['id'])
            clip_serializer=ClipSerializer(clip,data=clip_data)
            if clip_serializer.is_valid():
                clip_serializer.save()
                return JsonResponse("Updated Successfully!!", safe=False)
            return JsonResponse("Failed to Update.", safe=False)

        elif request.method=='DELETE':
            clip=Clip.objects.get(id=id)
            Clip.delete()
            return JsonResponse("Deleted Succeffully!!", safe=False)
