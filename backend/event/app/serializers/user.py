from rest_framework import serializers
from app.models import User
from django.contrib.auth import authenticate, get_user_model
from rest_framework.exceptions import AuthenticationFailed

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','firstname', 'lastname','email','password','date_of_birth')
        extra_kwargs = {'password': {'write_only' : True}}

    def create(self, validated_data):  
        User = get_user_model()
        user = User.objects.create_user(
            validated_data['firstname'],
            validated_data['lastname'],
            validated_data['email'],
            validated_data['date_of_birth'],
            validated_data['password'])
        return user

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
            'lastname': user.lastname,
            'date_of_birth': user.date_of_birth,
            'tokens': user.tokens
        }
