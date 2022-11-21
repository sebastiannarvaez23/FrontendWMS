from django.contrib import admin
from .models import StatusPicking, Picking

# Register your models here.
admin.site.register(Picking)
admin.site.register(StatusPicking)