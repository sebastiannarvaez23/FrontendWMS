from django.contrib import admin
from .models import Box, BoxItem, Dimension

# Register your models here.
admin.site.register(Box)
admin.site.register(BoxItem)
admin.site.register(Dimension)