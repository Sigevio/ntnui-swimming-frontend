from django.shortcuts import render
from django.http import HttpResponse
from .models import Request

# Create your views here.
def enroll(request):
    return HttpResponse(request)