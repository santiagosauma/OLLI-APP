from django.urls import path
from rest_framework import routers
from .views import *


router = routers.DefaultRouter()


urlpatterns = [
    path('predict_consumption', predict_consumption, name='predict_consumption'),
]

