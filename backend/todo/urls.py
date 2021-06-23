from django.urls import path, include
from .views import Todoapi
urlpatterns = [
    path('todo/',Todoapi.as_view(),name="todoapi"),
    path('todo/<int:pk>/',Todoapi.as_view(),name="todoapi")
]
