from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from ..models import SaleOrder, SaleOrderItem
from .serializers import SaleOrderSerializer, SaleOrderItemSerializer
from ..SQLite3.conn import ConnSQLite3 as ConnDB
# Create your views here.

@api_view(['GET'])
def get_sale_order(request, num_sale_order):
    sale_order = SaleOrder.objects.get(no_sale_order=num_sale_order)
    serializer = SaleOrderSerializer(sale_order, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def get_sale_order_items(request, num_sale_order):
    saleorder = SaleOrder.objects.get(no_sale_order=num_sale_order)
    saleorderitem = SaleOrderItem.objects.filter(sale_order=saleorder)
    serializer = SaleOrderItemSerializer(saleorderitem, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_info_indicators(request, name_customer, no_sale_order):
    picking_quantity_by_customer = ConnDB().get_picking_quantity_by_customer(name_customer)
    request_quantity_by_customer = ConnDB().get_request_quantity_by_customer(name_customer)
    picking_quantity_by_saleorder = ConnDB().get_picking_quantity_by_saleorder(no_sale_order)
    request_quantity_by_saleorder = ConnDB().get_request_quantity_by_saleorder(no_sale_order)
    response = {
        "picking_quantity_by_customer":picking_quantity_by_customer['quantity'],
        "request_quantity_by_customer":request_quantity_by_customer['quantity'],
        "picking_quantity_by_saleorder":picking_quantity_by_saleorder['quantity'],
        "request_quantity_by_saleorder":request_quantity_by_saleorder['quantity'],
    }
    return JsonResponse(response)