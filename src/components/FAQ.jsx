import React from 'react';

const faqs = [
  { q: 'What services do you offer?', a: 'We offer SEO, social media marketing, web design, and content creation.' },
  { q: 'How can I get a quote?', a: 'Contact us using the form below and we’ll get back to you soon.' },
  { q: 'Do you work with small businesses?', a: 'Absolutely! We help businesses of all sizes grow online.' },
];

const FAQ = () => (
  <section className="faq" style={{ padding: '40px 0', background: '#f9f9f9' }}>
    <h2 style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
    <div style={{ maxWidth: 700, margin: '32px auto' }}>
      {faqs.map((item, idx) => (
        <div key={idx} style={{ marginBottom: 24, textAlign: 'left' }}>
          <strong>Q: {item.q}</strong>
          <p style={{ margin: '8px 0 0 0', color: '#555' }}>A: {item.a}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FAQ; 