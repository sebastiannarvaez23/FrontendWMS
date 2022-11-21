from rest_framework.serializers import ModelSerializer
from picking.models import Picking

class PickingSerializer(ModelSerializer):
    class Meta:
        model = Picking
        fields = '__all__'