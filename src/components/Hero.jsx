import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <>
    <section id="home" className="section" style={{ 
      background: 'linear-gradient(135deg, var(--black) 0%, var(--gray-dark) 100%)',
      color: 'var(--white)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h1 style={{ 
          color: 'var(--white)', 
          marginBottom: '1.5rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          Welcome to <span style={{ color: 'var(--gold)' }}>Fusion Fame Digital</span>
        </h1>
        <p style={{ 
          fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', 
          marginBottom: '2rem',
          color: 'var(--gold-light)',
          maxWidth: '600px',
          margin: '0 auto 2rem'
        }}>
          Your Partner in Digital Growth & Success
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn" style={{ 
            background: 'var(--gold)', 
            color: 'var(--black)',
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            padding: 'clamp(12px, 3vw, 16px) clamp(24px, 4vw, 32px)'
          }}>
            Get Started
          </Link>
          <Link to="/services" className="btn btn-outline" style={{ 
            borderColor: 'var(--gold)',
            color: 'var(--gold)',
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            padding: 'clamp(12px, 3vw, 16px) clamp(24px, 4vw, 32px)'
          }}>
            Our Services
          </Link>
        </div>
      </div>
      {/* Decorative Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '100px',
        height: '100px',
        background: 'var(--gold)',
        borderRadius: '50%',
        opacity: 0.1,
        animation: 'float 6s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        width: '60px',
        height: '60px',
        background: 'var(--gold)',
        borderRadius: '50%',
        opacity: 0.1,
        animation: 'float 8s ease-in-out infinite reverse'
      }}></div>
    </section>
    <style>{`
      @media (max-width: 600px) {
        #home .btn, #home .btn-outline {
          width: 100%;
          margin-bottom: 12px;
          font-size: 1rem !important;
          padding: 12px 0 !important;
        }
        #home .container {
          padding: 0 8px !important;
        }
        #home h1 {
          font-size: 2rem !important;
        }
        #home p {
          font-size: 1rem !important;
        }
      }
      @media (max-width: 400px) {
        #home .container {
          padding: 0 2px !important;
        }
        #home h1 {
          font-size: 1.3rem !important;
        }
      }
    `}</style>
  </>
);

export default Hero; 