import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const styles = {
    container: {
      fontFamily: 'Segoe UI, sans-serif',
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: 'auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    headerTitle: {
      fontSize: '36px',
      marginBottom: '10px',
      color: '#212121',
    },
    headerDesc: {
      fontSize: '18px',
      color: '#555',
    },
    content: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '40px',
    },
    formContainer: {
      flex: 1,
      minWidth: '300px',
    },
    formTitle: {
      fontSize: '24px',
      color: '#222',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      padding: '12px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '6px',
      fontSize: '16px',
    },
    button: {
      padding: '12px',
      backgroundColor: 'gold',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0052b0',
    },
    details: {
      flex: 1,
      minWidth: '300px',
    },
    detailsTitle: {
      fontSize: '24px',
      color: '#222',
      marginBottom: '20px',
    },
    detailText: {
      fontSize: '16px',
      marginBottom: '12px',
    },
    link: {
      color: '#003f8a',
      textDecoration: 'none',
    },
    map: {
      marginTop: '50px',
    },
    mapTitle: {
      fontSize: '24px',
      color: '#222',
      marginBottom: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <section style={styles.header}>
        <h1 style={styles.headerTitle}>Get in Touch</h1>
        <p style={styles.headerDesc}>We’d love to hear from you and discuss how we can help your business grow.</p>
      </section>

      <div style={styles.content}>
        <div style={styles.formContainer}>
          <h2 style={styles.formTitle}>Send a Message</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone (Optional)"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              style={styles.input}
              required
            ></textarea>
            <button type="submit" style={styles.button}>Submit</button>
          </form>
        </div>

        <div style={styles.details}>
          <h2 style={styles.detailsTitle}>Contact Information</h2>
          <p style={styles.detailText}><strong>Phone:</strong> +91-73888-89112</p>
          <p style={styles.detailText}>
            <strong>Email:</strong>{' '}
            <a href="mailto:support@fusiondigital.com" style={styles.link}>
              support@fusiondigital.com
            </a>
          </p>
          <p style={styles.detailText}><strong>WhatsApp:</strong> +91-73888-89112</p>

          <h3 style={{ marginTop: '20px' }}>Office Address</h3>
          <p style={styles.detailText}>
            #336, Tower A,<br />
            3rd Floor, Spaze I‑tech Park,<br />
            Gurgaon, Haryana, India 122018
          </p>

          <h3 style={{ marginTop: '20px' }}>Business Hours</h3>
          <p style={styles.detailText}>Monday – Friday: 10 AM – 6 PM IST</p>
        </div>
      </div>

      <div style={styles.map}>
        <h2 style={styles.mapTitle}>Find Us Here</h2>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.1874757953315!2d77.03745298122706!3d28.413599413348265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229af98d06d9%3A0xa5952f520ac028f!2sTower-A%2C%20SPAZE%20ITECH%20PARK%2C%20Block%20S%2C%20Sispal%20Vihar%2C%20Sector%2049%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1753250416581!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
