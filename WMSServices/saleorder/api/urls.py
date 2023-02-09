from django.urls import path
from saleorder.api.api import SaleOrderAPIView

urlpatterns = [
    path('', SaleOrderAPIView.as_view(), name='saleorder_api'),
    #path('get/<str:num_sale_order>/', views.get_sale_order),
    #path('getitems/<str:num_sale_order>/', views.get_sale_order_items),
    #path('getinfoindicators/<str:name_customer>/<str:no_sale_order>/', views.get_info_indicators),
]