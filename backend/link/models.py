from django.db import models

# Create your models here.


class ShortLink(models.Model):
    linkId = models.CharField(max_length=10, unique=True)
    views = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.linkId


class Link(models.Model):
    link = models.CharField(max_length=500)
    shortlink = models.ForeignKey(ShortLink, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.link
