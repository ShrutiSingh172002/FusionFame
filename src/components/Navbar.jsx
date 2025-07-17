import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav style={{ 
      background: 'var(--white)', 
      padding: '16px 0', 
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center'
      }}>
        <Link to="/" style={{ fontWeight: 'bold', fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: 'var(--gold)', textDecoration: 'none' }}>
          Fusion Fame
        </Link>
        <div style={{ 
          display: 'flex', 
          gap: 'clamp(16px, 3vw, 32px)',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          <Link 
            to="/"
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              fontSize: 'clamp(0.9rem, 2vw, 1rem)', 
              color: location.pathname === '/' ? 'var(--gold)' : 'var(--black)',
              textDecoration: 'none',
              fontWeight: location.pathname === '/' ? 'bold' : 'normal',
              transition: 'color 0.3s ease'
            }}
          >
            Home
          </Link>
          <Link 
            to="/about"
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              fontSize: 'clamp(0.9rem, 2vw, 1rem)', 
              color: location.pathname === '/about' ? 'var(--gold)' : 'var(--black)',
              textDecoration: 'none',
              fontWeight: location.pathname === '/about' ? 'bold' : 'normal',
              transition: 'color 0.3s ease'
            }}
          >
            About Us
          </Link>
          <Link 
            to="/services"
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              fontSize: 'clamp(0.9rem, 2vw, 1rem)', 
              color: location.pathname === '/services' ? 'var(--gold)' : 'var(--black)',
              textDecoration: 'none',
              fontWeight: location.pathname === '/services' ? 'bold' : 'normal',
              transition: 'color 0.3s ease'
            }}
          >
            Our Services
          </Link>
          <Link 
            to="/portfolio"
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              fontSize: 'clamp(0.9rem, 2vw, 1rem)', 
              color: location.pathname === '/portfolio' ? 'var(--gold)' : 'var(--black)',
              textDecoration: 'none',
              fontWeight: location.pathname === '/portfolio' ? 'bold' : 'normal',
              transition: 'color 0.3s ease'
            }}
          >
            Our Portfolio
          </Link>
          <Link 
            to="/blog"
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              fontSize: 'clamp(0.9rem, 2vw, 1rem)', 
              color: location.pathname === '/blog' ? 'var(--gold)' : 'var(--black)',
              textDecoration: 'none',
              fontWeight: location.pathname === '/blog' ? 'bold' : 'normal',
              transition: 'color 0.3s ease'
            }}
          >
            Blog
          </Link>
          <Link 
            to="/contact"
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              fontSize: 'clamp(0.9rem, 2vw, 1rem)', 
              color: location.pathname === '/contact' ? 'var(--gold)' : 'var(--black)',
              textDecoration: 'none',
              fontWeight: location.pathname === '/contact' ? 'bold' : 'normal',
              transition: 'color 0.3s ease'
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 