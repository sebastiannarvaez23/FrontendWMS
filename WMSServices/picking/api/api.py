# restframework
from rest_framework.views import APIView
from rest_framework.response import Response

# local apps
from saleorder.models import SaleOrder
from picking.models import Picking
from picking.api.serializers import PickingSerializer

class PickingAPIView(APIView):
    """APIView class PickingAPIView"""

    def get_pickings(self, request, sale_order):
        sale_order = SaleOrder.objects.get(no_sale_order=sale_order)
        pickings = Picking.objects.filter(sale_order=sale_order)
        pickings_serializer = PickingSerializer(pickings, many=True)
        return Response(pickings_serializer.data)