import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Our Services' },
  { to: '/portfolio', label: 'Our Portfolio' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact Us' },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on navigation
  const handleNavClick = () => setMenuOpen(false);

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
        alignItems: 'center',
        position: 'relative'
      }}>
        <Link to="/" style={{ fontWeight: 'bold', fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: 'var(--gold)', textDecoration: 'none' }}>
          Fusion Fame
        </Link>
        {/* Hamburger Icon */}
        <button
          className="navbar-hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 28,
            color: 'var(--black)',
            marginLeft: 16
          }}
        >
          <span style={{ display: 'block', width: 28, height: 3, background: 'var(--black)', margin: '6px 0', borderRadius: 2 }}></span>
          <span style={{ display: 'block', width: 28, height: 3, background: 'var(--black)', margin: '6px 0', borderRadius: 2 }}></span>
          <span style={{ display: 'block', width: 28, height: 3, background: 'var(--black)', margin: '6px 0', borderRadius: 2 }}></span>
        </button>
        {/* Nav Links */}
        <div
          className={`navbar-links${menuOpen ? ' open' : ''}`}
          style={{
            display: 'flex',
            gap: 'clamp(16px, 3vw, 32px)',
            flexWrap: 'wrap',
            alignItems: 'center',
            position: menuOpen ? 'absolute' : undefined,
            top: menuOpen ? '100%' : undefined,
            right: menuOpen ? 0 : undefined,
            left: menuOpen ? 0 : undefined,
            background: menuOpen ? 'var(--white)' : undefined,
            flexDirection: menuOpen ? 'column' : undefined,
            gap: menuOpen ? 0 : 'clamp(16px, 3vw, 32px)',
            boxShadow: menuOpen ? '0 8px 24px rgba(0,0,0,0.08)' : undefined,
            zIndex: menuOpen ? 1001 : undefined,
            padding: menuOpen ? '16px 0' : undefined,
          }}
        >
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={handleNavClick}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                color: location.pathname === link.to ? 'var(--gold)' : 'var(--black)',
                textDecoration: 'none',
                fontWeight: location.pathname === link.to ? 'bold' : 'normal',
                transition: 'color 0.3s ease',
                padding: menuOpen ? '16px 0' : undefined,
                width: menuOpen ? '100%' : undefined,
                textAlign: menuOpen ? 'center' : undefined,
                borderBottom: menuOpen ? '1px solid #eee' : undefined
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      {/* Responsive CSS for Hamburger */}
      <style>{`
        @media (max-width: 900px) {
          .navbar-hamburger {
            display: block !important;
          }
          .navbar-links {
            display: none !important;
          }
          .navbar-links.open {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar; 