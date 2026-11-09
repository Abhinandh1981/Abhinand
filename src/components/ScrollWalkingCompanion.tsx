import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const ScrollWalkingCompanion: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = window.pageYOffset / totalScroll;
        setScrollProgress(Math.min(1, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const percent = Math.round(scrollProgress * 100);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none select-none hidden md:block">
      {/* Background Track with Studio Graphite Tone */}
      <div className="relative w-full h-1.5 bg-[#201E1D]/15 backdrop-blur-sm">
        {/* Dynamic Orange Progress Bar */}
        <div
          className="h-full bg-[#FF4D00] transition-all duration-75 ease-out shadow-[0_0_12px_#FF4D00]"
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* Mini Walking Student Character traveling along the bar */}
      <div
        className="absolute bottom-1.5 transition-all duration-75 ease-out"
        style={{ left: `calc(${percent}% - 28px)` }}
      >
        <div className="relative flex flex-col items-center">
          {/* Studio Tag with % */}
          <span className="mb-1 text-[9px] font-mono font-bold bg-[#201E1D] text-white px-2 py-0.5 rounded-full shadow-md whitespace-nowrap flex items-center gap-1 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D00] animate-ping" />
            <span>{percent}%</span>
          </span>

          {/* Miniature Walking Vector Character */}
          <div className="w-12 h-14 animate-walk-bob">
            <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
              {/* Feet */}
              <circle cx="40" cy="110" r="6" fill="#201E1D" />
              <circle cx="60" cy="110" r="6" fill="#FF4D00" />
              {/* Trousers */}
              <path d="M36 75 L38 110 L44 110 L48 75 Z" fill="#EAE2DE" stroke="#201E1D" strokeWidth="2" />
              <path d="M52 75 L56 110 L62 110 L58 75 Z" fill="#FFF8F5" stroke="#201E1D" strokeWidth="2" />
              {/* Orange Studio Jacket */}
              <rect x="32" y="45" width="36" height="32" rx="8" fill="#FF4D00" stroke="#201E1D" strokeWidth="2.5" />
              {/* Head with sunglasses */}
              <circle cx="50" cy="30" r="14" fill="#F6B894" stroke="#201E1D" strokeWidth="2" />
              <rect x="42" y="26" width="16" height="6" rx="2" fill="#201E1D" />
              {/* Laptop in hand */}
              <rect x="58" y="52" width="18" height="12" rx="2" fill="#201E1D" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

