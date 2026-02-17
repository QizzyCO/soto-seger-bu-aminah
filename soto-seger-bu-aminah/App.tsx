import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Menu from './components/Menu.tsx';
import About from './components/About.tsx';
import Gallery from './components/Gallery.tsx';
import Articles from './components/Articles.tsx';
import Reviews from './components/Reviews.tsx';
import Location from './components/Location.tsx';
import Footer from './components/Footer.tsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.tsx';
import TermsAndConditions from './components/TermsAndConditions.tsx';
import HalalCertification from './components/HalalCertification.tsx';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'terms' | 'halal'>('home');

  const showTerms = () => setCurrentPage('terms');
  const showHalal = () => setCurrentPage('halal');
  const showHome = () => setCurrentPage('home');

  if (currentPage === 'terms') {
    return <TermsAndConditions onBack={showHome} />;
  }

  if (currentPage === 'halal') {
    return <HalalCertification onBack={showHome} />;
  }

  return (
    <div className="min-h-screen">
      <Navbar onHalalClick={showHalal} />
      <Hero />
      <Menu />
      <About />
      <Gallery />
      <Articles onShowTerms={showTerms} />
      <Reviews />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;