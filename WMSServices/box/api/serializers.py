from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from box.models import Box, BoxItem, Dimension

class BoxSerializer(ModelSerializer):
    last_modification = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    dimension = serializers.PrimaryKeyRelatedField(source='dimension.name', read_only=True)
    class Meta:
        model = Box
        fields = '__all__'

class BoxSerializerUpdate(ModelSerializer):
    last_modification = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    class Meta:
        model = Box
        fields = '__all__'

class BoxSerializerCreate(ModelSerializer):
    last_modification = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    class Meta:
        model = Box
        fields = '__all__'


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


class DimensionSerializer(ModelSerializer):
    class Meta:
        model = Dimension
        fields = '__all__'