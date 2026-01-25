
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-[#FAF9F6] scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2">Visual Experience</h2>
          <h3 className="text-4xl font-bold text-amber-900 mb-4">Galeri Kami</h3>
          <p className="text-stone-500">Intip kehangatan suasana dan kelezatan sajian autentik di Soto Seger Bu Aminah.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, index) => (
            <div 
              key={index} 
              className="relative group h-80 overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-white font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.caption}
                </p>
                <p className="text-emerald-400 text-sm font-medium mt-1">@sotosegerbuaminah</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://www.instagram.com/sotosegerbuaminah/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            Ikuti di Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
