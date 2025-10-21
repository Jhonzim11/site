import React from 'react';
import { useNavigate } from 'react-router-dom';

// Importar imagens locais
import HeroImg from '../assets/images/hero.jpg';
import Gal1 from '../assets/images/galeria1.jpg';
import Gal2 from '../assets/images/galeria2.jpg';
import Gal3 from '../assets/images/galeria3.jpg';
import Gal4 from '../assets/images/galeria4.jpg';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Seção Hero */}
      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">Nikkei Tennis & Beach</h1>
          <p className="hero-sub">
            Treine. Jogue. Evolua — aulas de tênis e beach tennis com profissionais.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <button className="btn" onClick={() => navigate('/planos')}>
              Ver aulas
            </button>
            <button className="btn" onClick={() => navigate('/professores')}>
              Conheça os professores
            </button>
            <button
              className="btn ghost"
              onClick={() =>
                window.open(
                  'https://docs.google.com/forms/d/e/1FAIpQLSfZ1Mzy2U-M9Oh-2ravnWTREjtKMpSB_sz9bEUj6WZL-OE9aw/viewform?usp=dialog',
                  '_blank'
                )
              }
            >
              Matricule-se
            </button>
          </div>
        </div>
        <div style={{ width: 360 }}>
          <img
            src={HeroImg}
            alt="tennis"
            style={{ width: '100%', borderRadius: 12 }}
          />
        </div>
      </section>

      {/* Seção O que oferecemos */}
      <section className="section">
        <h3>O que oferecemos</h3>
        <div className="cards">
          <div className="card">
            <h4>Tênis</h4>
            <p>Treinos individuais e em grupo, para todas as idades.</p>
          </div>
          <div className="card">
            <h4>Beach Tennis</h4>
            <p>Aulas na areia, foco em técnica e diversão.</p>
          </div>
          <div className="card">
            <h4>Professores</h4>
            <p>Equipe experiente e qualificada.</p>
          </div>
        </div>
      </section>

      {/* Seção Galeria */}
      <section className="section">
        <h3>Galeria</h3>
        <div className="gallery">
          <img src={Gal1} alt="g1" />
          <img src={Gal2} alt="g2" />
          <img src={Gal3} alt="g3" />
          <img src={Gal4} alt="g4" />
        </div>
      </section>

      {/* Seção Depoimentos */}
      <section className="section">
        <h3>Depoimentos</h3>
        <div className="testimonials">
          <div className="t">
            <strong>Mariana</strong>
            <p>Ótimos professores e ambiente agradável!</p>
          </div>
          <div className="t">
            <strong>Rafael</strong>
            <p>Melhorei muito meu jogo em poucas semanas.</p>
          </div>
          <div className="t">
            <strong>Ana</strong>
            <p>Aulas dinâmicas e divertidas para toda a família.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
