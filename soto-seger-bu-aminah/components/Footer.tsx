
import React from 'react';
import { LOGO_URL, RESTAURANT_INFO, WHATSAPP_RESERVATION_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={LOGO_URL} 
                alt="Logo" 
                className="w-10 h-10 rounded-full border border-stone-700" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=BA&background=059669&color=fff`;
                }}
              />
              <span className="text-white font-bold text-xl">Bu Aminah</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Menyajikan soto seger khas dengan resep warisan keluarga. Temukan kehangatan di setiap mangkuknya.
            </p>
            <div className="flex gap-4">
              <a 
                href={RESTAURANT_INFO.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {RESTAURANT_INFO.tiktok && (
                <a 
                  href={RESTAURANT_INFO.tiktok} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-bold mb-6">Navigasi</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="#articles" className="hover:text-white transition-colors">Artikel</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Lokasi</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white font-bold mb-6">Kontak</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                {RESTAURANT_INFO.phone}
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                {RESTAURANT_INFO.openingHours}
              </li>
              <li className="flex gap-3 mt-4">
                <a 
                  href={WHATSAPP_RESERVATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all"
                >
                  Reservasi via WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Location Summary */}
          <div>
            <h5 className="text-white font-bold mb-6">Alamat</h5>
            <p className="text-sm leading-relaxed">
              {RESTAURANT_INFO.address}
            </p>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Soto Seger Bu Aminah – All Rights Reserved</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
