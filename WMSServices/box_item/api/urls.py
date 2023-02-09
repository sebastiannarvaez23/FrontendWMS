from django.urls import path
from box.api.api import BoxViewSet

urlpatterns = [
    path('<str:box>/', BoxViewSet.as_view({'get':'list'})),
    path('', BoxViewSet.as_view({'post':'create'})),
    #path('<int:pk>', BoxViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'})),
]