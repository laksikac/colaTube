
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
class CilpViewSet(viewsets.ModelViewSet):

    queryset = Clip.objects.all()
    serializer_class = ClipSerializer

    @action(detail=False, methods=['GET'])
    def search(self, request, *args, **kwargs):

        search_post = request.GET.get('_key')

        if search_post or search_post == '':
            try:
                dataSet = self.queryset.filter(Q(title__icontains =search_post) | Q(uploader__icontains =search_post) | Q(description__icontains =search_post))
            except Clip.DoesNotExist:
                raise Http404("Clips does not exist")
        else:
            dataSet = self.queryset.all()
        
        clips = self.serializer_class(dataSet, many=True)
        return Response(clips.data)
    
    @action(detail=False, methods=['GET'])
    def search_title(self, request, *args, **kwargs):

        search_title = request.GET.get('_title')

        if search_title or search_title == '':
            try:
                dataSet = self.queryset.filter(Q(title__icontains =search_title))
            except Clip.DoesNotExist:
                raise Http404("Clips does not exist")
        else:
            dataSet = self.queryset.all()
        
        clips = self.serializer_class(dataSet, many=True)
        return Response(clips.data)
    
    @action(detail=False, methods=['GET'])
    def search_uploader(self, request, *args, **kwargs):

        search_uploader = request.GET.get('_uploader')

        if search_uploader or search_uploader == '':
            try:
                dataSet = self.queryset.filter(Q(uploader__icontains =search_uploader))
            except Clip.DoesNotExist:
                raise Http404("Clips does not exist")
        else:
            dataSet = self.queryset.all()
        
        clips = self.serializer_class(dataSet, many=True)
        return Response(clips.data)

    @action(detail=False, methods=['GET'])
    def search_description(self, request, *args, **kwargs):

        search_description = request.GET.get('_description')

        if search_description or search_description == '':
            try:
                dataSet = self.queryset.filter(Q(description__icontains =search_description))
            except Clip.DoesNotExist:
                raise Http404("Clips does not exist")
        else:
            dataSet = self.queryset.all()
        
        clips = self.serializer_class(dataSet, many=True)
        return Response(clips.data)

        


        
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
                return JsonResponse(clip_serializer.data , safe=False)
            return JsonResponse("เกิดข้อผิดพลาดในการเพิ่ม",safe=False)
        
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
            Clip.delete()
            return JsonResponse("ลบสำเร็จ!!", safe=False)