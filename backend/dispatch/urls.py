from django.urls import path
from . import views

app_name = 'dispatch'

urlpatterns = [
    path('', views.test_api, name='test_api'),
]
