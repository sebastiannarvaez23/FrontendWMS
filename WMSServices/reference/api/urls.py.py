from rest_framework.routers import DefaultRouter
from person.api.views import PickingApiViewSet

router_pickings = DefaultRouter()
router_pickings.register(prefix='picking', basename='picking', viewset=PickingApiViewSet)