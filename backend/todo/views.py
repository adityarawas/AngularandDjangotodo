from copy import error
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import serializers, status
from .models import Todo
from .serializer import ToDoSerializerget, ToDoSerializerpost
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
# Create your views here.


@method_decorator(csrf_exempt, name='dispatch')
class Todoapi(APIView):
    def get(self, request):
        obj = Todo.objects.all()
        serializer = ToDoSerializerget(obj, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request, format=None):
        serializer = ToDoSerializerget(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        obj = Todo.objects.get(pk = pk)
        if(request.data['action'] == 'Completed'):
            request.data['completed_at'] = timezone.now()
        if(request.data['action'] == 'Terminated'):
            request.data['terminited_at'] = timezone.now()
        
        serializer = ToDoSerializerget(obj, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'success':True})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request):
        obj = Todo.objects.get(pk = request.data['pk'])
        serializer = ToDoSerializerget(obj, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED) 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    # def delete(self, request, pk):
    #     obj = Todo.objects.get(pk = pk)
    #     obj.status = '2'
    #     obj.terminited_at = timezone.now()
    #     obj.save()
    #     return Response({'success':True})
