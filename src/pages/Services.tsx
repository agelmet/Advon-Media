import React from 'react';
import { Check, Globe, Star, MessageCircle, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const icons = [Globe, Star, MessageCircle];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-electric-cyan text-xs font-bold tracking-[0.3em] uppercase mb-4 block">{t.services.badge}</span>
          <h1 className="text-4xl md:text-6xl font-black font-display mb-4">{t.services.title}</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.services.items.map((service: any, i: number) => {
            const Icon = icons[i];
            return (
              <div key={i} className="bg-[#081219]/80 backdrop-blur-xl border border-electric-cyan/10 rounded-2xl p-8 flex flex-col h-full hover:border-electric-cyan/30 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-electric-cyan/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-electric-cyan" />
                </div>
                <div className="flex flex-col mb-4">
                  <span className="text-3xl font-bold bg-gradient-to-br from-electric-cyan to-white text-transparent bg-clip-text leading-tight">{service.price}</span>
                  {service.priceNote && <span className="text-sm text-gray-400 mt-1">{service.priceNote}</span>}
                </div>
                <h3 className="text-xl font-bold mb-4 font-display">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">{service.shortDesc}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-electric-cyan shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto space-y-3">
                  <button className="flex items-center justify-center gap-2 w-full py-3 bg-electric-cyan text-[#050a0e] font-bold rounded-xl hover:bg-electric-cyan/90 transition-colors uppercase tracking-wide text-sm">
                    {service.ctaText} <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button className="w-full text-center text-sm text-electric-cyan hover:underline">{t.services.learnMore}</button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-electric-cyan/30 bg-electric-cyan/5 text-sm font-medium text-white">
            <Check className="w-4 h-4 text-electric-cyan" />
            {t.services.noCommitment}
          </span>
        </div>
      </div>
    </section>
  );
}
