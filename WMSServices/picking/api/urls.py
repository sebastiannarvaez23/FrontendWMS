from django.urls import path, include
from rest_framework.routers import DefaultRouter
from picking.api.api import PickingsViewSet

urlpatterns = [
    path('<str:saleorder>/', PickingsViewSet.as_view({'get': 'list'})),
    path('', PickingsViewSet.as_view({'post': 'create'})),
    path('<int:pk>/', PickingsViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'})),
]
