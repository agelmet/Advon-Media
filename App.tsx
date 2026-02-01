import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Check, ChevronLeft, ChevronRight, ExternalLink, Mail, 
  ArrowRight, ArrowUpRight, Play, ChevronDown, Globe, Star, Instagram 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioItems, reviews, faqItems, servicesData } from './data';
import { ServiceType, ServiceData } from './types';

// --- Components ---

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let stars: {x: number, y: number, size: number, opacity: number, speed: number, twinkleSpeed: number, twinkleDir: number}[] = [];
    let shootingStars: {x: number, y: number, length: number, speed: number, angle: number, opacity: number}[] = [];

    const initStars = () => {
        stars = [];
        const starCount = Math.floor(width * height / 2000); // Increased density (was 3000)
        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 2 + 0.5, // Increased size range (0.5 to 2.5)
                opacity: Math.random(),
                speed: Math.random() * 0.05 + 0.01,
                twinkleSpeed: Math.random() * 0.02 + 0.005,
                twinkleDir: 1
            });
        }
    };

    initStars();

    const createShootingStar = () => {
        if (Math.random() < 0.01) { // Chance per frame
            shootingStars.push({
                x: Math.random() * width,
                y: Math.random() * height / 2,
                length: Math.random() * 80 + 20,
                speed: Math.random() * 15 + 10,
                angle: Math.PI / 4,
                opacity: 1
            });
        }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Stars
      stars.forEach(star => {
        star.opacity += star.twinkleSpeed * star.twinkleDir;
        if (star.opacity > 1 || star.opacity < 0.2) {
            star.twinkleDir *= -1;
        }
        star.y -= star.speed;
        if (star.y < 0) star.y = height;

        ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(star.opacity)})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Shooting Stars
      createShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
          const star = shootingStars[i];
          star.x += Math.cos(star.angle) * star.speed;
          star.y += Math.sin(star.angle) * star.speed;
          star.opacity -= 0.02;

          if (star.opacity <= 0 || star.x > width || star.y > height) {
              shootingStars.splice(i, 1);
              continue;
          }

          const gradient = ctx.createLinearGradient(star.x, star.y, star.x - Math.cos(star.angle) * star.length, star.y - Math.sin(star.angle) * star.length);
          gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
          gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(star.x - Math.cos(star.angle) * star.length, star.y - Math.sin(star.angle) * star.length);
          ctx.stroke();
      }

      requestAnimationFrame(animate);
    }
    
    const animationId = requestAnimationFrame(animate);

    const handleResize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        initStars();
    };

    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050a0e]">
       <style>{`
      /* --- Updated Laser Beam Animation --- */
      .laser-beam-main {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        width: 80px; /* Wider beam */
        height: 100%;
        background: linear-gradient(180deg,
          rgba(71, 200, 245, 0.1) 0%,
          rgba(71, 200, 245, 0.4) 10%,
          rgba(71, 200, 245, 0.9) 30%,
          rgba(71, 200, 245, 1) 50%,
          rgba(71, 200, 245, 0.9) 70%,
          rgba(71, 200, 245, 0.4) 90%,
          rgba(71, 200, 245, 0.1) 100%
        );
        box-shadow: 
          0 0 30px rgba(71, 200, 245, 0.9),
          0 0 60px rgba(71, 200, 245, 0.7);
        animation: laser-pour 1.5s ease-in-out infinite, laser-glow 2s ease-in-out infinite;
        border-radius: 10px;
        will-change: transform, opacity;
        z-index: 2;
      }
      
      .laser-beam-main::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        width: 200px; /* Wider glow */
        height: 100%;
        background: linear-gradient(180deg,
          transparent 0%,
          rgba(71, 200, 245, 0.05) 20%,
          rgba(71, 200, 245, 0.15) 50%,
          rgba(71, 200, 245, 0.05) 80%,
          transparent 100%
        );
        filter: blur(20px);
      }
      
      /* Splash Effect at Bottom */
      .laser-splash {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 300px;
        height: 150px;
        background: radial-gradient(ellipse at center bottom,
          rgba(71, 200, 245, 0.6) 0%,
          rgba(71, 200, 245, 0.3) 30%,
          rgba(71, 200, 245, 0.1) 60%,
          transparent 100%
        );
        filter: blur(30px);
        animation: splash-pulse 1.5s ease-in-out infinite;
        will-change: transform, opacity;
        z-index: 3;
      }
      
      .laser-splash::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 150px;
        height: 80px;
        background: radial-gradient(ellipse at center bottom,
          rgba(71, 200, 245, 0.8) 0%,
          rgba(71, 200, 245, 0.4) 40%,
          transparent 100%
        );
        filter: blur(15px);
        animation: splash-inner 1s ease-in-out infinite;
      }
      
      /* Particle drops falling */
      .laser-particles {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        width: 80px; /* Adjusted for wider beam */
        height: 100%;
        overflow: hidden;
        pointer-events: none;
      }
      
      .laser-particle {
        position: absolute;
        width: 4px;
        height: 30px;
        background: linear-gradient(180deg, transparent, rgba(71, 200, 245, 0.8), transparent);
        border-radius: 2px;
        animation: particle-fall 0.8s linear infinite;
      }
      
      .laser-particle:nth-child(1) { left: 10%; animation-delay: 0s; }
      .laser-particle:nth-child(2) { left: 30%; animation-delay: 0.2s; }
      .laser-particle:nth-child(3) { left: 50%; animation-delay: 0.4s; }
      .laser-particle:nth-child(4) { left: 70%; animation-delay: 0.6s; }
      .laser-particle:nth-child(5) { left: 90%; animation-delay: 0.3s; }
      
      @keyframes particle-fall {
        0% { top: -30px; opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { top: 100%; opacity: 0; }
      }
      
      @keyframes laser-pour {
        0%, 100% { opacity: 0.8; transform: translateX(-50%) scaleY(1); }
        25% { opacity: 1; transform: translateX(-50%) scaleY(1.02); }
        50% { opacity: 0.9; transform: translateX(-50%) scaleY(0.98); }
        75% { opacity: 1; transform: translateX(-50%) scaleY(1.01); }
      }
      
      @keyframes laser-glow {
        0%, 100% {
          box-shadow: 0 0 30px rgba(71, 200, 245, 0.9), 0 0 60px rgba(71, 200, 245, 0.7);
        }
        50% {
          box-shadow: 0 0 50px rgba(71, 200, 245, 1), 0 0 100px rgba(71, 200, 245, 0.8);
        }
      }
      
      @keyframes splash-pulse {
        0%, 100% { opacity: 0.6; transform: translateX(-50%) scale(1); }
        50% { opacity: 1; transform: translateX(-50%) scale(1.2); }
      }
      
      @keyframes splash-inner {
        0%, 100% { opacity: 0.7; }
        50% { opacity: 1; }
      }
      
      /* Secondary beams */
      .laser-beam-secondary {
        position: absolute;
        top: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(180deg, transparent 0%, rgba(71, 200, 245, 0.1) 15%, rgba(71, 200, 245, 0.4) 40%, rgba(71, 200, 245, 0.5) 50%, rgba(71, 200, 245, 0.4) 60%, rgba(71, 200, 245, 0.1) 85%, transparent 100%);
        box-shadow: 0 0 10px rgba(71, 200, 245, 0.5);
        animation: laser-pour-secondary 2s ease-in-out infinite;
        border-radius: 2px;
        z-index: 1;
      }
      
      @keyframes laser-pour-secondary { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.6; } }

      /* Shimmer Text Effect */
      .text-shimmer {
        background: linear-gradient(to right, #47c8f5 20%, #ffffff 50%, #47c8f5 80%);
        background-size: 200% auto;
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        animation: shimmer 4s linear infinite;
      }
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      `}</style>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a0e] via-[#0a1418] to-[#0d1a20]"></div>
      
      {/* Canvas for Star Animation */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-70" />

      {/* Enhanced Laser Beam */}
      <div className="laser-beam-main">
        <div className="laser-particles">
          {[...Array(5)].map((_, i) => (
             <div key={i} className="laser-particle"></div>
          ))}
        </div>
      </div>
      <div className="laser-splash"></div>
      
      {/* Secondary beams for extra effect */}
      <div className="laser-beam-secondary" style={{ left: '45%' }}></div>
      <div className="laser-beam-secondary" style={{ left: '55%' }}></div>

      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[60vh] bg-[rgba(71,200,245,0.08)] blur-[120px]"></div>
      <div className="absolute bottom-1/3 left-0 w-1/2 h-1/2 bg-[rgba(71,200,245,0.04)] blur-[150px] rounded-full"></div>
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,10,15,0.8)_100%)]"></div>
    </div>
  );
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-[#0a1418] border border-electric-cyan/30 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl shadow-[0_0_50px_rgba(71,200,245,0.15)] custom-scrollbar"
        >
          <div className="sticky top-0 right-0 p-4 flex justify-end bg-gradient-to-b from-[#0a1418] to-transparent z-10">
            <button 
              onClick={onClose} 
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="px-8 pb-8 pt-2">
            <h3 className="text-2xl font-display font-bold text-electric-cyan mb-6 text-center leading-tight">
              {title}
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed font-body">
              {content.map((paragraph, idx) => (
                <p key={idx} className={paragraph.startsWith('•') ? 'pl-4' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const ServiceCard: React.FC<{ service: ServiceData; onReadMore: (s: ServiceData) => void }> = ({ service, onReadMore }) => {
  const Icon = service.icon;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#081219]/80 backdrop-blur-xl border border-electric-cyan/10 rounded-2xl p-8 hover:border-electric-cyan/30 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(71,200,245,0.15)] group flex flex-col h-full hover:translate-y-[-5px]"
    >
      <div className="w-14 h-14 rounded-2xl bg-electric-cyan/10 flex items-center justify-center mb-6 group-hover:bg-electric-cyan/20 transition-colors">
        <Icon className="w-7 h-7 text-electric-cyan" />
      </div>
      
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-3xl font-bold bg-gradient-to-br from-electric-cyan to-[#c9ff00] text-transparent bg-clip-text">
          {service.price}
        </span>
        {service.priceNote && (
          <span className="text-sm text-gray-400">{service.priceNote}</span>
        )}
      </div>

      <h3 className="text-xl font-bold mb-4 font-display">{service.title}</h3>
      <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
        {service.shortDesc}
      </p>

      {/* GIF for NFC Service */}
      {service.id === ServiceType.NFC && (
         <div className="mb-6 rounded-lg overflow-hidden border border-electric-cyan/20">
           <img src="https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6724bf7a4eb48eb705a7b389.gif" alt="NFC Tech" className="w-full h-auto object-cover opacity-80" />
         </div>
      )}

      <ul className="space-y-3 mb-8">
        {service.features.map((feature, i) => (
          <motion.li 
            key={i} 
            className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors cursor-default"
            whileHover={{ x: 5 }}
          >
            <Check className="w-4 h-4 text-electric-cyan shrink-0" />
            {feature}
          </motion.li>
        ))}
      </ul>

      <div className="mt-auto space-y-3">
        <a 
          href="#contact" 
          className="flex items-center justify-center gap-2 w-full py-3 bg-electric-cyan text-[#050a0e] font-bold rounded-xl hover:translate-y-[-2px] hover:shadow-[0_0_20px_rgba(71,200,245,0.4)] transition-all uppercase tracking-wide text-sm"
        >
          {service.ctaText}
          <ArrowUpRight className="w-4 h-4" />
        </a>
        <button 
          onClick={() => onReadMore(service)}
          className="w-full py-2 text-sm text-electric-cyan/80 hover:text-electric-cyan underline underline-offset-4 decoration-electric-cyan/30 hover:decoration-electric-cyan transition-all"
        >
          Περισσότερες πληροφορίες
        </button>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);
  
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // Ensure we are ready to render
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setIsReady(true);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const visiblePortfolio = portfolioItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="relative min-h-screen text-white font-body selection:bg-electric-cyan/30 selection:text-white">
      <Background />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        {/* Sticky Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#050a0e]/80 backdrop-blur-md border-b border-electric-cyan/10">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <a href="#" className="flex items-center gap-3">
              <img src="https://assets.cdn.filesafe.space/NkFUgZER3rrdnofCwAIl/media/648dd017a1f733fa5b51e5e9.png" alt="Advon Media" className="h-10 w-auto" />
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-electric-cyan">
              {['Υπηρεσίες', 'Πορτφόλιο', 'Αξιολογήσεις', 'FAQ', 'Επικοινωνία'].map((item) => (
                 <a 
                   key={item} 
                   href={`#${item === 'FAQ' ? 'faq' : item === 'Επικοινωνία' ? 'contact' : item === 'Αξιολογήσεις' ? 'reviews' : item === 'Πορτφόλιο' ? 'portfolio' : 'services'}`} 
                   className="relative group py-2"
                 >
                   {item}
                   <span className="absolute bottom-0 left-0 w-full h-[2px] bg-electric-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-300"></span>
                 </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center px-3 py-1.5 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 text-xs font-bold text-electric-cyan">
                 🇬🇷 EL
              </div>
              <button 
                className="md:hidden text-electric-cyan p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden bg-[#050a0e] border-b border-electric-cyan/20 overflow-hidden"
              >
                <nav className="flex flex-col p-6 gap-4 text-lg font-medium text-electric-cyan">
                  {['Services', 'Portfolio', 'Reviews', 'FAQ', 'Contact'].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)}>
                      {item === 'Services' ? 'Υπηρεσίες' : item === 'Portfolio' ? 'Πορτφόλιο' : item === 'Reviews' ? 'Αξιολογήσεις' : item === 'Contact' ? 'Επικοινωνία' : item}
                    </a>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20">
          <div className="container max-w-7xl mx-auto px-6 text-center z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric-cyan/30 bg-electric-cyan/5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-electric-cyan animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.2em] text-electric-cyan uppercase">ADVON MEDIA</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black font-display mb-8 leading-[0.95] tracking-tight"
            >
              Μετατρέπουμε<br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">Επισκέπτες</span> σε <span className="text-shimmer drop-shadow-[0_0_30px_rgba(71,200,245,0.3)]">Πελάτες</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Οι πιο αποτελεσματικές λύσεις marketing για τοπικές επιχειρήσεις και ελεύθερους επαγγελματίες.
              Ανεβείτε στην κορυφή των αποτελεσμάτων χωρίς ρίσκο.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a 
                href="#services" 
                className="px-8 py-4 bg-electric-cyan text-[#050a0e] font-bold text-lg uppercase tracking-wide rounded-xl shadow-[4px_4px_0_#c9ff00] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#c9ff00] transition-all flex items-center gap-2"
              >
                ΥΠΗΡΕΣΙΕΣ
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#portfolio" 
                className="px-8 py-4 bg-transparent border-2 border-electric-cyan text-electric-cyan font-bold text-lg uppercase tracking-wide rounded-xl hover:bg-electric-cyan hover:text-[#050a0e] hover:shadow-[0_0_40px_rgba(71,200,245,0.4)] transition-all flex items-center gap-2"
              >
                <Play className="w-5 h-5 fill-current" />
                ΠΟΡΤΦΟΛΙΟ
              </a>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 border-y border-electric-cyan/10 bg-[#0a1418]/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "2+", label: "ΧΡΟΝΙΑ ΕΜΠΕΙΡΙΑΣ" },
              { num: "50+", label: "ΙΚΑΝΟΠΟΙΗΜΕΝΟΙ ΠΕΛΑΤΕΣ" },
              { num: "100%", label: "ΕΠΙΤΥΧΙΑ" },
              { num: "30+", label: "5-STAR REVIEWS" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-6xl font-black font-display text-electric-cyan mb-2 drop-shadow-[0_0_20px_rgba(71,200,245,0.3)]">
                  {stat.num}
                </div>
                <div className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-electric-cyan text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Υπηρεσίες</span>
              <h2 className="text-4xl md:text-5xl font-black font-display mb-4">Λύσεις που Αποδίδουν</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {servicesData.map((service) => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  onReadMore={(s) => setSelectedService(s)} 
                />
              ))}
            </div>

            <div className="mt-16 text-center">
              <span className="trust-badge-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-full border border-electric-cyan/30 bg-electric-cyan/5 text-sm font-medium text-white cursor-default">
                <Check className="w-4 h-4 text-electric-cyan" />
                Χωρίς δεσμεύσεις - Cancel Anytime
              </span>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-32 bg-[#0a1418]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-electric-cyan text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Πορτφόλιο</span>
              <h2 className="text-4xl md:text-5xl font-black font-display mb-4">Δείτε μερικές από τις Δουλειές μας</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <AnimatePresence mode='wait'>
                {visiblePortfolio.map((item, index) => (
                  <motion.a 
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/5"
                  >
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                      <span className="flex items-center gap-2 text-sm font-bold text-electric-cyan">
                        Προβολή Ιστοσελίδας <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </motion.a>
                ))}
              </AnimatePresence>
            </div>

            <div className="flex justify-center items-center gap-6">
              <button onClick={prevPage} className="p-3 rounded-full border border-electric-cyan/30 hover:bg-electric-cyan/10 transition-colors">
                <ChevronLeft className="w-6 h-6 text-electric-cyan" />
              </button>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-2 rounded-full transition-all duration-300 ${i === currentPage ? 'w-8 bg-electric-cyan' : 'w-2 bg-electric-cyan/30'}`} 
                  />
                ))}
              </div>
              <button onClick={nextPage} className="p-3 rounded-full border border-electric-cyan/30 hover:bg-electric-cyan/10 transition-colors">
                <ChevronRight className="w-6 h-6 text-electric-cyan" />
              </button>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-32 relative overflow-hidden">
          {/* Decorative blur behind reviews */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-electric-cyan/5 blur-[120px] rounded-full"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <span className="text-electric-cyan text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Αξιολογήσεις</span>
              <h2 className="text-4xl md:text-5xl font-black font-display mb-4">Τι λένε οι πελάτες μας</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {reviews.map((review, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#081219]/90 backdrop-blur-md border border-electric-cyan/10 p-8 rounded-2xl"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-[#FBBC04] text-[#FBBC04]' : 'text-gray-600'}`} />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-8 italic leading-relaxed min-h-[80px]">"{review.text}"</p>
                  <div className="flex items-center gap-4">
                    <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-electric-cyan/20" />
                    <div>
                      <h4 className="font-bold text-sm text-white">{review.name}</h4>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
                          <span className="text-[8px] font-bold text-black">G</span>
                        </div>
                        Google Review
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
               <a 
                 href="https://share.google/zWUQyGTmywjaljaMW" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-8 py-4 border border-electric-cyan text-electric-cyan rounded-xl hover:bg-electric-cyan hover:text-[#050a0e] transition-all font-bold uppercase tracking-wide"
               >
                 Δείτε Όλες τις Αξιολογήσεις
                 <ExternalLink className="w-5 h-5" />
               </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-[#0a1418]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black font-display mb-4">Συχνές Ερωτήσεις</h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-[#081219] border border-electric-cyan/10 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between p-6 text-left font-medium hover:text-electric-cyan transition-colors"
                  >
                    {item.question}
                    <ChevronDown className={`w-5 h-5 transition-transform ${openFaqIndex === i ? 'rotate-180 text-electric-cyan' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === i && (
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 relative">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="text-electric-cyan text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Επικοινωνία</span>
            <h2 className="text-4xl md:text-6xl font-black font-display mb-8">Ας Συνεργαστούμε</h2>
            <p className="text-xl text-gray-400 mb-12">
              Στείλτε μας email με το τηλέφωνό σας για να συζητήσουμε τι ακριβώς χρειάζεστε.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="mailto:advonmd@gmail.com" 
                className="group bg-[#081219] border border-electric-cyan/20 p-8 rounded-2xl hover:border-electric-cyan/50 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-electric-cyan/10 rounded-xl flex items-center justify-center mx-auto mb-6 text-electric-cyan group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-electric-cyan flex items-center justify-center gap-2">
                  advonmd@gmail.com
                  <ArrowUpRight className="w-4 h-4" />
                </p>
              </a>

              <a 
                href="https://www.instagram.com/advon_media" 
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#081219] border border-electric-cyan/20 p-8 rounded-2xl hover:border-electric-cyan/50 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-electric-cyan/10 rounded-xl flex items-center justify-center mx-auto mb-6 text-electric-cyan group-hover:scale-110 transition-transform">
                  <Instagram className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">Instagram</h3>
                <p className="text-electric-cyan flex items-center justify-center gap-2">
                  @advon_media
                  <ArrowUpRight className="w-4 h-4" />
                </p>
              </a>
            </div>
          </div>
        </section>

        <footer className="py-8 bg-white border-t border-electric-cyan/20 text-[#050a0e]">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-medium">© 2026 Advon Media. Με επιφύλαξη παντός δικαιώματος.</p>
            <div className="flex gap-6 text-sm font-medium">
              <a href="#services" className="hover:text-electric-cyan transition-colors">Υπηρεσίες</a>
              <a href="#portfolio" className="hover:text-electric-cyan transition-colors">Πορτφόλιο</a>
              <a href="#contact" className="hover:text-electric-cyan transition-colors">Επικοινωνία</a>
            </div>
          </div>
        </footer>

        {/* Modal Popup */}
        <Modal 
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService?.modalContent.title || ''}
          content={selectedService?.modalContent.body || []}
        />
      </motion.div>
    </div>
  );
}