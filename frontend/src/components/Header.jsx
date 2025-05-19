import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="p-4 bg-pink-200 flex gap-4">
      <Link to="/">Dashboard</Link>
      <Link to="/insumos">Insumos</Link>
      <Link to="/produtos">Produtos</Link>
      <Link to="/vendas">Vendas</Link>
      <Link to="/agenda">Agenda</Link>
    </div>
  );
}

export default Header;