import React, { useEffect } from 'react';
import { LOGO_URL, WHATSAPP_PARTNER_URL } from '../constants.ts';

interface TermsAndConditionsProps {
  onBack: () => void;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 py-12 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 animate-fade-in">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Beranda
          </button>
          <div className="flex items-center gap-4">
             <img 
              src={LOGO_URL} 
              alt="Logo" 
              className="w-12 h-12 rounded-full border-2 border-emerald-500 shadow-sm"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=BA&background=059669&color=fff`;
              }}
            />
            <h1 className="text-2xl font-bold text-amber-900">Bu Aminah Partnership</h1>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-stone-100 p-8 md:p-16 animate-fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Peluang Kemitraan</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-amber-900 mb-6">Syarat & Ketentuan</h3>
            <p className="text-stone-500 max-w-xl mx-auto leading-relaxed italic">
              "Mari tumbuh bersama warisan rasa yang telah dipercaya keluarga selama puluhan tahun."
            </p>
          </div>

          <div className="space-y-12">
            {/* Section 1: Kualifikasi */}
            <section>
              <h4 className="flex items-center gap-3 text-xl font-bold text-emerald-700 mb-6 pb-2 border-b border-stone-100">
                <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-sm">01</span>
                Kualifikasi Mitra
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Memiliki jiwa kewirausahaan dan minat di bidang F&B.",
                  "Berkomitmen untuk menjaga kualitas rasa Bu Aminah.",
                  "Memiliki integritas tinggi dalam pelayanan pelanggan.",
                  "Sanggup mengikuti SOP (Standard Operating Procedure).",
                  "Memiliki modal investasi yang cukup.",
                  "Bersedia berkolaborasi aktif dengan manajemen pusat."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-stone-600 items-start">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 2: Kriteria Lokasi */}
            <section>
              <h4 className="flex items-center gap-3 text-xl font-bold text-emerald-700 mb-6 pb-2 border-b border-stone-100">
                <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-sm">02</span>
                Kriteria Lokasi
              </h4>
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
                <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                  Lokasi merupakan faktor kunci kesuksesan. Kami merekomendasikan area dengan kriteria berikut:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="font-bold text-amber-900 text-sm mb-1">Aksesibilitas</p>
                    <p className="text-xs text-stone-500">Pinggir jalan utama atau area yang mudah dijangkau kendaraan.</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-amber-900 text-sm mb-1">Visibilitas</p>
                    <p className="text-xs text-stone-500">Mudah terlihat oleh calon konsumen dari kejauhan.</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-amber-900 text-sm mb-1">Area Parkir</p>
                    <p className="text-xs text-stone-500">Memiliki luas parkir yang cukup untuk motor dan mobil.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Tahapan */}
            <section>
              <h4 className="flex items-center gap-3 text-xl font-bold text-emerald-700 mb-6 pb-2 border-b border-stone-100">
                <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-sm">03</span>
                Tahapan Pendaftaran
              </h4>
              <div className="relative pl-8 space-y-8 before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-emerald-100">
                {[
                  { title: "Konsultasi Awal", desc: "Hubungi tim kemitraan kami melalui WhatsApp untuk perkenalan awal." },
                  { title: "Survey Lokasi", desc: "Tim kami akan melakukan verifikasi terhadap lokasi yang diajukan." },
                  { title: "Penandatanganan MOU", desc: "Setelah lokasi disetujui, dilakukan penandatanganan kesepakatan kerjasama." },
                  { title: "Setup & Training", desc: "Renovasi tempat, pengiriman peralatan, dan pelatihan karyawan." },
                  { title: "Grand Opening", desc: "Pendampingan saat pembukaan cabang baru Anda." }
                ].map((step, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-white border-4 border-emerald-500"></div>
                    <h5 className="font-bold text-amber-900 text-sm mb-1">{step.title}</h5>
                    <p className="text-xs text-stone-500 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-12 border-t border-stone-100 text-center">
            <p className="text-stone-600 mb-8 font-medium">Siap melangkah ke jenjang berikutnya?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={WHATSAPP_PARTNER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
              >
                Hubungi Tim Kemitraan
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <p className="mt-12 text-center text-xs text-stone-400">
          © 2024 Soto Seger Bu Aminah - Syarat & Ketentuan Kemitraan dapat berubah sewaktu-waktu sesuai kebijakan manajemen.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;