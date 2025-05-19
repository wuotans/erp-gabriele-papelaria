## 🧾 Funcionalidades

### 1. **CRUD de Insumos**
- Nome, categoria, quantidade total
- Custo por unidade
- Upload de imagem

### 2. **CRUD de Produtos**
- Nome, descrição
- Lista de insumos usados (com quantidade)
- Preço de venda
- Upload de imagem
- Cálculo automático do custo baseado nos insumos

### 3. **Vendas**
- Produto vendido, quantidade
- Custo real (baseado nos insumos)
- Lucro automático (preço - custo)

### 4. **Agenda de Pedidos**
- Cliente, aniversariante, idade, tema
- Data do pedido, data de entrega, data da festa
- Itens pedidos (descrição e quantidade)
- Valor total do pedido
- Valor gasto com insumos

### 5. **Dashboard**
- Gráficos com Chart.js mostrando:
  - Lucro mensal
  - Produtos mais vendidos
  - Insumos mais utilizados

---

## 📦 Upload de Imagens
- Suporte para upload de imagens dos **produtos** e **insumos**
- Armazenamento local (ou S3 em produção)

---

## ✅ Páginas no Frontend
- `/insumos` → Gerenciar insumos
- `/produtos` → Gerenciar produtos
- `/vendas` → Gerenciar vendas
- `/agenda` → Gerenciar pedidos e entregas
- `/dashboard` → Visualização analítica
