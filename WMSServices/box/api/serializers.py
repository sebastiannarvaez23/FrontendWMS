from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from box.models import Box, Dimension

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

class DimensionSerializer(ModelSerializer):
    class Meta:
        model = Dimension
        fields = '__all__'