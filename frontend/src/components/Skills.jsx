import React from 'react';

const skillGroups = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Spring Boot', level: 85 },
      { name: 'Java', level: 88 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 82 },
      
    ],
  },
];

const tools = [
  {
    name: 'VS Code',
    description: 'Primary Code Editor',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    color: '#007ACC',
  },
  {
    name: 'IntelliJ IDEA',
    description: 'Java IDE',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
    color: '#FE315D',
  },
  {
    name: 'MySQL',
    description: 'Database',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    color: '#4479A1',
  },
  {
    name: 'Postman',
    description: 'API Testing',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    color: '#FF6C37',
  },
  {
    name: 'GitHub',
    description: 'Version Control',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    color: '#ffffff',
  },
  
  {
    name: 'Git',
    description: 'Source Control',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    color: '#F05032',
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 5%', background: '#111118' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <p style={{
          color: '#6c63ff', fontWeight: 500, letterSpacing: '0.1em',
          textTransform: 'uppercase', marginBottom: '0.5rem',
          fontFamily: "'DM Sans', sans-serif",
        }}>Skills</p>
        <h2 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '3rem', color: '#e8e8f0',
        }}>
          What I Work With
        </h2>

        {/* Skill Bars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem', marginBottom: '4rem',
        }}>
          {skillGroups.map(group => (
            <div key={group.category} style={{
              padding: '2rem', background: '#16161f',
              borderRadius: '20px', border: '1px solid #2a2a3a',
            }}>
              <h3 style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 700,
                marginBottom: '1.5rem', color: '#e8e8f0',
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                fontSize: '1.1rem',
              }}>
                <span>{group.icon}</span> {group.category}
              </h3>
              {group.skills.map(skill => (
                <div key={skill.name} style={{ marginBottom: '1.2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span style={{
                      color: '#e8e8f0', fontSize: '0.9rem', fontWeight: 500,
                      fontFamily: "'DM Sans', sans-serif",
                    }}>{skill.name}</span>
                    <span style={{ color: '#6c63ff', fontSize: '0.85rem', fontFamily: "'DM Sans', sans-serif" }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div style={{ height: '6px', background: '#2a2a3a', borderRadius: '10px', overflow: 'hidden' }}>
                    <div style={{
                      width: `${skill.level}%`, height: '100%',
                      background: 'linear-gradient(90deg, #6c63ff, #ff6584)',
                      borderRadius: '10px',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <p style={{
          color: '#6c63ff', fontWeight: 500, letterSpacing: '0.1em',
          textTransform: 'uppercase', marginBottom: '0.5rem',
          fontFamily: "'DM Sans', sans-serif",
        }}>Tools & Environment</p>
        <h3 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 700,
          fontSize: 'clamp(1.3rem, 3vw, 2rem)',
          marginBottom: '2rem', color: '#e8e8f0',
        }}>
          What I Use Daily
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1.2rem',
        }}>
          {tools.map(tool => (
            <div key={tool.name} style={{
              padding: '1.5rem 1rem',
              background: '#16161f',
              borderRadius: '16px',
              border: '1px solid #2a2a3a',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: '0.8rem',
              transition: 'transform 0.2s, border-color 0.2s',
              cursor: 'default',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = tool.color;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#2a2a3a';
              }}
            >
              <img
                src={tool.logo}
                alt={tool.name}
                style={{
                  width: '48px', height: '48px',
                  objectFit: 'contain',
                  filter: tool.name === 'GitHub' ? 'invert(1)' : 'none',
                }}
              />
              <div style={{ textAlign: 'center' }}>
                <p style={{
                  color: '#e8e8f0', fontWeight: 600, margin: 0,
                  fontSize: '0.9rem', fontFamily: "'DM Sans', sans-serif",
                }}>{tool.name}</p>
                <p style={{
                  color: '#7070a0', margin: '0.2rem 0 0',
                  fontSize: '0.75rem', fontFamily: "'DM Sans', sans-serif",
                }}>{tool.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}