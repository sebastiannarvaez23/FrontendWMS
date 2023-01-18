from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ParseError
from rest_framework import status
from rest_framework import viewsets

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

class PickingsViewSet(viewsets.ModelViewSet):
    """Picking view set."""
    queryset = Picking.objects.all()
    serializer_class = PickingSerializer
    #permission_classes = (IsAuthenticated,)

    def list_filter_sale_order(self, request, sale_order):
        if sale_order is None:
            return Response({"error": "parametro es requerido"}, status=status.HTTP_400_BAD_REQUEST)
        sale_order = SaleOrder.objects.get(no_sale_order=sale_order)
        queryset = Picking.objects.filter(sale_order=sale_order)
        serializer = self.get_serializer(queryset, many=True)
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