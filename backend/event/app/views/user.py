from django.shortcuts import render
from rest_framework import viewsets, generics, permissions
from rest_framework.response import Response
from app.models import User
from app.serializers.user import RegisterSerializer, LoginSerializer

# Create your views here.
class RegisterViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]
    serializer_class = RegisterSerializer
    queryset = User.objects


class LoginAPI(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny, ]
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data)
