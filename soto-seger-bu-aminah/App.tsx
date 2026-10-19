import React, { useState, useEffect, Suspense, lazy } from 'react';
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
import { trackPageView } from './analytics.ts';

const TermsAndConditions = lazy(() => import('./components/TermsAndConditions.tsx'));
const HalalCertification = lazy(() => import('./components/HalalCertification.tsx'));

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'terms' | 'halal'>('home');

  useEffect(() => {
    if (currentPage === 'home') {
      trackPageView('/', 'Soto Seger Bu Aminah - Beranda');
    } else if (currentPage === 'terms') {
      trackPageView('/kemitraan-syarat-ketentuan', 'Soto Seger Bu Aminah - Syarat & Ketentuan Kemitraan');
    } else if (currentPage === 'halal') {
      trackPageView('/sertifikasi-halal', 'Soto Seger Bu Aminah - Informasi Kehalalan');
    }
  }, [currentPage]);

  const showTerms = () => setCurrentPage('terms');
  const showHalal = () => setCurrentPage('halal');
  const showHome = () => setCurrentPage('home');

  if (currentPage === 'terms') {
    return (
      <Suspense fallback={<div className="min-h-screen bg-stone-50" />}>
        <TermsAndConditions onBack={showHome} />
      </Suspense>
    );
  }

  if (currentPage === 'halal') {
    return (
      <Suspense fallback={<div className="min-h-screen bg-stone-50" />}>
        <HalalCertification onBack={showHome} />
      </Suspense>
    );
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