import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const nav = useNavigate()

  return (
    <header className="navbar">
      <div className="nav-left">
        <div 
          className="logo" 
          onClick={() => nav('/')} 
          style={{ cursor: 'pointer' }}
        >
          Nikkei Tennis & Beach
        </div>
      </div>

      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/planos">Planos</NavLink>
        <NavLink to="/professores">Professores</NavLink>
        <NavLink to="/loja">Loja</NavLink>
      </nav>

      <button 
        className="hamburger" 
        onClick={() => setOpen(!open)} 
        aria-label="Menu"
      >
        ☰
      </button>

      {open && (
        <div style={{
          position: 'absolute',
          right: 12,
          top: 66,
          background: 'white',
          padding: 12,
          borderRadius: 8,
          boxShadow: '0 10px 30px rgba(2,6,23,0.12)'
        }}>
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink><br/>
          <NavLink to="/professores" onClick={() => setOpen(false)}>Professores</NavLink><br/>
          <NavLink to="/loja" onClick={() => setOpen(false)}>Loja</NavLink><br/>
          <NavLink to="/contato" onClick={() => setOpen(false)}>Contato</NavLink><br/>
        </div>
      )}
    </header>
  )
}
