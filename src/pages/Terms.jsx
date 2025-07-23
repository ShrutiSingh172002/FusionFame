import React, { useEffect } from 'react';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const styles = {
    container: {
      backgroundColor: '#000000', // pure black
      color: '#ffffff',           // white text
      minHeight: '100vh',
      padding: '3rem 2rem',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      fontSize: '2.5rem',
      color: '#FFD700',           // yellow (gold)
      marginBottom: '2rem',
      textAlign: 'center',   
    },
    sectionTitle: {
      fontSize: '1.4rem',
      color: '#FFD700',
      marginTop: '2rem',
      marginBottom: '0.8rem',
    },
    paragraph: {
      fontSize: '1rem',
      lineHeight: '1.7',
      color: '#ffffff',
      marginBottom: '1.2rem',
    },
    email: {
      color: '#FFD700',
      textDecoration: 'underline',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Terms & Conditions</h1>

      <p style={styles.paragraph}>
        Welcome to <strong>Fusionfame Digital</strong>. By accessing our website, using our services, or engaging with our team, you agree to be legally bound by the terms listed below.
      </p>

      <h2 style={styles.sectionTitle}>1. Acceptance of Terms</h2>
      <p style={styles.paragraph}>
        By using our services, you confirm that you are at least 18 years old and legally eligible to form a binding contract. If you do not agree to any of these terms, please do not use our website.
      </p>

      <h2 style={styles.sectionTitle}>2. Services Offered</h2>
      <p style={styles.paragraph}>
        We offer digital solutions such as website development, digital marketing, branding, and consulting. These services may be subject to specific agreements, which will override these terms where applicable.
      </p>

      <h2 style={styles.sectionTitle}>3. Intellectual Property</h2>
      <p style={styles.paragraph}>
        All website content, including graphics, text, code, and branding, belongs to Fusionfame Digital. You may not copy, reproduce, or distribute our content without written permission.
      </p>

      <h2 style={styles.sectionTitle}>4. Privacy & Security</h2>
      <p style={styles.paragraph}>
        We are committed to protecting your privacy. Any personal information collected is stored securely and never shared without your consent. For more details, refer to our Privacy Policy.
      </p>

      <h2 style={styles.sectionTitle}>5. Limitation of Liability</h2>
      <p style={styles.paragraph}>
        We are not liable for any direct, indirect, or incidental damages resulting from the use or inability to use our website or services, even if we have been advised of the possibility of such damages.
      </p>

      <h2 style={styles.sectionTitle}>6. Updates to Terms</h2>
      <p style={styles.paragraph}>
        We reserve the right to change or update these terms at any time. Continued use of the website after changes indicates acceptance of the revised terms.
      </p>

      <h2 style={styles.sectionTitle}>7. Contact Us</h2>
      <p style={styles.paragraph}>
        If you have any questions about our Terms & Conditions, feel free to reach out at{' '}
        <a href="mailto:support@fusionfamedigital.com" style={styles.email}>
          support@fusionfamedigital.com
        </a>
        .
      </p>
    </div>
  );
};

export default Terms;
