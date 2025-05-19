from rest_framework import serializers
from .models import Insumo, Produto, ProdutoInsumo, Venda, Agenda

class InsumoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Insumo
        fields = '__all__'

class ProdutoInsumoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProdutoInsumo
        fields = '__all__'

class ProdutoSerializer(serializers.ModelSerializer):
    insumos = ProdutoInsumoSerializer(many=True, source='produtoinsumo_set', read_only=True)
    class Meta:
        model = Produto
        fields = '__all__'

class VendaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venda
        fields = '__all__'

class AgendaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agenda
        fields = '__all__'