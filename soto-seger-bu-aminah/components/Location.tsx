
import React from 'react';
import { RESTAURANT_INFO } from '../constants';

const Location: React.FC = () => {
  const branches = [
    {
      name: "Cabang Colomadu (Pakel)",
      address: "Jl. Pakel Dsn.Pilang No.81, RT.02/RW.06, Jepanan, Baturan, Kec. Colomadu, Kabupaten Karanganyar, Jawa Tengah 57171"
    },
    {
      name: "Cabang Kartasura",
      address: "Jl. Slamet Riyadi No.31, Dusun I, Kartasura, Kec. Kartasura, Kabupaten Sukoharjo, Jawa Tengah 57169"
    },
    {
      name: "Cabang De Colomadu",
      address: "Kompleks EX PG, Jl. Adisucipto, Colomadu, Malangjiwan, Kec. Colomadu, Kabupaten Karanganyar, Jawa Tengah 57177"
    }
  ];

  return (
    <section id="location" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2">Find Us</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Lokasi & Jam Operasional</h3>
          <p className="text-stone-500 max-w-xl mx-auto italic">Kunjungi cabang terdekat kami untuk menikmati kesegaran soto autentik setiap hari.</p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main Info Strip */}
          <div className="bg-emerald-900 rounded-[2rem] p-8 md:p-12 mb-12 text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
             <div className="relative z-10">
                <h5 className="text-emerald-400 font-bold uppercase text-xs tracking-widest mb-2">Jam Operasional</h5>
                <p className="text-2xl font-bold mb-1">Buka Setiap Hari</p>
                <p className="text-emerald-100/80">{RESTAURANT_INFO.openingHours}</p>
             </div>
             <div className="h-px md:h-16 w-full md:w-px bg-white/20"></div>
             <div className="relative z-10 text-center md:text-left">
                <h5 className="text-emerald-400 font-bold uppercase text-xs tracking-widest mb-2">Layanan Kami</h5>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {['Dine-in', 'Takeaway', 'Delivery'].map(s => (
                    <span key={s} className="bg-white/10 px-4 py-1 rounded-full text-xs font-bold border border-white/10 uppercase tracking-tighter">
                      {s}
                    </span>
                  ))}
                </div>
             </div>
             <div className="relative z-10">
                <a 
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="bg-amber-500 hover:bg-amber-400 text-emerald-950 px-8 py-4 rounded-full font-bold transition-all shadow-lg inline-block whitespace-nowrap"
                >
                  Hubungi: {RESTAURANT_INFO.phone}
                </a>
             </div>
          </div>

          {/* Branch Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <div 
                key={index} 
                className="bg-stone-50 p-8 rounded-[2rem] border border-stone-100 hover:bg-white hover:shadow-xl hover:shadow-emerald-900/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-amber-900 text-xl mb-4 leading-tight">{branch.name}</h4>
                <p className="text-stone-500 text-sm leading-relaxed mb-8 h-20 overflow-hidden">
                  {branch.address}
                </p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.name + ' ' + branch.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-emerald-600/20 text-emerald-600 font-bold text-sm hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all"
                >
                  Navigasi Maps
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
