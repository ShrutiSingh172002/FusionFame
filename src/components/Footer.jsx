import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer style={{ 
    background: 'var(--black)', 
    color: 'var(--white)', 
    padding: '3rem 0 1rem',
    marginTop: '4rem'
  }}>
    <div className="container">
      <div className="footer-grid grid-4" style={{ marginBottom: '2rem', display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {/* Company Info */}
        <div>
          <h3 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Fusionfame Digital</h3>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            Your trusted partner in digital marketing and web development solutions.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ 
              width: '40px', 
              height: '40px', 
              background: 'var(--gold)', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--black)',
              textDecoration: 'none',
              fontSize: '1rem'
            }}>
              f
            </a>
            <a href="#" style={{ 
              width: '40px', 
              height: '40px', 
              background: 'var(--gold)', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--black)',
              textDecoration: 'none',
              fontSize: '1rem'
            }}>
              t
            </a>
            <a href="#" style={{ 
              width: '40px', 
              height: '40px', 
              background: 'var(--gold)', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--black)',
              textDecoration: 'none',
              fontSize: '1rem'
            }}>
              y
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link to="/" style={{ color: 'var(--white)', textDecoration: 'none', fontSize: '0.9rem' }}>
                Home
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link to="/about" style={{ color: 'var(--white)', textDecoration: 'none', fontSize: '0.9rem' }}>
                About Us
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link to="/services" style={{ color: 'var(--white)', textDecoration: 'none', fontSize: '0.9rem' }}>
                Our Services
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link to="/portfolio" style={{ color: 'var(--white)', textDecoration: 'none', fontSize: '0.9rem' }}>
                Work
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/terms" style={{ color: 'var(--white)', textDecoration: 'none', fontSize: '0.9rem' }}>
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Follow Us</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#" style={{ color: 'var(--white)', textDecoration: 'none', fontSize: '0.9rem' }}>
                Facebook
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#" style={{ color: 'var(--white)', textDecoration: 'none', fontSize: '0.9rem' }}>
                Twitter
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#" style={{ color: 'var(--white)', textDecoration: 'none', fontSize: '0.9rem' }}>
                Youtube
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Contact Info</h3>
          <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
            <p style={{ marginBottom: '0.5rem' }}>
              <strong>Address:</strong><br />
              #336, Tower A On 3rd Floor<br />
              Spaze I-tech Park, Gurgaon,<br />
              Haryana, India, 122018
            </p>
            <p style={{ marginBottom: '0.5rem' }}>
              <strong>Phone:</strong><br />
              <a href="tel:+917388889112" style={{ color: 'var(--gold)', textDecoration: 'none' }}>
                +91-73888-89112
              </a>
            </p>
            <p style={{ marginBottom: '0.5rem' }}>
              <strong>Email:</strong><br />
              <a href="mailto:support@fusionfamedigital.com" style={{ color: 'var(--gold)', textDecoration: 'none' }}>
                support@fusionfamedigital.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ 
        borderTop: '1px solid var(--gray)', 
        paddingTop: '1rem', 
        textAlign: 'center',
        fontSize: '0.9rem',
        color: 'var(--gray)'
      }}>
        <p>
          Copyright 2023 © Fusionfame Digital Private Limited All Right Reserved
        </p>
      </div>
    </div>
    {/* Responsive Footer CSS */}
    <style>{`
      @media (max-width: 900px) {
        .footer-grid {
          grid-template-columns: 1fr 1fr;
        }
      }
      @media (max-width: 600px) {
        .footer-grid {
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .footer-grid > div {
          text-align: center;
        }
        .footer-grid a, .footer-grid ul {
          justify-content: center;
        }
      }
    `}</style>
  </footer>
);

export default Footer; 