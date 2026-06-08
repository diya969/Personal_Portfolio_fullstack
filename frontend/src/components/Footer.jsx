import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center', padding: '2rem',
      borderTop: '1px solid #2a2a3a',
      color: '#7070a0', fontSize: '0.85rem',
    }}>
      <p>Built with ❤️ using React.js &amp; Spring Boot &nbsp;|&nbsp; © {new Date().getFullYear()} Krishna Deepika K</p>
    </footer>
  );
}