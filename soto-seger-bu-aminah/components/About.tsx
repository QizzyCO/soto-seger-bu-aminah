
import React from 'react';
import { RESTAURANT_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600" 
                alt="Proses Masak" 
                className="rounded-2xl shadow-xl mt-12 transform hover:-translate-y-2 transition-transform duration-500" 
              />
              <img 
                src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80&w=600" 
                alt="Sajian Soto" 
                className="rounded-2xl shadow-xl transform hover:translate-y-2 transition-transform duration-500" 
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-700"></div>
          </div>
          
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-amber-900 mb-8 leading-tight">Tradisi Rasa dari <br /><span className="text-emerald-600 italic">Dapur Bu Aminah</span></h3>
            
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
              <p>
                Berawal dari sebuah dapur keluarga di jantung Colomadu, <span className="font-bold text-amber-900 text-lg">Soto Seger Bu Aminah</span> lahir dari kecintaan mendalam terhadap kuliner tradisional Jawa. Bu Aminah percaya bahwa kesederhanaan adalah kunci dari kelezatan yang abadi.
              </p>
              <p>
                Rahasia kami terletak pada kuah bening yang aromatik, dihasilkan dari rebusan rempah-rempah pilihan selama berjam-jam untuk mengekstrak sari pati rasa yang paling murni. Setiap mangkuk yang kami sajikan adalah janji akan kualitas, kesegaran, dan keaslian bumbu warisan.
              </p>
              <p>
                Kini, kami terus menjaga komitmen tersebut. Bukan sekadar tempat makan, Soto Seger Bu Aminah adalah tempat di mana keluarga berkumpul, teman bercerita, dan tradisi terus dirayakan di setiap suapannya.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-stone-100 pt-10">
              <div>
                <p className="text-3xl font-bold text-emerald-600 mb-1">100%</p>
                <p className="text-sm font-bold text-stone-500 uppercase tracking-tighter">Bahan Halal & Segar</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-amber-600 mb-1">20+</p>
                <p className="text-sm font-bold text-stone-500 uppercase tracking-tighter">Tahun Warisan Rasa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
