import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { GiTennisRacket, GiTennisBall } from 'react-icons/gi';

export default function WhatsappButtonMenuPremium() {
  const numero = '5541997074929'; // Número do WhatsApp
  const [openMenu, setOpenMenu] = useState(false);

  const abrirWhatsApp = (mensagem) => {
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Botão principal */}
      <div
        onClick={() => setOpenMenu(!openMenu)}
        style={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          color: '#fff',
          borderRadius: '50%',
          width: '70px',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 16px rgba(0,0,0,0.4)',
          zIndex: 1000,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          animation: 'pulse 2s infinite',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <FaWhatsapp size={36} />
      </div>

      {/* Menu de escolha */}
      {openMenu && (
        <div style={{
          position: 'fixed',
          bottom: '105px',
          right: '25px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          zIndex: 1000,
        }}>
          {/* Tênis de Campo */}
          <button
            onClick={() => abrirWhatsApp('Olá! Gostaria de mais informações sobre aulas de Tênis.')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#25D366',
              color: '#fff',
              padding: '12px 20px',
              borderRadius: '25px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              fontWeight: 'bold',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <GiTennisRacket size={20} /> Tênis
          </button>

          {/* Beach Tênis */}
          <button
            onClick={() => abrirWhatsApp('Olá! Gostaria de mais informações sobre aulas de Beach Tênis.')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#128C7E',
              color: '#fff',
              padding: '12px 20px',
              borderRadius: '25px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              fontWeight: 'bold',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <GiTennisBall size={20} /> Beach Tênis
          </button>
        </div>
      )}

      {/* Animação pulse */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
      `}</style>
    </>
  );
}
