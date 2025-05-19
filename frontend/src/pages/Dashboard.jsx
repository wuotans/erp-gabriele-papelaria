import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function Dashboard() {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    fetch('/api/vendas')
      .then(res => res.json())
      .then(vendas => {
        const labels = vendas.map(v => v.data);
        const valores = vendas.map(v => v.preco_total);
        setData({
          labels,
          datasets: [{ label: 'Vendas', data: valores, backgroundColor: 'rgba(255,99,132,0.5)' }]
        });
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <Bar data={data} />
    </div>
  );
}

export default Dashboard;