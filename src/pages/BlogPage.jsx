import React from 'react';
import Footer from '../components/Footer';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'Digital Marketing Trends to Watch in 2024',
      excerpt: 'Stay ahead of the curve with these emerging digital marketing trends that will shape the industry in 2024.',
      content: 'The digital marketing landscape is constantly evolving, and 2024 brings new opportunities and challenges. From AI-powered personalization to voice search optimization, businesses need to adapt their strategies to stay competitive. In this comprehensive guide, we\'ll explore the key trends that will dominate digital marketing this year.',
      author: 'Sarah Johnson',
      date: 'January 15, 2024',
      category: 'Digital Marketing',
      readTime: '5 min read',
      image: 'https://via.placeholder.com/400x250/007bff/ffffff?text=Digital+Marketing+Trends'
    },
    {
      title: 'SEO Best Practices for 2024',
      excerpt: 'Learn the essential SEO strategies that will help your website rank higher in search engine results.',
      content: 'Search Engine Optimization continues to be a crucial component of digital marketing success. With Google\'s algorithm updates and changing user behavior, it\'s important to stay updated with the latest SEO best practices. This guide covers everything from technical SEO to content optimization.',
      author: 'Mike Chen',
      date: 'January 10, 2024',
      category: 'SEO',
      readTime: '7 min read',
      image: 'https://via.placeholder.com/400x250/28a745/ffffff?text=SEO+Best+Practices'
    },
    {
      title: 'Social Media Strategy for Small Businesses',
      excerpt: 'Discover effective social media strategies that can help small businesses grow their online presence.',
      content: 'Social media marketing is essential for small businesses looking to build brand awareness and connect with their audience. This guide provides practical tips and strategies for creating an effective social media presence, from content planning to engagement tactics.',
      author: 'Emily Rodriguez',
      date: 'January 8, 2024',
      category: 'Social Media',
      readTime: '6 min read',
      image: 'https://via.placeholder.com/400x250/ffc107/ffffff?text=Social+Media+Strategy'
    },
    {
      title: 'The Future of E-commerce: What to Expect',
      excerpt: 'Explore the latest trends and technologies shaping the future of online retail.',
      content: 'E-commerce is rapidly evolving with new technologies and changing consumer preferences. From mobile commerce to AI-powered recommendations, businesses need to understand these trends to stay competitive. This article explores what the future holds for online retail.',
      author: 'David Kim',
      date: 'January 5, 2024',
      category: 'E-commerce',
      readTime: '8 min read',
      image: 'https://via.placeholder.com/400x250/dc3545/ffffff?text=E-commerce+Future'
    },
    {
      title: 'Content Marketing: Creating Value for Your Audience',
      excerpt: 'Learn how to create compelling content that resonates with your target audience and drives results.',
      content: 'Content marketing is more than just creating blog posts. It\'s about providing value to your audience through various content formats. This guide covers content strategy, creation, distribution, and measurement to help you build a successful content marketing program.',
      author: 'Lisa Thompson',
      date: 'January 3, 2024',
      category: 'Content Marketing',
      readTime: '6 min read',
      image: 'https://via.placeholder.com/400x250/6f42c1/ffffff?text=Content+Marketing'
    },
    {
      title: 'Email Marketing Automation: A Complete Guide',
      excerpt: 'Master email marketing automation to nurture leads and increase conversions.',
      content: 'Email marketing automation can significantly improve your marketing ROI by delivering the right message to the right person at the right time. This comprehensive guide covers automation strategies, tools, and best practices to help you create effective email campaigns.',
      author: 'Alex Morgan',
      date: 'December 30, 2023',
      category: 'Email Marketing',
      readTime: '9 min read',
      image: 'https://via.placeholder.com/400x250/17a2b8/ffffff?text=Email+Automation'
    }
  ];

  const categories = ['All', 'Digital Marketing', 'SEO', 'Social Media', 'E-commerce', 'Content Marketing', 'Email Marketing'];

  return (
    <div>
      <div style={{ padding: '120px 20px 60px', maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Our Blog</h1>
        <p style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto 40px', lineHeight: '1.6', color: '#555' }}>
          Stay updated with the latest insights, tips, and trends in digital marketing. 
          Our expert team shares valuable knowledge to help your business grow online.
        </p>

        {/* Categories */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: '10px', 
          marginBottom: '50px' 
        }}>
          {categories.map((category, index) => (
            <button key={index} style={{ 
              padding: '8px 16px', 
              border: category === 'All' ? '2px solid var(--gold)' : '1px solid #ddd',
              background: category === 'All' ? 'var(--gold)' : '#fff',
              color: category === 'All' ? 'var(--black)' : '#333',
              borderRadius: '20px',
              cursor: 'pointer',
              fontSize: '14px'
            }}>
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {blogPosts.map((post, index) => (
            <article key={index} style={{ 
              border: '1px solid #e0e0e0', 
              borderRadius: '12px', 
              overflow: 'hidden',
              background: '#fff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
              cursor: 'pointer'
            }}>
              <div style={{ 
                height: '200px', 
                background: `url(${post.image}) center/cover`
              }}></div>
              
              <div style={{ padding: '25px' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  marginBottom: '15px' 
                }}>
                  <span style={{ 
                    background: 'var(--gold-light)', 
                    padding: '4px 12px', 
                    borderRadius: '15px',
                    fontSize: '12px',
                    color: 'var(--gold)',
                    fontWeight: 'bold'
                  }}>
                    {post.category}
                  </span>
                  <span style={{ fontSize: '12px', color: '#666' }}>{post.readTime}</span>
                </div>
                
                <h2 style={{ 
                  fontSize: '20px', 
                  marginBottom: '10px', 
                  color: '#333',
                  lineHeight: '1.4'
                }}>
                  {post.title}
                </h2>
                
                <p style={{ 
                  color: '#666', 
                  lineHeight: '1.6', 
                  marginBottom: '15px',
                  fontSize: '14px'
                }}>
                  {post.excerpt}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  fontSize: '12px',
                  color: '#888'
                }}>
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
                
                <button style={{ 
                  marginTop: '15px',
                  padding: '8px 20px',
                  background: 'var(--gold)',
                  color: 'var(--black)',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div style={{ 
          background: '#f9f9f9', 
          padding: '40px', 
          borderRadius: '8px', 
          marginTop: '60px',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '20px' }}>Stay Updated</h2>
          <p style={{ marginBottom: '30px', color: '#555' }}>
            Subscribe to our newsletter for the latest digital marketing insights and tips.
          </p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '10px',
            flexWrap: 'wrap'
          }}>
            <input 
              type="email" 
              placeholder="Enter your email address"
              style={{ 
                padding: '12px 16px', 
                border: '1px solid #ddd', 
                borderRadius: '6px',
                minWidth: '300px',
                fontSize: '16px'
              }}
            />
            <button style={{ 
              padding: '12px 24px', 
              background: 'var(--gold)', 
              color: 'var(--black)', 
              border: 'none', 
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage; 