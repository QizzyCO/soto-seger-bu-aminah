import React from 'react';
import { PARTNERS, PARTNER_LOGOS, WHATSAPP_PARTNER_URL, WHATSAPP_CATERING_URL } from '../constants.ts';

interface ArticlesProps {
  onShowTerms?: () => void;
}

const Articles: React.FC<ArticlesProps> = ({ onShowTerms }) => {
  const handlePartnerClick = (id: number) => {
    if (id === 1) {
      onShowTerms?.();
    } else if (id === 3) {
      window.open(WHATSAPP_CATERING_URL, '_blank');
    }
  };

  return (
    <section id="mitra" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2">Partnership</h2>
          <h3 className="text-4xl font-bold text-amber-900 mb-4">Mitra & Kerjasama</h3>
          <p className="text-stone-500">Jadilah bagian dari cerita rasa legendaris kami.</p>
        </div>

        {/* Main Card */}
        <div className="max-w-6xl mx-auto bg-emerald-900 rounded-[2.5rem] overflow-hidden shadow-2xl relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          
          <div className="flex flex-col lg:flex-row">
             {/* Left Content */}
            <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Mari Tumbuh Bersama <br/>
                <span className="text-emerald-400">Soto Seger Bu Aminah</span>
              </h4>
              <p className="text-emerald-100 text-lg mb-8 leading-relaxed">
                Kami membuka kesempatan bagi Anda untuk berkolaborasi. Baik sebagai mitra franchise atau layanan katering untuk acara spesial Anda.
              </p>
              
              <div className="space-y-4 mb-10">
                {PARTNERS.map((partner) => (
                  <div 
                    key={partner.id} 
                    onClick={() => handlePartnerClick(partner.id)}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 transition-all cursor-pointer hover:bg-white/10 hover:border-emerald-400 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-300 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                      {partner.category === 'Franchise' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                      )}
                      {partner.category === 'Layanan' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"/></svg>
                      )}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <h5 className="text-white font-bold">{partner.title}</h5>
                        <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                          {partner.id === 1 ? 'Syarat & Ketentuan →' : 'Hubungi Kami →'}
                        </span>
                      </div>
                      <p className="text-emerald-200 text-sm">{partner.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <a 
                  href={WHATSAPP_PARTNER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-500 text-emerald-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/20 transform hover:-translate-y-1"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  Gabung Menjadi Mitra
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full">
              <img 
                src="https://raw.githubusercontent.com/QizzyCO/soto-seger-bu-aminah/refs/heads/main/library/WhatsApp%20Image%202026-02-15%20at%2011.52.46.jpeg" 
                alt="Partnership" 
                className="absolute inset-0 w-full h-full object-cover lg:rounded-l-none"
              />
              <div className="absolute inset-0 bg-emerald-900/40 mix-blend-multiply lg:hidden"></div>
            </div>
          </div>
        </div>

        {/* Brand Logos */}
        <div className="mt-20">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            {PARTNER_LOGOS.map((logo) => (
              <div key={logo.name} className="h-12 w-32 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                <img 
                  src={logo.image} 
                  alt={logo.name} 
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Articles;