from django.contrib import admin
from .models import Insumo, Produto, ProdutoInsumo, Venda, Agenda

admin.site.register(Insumo)
admin.site.register(Produto)
admin.site.register(ProdutoInsumo)
admin.site.register(Venda)
admin.site.register(Agenda)