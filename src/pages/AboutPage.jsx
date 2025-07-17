import React from 'react';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div>
      <div style={{ padding: '120px 20px 60px', maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>About Fusion Fame Digital</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '60px' }}>
          <div>
            <h2>Our Story</h2>
            <p style={{ lineHeight: '1.6', color: '#555' }}>
              Fusion Fame Digital was founded with a simple mission: to help businesses thrive in the digital age. 
              We started as a small team of passionate digital marketers and web developers who believed that every 
              business deserves to have a strong online presence.
            </p>
            <p style={{ lineHeight: '1.6', color: '#555' }}>
              Today, we've grown into a full-service digital marketing agency, serving clients across various 
              industries. Our commitment to excellence and results-driven approach has made us a trusted partner 
              for businesses looking to grow their online presence.
            </p>
          </div>
          
          <div>
            <h2>Our Mission</h2>
            <p style={{ lineHeight: '1.6', color: '#555' }}>
              We are dedicated to delivering innovative digital solutions that drive real business growth. 
              Our team combines creativity with data-driven strategies to create campaigns that not only 
              look great but also deliver measurable results.
            </p>
            <p style={{ lineHeight: '1.6', color: '#555' }}>
              We believe in building long-term partnerships with our clients, understanding their unique 
              challenges, and providing tailored solutions that help them achieve their business goals.
            </p>
          </div>
        </div>

        <div style={{ background: '#f9f9f9', padding: '40px', borderRadius: '8px', marginBottom: '60px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Why Choose Us?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ textAlign: 'center' }}>
              <h3>Experience</h3>
              <p>Years of experience in digital marketing and web development</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3>Results-Driven</h3>
              <p>We focus on delivering measurable results for our clients</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3>Innovation</h3>
              <p>Stay ahead with the latest digital marketing trends and technologies</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3>Dedication</h3>
              <p>Committed to your success with personalized attention and support</p>
            </div>
          </div>
        </div>

        <div>
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Team</h2>
          <p style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto', lineHeight: '1.6', color: '#555' }}>
            Our team consists of experienced digital marketers, creative designers, skilled developers, 
            and strategic consultants who work together to deliver exceptional results for our clients. 
            We're passionate about what we do and committed to helping your business succeed online.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage; 