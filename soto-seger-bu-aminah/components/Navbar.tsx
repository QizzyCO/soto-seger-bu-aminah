import React, { useState, useEffect } from 'react';
import { LOGO_URL, WHATSAPP_RESERVATION_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      setIsOpen(false);
      
      const navbarHeight = scrolled ? 72 : 88;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      window.history.pushState(null, '', href);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4 md:py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center gap-3 group"
        >
          <div className={`relative ${scrolled ? 'w-10 h-10' : 'w-12 h-12'} rounded-full overflow-hidden border-2 transition-all duration-300 ${scrolled ? 'border-emerald-600' : 'border-white'} flex-shrink-0`}>
            <img 
              src={LOGO_URL} 
              alt="Bu Aminah Logo" 
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=BA&background=059669&color=fff`;
              }}
            />
          </div>
          <span className={`font-bold text-lg md:text-xl transition-colors duration-300 ${scrolled ? 'text-amber-900' : 'text-white'}`}>
            Bu Aminah
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {[
            { name: 'Home', href: '#home' },
            { name: 'Menu', href: '#menu' },
            { name: 'Story', href: '#about' },
            { name: 'Gallery', href: '#gallery' },
            { name: 'Mitra', href: '#mitra' },
            { name: 'Reviews', href: '#reviews' },
            { name: 'Location', href: '#location' },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`font-medium transition-colors hover:text-emerald-500 text-sm xl:text-base ${scrolled ? 'text-stone-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href={WHATSAPP_RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-emerald-200"
          >
            Pesan Sekarang
          </a>
        </div>

        <button 
          className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-emerald-600' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px] border-t border-gray-100 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-4 space-y-4">
          {[
            { name: 'Home', href: '#home' },
            { name: 'Menu', href: '#menu' },
            { name: 'Story', href: '#about' },
            { name: 'Gallery', href: '#gallery' },
            { name: 'Mitra', href: '#mitra' },
            { name: 'Reviews', href: '#reviews' },
            { name: 'Location', href: '#location' },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-stone-700 font-semibold hover:text-emerald-600 transition-colors py-3 border-b border-gray-50 text-center"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={WHATSAPP_RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white text-center py-4 rounded-xl font-bold shadow-lg"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;