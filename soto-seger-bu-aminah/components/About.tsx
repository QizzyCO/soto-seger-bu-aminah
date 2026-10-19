import React, { useState, useEffect, useRef } from 'react';

interface StoryImageProps {
  src: string;
  alt: string;
  fallbackSrc: string;
  wrapperClassName: string;
}

const StoryImage: React.FC<StoryImageProps> = ({ src, alt, fallbackSrc, wrapperClassName }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // If the image is already cached and loaded by the browser
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Skeleton Shimmer Loading Placeholder */}
      {!loaded && (
        <div className="absolute inset-0 bg-stone-200 overflow-hidden z-0">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-stone-300 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      )}

      {/* Actual Image */}
      <img 
        ref={imgRef}
        src={src} 
        alt={alt} 
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          (e.target as HTMLImageElement).src = fallbackSrc;
          setLoaded(true);
        }}
        className={`w-full h-full object-cover transition-opacity duration-500 relative z-10 ${loaded ? 'opacity-100' : 'opacity-0'}`} 
      />
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 flex flex-col">
              <StoryImage
                src="https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TgMHuSpmfbyuYZCAraOEjm6KnglRB5xmvpjurRFq_HTJ9luSVsh6ijF7hF4I1vX7k7HsSVCHQYYP8Y3Z2QQRUeadToLveg587r7hqMhOJtm6xdQOKhtZPT7_fNfG12N_SBt5TJ99YuRlqM=s680-w680-h510-rw"
                alt="Sajian Soto Seger Daging Sapi"
                fallbackSrc="https://raw.githubusercontent.com/QizzyCO/soto-seger-bu-aminah/refs/heads/main/library/IMG_3429.jpeg"
                wrapperClassName="rounded-2xl shadow-xl w-3/4 h-64 self-start transform hover:-translate-y-2 transition-transform duration-500"
              />
              <StoryImage
                src="https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TnmoGKIGmTsvmU9xqEMASROIe64xi__nh153NN4zMmZplZSYKeMO6a8TECVpao2i0Y6SqvbgTD5U4-L4tPSh_9hz12TyexfNuxDBiMDUZ84VF97pFHPS1V0jrQZsj0jIibz4hup97D9ucZ=s680-w680-h510-rw"
                alt="Detail Lauk Soto"
                fallbackSrc="https://raw.githubusercontent.com/QizzyCO/soto-seger-bu-aminah/refs/heads/main/library/IMG_3430.jpeg"
                wrapperClassName="rounded-2xl shadow-xl w-3/4 h-64 self-end -mt-24 border-4 border-white z-10 transform hover:translate-y-2 transition-transform duration-500"
              />
              <StoryImage
                src="https://lh3.googleusercontent.com/p/AF1QipM1H0o1KJlkzYrNekyinWDG7qg5r-M1VJXQlPTa=s680-w680-h510-rw"
                alt="Suasana Warung Bu Aminah"
                fallbackSrc="https://raw.githubusercontent.com/QizzyCO/soto-seger-bu-aminah/refs/heads/main/library/IMG_3431.jpeg"
                wrapperClassName="rounded-2xl shadow-xl w-3/4 h-64 self-start -mt-24 ml-8 border-4 border-white z-20 transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-emerald-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse -z-10"></div>
          </div>
          
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-emerald-700 font-bold uppercase tracking-widest text-sm mb-2">Our Story</h2>
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