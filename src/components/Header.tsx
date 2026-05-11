import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.portfolio, path: '/portfolio' },
    { name: t.nav.reviews, path: '/reviews' },
    { name: t.nav.faq, path: '/faq' },
    { name: t.nav.blog, path: '/blog' },
    { name: t.nav.contact, path: '/contact' },
  ];

  const handleLangToggle = () => {
    setLanguage(language === 'el' ? 'en' : 'el');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050a0e]/90 backdrop-blur-md border-b border-electric-cyan/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="https://assets.cdn.filesafe.space/NkFUgZER3rrdnofCwAIl/media/648dd017a1f733fa5b51e5e9.png" alt="Advon Media" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-electric-cyan">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative group py-2 ${isActive ? 'text-white' : 'hover:text-white transition-colors'}`
              }
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-electric-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-300"></span>
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div 
            onClick={handleLangToggle}
            className="hidden md:flex items-center px-4 py-1.5 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 text-xs font-bold text-electric-cyan cursor-pointer hover:bg-electric-cyan hover:text-[#050a0e] transition-colors select-none">
            {language === 'el' ? '🇬🇷 EL' : '🇬🇧 EN'}
          </div>
          <button
            className="md:hidden text-electric-cyan p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#050a0e] border-b border-electric-cyan/20">
          <nav className="flex flex-col p-6 gap-4 text-lg font-medium text-electric-cyan">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition-colors"
                end
              >
                {link.name}
              </NavLink>
            ))}
            <div 
              onClick={() => { handleLangToggle(); setIsOpen(false); }}
              className="mt-4 flex items-center px-4 py-2 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 text-sm font-bold text-electric-cyan w-max cursor-pointer select-none">
              {language === 'el' ? '🇬🇷 EL' : '🇬🇧 EN'}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
