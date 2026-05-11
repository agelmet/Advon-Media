import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black font-display mb-4 text-electric-cyan">{t.contactPage.title}</h1>
        <p className="text-xl text-gray-400">{t.contactPage.subtitle}</p>
      </div>
    </section>
  );
}
