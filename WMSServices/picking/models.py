from django.db import models
from django.contrib.auth.models import User
from saleorder.models import SaleOrder
from django.utils.timezone import now

# Create your models here.
class StatusPicking(models.Model):
    id = models.AutoField(primary_key=True, verbose_name="Id")
    name = models.CharField(max_length=25, verbose_name="Nombre")
    description = models.CharField(max_length=255, verbose_name="Descripción")

    class Meta:
        verbose_name = "Estado despacho"
        verbose_name_plural = "Estados despacho"
        ordering = ['-id']

    def __str__(self):
        return self.name

class Picking(models.Model):
    id = models.AutoField(primary_key=True, verbose_name="Id")
    last_modification = models.DateTimeField(verbose_name="Última modificación", default=now)
    status = models.ForeignKey(StatusPicking, on_delete=models.DO_NOTHING, verbose_name="Estado")
    responsible = models.CharField(max_length=255, verbose_name="Responsable")
    #responsible = models.ForeignKey(User, on_delete=models.DO_NOTHING, verbose_name="Responsable")
    sale_order = models.ForeignKey(SaleOrder, on_delete=models.DO_NOTHING, verbose_name="Orden de venta")

    class Meta:
        verbose_name = "Despacho"
        verbose_name_plural = "Despachos"
        ordering = ['-id']

    def __str__(self):
        return str(self.id) + " " + self.responsible


