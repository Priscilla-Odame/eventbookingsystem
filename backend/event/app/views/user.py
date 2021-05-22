from django.shortcuts import render
from rest_framework import viewsets, generics
from app.models import User
from app.serializers.user import UserSerializer, LoginSerializer

# Create your views here.
class RegisterViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer
