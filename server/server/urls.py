from django.contrib import admin
from django.urls import path, include
from products.views import ProductView
from rest_framework import routers

route = routers.DefaultRouter()
route.register("",ProductView,basename='productsview')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(route.urls)),
]
