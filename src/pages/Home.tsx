import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-20 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6 text-center z-10 animate-float">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-electric-cyan/50 bg-electric-cyan/10 mb-8 shadow-[0_0_30px_rgba(71,200,245,0.2)]">
            <span className="w-2.5 h-2.5 rounded-full bg-electric-cyan animate-pulse shadow-[0_0_15px_#47c8f5]"></span>
            <span className="text-xs font-black tracking-[0.25em] text-white uppercase">{t.home.badge}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display mb-8 leading-[1.05] tracking-tight drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)] max-w-5xl mx-auto">
            {t.home.badge} - <span className="text-shimmer drop-shadow-[0_0_40px_rgba(71,200,245,0.7)]">{t.home.titleHighlight}</span>{t.home.titleSuffix}
          </h1>

          <p className="text-lg md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
            {t.home.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/services" className="px-10 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl shadow-[0_0_30px_rgba(71,200,245,0.5)] hover:scale-105 hover:shadow-[0_0_50px_rgba(71,200,245,0.8)] transition-all flex items-center gap-3">
              {t.home.btnServices} <ArrowRight className="w-6 h-6" />
            </Link>
            <Link to="/portfolio" className="px-10 py-5 bg-transparent border-2 border-electric-cyan text-electric-cyan font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-electric-cyan hover:text-[#050a0e] hover:shadow-[0_0_40px_rgba(71,200,245,0.6)] transition-all flex items-center gap-3 backdrop-blur-md">
              <Play className="w-6 h-6 fill-current" /> {t.home.btnPortfolio}
            </Link>
            <a href="#book" className="px-10 py-5 bg-transparent border-2 border-white/20 text-white font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white/10 transition-all flex items-center gap-3 backdrop-blur-md">
              {t.home.btnBook}
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-electric-cyan/10 bg-[#0a1418]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.home.stats.map((stat: any, i: number) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-6xl font-black font-display text-electric-cyan mb-2 drop-shadow-[0_0_20px_rgba(71,200,245,0.3)]">
                {stat.num}
              </div>
              <div className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
