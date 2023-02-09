# restframework
from rest_framework import viewsets

# local apps
from saleorder.models import SaleOrder
from saleorder.api.serializers import SaleOrderSerializer

class SaleOrderViewSet(viewsets.ModelViewSet):
    """View Set class SaleOrderAPIView"""
    queryset = SaleOrder.objects.all()
    serializer_class = SaleOrderSerializer