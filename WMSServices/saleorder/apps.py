from django.apps import AppConfig


class SaleOrderAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'saleorder'
    verbose_name = "Orden de Venta"
