
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Gallery from './components/Gallery';
import Articles from './components/Articles';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Gallery />
      <Articles />
      <Reviews />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
