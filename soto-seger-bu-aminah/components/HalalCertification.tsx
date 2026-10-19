import React, { useEffect } from 'react';
import { LOGO_URL } from '../constants.ts';

interface HalalCertificationProps {
  onBack: () => void;
}

const HalalCertification: React.FC<HalalCertificationProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 py-12 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Navigation */}
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
            />
            <h1 className="text-2xl font-bold text-amber-900">Komitmen Halal</h1>
          </div>
        </div>

        {/* Certificate Card */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-stone-200 p-8 md:p-16 relative overflow-hidden animate-fade-in-up">
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-16 -mt-16 border-b border-l border-emerald-100"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-50 rounded-tr-full -ml-16 -mb-16 border-t border-r border-amber-100"></div>
          
          <div className="relative z-10 text-center">
            <div className="flex justify-center mb-8">
              <img 
                src="https://raw.githubusercontent.com/QizzyCO/soto-seger-bu-aminah/refs/heads/main/library/WhatsApp%20Image%202026-02-16%20at%2009.37.17.jpeg" 
                alt="Halal Indonesia" 
                className="max-w-[180px] md:max-w-[240px] w-full h-auto object-contain drop-shadow-md grayscale-[0.2] hover:grayscale-0 transition-all duration-500 transform hover:scale-105"
              />
            </div>
            
            <h2 className="text-emerald-700 font-bold uppercase tracking-[0.2em] text-sm mb-4">Sertifikasi Halal</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-amber-900 mb-8 leading-tight">
              Informasi Kehalalan
            </h3>
            
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-10"></div>
            
            <div className="max-w-3xl mx-auto space-y-6 text-stone-600 leading-relaxed text-lg text-justify md:text-center">
              <p>
                Soto Seger Bu Aminah menerapkan standar kehalalan secara konsisten dalam seluruh proses penyediaan produk, mulai dari pemilihan bahan baku, pengolahan, hingga penyajian. Seluruh bahan yang digunakan berasal dari sumber yang halal dan terverifikasi, serta diolah dengan prosedur higienis untuk menjamin keamanan dan mutu pangan.
              </p>
              <p>
                Kami berkomitmen menyajikan produk yang halal, aman, dan berkualitas, sebagai bentuk tanggung jawab terhadap konsumen serta pemenuhan prinsip syariat Islam dan standar sanitasi pangan.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 group hover:bg-emerald-50 transition-colors">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 text-emerald-600 group-hover:scale-110 transition-transform">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h4 className="font-bold text-amber-900 mb-2">Bahan Baku Terpilih</h4>
                <p className="text-xs text-stone-500">Hanya menggunakan daging segar dari pemotongan hewan resmi.</p>
              </div>
              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 group hover:bg-emerald-50 transition-colors">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 text-emerald-600 group-hover:scale-110 transition-transform">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.21.63a2 2 0 01-1.414 1.414l-1.017.203a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.21.63a2 2 0 01-1.414 1.414l-1.017.203a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.21.63a2 2 0 01-1.414 1.414l-1.017.203a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.21.63a2 2 0 01-1.414 1.414l-1.017.203"/></svg>
                </div>
                <h4 className="font-bold text-amber-900 mb-2">Proses Higienis</h4>
                <p className="text-xs text-stone-500">Dapur yang bersih dan peralatan yang terjaga kesuciannya.</p>
              </div>
              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 group hover:bg-emerald-50 transition-colors">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 text-emerald-600 group-hover:scale-110 transition-transform">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h4 className="font-bold text-amber-900 mb-2">Tanpa Bahan Terlarang</h4>
                <p className="text-xs text-stone-500">Bebas dari segala unsur non-halal (alkohol, lemak babi, dll).</p>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6">
               <div className="text-left">
                  <p className="text-xs text-stone-400 uppercase font-bold tracking-widest mb-1">Status Sertifikasi</p>
                  <p className="text-sm font-bold text-emerald-700">AKTIF - LPPOM MUI Indonesia</p>
               </div>
               <button 
                 onClick={onBack}
                 className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-emerald-700 transition-all flex items-center gap-2"
               >
                 Kembali Nikmati Soto Kami
               </button>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <p className="mt-12 text-center text-xs text-stone-400">
          Soto Seger Bu Aminah senantiasa memperbarui sertifikasi halal secara berkala sesuai regulasi BPJPH Kementerian Agama Republik Indonesia.
        </p>
      </div>
    </div>
  );
};

export default HalalCertification;