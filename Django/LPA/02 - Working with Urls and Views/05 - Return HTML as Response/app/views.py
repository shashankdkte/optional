from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def hello(request):
  return HttpResponse("Hello World") 

def job_detail(request,id):
  return HttpResponse(f"<h1>Job Detail Page {id}<h1>")