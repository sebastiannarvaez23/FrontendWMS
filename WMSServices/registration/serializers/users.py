"""Users Serializers."""
from rest_framework import serializers
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from django.contrib.auth. models import User

class UserModelSerializer(serializers.ModelSerializer):
    """User Model Serializer."""
    class Meta:
        """Meta Class."""
        model = User
        fields = '__all__'


class UserLoginSerializer(serializers.Serializer):
    """User login Serializer.

    Handle the login request data.
    """
    username = serializers.CharField()
    password = serializers.CharField(min_length=8, max_length=64)

    def validate(self, data):
        """Check credentials."""
        user = authenticate(username=data['username'], password=data['password'])
        if not user:
            raise serializers.ValidationError('Invalid credentials')
        self.context['user'] = user
        return data

    def create(self, data):
        """Generate or retrive new token."""
        token, created = Token.objects.get_or_create(user=self.context['user'])
        return self.context['user'], token.key
