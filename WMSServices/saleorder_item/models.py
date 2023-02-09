from django.db import models
from reference.models import Reference
from saleorder.models import SaleOrder

# Create your models here.
class SaleOrderItem(models.Model):
    id = models.AutoField(primary_key=True, verbose_name="Id")
    reference = models.ForeignKey(Reference, on_delete=models.DO_NOTHING, verbose_name="Referencia")
    quantity = models.IntegerField(verbose_name="Cantidad")
    sale_order = models.ForeignKey(SaleOrder, on_delete=models.DO_NOTHING, verbose_name="Orden de venta")

    class Meta:
        verbose_name = "Articulo Solicitado"
        verbose_name_plural = "Articulos Solicitados"
        ordering = ['-id']

    def __str__(self):
        return self.reference.name