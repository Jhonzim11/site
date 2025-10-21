import React, { useEffect, useState } from 'react';

export default function Professores() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    // Dados fixos dos professores de Tênis
    const data = [
      {
        id: "t1",
        name: "Guilherme",
        sport: "Tênis",
        bio: "Instrutor experiente com foco em fundamentos e desenvolvimento técnico.",
        avatar: "https://",
      },
      {
        id: "t2",
        name: "Tiago",
        sport: "Tênis",
        bio: "Professor dedicado à evolução tática e ao condicionamento físico dos alunos.",
        avatar: "https://",
      },
      {
        id: "t3",
        name: "Fabrício",
        sport: "Tênis",
        bio: "Especialista em treinos personalizados voltados à performance e consistência.",
        avatar: "https://",
      },
    ];
    setTeachers(data);
  }, []);

  return (
    <div>
      <h2>Professores</h2>
      <div className="cards" style={{ 
        display: 'grid', 
        gap: 16,
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
      }}>
        {teachers.map(t => (
          <div 
            key={t.id} 
            className="card" 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: 16,
              borderRadius: 12,
              border: '1px solid #e2e8f0',
              background: '#ffffff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}
          >
            <img 
              src={t.avatar} 
              alt={t.name} 
              style={{ width: 72, height: 72, borderRadius: 8, objectFit: 'cover' }}
            />
            <div>
              <strong style={{ fontSize: 18 }}>{t.name}</strong>
              <div style={{ color: '#6b7280', marginBottom: 4 }}>{t.sport}</div>
              <p style={{ margin: 0, fontSize: 14, color: '#374151' }}>{t.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
