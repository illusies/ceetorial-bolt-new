import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import LanguageShowcase from '../components/LanguageShowcase';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar variant="landing" />
      <Hero />
      <Features />
      <LanguageShowcase />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Landing;