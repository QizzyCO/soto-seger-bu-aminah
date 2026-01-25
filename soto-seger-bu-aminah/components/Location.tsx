
import React from 'react';
import { RESTAURANT_INFO } from '../constants';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2">Find Us</h2>
          <h3 className="text-4xl font-bold text-amber-900 mb-4">Lokasi & Jam Operasional</h3>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-stone-100">
          <div className="lg:w-1/3 p-8 md:p-12 bg-stone-50">
            <div className="mb-10">
              <h5 className="text-emerald-600 font-bold uppercase text-xs tracking-widest mb-4">Alamat Kami</h5>
              <p className="text-amber-900 font-medium leading-relaxed">{RESTAURANT_INFO.address}</p>
            </div>
            
            <div className="mb-10">
              <h5 className="text-emerald-600 font-bold uppercase text-xs tracking-widest mb-4">Jam Buka</h5>
              <p className="text-amber-900 font-medium">Setiap Hari</p>
              <p className="text-stone-600">{RESTAURANT_INFO.openingHours}</p>
            </div>

            <div className="mb-10">
              <h5 className="text-emerald-600 font-bold uppercase text-xs tracking-widest mb-4">Hubungi Kami</h5>
              <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-amber-900 font-bold block mb-2 hover:text-emerald-600 transition-colors">
                {RESTAURANT_INFO.phone}
              </a>
              <a href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`} className="bg-emerald-600 text-white inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold hover:bg-emerald-700 transition-all">
                WhatsApp Kami
              </a>
            </div>

            <div>
              <h5 className="text-emerald-600 font-bold uppercase text-xs tracking-widest mb-4">Layanan</h5>
              <div className="flex flex-wrap gap-2">
                {['Makan di tempat', 'Bawa pulang', 'Pesan Online'].map(s => (
                  <span key={s} className="bg-stone-200 text-stone-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 min-h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31642.423778245105!2d110.7981312373433!3d-7.541900205052437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a158660656765%3A0xbd8fadb2bb6a5d3!2sSoto%20Seger%20Bu%20Aminah!5e0!3m2!1sid!2sid!4v1769229735250!5m2!1sid!2sid"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Soto Seger Bu Aminah Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
