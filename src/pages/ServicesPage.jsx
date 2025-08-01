import React from 'react';
import Footer from '../components/Footer';

const services = [
  {
    title: 'Search Engine Optimization (SEO)',
    description: 'Improve your website\'s visibility in search engine results and drive organic traffic.',
    features: ['Keyword Research & Analysis', 'On-Page SEO Optimization', 'Technical SEO Audit', 'Local SEO Services', 'Content Strategy', 'Link Building'],
    price: 'Starting from $500/month',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80' // Monochrome SEO
  },
  {
    title: 'Social Media Marketing',
    description: 'Build your brand presence and engage with your audience across all social platforms.',
    features: ['Platform Strategy', 'Content Creation', 'Community Management', 'Paid Social Advertising', 'Analytics & Reporting', 'Influencer Partnerships'],
    price: 'Starting from $800/month',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80' // Monochrome Social
  },
  {
    title: 'Web Design & Development',
    description: 'Create stunning, responsive websites that convert visitors into customers.',
    features: ['Custom Website Design', 'Responsive Development', 'E-commerce Solutions', 'CMS Integration', 'Website Maintenance', 'Performance Optimization'],
    price: 'Starting from $2000',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' // Monochrome Web
  },
  {
    title: 'Content Marketing',
    description: 'Create valuable, relevant content that attracts and retains your target audience.',
    features: ['Blog Content Creation', 'Email Marketing Campaigns', 'Video Content', 'Infographics & Visuals', 'Content Calendar Management', 'Distribution Strategy'],
    price: 'Starting from $600/month',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80' // Monochrome Content
  },
  {
    title: 'Pay-Per-Click (PPC) Advertising',
    description: 'Drive targeted traffic and generate leads through strategic paid advertising campaigns.',
    features: ['Google Ads Management', 'Facebook & Instagram Ads', 'Remarketing Campaigns', 'Conversion Optimization', 'A/B Testing', 'ROI Tracking'],
    price: 'Starting from $1000/month',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' // Monochrome PPC
  },
  {
    title: 'Email Marketing',
    description: 'Build relationships with your audience and drive sales through effective email campaigns.',
    features: ['Email List Building', 'Campaign Design', 'Automation Setup', 'A/B Testing', 'Analytics & Reporting', 'Compliance Management'],
    price: 'Starting from $400/month',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&q=80' // Reliable Email
  }
];

const ServicesPage = () => {
  return (
    <>
      <div className="services-container">
        <div style={{ padding: '120px 20px 60px', maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Our Services</h1>
          <p style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto 60px', lineHeight: '1.6', color: '#555' }}>
            We offer comprehensive digital marketing services to help your business grow online. 
            Each service is tailored to meet your specific needs and goals.
          </p>

          <div className="services-grid" style={{ display: 'grid', gap: '40px' }}>
            {services.map((service, index) => (
              <div key={index} className="services-card" style={{ 
                border: '1px solid #e0e0e0', 
                borderRadius: '8px', 
                padding: '30px',
                background: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <img src={service.image} alt={service.title} className="services-card-img" style={{
                  width: '100%',
                  maxWidth: 320,
                  height: 180,
                  objectFit: 'cover',
                  borderRadius: 10,
                  marginBottom: 20,
                  filter: 'grayscale(100%) contrast(1.1)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }} />
                <h2 style={{ color: 'var(--gold)', marginBottom: '15px' }}>{service.title}</h2>
                <p style={{ lineHeight: '1.6', color: '#555', marginBottom: '20px' }}>{service.description}</p>
                <div className="services-card-cols" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '20px' }}>
                  <div>
                    <h3 style={{ marginBottom: '15px', color: '#333' }}>What's Included:</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {service.features.map((feature, idx) => (
                        <li key={idx} style={{ 
                          padding: '8px 0', 
                          borderBottom: '1px solid #f0f0f0',
                          color: '#555'
                        }}>
                          ✓ {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ 
                      background: 'var(--gold-light)', 
                      padding: '20px', 
                      borderRadius: '8px',
                      border: '2px solid var(--gold)'
                    }}>
                      <h3 style={{ color: 'var(--gold)', marginBottom: '10px' }}>Pricing</h3>
                      <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>{service.price}</p>
                    </div>
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
            <h2 style={{ marginBottom: '20px' }}>Ready to Get Started?</h2>
            <p style={{ marginBottom: '30px', color: '#555' }}>
              Contact us today to discuss your project and get a customized quote.
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
              Get Free Consultation
            </a>
          </div>
        </div>
        <Footer />
      </div>
      <style>{`
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 700px) {
          .services-card-cols {
            grid-template-columns: 1fr !important;
          }
          .services-card-img {
            max-width: 100% !important;
            height: 160px !important;
          }
        }
        @media (max-width: 600px) {
          .services-container {
            padding: 0 8px !important;
          }
          .services-card {
            padding: 1rem !important;
          }
          .services-card-img {
            height: 120px !important;
          }
        }
      `}</style>
    </>
  );
};

export default ServicesPage; 