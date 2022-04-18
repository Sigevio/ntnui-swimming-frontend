from django.contrib import admin
from .models import Request, Member

# Register your models here.
admin.site.register([Request, Member])