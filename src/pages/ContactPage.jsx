import React, { useState } from 'react';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    company: '', 
    service: '', 
    message: '' 
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <div style={{ padding: '120px 20px 60px', maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Contact Us</h1>
        <p style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto 60px', lineHeight: '1.6', color: '#555' }}>
          Ready to take your business to the next level? Get in touch with us today for a free consultation 
          and let's discuss how we can help you achieve your digital marketing goals.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginBottom: '60px' }}>
          {/* Contact Form */}
          <div>
            <h2 style={{ marginBottom: '30px', color: '#333' }}>Send Us a Message</h2>
            {submitted ? (
              <div style={{ 
                background: 'var(--gold-light)', 
                color: 'var(--black)', 
                padding: '20px', 
                borderRadius: '8px',
                textAlign: 'center',
                border: '2px solid var(--gold)'
              }}>
                <h3>Thank you for your message!</h3>
                <p>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <input 
                    name="name" 
                    type="text" 
                    placeholder="Your Name *" 
                    value={form.name} 
                    onChange={handleChange} 
                    required 
                    style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '16px' }} 
                  />
                  <input 
                    name="email" 
                    type="email" 
                    placeholder="Your Email *" 
                    value={form.email} 
                    onChange={handleChange} 
                    required 
                    style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '16px' }} 
                  />
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <input 
                    name="phone" 
                    type="tel" 
                    placeholder="Phone Number" 
                    value={form.phone} 
                    onChange={handleChange} 
                    style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '16px' }} 
                  />
                  <input 
                    name="company" 
                    type="text" 
                    placeholder="Company Name" 
                    value={form.company} 
                    onChange={handleChange} 
                    style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '16px' }} 
                  />
                </div>
                
                <select 
                  name="service" 
                  value={form.service} 
                  onChange={handleChange} 
                  style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '16px' }}
                >
                  <option value="">Select a Service</option>
                  <option value="seo">SEO Optimization</option>
                  <option value="social">Social Media Marketing</option>
                  <option value="web">Web Design & Development</option>
                  <option value="content">Content Marketing</option>
                  <option value="ppc">PPC Advertising</option>
                  <option value="email">Email Marketing</option>
                  <option value="other">Other</option>
                </select>
                
                <textarea 
                  name="message" 
                  placeholder="Tell us about your project *" 
                  value={form.message} 
                  onChange={handleChange} 
                  required 
                  rows="6"
                  style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '16px', resize: 'vertical' }} 
                />
                
                          <button 
            type="submit" 
            style={{ 
              padding: '15px 30px', 
              background: 'var(--gold)', 
              color: 'var(--black)', 
              border: 'none', 
              borderRadius: '6px', 
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <h2 style={{ marginBottom: '30px', color: '#333' }}>Get in Touch</h2>
            
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '15px' }}>Contact Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      background: 'var(--gold)', 
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--black)',
                      fontSize: '1.2rem'
                    }}>
                      ✉️
                    </div>
                    <div>
                      <strong>Email</strong><br />
                      <a href="mailto:support@fusionfamedigital.com" style={{ color: 'var(--gold)', textDecoration: 'none' }}>
                        support@fusionfamedigital.com
                      </a>
                    </div>
                  </div>
                
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      background: 'var(--gold)', 
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--black)',
                      fontSize: '1.2rem'
                    }}>
                      📞
                    </div>
                    <div>
                      <strong>Phone</strong><br />
                      <a href="tel:+917388889112" style={{ color: 'var(--gold)', textDecoration: 'none' }}>
                        +91-73888-89112
                      </a>
                    </div>
                  </div>
                
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      background: 'var(--gold)', 
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--black)',
                      fontSize: '1.2rem'
                    }}>
                      📍
                    </div>
                    <div>
                      <strong>Address</strong><br />
                      #336, Tower A On 3rd Floor<br />
                      Spaze I-tech Park, Gurgaon,<br />
                      Haryana, India, 122018
                    </div>
                  </div>
              </div>
            </div>

            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '15px' }}>Business Hours</h3>
              <div style={{ lineHeight: '1.8' }}>
                <div><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</div>
                <div><strong>Saturday:</strong> 10:00 AM - 4:00 PM</div>
                <div><strong>Sunday:</strong> Closed</div>
              </div>
            </div>

            <div>
              <h3 style={{ color: 'var(--gold)', marginBottom: '15px' }}>Follow Us</h3>
              <div style={{ display: 'flex', gap: '15px' }}>
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
                  l
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage; 