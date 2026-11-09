import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Fast numeric counter
    const duration = 1200; // ms
    const stepTime = 16;
    const steps = duration / stepTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min(100, Math.floor((currentStep / steps) * 100));
      setCount(progress);

      if (progress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 600);
        }, 200);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-[#FF4D00] text-white flex flex-col justify-between p-6 md:p-12 overflow-hidden select-none"
        >
          {/* Top Row */}
          <div className="flex items-center justify-between text-xs md:text-sm font-semibold tracking-widest uppercase">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#141414] animate-ping" />
              ABHINAND · PORTFOLIO
            </span>
            <span>FIRST-YEAR CSE (AI)</span>
          </div>

          {/* Center Counter */}
          <div className="flex flex-col items-center justify-center my-auto">
            <div className="flex items-baseline font-display text-8xl md:text-[14rem] font-black tracking-tighter leading-none">
              <span>{count}</span>
              <span className="text-4xl md:text-7xl font-sans font-extrabold text-[#141414] ml-2">%</span>
            </div>
            <p className="text-sm md:text-base font-bold tracking-widest uppercase mt-4 text-[#FFF8F5]/90">
              Loading Creative Space &amp; Smart Experiences
            </p>
          </div>

          {/* Bottom Row */}
          <div className="flex items-center justify-between text-xs md:text-sm font-semibold tracking-widest uppercase text-white/80">
            <span>THEJUS ENGINEERING COLLEGE</span>
            <span>THRISSUR, KERALA</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

