# restframework
from rest_framework.views import APIView
from rest_framework.response import Response

# local apps
from saleorder.models import SaleOrder
from saleorder.api.serializers import SaleOrderSerializer

class SaleOrderAPIView(APIView):
    """APIView class SaleOrderAPIView"""

    def get(self, request):
        saleorder = SaleOrder.objects.all()
        saleorder_serializer = SaleOrderSerializer(saleorder, many=True)
        return Response(saleorder_serializer.data)