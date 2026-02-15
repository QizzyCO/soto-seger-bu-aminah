import React from 'react';
import { HERO_BG, LOGO_URL } from '../constants';

const Hero: React.FC = () => {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('menu');
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', '#menu');
    }
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden scroll-mt-20">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] scale-110 animate-[pulse_10s_infinite]"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 flex flex-col items-center animate-fade-in-up">
           <img 
            src={LOGO_URL} 
            alt="Bu Aminah Logo" 
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-emerald-500 shadow-2xl mb-6 transform hover:rotate-6 transition-transform"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=BA&background=059669&color=fff`;
            }}
          />
          <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-3">Selamat Datang di Bu Aminah</span>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Soto Seger, <br />
            <span className="text-amber-400">Kami senang bisa melayani</span>
          </h1>
          <p className="text-lg md:text-2xl text-stone-200 mb-10 font-medium tracking-wide">
            Lezat <span className="mx-2">•</span> Halal <span className="mx-2">•</span> Terjangkau
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#menu"
              onClick={scrollToMenu}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 rounded-full font-bold text-lg transition-all w-full sm:w-auto text-center"
            >
              Lihat Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;