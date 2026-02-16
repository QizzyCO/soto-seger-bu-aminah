import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 flex flex-col">
              <img 
                src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweq4hONS8RuU-jtkhY2vEd9jDBHzoH9jRZTbJ6TdqBMz7VvL9NW0JxEWDuVpJ_GFwpjZvAYrHKxtw169qRj1Xk-BWG8zEN0c5X_dYOMw1J6a7d1I5abU-PrUoCob7u7Wx4VwB_ACRUcGRD7N=s680-w680-h510-rw" 
                alt="Sajian Soto Seger Daging Sapi" 
                className="rounded-2xl shadow-xl w-3/4 h-64 object-cover self-start transform hover:-translate-y-2 transition-transform duration-500" 
              />
              <img 
                src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwer0luSlen9f0L6c8i5KIzno_CIwHe-SDwXfc907IhFGHvT-KeONUzbx_TMxMEvbK1DhNYkT-rQJm9C2cP7IUtvdbz9C5bOabOLPYtw3Bwny-hcSqOKtLAbpc8sYy7ikGYgdm_PLNd0AtvH0=s680-w680-h510-rw" 
                alt="Detail Lauk Soto" 
                className="rounded-2xl shadow-xl w-3/4 h-64 object-cover self-end -mt-24 border-4 border-white z-10 transform hover:translate-y-2 transition-transform duration-500" 
              />
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipM1H0o1KJlkzYrNekyinWDG7qg5r-M1VJXQlPTa=s680-w680-h510-rw"
                alt="Suasana Warung Bu Aminah"
                className="rounded-2xl shadow-xl w-3/4 h-64 object-cover self-start -mt-24 ml-8 border-4 border-white z-20 transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-emerald-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse -z-10"></div>
          </div>
          
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-amber-900 mb-8 leading-tight">Tradisi Rasa dari <br /><span className="text-emerald-600 italic">Dapur Bu Aminah</span></h3>
            
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg text-justify">
              <p>
                Berawal dari sebuah dapur keluarga, <span className="font-bold text-amber-900 text-lg">Soto Seger Bu Aminah</span> lahir dari kecintaan mendalam terhadap kuliner tradisional Jawa. Bu Aminah percaya bahwa kesederhanaan adalah kunci dari kelezatan yang abadi.
              </p>
              <p>
                Rahasia kami terletak pada kuah rempah yang aromatik, dihasilkan dari rebusan rempah-rempah pilihan selama berjam-jam untuk mengekstrak sari pati rasa yang paling murni. Setiap mangkuk yang kami sajikan adalah janji akan kualitas, kesegaran, dan keaslian bumbu warisan.
              </p>
              <p>
                Kini, kami terus menjaga komitmen tersebut. Bukan sekadar tempat makan, Soto Seger Bu Aminah adalah tempat di mana keluarga berkumpul, teman bercerita, dalam kehangatan rempah.
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