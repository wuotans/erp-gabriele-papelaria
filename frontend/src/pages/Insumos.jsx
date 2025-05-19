import React, { useState, useEffect } from 'react';

function Insumos() {
  const [insumos, setInsumos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/insumos')
      .then(res => res.json())
      .then(data => {
        setInsumos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando insumos...</p>;

  return (
    <div>
      <h2>Insumos</h2>
      {insumos.length === 0 ? (
        <p>Nenhum insumo encontrado.</p>
      ) : (
        <ul>
          {insumos.map(insumo => (
            <li key={insumo.id}>
              {insumo.nome} - {insumo.categoria} - Quantidade: {insumo.quantidade_total} - Custo: R$ {insumo.custo_unitario.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Insumos;
