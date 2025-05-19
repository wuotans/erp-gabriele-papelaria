import React, { useState, useEffect } from 'react';

function Vendas() {
  const [vendas, setVendas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/vendas')
      .then(res => res.json())
      .then(data => {
        setVendas(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando vendas...</p>;

  return (
    <div>
      <h2>Vendas</h2>
      {vendas.length === 0 ? (
        <p>Nenhuma venda registrada.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Custo Real</th>
              <th>Lucro</th>
            </tr>
          </thead>
          <tbody>
            {vendas.map(venda => (
              <tr key={venda.id}>
                <td>{venda.produto_nome}</td>
                <td>{venda.quantidade}</td>
                <td>R$ {venda.custo_real.toFixed(2)}</td>
                <td>R$ {venda.lucro.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Vendas;
