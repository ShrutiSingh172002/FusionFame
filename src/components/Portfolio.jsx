import React from 'react';

const projects = [
  { name: 'E-Commerce Website', desc: 'A modern online store for a retail client.' },
  { name: 'Brand Landing Page', desc: 'A high-converting landing page for a new product.' },
  { name: 'Social Campaign', desc: 'A viral social media campaign for a local business.' },
];

const Portfolio = () => (
  <section id="portfolio" className="portfolio" style={{ padding: '40px 0', textAlign: 'center' }}>
    <h2>Our Portfolio</h2>
    <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 32, flexWrap: 'wrap' }}>
      {projects.map((project, idx) => (
        <div key={idx} style={{ background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #eee', padding: 24, width: 240 }}>
          <h3>{project.name}</h3>
          <p style={{ color: '#666' }}>{project.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio; 