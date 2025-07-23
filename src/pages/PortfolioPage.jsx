import React from 'react';
import Footer from '../components/Footer';

const PortfolioPage = () => {
  const projects = [
    {
      title: 'E-Commerce Website Redesign',
      client: 'Fashion Retailer',
      description: 'Complete redesign and optimization of an e-commerce website resulting in 150% increase in sales.',
      services: ['Web Design', 'SEO', 'Conversion Optimization'],
      results: ['150% increase in sales', '40% improvement in conversion rate', '60% faster page load times'],
      image: 'https://via.placeholder.com/400x300/007bff/ffffff?text=E-Commerce+Project'
    },
    {
      title: 'Social Media Campaign',
      client: 'Local Restaurant Chain',
      description: 'Comprehensive social media marketing campaign that increased foot traffic by 200%.',
      services: ['Social Media Marketing', 'Content Creation', 'Paid Advertising'],
      results: ['200% increase in foot traffic', '5000+ new followers', '300% increase in online orders'],
      image: 'https://via.placeholder.com/400x300/28a745/ffffff?text=Social+Media+Project'
    },
    {
      title: 'SEO Optimization',
      client: 'B2B Software Company',
      description: 'Technical SEO overhaul that improved search rankings and organic traffic significantly.',
      services: ['Technical SEO', 'Content Strategy', 'Link Building'],
      results: ['300% increase in organic traffic', 'Top 3 rankings for target keywords', '50% increase in leads'],
      image: 'https://via.placeholder.com/400x300/ffc107/ffffff?text=SEO+Project'
    },
    {
      title: 'Brand Identity & Website',
      client: 'Startup Tech Company',
      description: 'Complete brand identity design and website development for a new tech startup.',
      services: ['Brand Design', 'Web Development', 'Content Creation'],
      results: ['Professional brand identity', 'Modern responsive website', 'Successful product launch'],
      image: 'https://via.placeholder.com/400x300/dc3545/ffffff?text=Brand+Project'
    },
    {
      title: 'Email Marketing Campaign',
      client: 'Online Education Platform',
      description: 'Strategic email marketing campaign that increased course enrollments by 180%.',
      services: ['Email Marketing', 'Automation', 'A/B Testing'],
      results: ['180% increase in enrollments', '25% improvement in open rates', '40% increase in click-through rates'],
      image: 'https://via.placeholder.com/400x300/6f42c1/ffffff?text=Email+Project'
    },
    {
      title: 'PPC Advertising',
      client: 'Real Estate Agency',
      description: 'Targeted PPC campaigns that generated high-quality leads for a real estate agency.',
      services: ['Google Ads', 'Facebook Ads', 'Remarketing'],
      results: ['300% increase in qualified leads', '40% reduction in cost per lead', '200% ROI improvement'],
      image: 'https://via.placeholder.com/400x300/17a2b8/ffffff?text=PPC+Project'
    }
  ];

  return (
    <>
      <div className="portfolio-container">
        <div style={{ padding: '120px 20px 60px', maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Our Portfolio</h1>
          <p style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto 60px', lineHeight: '1.6', color: '#555' }}>
            Explore our successful projects and see how we've helped businesses achieve their digital marketing goals. 
            Each project showcases our expertise and commitment to delivering results.
          </p>

          <div className="portfolio-projects" style={{ display: 'grid', gap: '60px' }}>
            {projects.map((project, index) => (
              <div key={index} style={{ 
                border: '1px solid #e0e0e0', 
                borderRadius: '12px', 
                overflow: 'hidden',
                background: '#fff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <div className="portfolio-project-card-cols" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '400px' }}>
                  <div style={{ padding: '40px' }}>
                    <h2 style={{ color: 'var(--gold)', marginBottom: '10px' }}>{project.title}</h2>
                    <p style={{ color: '#666', marginBottom: '20px', fontWeight: 'bold' }}>Client: {project.client}</p>
                    <p style={{ lineHeight: '1.6', color: '#555', marginBottom: '25px' }}>{project.description}</p>
                    <div style={{ marginBottom: '25px' }}>
                      <h3 style={{ marginBottom: '10px', color: '#333' }}>Services Provided:</h3>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {project.services.map((service, idx) => (
                          <span key={idx} style={{ 
                            background: 'var(--gold-light)', 
                            padding: '6px 12px', 
                            borderRadius: '20px',
                            fontSize: '14px',
                            color: 'var(--gold)',
                            border: '1px solid var(--gold)'
                          }}>
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 style={{ marginBottom: '10px', color: '#333' }}>Results Achieved:</h3>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {project.results.map((result, idx) => (
                          <li key={idx} style={{ 
                            padding: '8px 0', 
                            color: 'var(--black)',
                            fontWeight: 'bold'
                          }}>
                            ✓ {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div style={{ 
                    background: `url(${project.image}) center/cover`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ 
            background: '#f9f9f9', 
            padding: '40px', 
            borderRadius: '8px', 
            marginTop: '60px',
            textAlign: 'center'
          }}>
            <h2 style={{ marginBottom: '20px' }}>Ready to Start Your Project?</h2>
            <p style={{ marginBottom: '30px', color: '#555' }}>
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <a href="/contact" style={{ 
              display: 'inline-block', 
              padding: '12px 32px', 
              background: 'var(--gold)', 
              color: 'var(--black)', 
              borderRadius: '6px', 
              textDecoration: 'none', 
              fontWeight: 'bold' 
            }}>
              Start Your Project
            </a>
          </div>
        </div>
        <Footer />
      </div>
      <style>{`
        @media (max-width: 900px) {
          .portfolio-projects {
            gap: 32px !important;
          }
          .portfolio-project-card-cols {
            grid-template-columns: 1fr !important;
            min-height: unset !important;
          }
          .portfolio-project-card-cols > div:first-child {
            padding: 24px !important;
          }
        }
        @media (max-width: 600px) {
          .portfolio-container {
            padding: 0 8px !important;
          }
          .portfolio-project-card-cols > div:first-child {
            padding: 12px !important;
          }
        }
      `}</style>
    </>
  );
};

export default PortfolioPage; 