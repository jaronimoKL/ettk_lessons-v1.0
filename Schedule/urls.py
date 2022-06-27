from django.template.defaulttags import url
from django.urls import path, re_path
from . import views
from django.views.decorators.cache import cache_page

urlpatterns = [
    path('', cache_page(60*15)(views.main_page), name='main_page'),
]
