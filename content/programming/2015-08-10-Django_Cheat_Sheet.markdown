Title: Django Cheat Sheet
Date: 2015-08-10
Categories: programming

The idea here is that I wanted an easy cheat sheet to use when going through the motions of creating __yet another__ Django website.

## Checking Django Version Number

~~~ bash
python -c "import django; print(django.get_version())"
~~~

## Creating a Project

~~~ bash
django-admin startproject mysite
~~~

## Database Setup


~~~ bash
python manage.py makemigrations
python manage.py migrate
~~~

## Run Development Server

~~~ bash
python manage.py runserver
~~~

## Starting an App

~~~ bash
python manage.py startapp polls
~~~


## Activating Apps

In: `mysite/settings.py`

Insert:

~~~ python
INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'polls',
)
~~~

## Database Migration


~~~ bash
python manage.py makemigrations polls
python manage.py sqlmigrate polls 0001
python manage.py migrate    
~~~

## Working in the shell

~~~ bash
python manage.py shell
~~~


## Base Model

~~~ python
from django.db import models


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    def __str__(self):              # __unicode__ on Python 2
        return self.question_text

class Choice(models.Model):
    question = models.ForeignKey(Question)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
~~~

## Creating an Admin User

~~~ bash
python manage.py createsuperuser
~~~

## Admin modification

in `polls/admin.py`

~~~ python
from django.contrib import admin

from .models import Question

admin.site.register(Question) 
~~~

With Customization:

~~~ python
from django.contrib import admin

from .models import Question


class QuestionAdmin(admin.ModelAdmin):
    fields = ['pub_date', 'question_text']

admin.site.register(Question, QuestionAdmin)
~~~

with fieldsets:


~~~ python
from django.contrib import admin

from .models import Question


class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,               {'fields': ['question_text']}),
        ('Date information', {'fields': ['pub_date']}),
    ]

admin.site.register(Question, QuestionAdmin)
~~~

Assigning HTML Classes:

~~~ python
from django.contrib import admin

from .models import Question


class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,               {'fields': ['question_text']}),
        ('Date information', {'fields': ['pub_date'], 'classes': ['collapse']}),
    ]

admin.site.register(Question, QuestionAdmin)
~~~