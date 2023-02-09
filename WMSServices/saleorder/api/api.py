# Django
from django.core.exceptions import PermissionDenied

# restframework
from rest_framework import viewsets, status
from rest_framework.response import Response

# local apps
from saleorder.models import SaleOrder
from saleorder.api.serializers import SaleOrderSerializer

class SaleOrderViewSet(viewsets.ModelViewSet):
    """View Set class SaleOrderAPIView"""
    queryset = SaleOrder.objects.all()
    serializer_class = SaleOrderSerializer

    def list(self, request, *args, **kwargs):
        saleorder = kwargs.get('nosaleorder')

        if saleorder is not None:
            try:
                self.queryset = self.queryset.filter(no_sale_order=saleorder)
            except:
                return Response(status=status.HTTP_404_NOT_FOUND)

        if not saleorder:
            raise PermissionDenied('A nosaleorder parameter is required.')

        response = super().list(request, *args, **kwargs)
        response.data = response.data[0]

        return response

    