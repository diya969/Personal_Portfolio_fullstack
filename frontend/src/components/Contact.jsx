import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// 🔴 REPLACE THESE WITH YOUR ACTUAL VALUES FROM EMAILJS
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="#ffffff"
    aria-label="LinkedIn"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%', padding: '0.9rem 1.2rem',
    background: '#16161f', border: '1.5px solid #2a2a3a',
    borderRadius: '12px', color: '#e8e8f0',
    fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem',
    outline: 'none', transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  };

  return (
    <section id="contact" style={{ padding: '6rem 5%', background: '#111118' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <p style={{ color: '#6c63ff', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Contact</p>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '1rem' }}>
          Let's Talk
        </h2>
        <p style={{ color: '#7070a0', marginBottom: '1.5rem' }}>
          Have a project in mind or just want to connect? I'd love to hear from you.
        </p>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/krishna-deepika-k-72baa0293/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.65rem 1.2rem',
            background: '#0A66C2',
            color: '#fff',
            borderRadius: '10px',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: '0.95rem',
            textDecoration: 'none',
            marginBottom: '2.5rem',
            transition: 'background 0.2s, transform 0.15s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#004182';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#0A66C2';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <LinkedInIcon />
          Connect on LinkedIn
        </a>

        {sent ? (
          <div style={{
            padding: '2rem', textAlign: 'center',
            background: 'rgba(108,99,255,0.1)', borderRadius: '16px',
            border: '1px solid rgba(108,99,255,0.3)', color: '#6c63ff',
            fontSize: '1.1rem',
          }}>
            ✅ Message sent! I'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <input
              type="text" name="name" placeholder="Your Name"
              value={form.name} onChange={handleChange} required
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = '#6c63ff'}
              onBlur={e => e.target.style.borderColor = '#2a2a3a'}
            />
            <input
              type="email" name="email" placeholder="Your Email"
              value={form.email} onChange={handleChange} required
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = '#6c63ff'}
              onBlur={e => e.target.style.borderColor = '#2a2a3a'}
            />
            <textarea
              name="message" placeholder="Your Message" rows={5}
              value={form.message} onChange={handleChange} required
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => e.target.style.borderColor = '#6c63ff'}
              onBlur={e => e.target.style.borderColor = '#2a2a3a'}
            />

            {error && (
              <p style={{ color: '#ff6584', fontSize: '0.9rem', textAlign: 'center' }}>
                ❌ {error}
              </p>
            )}

            <button type="submit" disabled={loading} style={{
              padding: '1rem',
              background: loading ? '#444' : 'linear-gradient(135deg, #6c63ff, #8b85ff)',
              color: '#fff', borderRadius: '12px',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600, fontSize: '1rem',
              transition: 'opacity 0.2s',
              cursor: loading ? 'not-allowed' : 'pointer',
              border: 'none',
            }}>
              {loading ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}