import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Blog() {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-electric-cyan text-xs font-bold tracking-[0.3em] uppercase mb-4 block">{t.blog.badge}</span>
          <h1 className="text-4xl md:text-5xl font-black font-display mb-4">{t.blog.title}</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.blog.posts.map((p: any, i: number) => (
             <a href="#" key={i} className="bg-[#081219] p-4 rounded-3xl hover:border-electric-cyan/40 transition-colors border border-electric-cyan/10 group block">
                 <div className="aspect-video w-full mb-6 overflow-hidden rounded-2xl relative">
                     <div className="absolute inset-0 bg-electric-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay"></div>
                     <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 </div>
                 <div className="p-4">
                     <h2 className="text-2xl font-bold text-white mb-3 tracking-wide group-hover:text-electric-cyan transition-colors leading-snug">{p.title}</h2>
                     <p className="text-gray-400 leading-relaxed">{p.description}</p>
                 </div>
             </a>
          ))}
        </div>
      </div>
    </section>
  );
}
