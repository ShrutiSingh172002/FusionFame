import React from 'react';

const services = [
  { title: 'SEO Optimization', desc: 'Improve your website ranking and visibility on search engines.' },
  { title: 'Social Media Marketing', desc: 'Grow your audience and engagement across social platforms.' },
  { title: 'Web Design', desc: 'Modern, responsive websites that convert visitors into customers.' },
  { title: 'Content Creation', desc: 'High-quality content to attract and retain your target audience.' },
];

const Services = () => (
  <section id="services" className="section">
    <div className="container">
      <div className="text-center mb-4">
        <h2 style={{ color: 'var(--black)' }}>Our Services</h2>
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
          We offer comprehensive digital marketing services to help your business grow and succeed online.
        </p>
      </div>
      
      <div className="grid grid-2" style={{ marginTop: '3rem' }}>
        {services.map((service, idx) => (
          <div key={idx} className="card" style={{ 
            border: '2px solid transparent',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              background: 'var(--gold)', 
              borderRadius: '50%',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              color: 'var(--black)'
            }}>
              {idx === 0 ? '🔍' : idx === 1 ? '📱' : idx === 2 ? '💻' : '✍️'}
            </div>
            <h3 style={{ color: 'var(--black)', marginBottom: '1rem' }}>{service.title}</h3>
            <p style={{ color: 'var(--gray-dark)', lineHeight: '1.6' }}>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services; 