from rest_framework import serializers
from app.models import User
from django.contrib.auth import authenticate
from rest_framework.exceptions import AuthenticationFailed

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=68, min_length=6, write_only=True)

    class Meta:
        model = User
        fields = ['firstname', 'lastname', 'email', 'cdate_of_birth', 'password']

    def validate(self, attrs):
        attrs = super().validate(attrs)
        user = User.objects.create_user(**attrs)
        user.save()
        return attrs

class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=225)

    class Meta:
        model = User
        fields = ('firstname', 'lastname', 'email', 'password', 'tokens')
        extra_kwargs = {
            'password': {'write_only': True},
            'firstname': {'read_only': True},
            'lastname': {'read_only': True},
            'date_of_birth': {'read_only': True}
        }

    def validate(self, attrs):
        email = attrs.get('email', '')
        password = attrs.get('password', '')

        user = authenticate(email=email, password=password)
        if not user:
            raise AuthenticationFailed('Invalid Credential. Try again')

        return {
            'firstname': user.firstname,
            'email': user.email,
            'lastname': user.othernames,
            'date_of_birth': user.date_of_birth,
            'tokens': user.tokens
        }
