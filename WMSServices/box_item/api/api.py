# Django
from django.core.exceptions import PermissionDenied

# restframework
from rest_framework import viewsets, status
from rest_framework.response import Response

# local apps
from box.models import Box
from box_item.models import BoxItem
from box_item.api.serializers import BoxItemSerializer

class BoxItemViewSet(viewsets.ModelViewSet):
    """Box Item view set"""
    queyset = BoxItem
    serializer_class = BoxItemSerializer

    def list(self, request, *args, **kwargs):
        box = kwargs.get('box')
        box = Box.objects.filter(id=box)

        if box is not None:
            try:
                self.queryset = self.request.filter(box=box)
            except:
                return Response(status=status.HTTP_404_NOT_FOUND)
            
            if not box:
                raise PermissionDenied('A box parameter is required.')
        return super().list(request, *args, **kwargs)
