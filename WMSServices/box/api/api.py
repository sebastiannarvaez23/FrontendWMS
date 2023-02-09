# Django
from django.core.exceptions import PermissionDenied

# restframework
from rest_framework import viewsets, status
from rest_framework.response import Response

# local apps
from picking.models import Picking
from box.models import Box, Dimension
from box.api.serializers import BoxSerializer, DimensionSerializer


class BoxViewSet(viewsets.ModelViewSet):
    """Box view set."""
    queryset = Box.objects.all()
    serializer_class = BoxSerializer

    def list(self, request, *args, **kwargs):
        picking = kwargs.get('picking')
        picking = Picking.objects.filter(id=picking)

        if picking is not None:
            try:
                self.queryset = self.queryset.filter(picking=picking)
            except:
                return Response(status=status.HTTP_404_NOT_FOUND)
        if not picking:
            raise PermissionDenied('A picking parameter is required.')
        return super().list(request, *args, **kwargs)

class DimensionViewSet(viewsets.ModelViewSet):
    """Box view set."""
    queryset = Dimension.objects.all()
    serializer_class = DimensionSerializer