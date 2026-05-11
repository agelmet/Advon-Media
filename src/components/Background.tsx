import React, { useEffect, useRef } from 'react';

export default function Background() {
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
        const starCount = Math.floor(width * height / 2000); // Increased density
        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 2 + 0.5,
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
      /* --- Laser Beam Animation --- */
      .laser-beam-main {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        width: 80px;
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
        width: 200px;
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
      
      .laser-particles {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        width: 80px;
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
      
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
      }
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      `}</style>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a0e] via-[#0a1418] to-[#0d1a20]"></div>
      
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-70" />

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
}
