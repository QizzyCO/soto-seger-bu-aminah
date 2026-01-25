
import React from 'react';
import { ARTICLES } from '../constants';

const Articles: React.FC = () => {
  return (
    <section id="articles" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2">Our Blog</h2>
          <h3 className="text-4xl font-bold text-amber-900 mb-4">Artikel & Kabar Terbaru</h3>
          <p className="text-stone-500">Kumpulan cerita menarik seputar kuliner, budaya, and inspirasi dari dapur Soto Seger Bu Aminah.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ARTICLES.map((article) => (
            <article 
              key={article.id} 
              className="flex flex-col h-full bg-[#FAF9F6] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-stone-400 text-xs font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  {article.date}
                </div>
                <h4 className="text-xl font-bold text-amber-900 mb-4 group-hover:text-emerald-600 transition-colors">
                  {article.title}
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed flex-grow mb-6">
                  {article.excerpt}
                </p>
                <div className="mt-auto">
                  <button className="text-emerald-600 font-bold text-sm flex items-center gap-2 group/btn">
                    Baca Selengkapnya
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
