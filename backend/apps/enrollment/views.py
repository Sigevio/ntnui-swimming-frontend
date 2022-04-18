from django.shortcuts import render
from django.http import HttpResponse
from .models import Request
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def enroll(request):
    if request.method == 'POST':
        payload = json.loads(request.body)
        gender = payload['gender']
        name = payload['name']
        first_name = name.split()[0]
        surname = ' '.join(name.split()[1:])
        email = payload['email']
        birthdate = payload['birthdate']
        phone = payload['phone']
        zip = payload['zip']
        address = payload['address']
        license = payload['licence']
        enrollment = Request(
            gender = gender,
            first_name = first_name,
            surname = surname,
            email = email,
            birthdate = birthdate,
        )
