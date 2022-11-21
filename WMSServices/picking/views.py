from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Picking, StatusPicking
from saleorder.models import SaleOrder
from .api.serializers import PickingSerializer
from django.contrib.auth.models import User
# Create your views here.
import time

@api_view(['GET'])
def get_pickings(request, sale_order):
    sale_order = SaleOrder.objects.get(no_sale_order=sale_order)
    pickings = Picking.objects.filter(sale_order=sale_order)
    serializer = PickingSerializer(pickings, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_picking(request):
    data = request.data
    sale_order = SaleOrder.objects.get(no_sale_order=data['sale_order'])
    status = StatusPicking.objects.get(id=data['status'])
    picking = Picking.objects.create(
        status = status,
        responsible = request.user,
        sale_order = sale_order,
    )
    serializer = PickingSerializer(picking, many=False)
    return Response(serializer.data)