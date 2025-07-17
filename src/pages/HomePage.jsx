import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage; 