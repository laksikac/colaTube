
from database.serializers import ClipSerializer
from database.models import Clip
from rest_framework import viewsets

from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser

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
                return JsonResponse(1 , safe=False)
            return JsonResponse(0,safe=False)
        
        elif request.method=='PUT':
            clip_data = JSONParser().parse(request)
            clip=Clip.objects.get(id=clip_data['id'])
            clip_serializer=ClipSerializer(clip,data=clip_data)
            if clip_serializer.is_valid():
                clip_serializer.save()
                return JsonResponse(clip_serializer.data, safe=False)
            return JsonResponse("เกิดข้อผิดพลาดในการอัพเดท", safe=False)

        elif request.method=='DELETE':
            clip=Clip.objects.get(id=id)
            clip.delete()
            return JsonResponse("ลบสำเร็จ!!", safe=False)
