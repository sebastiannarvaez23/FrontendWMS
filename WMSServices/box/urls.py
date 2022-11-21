from django.urls import path
from . import views

urlpatterns = [
    path('getboxes/<str:id_picking>', views.get_boxes),
    path('create/', views.create_box),
    path('update/<str:id_box>', views.update_box),
    path('getdimensions/', views.get_dimensions),
    path('getboxitems/<str:id_box>', views.get_boxes_item),
    path('createboxitem/', views.create_box_item),
]