import React from 'react';

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '0 5%', position: 'relative', overflow: 'hidden',
    }}>
      {/* Background orbs */}
      <div style={{
        position: 'absolute', width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)',
        top: '10%', left: '-100px', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(255,101,132,0.1) 0%, transparent 70%)',
        bottom: '10%', right: '-50px', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '800px', zIndex: 1 }}>

        {/* Greeting badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.4rem 1rem',
          background: 'rgba(108,99,255,0.1)',
          border: '1px solid rgba(108,99,255,0.25)',
          borderRadius: '50px', marginBottom: '1.5rem',
        }}>
          <span style={{ fontSize: '0.8rem' }}>👋</span>
          <span style={{
            color: '#6c63ff', fontSize: '0.8rem',
            fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>Welcome to my Portfolio</span>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          lineHeight: 1.1, marginBottom: '0.6rem',
          color: '#e8e8f0', letterSpacing: '-0.02em',
          whiteSpace: 'nowrap',
        }}>
          Krishna Deepika K
        </h1>

        {/* Title */}
        <h2 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 700,
          fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)',
          lineHeight: 1.3, marginBottom: '1.8rem',
        }}>
          <span style={{
            background: 'linear-gradient(135deg, #6c63ff 0%, #ff6584 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Java Full-Stack Developer
          </span>
        </h2>

        {/* Description */}
        <div style={{
          marginBottom: '2.5rem', maxWidth: '700px',
          fontFamily: "'DM Sans', sans-serif",
          display: 'flex', flexDirection: 'column', gap: '1rem',
        }}>
          <p style={{
            margin: 0, fontSize: '1.05rem', lineHeight: 1.8, color: '#a0a0c0',
          }}>
            I build full-stack web applications using{' '}
            <span style={{ color: '#e8e8f0', fontWeight: 600 }}>React.js</span>,{' '}
            <span style={{ color: '#e8e8f0', fontWeight: 600 }}>Spring Boot</span>, and{' '}
            <span style={{ color: '#e8e8f0', fontWeight: 600 }}>MySQL</span> — with a strong
            focus on clean backend architecture, REST API design, and responsive UI development.
          </p>

          <p style={{
            margin: 0, fontSize: '1.05rem', lineHeight: 1.8, color: '#a0a0c0',
          }}>
            I enjoy building backend systems that feel{' '}
            <span style={{ color: '#e8e8f0', fontWeight: 600 }}>production-ready</span>,
            scalable, and maintainable — systems that are easy to extend and hard to break.
          </p>

          <p style={{
            margin: 0, fontSize: '1.05rem', lineHeight: 1.8, color: '#a0a0c0',
          }}>
            I completed a virtual internship at{' '}
            <span style={{ color: '#6c63ff', fontWeight: 600 }}>Infosys Springboard</span>{' '}
            in Full Stack Development, working as a Frontend Developer — building UIs
            and integrating web applications end-to-end.
          </p>

          <p style={{
            margin: 0, fontSize: '1.05rem', lineHeight: 1.8,
            color: '#6c63ff', fontWeight: 500,
            paddingLeft: '1rem',
            borderLeft: '3px solid #6c63ff',
            borderRadius: '0',
          }}>
            🚀 Currently seeking internship and full-time opportunities in Full-Stack Development.
          </p>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '0.9rem 2.2rem',
              background: 'linear-gradient(135deg, #6c63ff, #8b85ff)',
              color: '#fff', borderRadius: '50px', border: 'none',
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
              fontSize: '0.95rem', cursor: 'pointer',
              boxShadow: '0 8px 30px rgba(108,99,255,0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 12px 40px rgba(108,99,255,0.45)';
            }}
            onMouseLeave={e => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 8px 30px rgba(108,99,255,0.3)';
            }}
          >
            View My Work
          </button>

          <a href="/resume.pdf" target="_blank" rel="noreferrer"
            download="KrishnaDeepika_Resume.pdf"
            style={{
              padding: '0.9rem 2.2rem',
              border: '1.5px solid #2a2a3a', color: '#e8e8f0',
              borderRadius: '50px', display: 'inline-flex',
              alignItems: 'center', gap: '0.5rem',
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
              fontSize: '0.95rem', transition: 'border-color 0.2s, color 0.2s',
              textDecoration: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#6c63ff';
              e.currentTarget.style.color = '#6c63ff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#2a2a3a';
              e.currentTarget.style.color = '#e8e8f0';
            }}
          >
            ⬇ Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}