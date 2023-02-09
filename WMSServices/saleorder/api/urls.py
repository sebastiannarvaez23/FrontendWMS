#Django
from django.urls import path, include

# DRF
from rest_framework import routers

# LocalApps
from saleorder.api.api import SaleOrderViewSet

router = routers.DefaultRouter()
router.register(r'', SaleOrderViewSet)

urlpatterns = [
    path('', include(router.urls)),
]