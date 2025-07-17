import React from 'react';

const blogPosts = [
  { title: 'Digital Marketing Trends 2024', desc: 'Stay ahead with the latest trends in digital marketing.' },
  { title: 'SEO Best Practices', desc: 'Learn how to optimize your website for better search rankings.' },
  { title: 'Social Media Strategy', desc: 'Build an effective social media presence for your business.' },
];

const Blog = () => (
  <section id="blog" className="blog" style={{ padding: '40px 0', background: '#f9f9f9' }}>
    <h2 style={{ textAlign: 'center' }}>Our Blog</h2>
    <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 32, flexWrap: 'wrap' }}>
      {blogPosts.map((post, idx) => (
        <div key={idx} style={{ background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #eee', padding: 24, width: 240 }}>
          <h3>{post.title}</h3>
          <p style={{ color: '#666' }}>{post.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Blog; 