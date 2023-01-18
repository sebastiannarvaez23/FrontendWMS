from django.urls import path, include
from . import views
from .views import PickingsViewSet

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', PickingsViewSet, basename="picking")

urlpatterns = [
    path('', include(router.urls)),
    path('saleorder/<str:sale_order>/', PickingsViewSet.as_view({'get':'list_filter_sale_order'}), name='picking')
    #path('get/<str:sale_order>/', views.get_pickings),
    #path('create/', views.create_picking),
]