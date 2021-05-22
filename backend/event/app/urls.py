from django.conf.urls import url
from django.urls import path, include
from rest_framework import routers
from django.conf import settings
from app.views.user import RegisterViewSet, LoginAPI

router = routers.DefaultRouter()

router.register(r'register', RegisterViewSet, 'register')

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/login', LoginAPI.as_view(), name ='login')


]