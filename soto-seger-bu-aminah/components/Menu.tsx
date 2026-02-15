import React from 'react';
import { MENU_ITEMS, MENU_PDF_URL } from '../constants';

const Menu: React.FC = () => {
  const categories = ['Makanan', 'Tambahan Lauk', 'Tambahan Sate', 'Minuman'];

  return (
    <section id="menu" className="py-24 bg-[#FAF9F6] scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2">Our Specialties</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Pilihan Menu Favorit</h3>
          <p className="text-stone-600 italic">"Kami senang bisa melayani"</p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={MENU_PDF_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-md transition-all transform hover:-translate-y-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              Unduh Menu Lengkap (PDF)
            </a>
          </div>
        </div>

        {categories.map((cat) => {
          const filteredItems = MENU_ITEMS.filter(item => item.category === cat);
          if (filteredItems.length === 0) return null;

          return (
            <div key={cat} className="mb-20">
              <div className="flex items-center gap-4 mb-10">
                <h4 className="text-2xl font-bold text-stone-800 border-l-4 border-emerald-500 pl-4">
                  {cat === 'Makanan' ? 'Menu Makanan' : cat === 'Minuman' ? 'Menu Minuman' : cat}
                </h4>
                <div className="h-px bg-stone-200 flex-grow"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col h-full border border-stone-100"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                      />
                      {item.popular && (
                        <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
                          POPULER
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-bold text-lg text-amber-900 leading-tight group-hover:text-emerald-700 transition-colors">{item.name}</h5>
                      </div>
                      <p className="text-stone-500 text-sm mb-4 flex-grow line-clamp-2 leading-relaxed">{item.description}</p>
                      <div className="flex justify-end items-center mt-auto">
                        <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;