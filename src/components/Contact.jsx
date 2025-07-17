import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact" style={{ padding: '40px 0', textAlign: 'center' }}>
      <h2>Contact Us</h2>
      {submitted ? (
        <p style={{ color: 'green' }}>Thank you for reaching out! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '32px auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} required style={{ padding: 10, borderRadius: 4, border: '1px solid #ccc' }} />
          <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required style={{ padding: 10, borderRadius: 4, border: '1px solid #ccc' }} />
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required style={{ padding: 10, borderRadius: 4, border: '1px solid #ccc', minHeight: 80 }} />
          <button type="submit" style={{ padding: 12, background: 'var(--gold)', color: 'var(--black)', border: 'none', borderRadius: 4, fontWeight: 'bold' }}>Send Message</button>
        </form>
      )}
    </section>
  );
};

export default Contact; 