from django.contrib import admin
from .models import Collection, SaleOrder, SaleOrderItem, PayTerm

# Register your models here.
admin.site.register(Collection)
admin.site.register(SaleOrder)
admin.site.register(SaleOrderItem)
admin.site.register(PayTerm)