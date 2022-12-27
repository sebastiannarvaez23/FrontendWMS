from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password

import time

# Create your views here.
@api_view(['POST'])
def login(request):
        
    username = request.POST.get('username')
    password = request.POST.get('password')

    print(username)
    time.sleep(22222)

    user = User.objects.get(username=username)
    """ try:
    except User.DoesNotExist:
        return Response("Usuario invalido")  """
    
    pwd_valid = check_password(password, user.password)

    if not pwd_valid:
        return Response("Contraseña Invalida")

    token, created = Token.objects.get_or_create(user=user)

    return Response(token.key)
