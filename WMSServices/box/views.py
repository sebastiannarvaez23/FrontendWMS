from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Box, BoxItem, Dimension
from .api.serializers import BoxSerializer, BoxItemSerializer, BoxSerializerCreate, BoxSerializerUpdate, DimensionSerializer
from picking.models import Picking
from reference.models import Reference

# Create your views here.
# Dimensions ---

@api_view(['GET'])
def get_dimensions(request):
    dimensions = Dimension.objects.all()
    serializer = DimensionSerializer(dimensions, many=True)
    return Response(serializer.data)

# Box ---

@api_view(['GET'])
def get_boxes(request, id_picking):
    picking = Picking.objects.get(id=id_picking)
    boxes = Box.objects.filter(picking=picking)
    serializer = BoxSerializer(boxes, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_box(request):
    data = request.data
    picking = Picking.objects.get(id=data['picking'])
    dimension = Dimension.objects.get(id=data['dimension'])
    box = Box.objects.create(
        gross_weight = 0.00,
        responsible = request.user,
        dimension =dimension,
        picking = picking,
    )
    serializer = BoxSerializer(box, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def update_box(request, id_box):
    data = request.data
    box = Box.objects.get(id=id_box)
    serializer = BoxSerializerUpdate(box, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)

# BoxItem ---

@api_view(['GET'])
def get_boxes_item(request, id_box):
    box = Box.objects.get(id=id_box)
    boxes_items = BoxItem.objects.filter(box=box)
    serializer = BoxItemSerializer(boxes_items, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_box_item(request):
    data = request.data
    reference = Reference.objects.get(item_code=data['reference'])
    box = Box.objects.get(id=data['box'])
    box_item = BoxItem.objects.create(
        quantity = data['quantity'],
        reference = reference,
        box = box,
    )
    serializer = BoxItemSerializer(box_item, many=False)
    return Response(serializer.data)