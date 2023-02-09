from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from box_item.models import BoxItem

class BoxItemSerializer(ModelSerializer):
    reference = serializers.CharField(source='reference.item_code')
    modelsize = serializers.CharField(source='reference.model_size')
    color = serializers.CharField(source='reference.color')
    
    class Meta:
        model = BoxItem
        fields = [
            'id',
            'reference',
            'quantity',
            'box',
            'modelsize',
            'color',
        ]
