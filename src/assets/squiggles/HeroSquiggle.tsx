import React from 'react';
import { motion } from 'framer-motion';

interface HeroSquiggleProps {
  className?: string;
  variant?: 'left' | 'right' | 'full';
}

export const HeroSquiggle: React.FC<HeroSquiggleProps> = ({ className = '', variant = 'left' }) => {
  if (variant === 'left') {
    return (
      <svg
        viewBox="0 0 320 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none select-none ${className}`}
      >
        <motion.path
          d="M 50 40 
             C 120 10, 260 70, 240 180 
             C 215 310, 30 250, 40 370 
             C 50 470, 220 460, 270 520 
             C 310 570, 230 630, 160 590"
          stroke="#FF4D00"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
      </svg>
    );
  }

  if (variant === 'right') {
    return (
      <svg
        viewBox="0 0 340 620"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none select-none ${className}`}
      >
        <motion.path
          d="M 180 30 
             C 280 80, 310 210, 250 300 
             C 190 390, 80 340, 100 460 
             C 120 560, 260 540, 290 600"
          stroke="#FF4D00"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 1000 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      <motion.path
        d="M 30 280 
           C 180 120, 260 380, 420 220 
           C 560 80, 680 350, 840 180 
           C 920 100, 970 240, 990 200"
        stroke="#FF4D00"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
};

export const SparkleIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`inline-block w-5 h-5 ${className}`}
  >
    <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
  </svg>
);

