from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    instructor = models.CharField(max_length=255)
    date = models.DateField()
    domain = models.CharField(max_length=255)
    image_url = models.CharField(max_length = 2053)
    
    def __str__(self):
        return self.name