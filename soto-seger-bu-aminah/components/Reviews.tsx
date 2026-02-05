
import React from 'react';
import { TESTIMONIALS, RESTAURANT_INFO } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-amber-50/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2">Testimonials</h2>
          <h3 className="text-4xl font-bold text-amber-900 mb-4">Apa Kata Pelanggan Kami?</h3>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-6 h-6 ${i < Math.floor(RESTAURANT_INFO.rating) ? 'text-amber-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="font-bold text-xl text-amber-900 ml-2">{RESTAURANT_INFO.rating}</span>
          </div>
          <p className="text-stone-500">Berdasarkan {RESTAURANT_INFO.reviewsCount}+ ulasan Google</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-amber-400' : 'text-stone-200'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-stone-600 italic mb-6 flex-grow leading-relaxed">"{review.comment}"</p>
              <div className="flex items-center gap-4 border-t border-stone-50 pt-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-700">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h6 className="font-bold text-amber-900">{review.name}</h6>
                  <p className="text-xs text-stone-400">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://www.google.com/maps/place/Soto+Seger+Bu+Aminah/@-7.5416488,110.4931975,11z/data=!4m12!1m2!2m1!1ssoto+seger+bu+aminah!3m8!1s0x2e7a158660656765:0xbd8fadb2bb6a5d3!8m2!3d-7.5416488!4d110.7980681!9m1!1b1!15sChRzb3RvIHNlZ2VyIGJ1IGFtaW5haFoWIhRzb3RvIHNlZ2VyIGJ1IGFtaW5haJIBCnJlc3RhdXJhbnTgAQA!16s%2Fg%2F11whrfgfgc?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-emerald-600 font-bold hover:underline flex items-center justify-center gap-2"
          >
            Lihat semua ulasan di Google Maps 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
