from django.db import models

class Insumo(models.Model):
    nome = models.CharField(max_length=100)
    quantidade = models.IntegerField()
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    imagem = models.ImageField(upload_to='insumos/', blank=True, null=True)

class Produto(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    insumos = models.ManyToManyField(Insumo, through='ProdutoInsumo')
    imagem = models.ImageField(upload_to='produtos/', blank=True, null=True)

class ProdutoInsumo(models.Model):
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    insumo = models.ForeignKey(Insumo, on_delete=models.CASCADE)
    quantidade_utilizada = models.DecimalField(max_digits=10, decimal_places=2)

class Venda(models.Model):
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    quantidade = models.IntegerField()
    data = models.DateField(auto_now_add=True)
    preco_total = models.DecimalField(max_digits=10, decimal_places=2)

class Agenda(models.Model):
    cliente = models.CharField(max_length=100)
    aniversariante = models.CharField(max_length=100)
    idade = models.IntegerField()
    tema = models.CharField(max_length=100)
    data_pedido = models.DateField()
    data_entrega = models.DateField()
    data_festa = models.DateField()
    itens = models.TextField()
    valor_total = models.DecimalField(max_digits=10, decimal_places=2)
    valor_gasto = models.DecimalField(max_digits=10, decimal_places=2)