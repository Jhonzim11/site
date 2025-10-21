import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import WhatsappButton from './components/WhatsappButton';
import Home from './pages/Home';
import Professores from './pages/Professores';
import Loja from './pages/Loja';
import Planos from './pages/Planos';

export default function App() {
  return (
    <div className="app">
      <Navbar>
        <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link to="/">Home</Link>
          <Link to="/professores">Professores</Link>
          <Link to="/loja">Loja</Link>
          <Link to="/planos">Planos</Link>
        </nav>
      </Navbar>

      <main className="main">
        <div className="container">
          <Suspense fallback={<div>Carregando...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/professores" element={<Professores />} />
              <Route path="/loja" element={<Loja />} />
              <Route path="/planos" element={<Planos />} />
              <Route path="*" element={<div><h2>Página não encontrada</h2></div>} />
            </Routes>
          </Suspense>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <strong>Nikkei Tennis & Beach</strong><br />
              Rua Exemplo, 123 - Cidade • (11) 99999-9999
            </div>
            <div style={{ textAlign: 'right', color: '#cbd5e1' }}>
              © {new Date().getFullYear()} Clube Nikkei — Todos os direitos reservados
            </div>
          </div>
        </div>
      </footer>

      <WhatsappButton />
    </div>
  );
}
