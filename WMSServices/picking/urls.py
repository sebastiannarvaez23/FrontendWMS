from django.urls import path
from . import views

urlpatterns = [
    path('get/<str:sale_order>/', views.get_pickings),
    path('create/', views.create_picking),
]