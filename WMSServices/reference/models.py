from django.db import models

# Create your models here.
class Reference(models.Model):
    id = models.AutoField(primary_key=True, verbose_name="Id")
    item_code = models.CharField(max_length=100, verbose_name="Código")
    name = models.CharField(max_length=255, verbose_name="Referencia")
    model_size = models.CharField(max_length=100, verbose_name="Talla")
    color = models.CharField(max_length=255, verbose_name="Color")

    class Meta:
        verbose_name = "Referencia"
        verbose_name_plural = "Referencias"
        ordering = ['-id']

    def __str__(self):
        return self.item_code
