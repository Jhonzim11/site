import React, { useState } from 'react'
import { FaUser, FaUsers, FaUsersCog, FaBook } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const planos = {
  tenis: [
    {
      nome: 'Aula Individual',
      preco: 'R$ 70/hora',
      descricao: 'Treino personalizado com foco total em você.',
      icone: <FaUser size={48} color="#ff6f00" />,
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfZ1Mzy2U-M9Oh-2ravnWTREjtKMpSB_sz9bEUj6WZL-OE9aw/viewform'
    },
    {
      nome: 'Aula em Dupla',
      preco: 'R$ 50/hora por pessoa',
      descricao: 'Perfeita para treinar com um amigo e evoluir juntos.',
      icone: <FaUsers size={48} color="#ff6f00" />,
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfZ1Mzy2U-M9Oh-2ravnWTREjtKMpSB_sz9bEUj6WZL-OE9aw/viewform'
    },
    {
      nome: 'Aula em Grupo',
      preco: 'R$ 250/hora por pessoa',
      descricao: 'Aulas dinâmicas e divertidas com outros jogadores.',
      icone: <FaUsersCog size={48} color="#ff6f00" />,
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfZ1Mzy2U-M9Oh-2ravnWTREjtKMpSB_sz9bEUj6WZL-OE9aw/viewform'
    },
    {
      nome: 'Aula Avulsa',
      preco: 'R$ 100/uma aula',
      descricao: 'Ideal para testar ou aprimorar um ponto específico.',
      icone: <FaBook size={48} color="#ff6f00" />,
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfZ1Mzy2U-M9Oh-2ravnWTREjtKMpSB_sz9bEUj6WZL-OE9aw/viewform'
    }
  ],
  beach: [
    {
      nome: 'Aula Individual Beach',
      preco: 'R$ 80/hora',
      descricao: 'Treino personalizado de Beach Tênis, focando sua técnica e movimentação na areia.',
      icone: <FaUser size={48} color="#ff6f00" />,
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfZ1Mzy2U-M9Oh-2ravnWTREjtKMpSB_sz9bEUj6WZL-OE9aw/viewform'
    },
    {
      nome: 'Aula em Dupla Beach',
      preco: 'R$ 60/hora por pessoa',
      descricao: 'Treine com um amigo e melhore a coordenação e a estratégia de jogo na areia.',
      icone: <FaUsers size={48} color="#ff6f00" />,
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfZ1Mzy2U-M9Oh-2ravnWTREjtKMpSB_sz9bEUj6WZL-OE9aw/viewform'
    },
    {
      nome: 'Aula em Grupo Beach',
      preco: 'R$ 200/hora por pessoa',
      descricao: 'Aulas dinâmicas com outros jogadores, ideal para socializar e evoluir no Beach Tênis.',
      icone: <FaUsersCog size={48} color="#ff6f00" />,
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfZ1Mzy2U-M9Oh-2ravnWTREjtKMpSB_sz9bEUj6WZL-OE9aw/viewform'
    },
    {
      nome: 'Aula Avulsa Beach',
      preco: 'R$ 120/uma aula',
      descricao: 'Perfeita para aprimorar pontos específicos do seu jogo na areia.',
      icone: <FaBook size={48} color="#ff6f00" />,
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfZ1Mzy2U-M9Oh-2ravnWTREjtKMpSB_sz9bEUj6WZL-OE9aw/viewform'
    }
  ]
}

export default function PlanosUnificados() {
  const [modalidade, setModalidade] = useState('tenis')

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center', fontSize: '28px', marginBottom: '20px' }}>
        Tipos de Aulas
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
        <button
          className={`btn ${modalidade === 'tenis' ? 'active' : ''}`}
          onClick={() => setModalidade('tenis')}
        >
          Tênis
        </button>
        <button
          className={`btn ${modalidade === 'beach' ? 'active' : ''}`}
          onClick={() => setModalidade('beach')}
        >
          Beach Tênis
        </button>
      </div>

      <p style={{ textAlign: 'center', color: 'var(--muted)', maxWidth: '700px', margin: '0 auto 28px' }}>
        {modalidade === 'tenis'
          ? 'Escolha o formato que mais combina com seu ritmo e objetivo no Tênis.'
          : 'Escolha o formato que mais combina com seu ritmo e objetivo no Beach Tênis. Todas as aulas incluem acompanhamento profissional e estrutura completa.'}
      </p>

      <div className="cards">
        {planos[modalidade].map((aula) => (
          <div className="card" key={aula.nome}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
              {aula.icone}
            </div>
            <h4>{aula.nome}</h4>
            <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '8px' }}>{aula.descricao}</p>
            <strong>{aula.preco}</strong>
            <div style={{ marginTop: '12px' }}>
              <Link to={aula.link}>
                <button className="btn" style={{ width: '100%' }}>Contratar</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px', color: 'var(--muted)', fontSize: '14px' }}>
        Todas as modalidades incluem acompanhamento profissional e suporte individualizado.
      </div>
    </div>
  )
}
