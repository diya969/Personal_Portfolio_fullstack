import React from 'react';

export default function About() {
  return (
    <section id="about" style={{ padding: '6rem 5%' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{
          color: '#6c63ff', fontWeight: 500, letterSpacing: '0.1em',
          textTransform: 'uppercase', marginBottom: '0.5rem',
          fontFamily: "'DM Sans', sans-serif",
        }}>About Me</p>
        <h2 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '3rem', color: '#e8e8f0',
        }}>Who I Am</h2>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.6fr',
          gap: '4rem', alignItems: 'start',
        }}>

          {/* Left — Profile + Quick Info + Platforms */}
          <div>
            {/* Profile Image */}
            <div style={{
              width: '100%', aspectRatio: '1', borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(255,101,132,0.1))',
              border: '1px solid #2a2a3a', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              fontSize: '5rem', marginBottom: '1.5rem',
            }}>
              👩‍💻
            </div>

            {/* Quick Info Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '1.5rem' }}>
              {[
                { label: 'Name', value: 'Krishna Deepika K' },
                { label: 'Location', value: 'Chennai, India' },
                { label: 'Internship', value: 'Infosys Springboard' },
                { label: 'Available', value: 'For Hire ✅' },
              ].map(item => (
                <div key={item.label} style={{
                  padding: '0.9rem', background: '#16161f',
                  borderRadius: '12px', border: '1px solid #2a2a3a',
                }}>
                  <p style={{
                    color: '#6c63ff', fontSize: '0.7rem', fontWeight: 600,
                    textTransform: 'uppercase', letterSpacing: '0.05em',
                    margin: '0 0 0.3rem', fontFamily: "'DM Sans', sans-serif",
                  }}>{item.label}</p>
                  <p style={{
                    color: '#e8e8f0', fontWeight: 500, margin: 0,
                    fontSize: '0.85rem', fontFamily: "'DM Sans', sans-serif",
                  }}>{item.value}</p>
                </div>
              ))}
            </div>

            {/* Coding Platforms */}
<div style={{
  padding: '1.2rem',
  background: '#16161f',
  borderRadius: '16px',
  border: '1px solid #2a2a3a',
}}>
  <p style={{
    color: '#6c63ff', fontSize: '0.75rem', fontWeight: 600,
    textTransform: 'uppercase', letterSpacing: '0.08em',
    margin: '0 0 1rem', fontFamily: "'DM Sans', sans-serif",
  }}>Coding Profiles</p>

  {/* Horizontal layout */}
  <div style={{ display: 'flex', gap: '0.8rem' }}>

    {/* LeetCode */}
    <a href="https://leetcode.com/u/KrishnaDeepika/"
      target="_blank" rel="noreferrer"
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: '0.5rem', padding: '1rem 1.2rem', borderRadius: '14px',
        background: '#1e1e2a', border: '1px solid #2a2a3a',
        textDecoration: 'none', flex: 1, transition: 'border-color 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = '#FFA116'}
      onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2a3a'}
    >
      <svg width="32" height="32" viewBox="0 0 95 111" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M68.2 72.7H26.8c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7h41.4c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7z" fill="#B3B3B3"/>
        <path d="M52.6 87.4l-17-17L52.6 53.4c1.8-1.8 4.8-1.8 6.6 0s1.8 4.8 0 6.6L48.8 70.4l10.4 10.4c1.8 1.8 1.8 4.8 0 6.6-1.8 1.8-4.8 1.8-6.6 0z" fill="#FFA116"/>
        <path d="M71.4 95.2c-5 5-11.5 7.5-18.1 7.5H42.2c-13.4 0-25.9-10.7-28.7-24L6.2 42.6C4 30.8 7.7 18.7 16 10.4l8.5-8.5C28 1.5 32.7 0 37.5 0h20c4.8 0 9.4 1.5 12.9 4.2L79 12.8c8.3 8.3 11.9 20.4 9.7 32.2l-7.4 36.1c-1.3 6.4-4.6 11.8-9.9 14.1z" fill="none" stroke="#FFA116" strokeWidth="5"/>
      </svg>
      <p style={{ color: '#e8e8f0', fontWeight: 600, margin: 0, fontSize: '0.8rem', fontFamily: "'DM Sans', sans-serif" }}>LeetCode</p>
      <p style={{ color: '#7070a0', margin: 0, fontSize: '0.7rem', fontFamily: "'DM Sans', sans-serif" }}>Problem Solving</p>
    </a>

    {/* SkillRack */}
    <a href="https://www.skillrack.com/faces/resume.xhtml?id=439170&key=c80954d9ed033fdf47afd583fd78d6e57823381b"
      target="_blank" rel="noreferrer"
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: '0.5rem', padding: '1rem 1.2rem', borderRadius: '14px',
        background: '#1e1e2a', border: '1px solid #2a2a3a',
        textDecoration: 'none', flex: 1, transition: 'border-color 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = '#6c63ff'}
      onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2a3a'}
    >
      <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="18" fill="#6c63ff"/>
        <text x="50" y="62" textAnchor="middle" fontSize="42" fontWeight="900" fill="white" fontFamily="Arial">SR</text>
      </svg>
      <p style={{ color: '#e8e8f0', fontWeight: 600, margin: 0, fontSize: '0.8rem', fontFamily: "'DM Sans', sans-serif" }}>SkillRack</p>
      <p style={{ color: '#7070a0', margin: 0, fontSize: '0.7rem', fontFamily: "'DM Sans', sans-serif" }}>Coding Practice</p>
    </a>

    {/* GitHub */}
    <a href="https://github.com/diya969"
      target="_blank" rel="noreferrer"
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: '0.5rem', padding: '1rem 1.2rem', borderRadius: '14px',
        background: '#1e1e2a', border: '1px solid #2a2a3a',
        textDecoration: 'none', flex: 1, transition: 'border-color 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = '#ffffff'}
      onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2a3a'}
    >
      <svg width="32" height="32" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#ffffff"/>
      </svg>
      <p style={{ color: '#e8e8f0', fontWeight: 600, margin: 0, fontSize: '0.8rem', fontFamily: "'DM Sans', sans-serif" }}>GitHub</p>
      <p style={{ color: '#7070a0', margin: 0, fontSize: '0.7rem', fontFamily: "'DM Sans', sans-serif" }}>Repositories</p>
    </a>

  </div>
</div>
          </div>

          {/* Right — Bio */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>

              <p style={{
                color: '#a0a0c0', fontSize: '1.05rem', lineHeight: 1.9,
                margin: 0, fontFamily: "'DM Sans', sans-serif",
              }}>
                I'm a passionate{' '}
                <span style={{ color: '#e8e8f0', fontWeight: 600 }}>Full-Stack Developer</span>{' '}
                focused on building end-to-end web applications using{' '}
                <span style={{ color: '#e8e8f0', fontWeight: 600 }}>React.js</span>,{' '}
                <span style={{ color: '#e8e8f0', fontWeight: 600 }}>Spring Boot</span>, and{' '}
                <span style={{ color: '#e8e8f0', fontWeight: 600 }}>MySQL</span>.
              </p>

              <p style={{
                color: '#a0a0c0', fontSize: '1.05rem', lineHeight: 1.9,
                margin: 0, fontFamily: "'DM Sans', sans-serif",
              }}>
                I enjoy solving coding problems and real-world challenges, which helps me
                improve my logical thinking and build more efficient, scalable backend systems.
                I also enjoy designing{' '}
                <span style={{ color: '#e8e8f0', fontWeight: 600 }}>REST APIs</span> and
                creating responsive, user-friendly frontend interfaces. My goal is to write
                clean, maintainable code and develop applications that feel real-world and
                production-ready.
              </p>

              <p style={{
                color: '#a0a0c0', fontSize: '1.05rem', lineHeight: 1.9,
                margin: 0, fontFamily: "'DM Sans', sans-serif",
              }}>
                I have completed a virtual internship at{' '}
                <span style={{ color: '#6c63ff', fontWeight: 600 }}>Infosys Springboard</span>{' '}
                in the Full Stack Development domain, where I worked on frontend development
                and gained practical experience in building web interfaces and integrating applications.
              </p>

              {/* Seeking opportunities highlight */}
              <div style={{
                padding: '1.2rem 1.5rem',
                background: 'rgba(108,99,255,0.08)',
                border: '1px solid rgba(108,99,255,0.25)',
                borderLeft: '4px solid #6c63ff',
                borderRadius: '0 12px 12px 0',
              }}>
                <p style={{
                  color: '#a0a0c0', fontSize: '1.05rem', lineHeight: 1.9,
                  margin: 0, fontFamily: "'DM Sans', sans-serif",
                }}>
                  🚀 I am currently seeking{' '}
                  <span style={{ color: '#6c63ff', fontWeight: 600 }}>internship and full-time opportunities</span>{' '}
                  in Full-Stack Development and actively building projects to strengthen my skills.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}