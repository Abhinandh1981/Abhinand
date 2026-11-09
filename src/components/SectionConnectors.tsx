import React from 'react';
import { motion } from 'framer-motion';

interface ConnectorProps {
  className?: string;
  variant?: 'left' | 'right' | 'center' | 'wave';
}

export const HeroToAboutSquiggle: React.FC<ConnectorProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 1440 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-48 md:max-h-64"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M -50 40 
             C 250 80, 420 230, 680 120 
             C 940 10, 1150 240, 1500 180"
          stroke="#FF4D00"
          strokeWidth="14"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Subtle Grayish Shadow Stroke */}
        <path
          d="M -50 44 
             C 250 84, 420 234, 680 124 
             C 940 14, 1150 244, 1500 184"
          stroke="#201E1D"
          strokeWidth="4"
          strokeOpacity="0.15"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export const AboutToSkillsSquiggle: React.FC<ConnectorProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 1440 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-44 md:max-h-56"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 1480 30 
             C 1200 180, 950 40, 650 220 
             C 400 360, 200 80, -40 200"
          stroke="#FF4D00"
          strokeWidth="14"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Loop Accent on Right */}
        <motion.path
          d="M 1180 80 C 1260 20, 1340 130, 1240 160 C 1140 180, 1150 70, 1220 70"
          stroke="#201E1D"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="8 6"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
      </svg>
    </div>
  );
};

export const SkillsToProjectsSquiggle: React.FC<ConnectorProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 1440 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-48 md:max-h-60"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M -40 120 
             C 320 20, 580 260, 920 80 
             C 1180 -40, 1350 200, 1500 90"
          stroke="#FF4D00"
          strokeWidth="16"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.7, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
    </div>
  );
};

export const ProjectsToJourneySquiggle: React.FC<ConnectorProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 1440 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-52 md:max-h-64"
        preserveAspectRatio="none"
      >
        {/* Big playful loop in the center */}
        <motion.path
          d="M 1480 80 
             C 1120 250, 950 -10, 720 180 
             C 540 320, 280 20, -50 160"
          stroke="#FF4D00"
          strokeWidth="15"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
    </div>
  );
};

export const JourneyToContactSquiggle: React.FC<ConnectorProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 1440 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-48 md:max-h-60"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M -30 60 
             C 380 220, 640 40, 960 220 
             C 1180 320, 1360 80, 1490 140"
          stroke="#FF4D00"
          strokeWidth="16"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
    </div>
  );
};

