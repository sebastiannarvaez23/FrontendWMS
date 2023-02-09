# Django
from django.urls import path, include

# DRF
from rest_framework import routers

# Local Apps
from box.api.api import BoxViewSet, DimensionViewSet

router = routers.DefaultRouter()
router.register(r'', DimensionViewSet)

urlpatterns = [
    path('<str:picking>/', BoxViewSet.as_view({'get':'list'})),
    path('dimension/', include(router.urls)),
    path('', BoxViewSet.as_view({'post':'create'})),
    path('<int:pk>', BoxViewSet.as_view({'patch': 'partial_update'})),
    #path('<int:pk>', BoxViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'})),
]