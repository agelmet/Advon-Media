import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { name: t.nav.services.toUpperCase(), path: '/services' },
    { name: t.nav.portfolio.toUpperCase(), path: '/portfolio' },
    { name: t.nav.contact.toUpperCase(), path: '/contact' },
    { name: 'PRIVACY POLICY', path: '#' },
    { name: 'COOKIES POLICY', path: '#' },
    { name: 'TERMS OF USE', path: '#' },
  ];

  return (
    <footer className="py-12 bg-[#050a0e] border-t border-electric-cyan/10 text-gray-400 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <Link to="/" className="shrink-0">
            <img src="https://assets.cdn.filesafe.space/NkFUgZER3rrdnofCwAIl/media/648dd017a1f733fa5b51e5e9.png" alt="Advon Media" className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100" />
          </Link>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            {links.map((link) => (
              <Link key={link.name} to={link.path} className="text-sm font-semibold tracking-wider hover:text-electric-cyan transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center md:text-left border-t border-white/5 pt-8 mt-8">
          <p className="text-sm">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
