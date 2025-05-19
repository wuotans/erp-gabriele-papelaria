import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Insumos from './Insumos';
import Produtos from './Produtos';
import Vendas from './Vendas';
import Agenda from './Agenda';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/insumos" element={<Insumos />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/agenda" element={<Agenda />} />
      </Routes>
    </Router>
  );
}

export default App;