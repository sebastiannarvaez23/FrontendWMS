from django.db import models
from reference.models import Reference

# Create your models here.
class Collection(models.Model):
    id = models.AutoField(primary_key=True, verbose_name="Id")
    name = models.CharField(max_length=255, verbose_name="Nombre")

    class Meta:
        verbose_name = "Colección"
        verbose_name_plural = "Colecciones"
        ordering = ['-id']

    def __str__(self):
        return self.name

class PayTerm(models.Model):
    id = models.AutoField(primary_key=True, verbose_name="Id")
    name = models.CharField(max_length=255, verbose_name="Nombre")

    class Meta:
        verbose_name = "Termino de pago"
        verbose_name_plural = "Terminos de pago"
        ordering = ['-id']

    def __str__(self):
        return self.name

class SaleOrder(models.Model):
    id = models.AutoField(primary_key=True, verbose_name="Id")
    no_sale_order = models.CharField(max_length=20, verbose_name="No Orden de venta")
    publication_date = models.DateField(verbose_name="Fecha publicación")
    delivery_date = models.DateField(verbose_name="Fecha de entrega")
    doc_date = models.DateField(verbose_name="Fecha de documento")
    po_comments = models.TextField(verbose_name="PO Comentarios")
    customer_name = models.CharField(max_length=255, verbose_name="Nombre del cliente")
    delivery_address = models.CharField(max_length=255, verbose_name="Dirección de entrega")
    pay_term = models.ForeignKey(PayTerm, on_delete=models.DO_NOTHING, verbose_name="Término de pago")
    collection = models.ForeignKey(Collection, on_delete=models.DO_NOTHING, verbose_name="Colección")

    class Meta:
        verbose_name = "Orden de venta"
        verbose_name_plural = "Ordenes de venta"
        ordering = ['-id']

    def __str__(self):
        return self.no_sale_order

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