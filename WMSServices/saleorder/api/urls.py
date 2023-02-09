#Django
from django.urls import path, include

# DRF
from rest_framework import routers

# LocalApps
from saleorder.api.api import SaleOrderViewSet

urlpatterns = [
    path('<str:nosaleorder>/', SaleOrderViewSet.as_view({'get': 'list'})),
    path('', SaleOrderViewSet.as_view({'post': 'create'})),
    path('<int:pk>/', SaleOrderViewSet.as_view({'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'})),
]