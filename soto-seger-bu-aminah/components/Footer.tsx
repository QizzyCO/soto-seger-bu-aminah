
import React from 'react';
import { LOGO_URL, RESTAURANT_INFO, WHATSAPP_RESERVATION_URL } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1917] text-stone-400 py-20 border-t border-stone-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={LOGO_URL} 
                alt="Logo" 
                className="w-12 h-12 rounded-full border border-stone-700 p-0.5" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=BA&background=059669&color=fff`;
                }}
              />
              <span className="text-white font-bold text-2xl tracking-tight">Bu Aminah</span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed mb-8">
              Menghadirkan kelezatan Soto Seger khas Boyolali dengan resep warisan keluarga yang autentik sejak puluhan tahun lalu.
            </p>
            <div className="flex items-center gap-4">
              <a href={RESTAURANT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-white hover:bg-emerald-600 transition-all transform hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {RESTAURANT_INFO.tiktok && (
                <a href={RESTAURANT_INFO.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-white hover:bg-emerald-600 transition-all transform hover:-translate-y-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512"><path d="M448 209.91a210.06 210.06 0 01-122.77-39.25V349.38A162.55 162.55 0 11185 188.31V278.2a74.62 74.62 0 1052.23 71.18V0l88 0a121.18 121.18 0 001.61 19.38 121.27 121.27 0 00121.16 102.53z"/></svg>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-bold mb-6 text-lg">Navigasi Cepat</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-emerald-500 transition-colors">Beranda</a></li>
              <li><a href="#menu" className="hover:text-emerald-500 transition-colors">Menu Favorit</a></li>
              <li><a href="#about" className="hover:text-emerald-500 transition-colors">Cerita Kami</a></li>
              <li><a href="#gallery" className="hover:text-emerald-500 transition-colors">Galeri Foto</a></li>
              <li><a href="#mitra" className="hover:text-emerald-500 transition-colors">Kemitraan</a></li>
            </ul>
          </div>

          {/* Contact & Branches */}
          <div className="lg:col-span-2">
            <h5 className="text-white font-bold mb-6 text-lg">Lokasi Cabang</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <p className="text-white text-xs font-bold uppercase tracking-widest mb-1 text-emerald-500">Cabang Colomadu (Pakel)</p>
                  <p className="text-xs leading-relaxed">Jl. Pakel Dsn.Pilang No.81, Baturan, Colomadu, Karanganyar</p>
                </div>
                <div>
                  <p className="text-white text-xs font-bold uppercase tracking-widest mb-1 text-emerald-500">Cabang Kartasura</p>
                  <p className="text-xs leading-relaxed">Jl. Slamet Riyadi No.31, Dusun I, Kartasura, Sukoharjo</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-white text-xs font-bold uppercase tracking-widest mb-1 text-emerald-500">Cabang De Colomadu</p>
                  <p className="text-xs leading-relaxed">Kompleks EX PG, Jl. Adisucipto, Malangjiwan, Colomadu</p>
                </div>
                <div>
                  <p className="text-white text-xs font-bold uppercase tracking-widest mb-1 text-amber-500">Hubungi Langsung</p>
                  <p className="text-xs mb-1">Telepon: {RESTAURANT_INFO.phone}</p>
                  <a href={WHATSAPP_RESERVATION_URL} className="text-emerald-500 text-xs font-bold hover:underline">Chat WhatsApp →</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>&copy; {currentYear} Soto Seger Bu Aminah. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex gap-8">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
              100% Halal
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
              Premium Quality
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
