from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from saleorder_item.models import SaleOrderItem

class SaleOrderItemSerializer(ModelSerializer):
    reference = serializers.CharField(source='reference.item_code')
    modelsize = serializers.CharField(source='reference.model_size')
    color = serializers.CharField(source='reference.color')
    class Meta:
        model = SaleOrderItem
        fields = [
            'id',
            'reference',
            'quantity',
            'sale_order',
            'modelsize',
            'color',
        ]