from django.contrib import admin

from .models import Link, ShortLink

# Register your models here.

admin.site.register(ShortLink)
admin.site.register(Link)
