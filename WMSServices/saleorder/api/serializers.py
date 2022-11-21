from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from saleorder.models import SaleOrder, SaleOrderItem

class SaleOrderSerializer(ModelSerializer):
    pay_term = serializers.CharField(source='pay_term.name')
    collection = serializers.CharField(source='collection.name')
    class Meta:
        model = SaleOrder
        fields = '__all__'

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