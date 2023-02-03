from django.urls import path
from picking.api.api import PickingAPIView

urlpatterns = [
    path('picking/', PickingAPIView.as_view(), name='picking_api')
]