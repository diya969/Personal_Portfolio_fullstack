import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';
export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/api/projects`)
      .then(res => { setProjects(res.data); setLoading(false); })
      .catch(() => { setError('Could not load projects.'); setLoading(false); });
  }, []);

  return (
    <section id="projects" style={{ padding: '6rem 5%' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ color: '#6c63ff', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Portfolio</p>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '3rem' }}>
          Featured Projects
        </h2>

        {loading && (
          <div style={{ textAlign: 'center', color: '#6c63ff', padding: '3rem' }}>
            Loading projects...
          </div>
        )}
        {error && (
          <div style={{ textAlign: 'center', color: '#ff6584', padding: '3rem' }}>{error}</div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {projects.map(project => (
            <div key={project.id} style={{
              background: '#16161f', borderRadius: '20px',
              border: '1px solid #2a2a3a', overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(108,99,255,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {/* Project Image */}
              <div style={{
                height: '180px',
                background: 'linear-gradient(135deg, #6c63ff25, #ff658425)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '3rem', borderBottom: '1px solid #2a2a3a',
              }}>
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : '💻'}
              </div>

              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.7rem' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#7070a0', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                  {project.techStack?.split(',').map(tech => (
                    <span key={tech} style={{
                      padding: '0.25rem 0.7rem',
                      background: 'rgba(108,99,255,0.15)',
                      color: '#6c63ff', borderRadius: '20px',
                      fontSize: '0.75rem', fontWeight: 600,
                    }}>
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                {/* Links */}
               {/* <div style={{ display: 'flex', gap: '1rem' }}>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer"
                      style={{
                        padding: '0.5rem 1.2rem', borderRadius: '20px',
                        border: '1.5px solid #2a2a3a', color: '#e8e8f0',
                        fontSize: '0.85rem', fontWeight: 500, transition: 'border-color 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = '#6c63ff'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2a3a'}
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer"
                      style={{
                        padding: '0.5rem 1.2rem', borderRadius: '20px',
                        background: 'linear-gradient(135deg, #6c63ff, #8b85ff)',
                        color: '#fff', fontSize: '0.85rem', fontWeight: 500,
                      }}
                    >
                      Live Demo →
                    </a>
                  )}
                </div>*/}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}