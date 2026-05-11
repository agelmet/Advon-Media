import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { reviews } from '../../data';
import { Link } from 'react-router-dom';

export default function GlobalReviews() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#0a1418] relative overflow-hidden border-t border-electric-cyan/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-electric-cyan/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-electric-cyan text-xs font-bold tracking-[0.3em] uppercase mb-4 block">{t.reviews.badge}</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white mb-4">{t.reviews.title}</h2>
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>
              <span className="text-xl font-bold text-gray-300">5.0 (75+)</span>
            </div>
          </div>
          <Link to="/reviews" className="text-electric-cyan font-bold hover:text-white transition-colors uppercase tracking-wide">
            {t.reviews.seeAll}
          </Link>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.slice(0, 9).map((review: any, i: number) => (
            <div key={i} className="bg-[#050a0e]/80 backdrop-blur-xl border border-electric-cyan/20 p-8 rounded-3xl shadow-2xl break-inside-avoid">
              <div className="flex items-center gap-4 mb-6">
                 {review.image && (
                   <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full border border-electric-cyan/30" />
                 )}
                 <div>
                   <h4 className="font-bold text-white">{review.name}</h4>
                   <span className="text-xs text-electric-cyan font-medium">{t.reviews.verified}</span>
                 </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>
              <p className="text-gray-300 italic leading-relaxed whitespace-pre-wrap">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
