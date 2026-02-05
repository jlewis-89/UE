from django.shortcuts import render


# Create your views here.
def ai_agents(request):
    return render(request, "ai_agents.html")
