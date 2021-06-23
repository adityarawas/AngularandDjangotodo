from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import Todo

class ToDoSerializerget(serializers.ModelSerializer):
    class Meta:
        model=Todo
        fields = [
            'title',
            'description',
            'status',
            'completed_at',
            'created_at',
            'terminited_at',
            'pk'
        ]
class ToDoSerializerpost(serializers.ModelSerializer):
    class Meta:
        model=Todo
        fields = [
            'title',
            'description',

        ]