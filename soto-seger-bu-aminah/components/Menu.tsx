
import React from 'react';
import { MENU_ITEMS, MENU_PDF_URL } from '../constants';

const Menu: React.FC = () => {
  const categories = ['Makanan', 'Tambahan', 'Minuman'];

  return (
    <section id="menu" className="py-24 bg-[#FAF9F6] scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2">Our Specialties</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Pilihan Menu Favorit</h3>
          <p className="text-stone-600 italic">"Kami menyajikan cita rasa khas dengan bahan pilihan terbaik setiap harinya."</p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold">
              Range Harga: Rp 1.000 – Rp 25.000
            </div>
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

        {categories.map((cat) => (
          <div key={cat} className="mb-16">
            <h4 className="text-2xl font-bold text-stone-800 border-l-4 border-emerald-500 pl-4 mb-8">
              {cat}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {MENU_ITEMS.filter(item => item.category === cat).map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {item.popular && (
                      <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        POPULAR
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-bold text-xl text-amber-900 leading-tight">{item.name}</h5>
                    </div>
                    <p className="text-stone-500 text-sm mb-4 flex-grow">{item.description}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-emerald-700 font-bold text-lg">{item.price}</span>
                      <button className="p-2 rounded-full bg-stone-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
