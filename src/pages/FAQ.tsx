import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-electric-cyan text-xs font-bold tracking-[0.3em] uppercase mb-4 block">{t.faq.badge}</span>
          <h1 className="text-4xl md:text-5xl font-black font-display mb-4">{t.faq.title}</h1>
        </div>

        <div className="space-y-4">
          {t.faq.items.map((item: any, i: number) => (
            <div key={i} className="bg-[#081219] border border-electric-cyan/10 rounded-xl overflow-hidden">
              <button 
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-6 text-left font-medium hover:text-electric-cyan transition-colors"
              >
                {item.question}
                <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === i ? 'rotate-180 text-electric-cyan' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
