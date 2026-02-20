from django.urls import path
from . import views

app_name = 'dispatch'

urlpatterns = [
    path('', views.test_api, name='test_api'),
    path('contact/', views.submit_contact, name='submit_contact'),
    path('signup/', views.submit_signup, name='submit_signup'),
]
