from rest_framework.routers import DefaultRouter
from django.urls import path, include, re_path

from database import views




router = DefaultRouter()
router.register(r'database', views.ClipViewSet)



urlpatterns = [
    path('', include(router.urls)),
    re_path(r'^clip/$',views.ClipApi),
    re_path(r'^clip/([0-9]+)$',views.ClipApi),
]
