from django.db import models
from django.contrib.auth.models import User
# Create your models here.

STATUS =(
    ('0','Pending'),
    ('1','Completed'),
    ('2','Terminated')
)
class Todo(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=200)
    status = models.CharField(choices=STATUS, max_length=100, default="0", blank=True)
    terminited_at = models.DateTimeField(blank=True, null=True)
    completed_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

