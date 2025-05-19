import React, { useState, useEffect } from 'react';

function Agenda() {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/agenda')
      .then(res => res.json())
      .then(data => {
        setPedidos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando agenda...</p>;

  return (
    <div>
      <h2>Agenda de Pedidos</h2>
      {pedidos.length === 0 ? (
        <p>Sem pedidos agendados.</p>
      ) : (
        <ul>
          {pedidos.map(pedido => (
            <li key={pedido.id}>
              <strong>Cliente:</strong> {pedido.cliente} - <strong>Aniversariante:</strong> {pedido.aniversariante} ({pedido.idade} anos) - <strong>Tema:</strong> {pedido.tema}
              <ul>
                {pedido.itens.map(item => (
                  <li key={item.id}>
                    {item.descricao} - Quantidade: {item.quantidade}
                  </li>
                ))}
              </ul>
              <p><strong>Data do Pedido:</strong> {new Date(pedido.data_pedido).toLocaleDateString()}</p>
              <p><strong>Data de Entrega:</strong> {new Date(pedido.data_entrega).toLocaleDateString()}</p>
              <p><strong>Data da Festa:</strong> {new Date(pedido.data_festa).toLocaleDateString()}</p>
              <p><strong>Valor Total:</strong> R$ {pedido.valor_total.toFixed(2)}</p>
              <p><strong>Valor Gasto com Insumos:</strong> R$ {pedido.valor_insumos.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Agenda;
