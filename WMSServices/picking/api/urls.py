from django.urls import path
from picking.api.api import PickingViewSet

urlpatterns = [
    path('<str:saleorder>/', PickingViewSet.as_view({'get': 'list'})),
    path('', PickingViewSet.as_view({'post': 'create'})),
    path('<int:pk>/', PickingViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'})),
]
