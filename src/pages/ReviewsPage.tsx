import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { reviews } from '../../data';

export default function ReviewsPage() {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-electric-cyan text-xs font-bold tracking-[0.3em] uppercase mb-4 block">{t.reviews.badge}</span>
          <h1 className="text-4xl md:text-5xl font-black font-display mb-4">{t.reviews.title}</h1>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review: any, i: number) => (
            <div key={i} className="bg-[#081219] p-8 rounded-2xl border border-electric-cyan/10 break-inside-avoid">
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
