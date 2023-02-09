from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from saleorder.models import SaleOrder

class SaleOrderSerializer(ModelSerializer):
    pay_term = serializers.CharField(source='pay_term.name')
    collection = serializers.CharField(source='collection.name')
    class Meta:
        model = SaleOrder
        fields = '__all__'

