import React from 'react';

const About = () => (
  <>
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="text-center mb-4">
          <h2 style={{ color: 'var(--black)' }}>About Us</h2>
          <div style={{ 
            width: '60px', 
            height: '4px', 
            background: 'var(--gold)', 
            margin: '0 auto 2rem',
            borderRadius: '2px'
          }}></div>
          <p style={{ 
            maxWidth: '800px', 
            margin: '0 auto', 
            color: 'var(--gray-dark)',
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)'
          }}>
            Fusion Fame Digital is a results-driven digital marketing agency dedicated to helping businesses grow online. 
            Our team of experts crafts tailored strategies to boost your brand, reach, and revenue.
          </p>
        </div>
        
        <div className="grid grid-3 about-grid" style={{ marginTop: '3rem' }}>
          <div className="card text-center">
            <div style={{ 
              width: '60px', 
              height: '60px', 
              background: 'var(--gold)', 
              borderRadius: '50%',
              margin: '0 auto 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              color: 'var(--black)'
            }}>
              ⚡
            </div>
            <h3>Our Mission</h3>
            <p>To deliver innovative digital solutions that drive real business growth and measurable results.</p>
          </div>
          
          <div className="card text-center">
            <div style={{ 
              width: '60px', 
              height: '60px', 
              background: 'var(--gold)', 
              borderRadius: '50%',
              margin: '0 auto 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              color: 'var(--black)'
            }}>
              ✨
            </div>
            <h3>Our Vision</h3>
            <p>To be the leading digital marketing partner for businesses seeking online success and growth.</p>
          </div>
          
          <div className="card text-center">
            <div style={{ 
              width: '60px', 
              height: '60px', 
              background: 'var(--gold)', 
              borderRadius: '50%',
              margin: '0 auto 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              color: 'var(--black)'
            }}>
              ❤️
            </div>
            <h3>Our Values</h3>
            <p>Excellence, innovation, integrity, and commitment to client success in everything we do.</p>
          </div>
        </div>
      </div>
    </section>
    <style>{`
      @media (max-width: 900px) {
        .about-grid {
          grid-template-columns: 1fr;
        }
        .about-grid .card {
          margin-bottom: 1.5rem;
        }
      }
      @media (max-width: 600px) {
        #about .container {
          padding: 0 8px !important;
        }
        #about h2 {
          font-size: 1.5rem !important;
        }
        #about p {
          font-size: 1rem !important;
        }
      }
    `}</style>
  </>
);

export default About; 