from rest_framework.views import APIView
from rest_framework import status
from .serializers import UserLoginSerializer
from rest_framework.response import Response
import time

# Create your views here.
class UserLoginAPIView(APIView):
    """ Users login API View """

    def post(self, request, *args, **kwargs):
        """Handle HTTP POST request."""
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user, token = serializer.save()
        data = {
            'user': 'manager',
            'access_token': token
        }
        return Response(data, status=status.HTTP_201_CREATED)
        
