
from django.urls import path
from . import views

urlpatterns = [
		path('homepage', views.homepage, name = "homepage"),
		path('launchpad', views.launchpad, name="launchpad"),
		path('tokenomics', views.tokenomics, name="tokenomics"),
		path('roadmap', views.roadmap, name="roadmap"),
		path(r'<slug:slug>', views.error404, name = "error404")
]	