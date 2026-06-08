import React, { useState, useEffect } from 'react';

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '1.2rem 5%',
    transition: 'all 0.3s ease',
  },
  navScrolled: {
    background: 'rgba(10,10,15,0.92)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(108,99,255,0.15)',
  },
  logo: {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 800, fontSize: '1.4rem',
    background: 'linear-gradient(135deg, #6c63ff, #ff6584)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
    cursor: 'pointer',
  },
  links: {
    display: 'flex', gap: '2rem', listStyle: 'none',
    margin: 0, padding: 0,
    marginLeft: 'auto',
  },
  link: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500, fontSize: '0.9rem',
    color: '#7070a0', transition: 'color 0.3s',
    cursor: 'pointer',
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
      
      <ul style={styles.links}>
        {['about', 'skills', 'projects', 'contact'].map(s => (
          <li key={s} style={styles.link}
            onClick={() => scrollTo(s)}
            onMouseEnter={e => e.target.style.color = '#6c63ff'}
            onMouseLeave={e => e.target.style.color = '#7070a0'}>
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  );
}