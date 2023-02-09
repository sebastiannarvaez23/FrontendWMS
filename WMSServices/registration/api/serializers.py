"""Users Serializers."""
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth import authenticate, password_validation
from rest_framework.authtoken.models import Token
from django.contrib.auth. models import User
from django.core.validators import RegexValidator

class UserModelSerializer(serializers.ModelSerializer):
    """User Model Serializer."""
    class Meta:
        """Meta Class."""
        model = User
        fields = '__all__'

class UserSignUpSerializer(serializers.Serializer):
    """User signup serializers.
    
    Handle sign up datavalidation and user/profile creation.
    """
    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    username = serializers.CharField(
        min_length=4,
        max_length=20,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    """ phone_regex = RegexValidator(
        regex=r'\+?1?\d{9,15}$',
        message="Phone number must be entered in the format: +9999999999. Up to 15 digits allowed."
    )
    phone_number = serializers.CharField(validators=[phone_regex]) """
    password = serializers.CharField(min_length=8, max_length=64)
    password_confirmation = serializers.CharField(min_length=8, max_length=64)

    first_name = serializers.CharField(min_length=2, max_length=30)
    last_name = serializers.CharField(min_length=2, max_length=30)

    def validate(self, data):
        """Verify passwords match."""
        passwd = data['password']
        passwd_conf = data['password_confirmation']
        if passwd != passwd_conf:
            raise serializers.ValidationError("Passwords don't match.")
        password_validation.validate_password(passwd)
        return data

    def create(self, data):
        """Handle user and profile creations."""
        data.pop('password_confirmation')
        user = User.objects.create_user(**data)
        return user

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
