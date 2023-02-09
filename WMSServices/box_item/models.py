# Django
from django.db import models

# Local Apps
from reference.models import Reference
from box.models import Box

# Create your models here.
class BoxItem(models.Model):
    id = models.AutoField(primary_key=True, verbose_name="Id")
    quantity = models.IntegerField(verbose_name="Cantidad")
    reference = models.ForeignKey(Reference, on_delete=models.DO_NOTHING, verbose_name="referencia")
    box = models.ForeignKey(Box, on_delete=models.DO_NOTHING, verbose_name="Caja")

    class Meta:
        verbose_name = "Referencia empacada"
        verbose_name_plural = "Referencias empacadas"
        ordering = ['-id']

    def __str__(self):
        return self.reference.item_code