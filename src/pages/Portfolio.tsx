import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { portfolioItems } from '../../data';

export default function Portfolio() {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-electric-cyan text-xs font-bold tracking-[0.3em] uppercase mb-4 block">{t.portfolio.badge}</span>
          <h1 className="text-4xl md:text-5xl font-black font-display mb-4">{t.portfolio.title}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <a 
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/5 block bg-[#081219]"
            >
              <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  {language === 'en' && item.nameEn ? item.nameEn : item.name}
                </h3>
                <span className="flex items-center gap-2 text-sm font-bold text-electric-cyan">
                  {t.portfolio.visit} <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
