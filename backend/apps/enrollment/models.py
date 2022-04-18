from django.db import models
from django.forms import ValidationError

def validate_gender(value: str) -> bool:
  if value in ['male', 'female']:
    return value
  else:
    raise ValidationError('This field accepts only "male" and "female"')

def validate_text(value: str) -> bool:
  if value.isalpha:
    return value
  else:
    raise ValidationError('This field only accepts an alphabetical string')

# Create your models here.
class Request(models.Model):
  gender = models.CharField(
    max_length = 6,
    validators = [validate_gender]
  )
  first_name = models.TextField(
    validators = [validate_text]
  )
  surname = models.TextField(
    validators = [validate_text]
  )
  email = models.EmailField()
  birthdate = models.DateField()
  phone_domain = models.CharField(max_length = 5)
  phone = models.IntegerField()
  address = models.TextField()
  zip = models.IntegerField()
  licence = models.TextField()

  def __str__(self):
    return self.email

class Member(models.Model):
  gender = models.CharField(
    max_length = 6,
    validators = [validate_gender]
  )
  first_name = models.TextField(
    validators = [validate_text]
  )
  surname = models.TextField(
    validators = [validate_text]
  )
  email = models.EmailField()
  birthdate = models.DateField()
  phone_domain = models.CharField(max_length = 5)
  phone = models.IntegerField()
  address = models.TextField()
  zip = models.IntegerField()
  licence = models.TextField()

  def __str__(self):
    return self.email
