from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import InsumoViewSet, ProdutoViewSet, VendaViewSet, AgendaViewSet

router = DefaultRouter()
router.register(r'insumos', InsumoViewSet)
router.register(r'produtos', ProdutoViewSet)
router.register(r'vendas', VendaViewSet)
router.register(r'agenda', AgendaViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]