import React from 'react';
import { Star, Mail, MessageCircle, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function GlobalContact() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a1418] to-[#050a0e] relative border-t border-electric-cyan/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-electric-cyan text-xs font-bold tracking-[0.3em] uppercase mb-4 block">{t.contact.badge}</span>
          <h2 className="text-4xl md:text-5xl font-black font-display text-white mb-6">{t.contact.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t.contact.desc}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-[#081219] p-8 md:p-10 rounded-3xl border border-electric-cyan/20">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">{t.contact.formName}</label>
                <input type="text" className="w-full bg-[#050a0e] border border-electric-cyan/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-electric-cyan transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">{t.contact.formEmail}</label>
                <input type="email" className="w-full bg-[#050a0e] border border-electric-cyan/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-electric-cyan transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">{t.contact.formPhone}</label>
                <input type="tel" className="w-full bg-[#050a0e] border border-electric-cyan/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-electric-cyan transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">{t.contact.formMessage}</label>
                <textarea rows={4} className="w-full bg-[#050a0e] border border-electric-cyan/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-electric-cyan transition-colors resize-none"></textarea>
              </div>
              <button className="w-full bg-electric-cyan text-[#050a0e] font-black uppercase tracking-widest py-4 rounded-xl hover:bg-white transition-colors">
                {t.contact.formSubmit}
              </button>
            </form>
          </div>

          {/* Alternative Info */}
          <div className="flex flex-col justify-center space-y-12">
            <div className="flex items-start gap-6 group cursor-pointer hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-2xl bg-electric-cyan/10 flex items-center justify-center shrink-0 border border-electric-cyan/30 group-hover:bg-electric-cyan group-hover:text-[#050a0e] transition-colors text-electric-cyan">
                <Calendar className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 font-display">{t.contact.bookTitle}</h3>
                <p className="text-gray-400 leading-relaxed">{t.contact.bookDesc}</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group cursor-pointer hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-2xl bg-electric-cyan/10 flex items-center justify-center shrink-0 border border-electric-cyan/30 group-hover:bg-electric-cyan group-hover:text-[#050a0e] transition-colors text-electric-cyan">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 font-display">{t.contact.emailTitle}</h3>
                <p className="text-gray-400 text-lg">angelos@advonmedia.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group cursor-pointer hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-2xl bg-electric-cyan/10 flex items-center justify-center shrink-0 border border-electric-cyan/30 group-hover:bg-electric-cyan group-hover:text-[#050a0e] transition-colors text-electric-cyan">
                <MessageCircle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 font-display">{t.contact.igTitle}</h3>
                <p className="text-gray-400 text-lg">@advon_media</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
