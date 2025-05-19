import React, { useState, useEffect } from 'react';

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/produtos')
      .then(res => res.json())
      .then(data => {
        setProdutos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando produtos...</p>;

  return (
    <div>
      <h2>Produtos</h2>
      {produtos.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <ul>
          {produtos.map(produto => (
            <li key={produto.id}>
              {produto.nome} - {produto.descricao} - Preço: R$ {produto.preco_venda.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Produtos;
