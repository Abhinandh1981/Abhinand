import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowDown, Code2, Terminal, Cpu } from 'lucide-react';
import { portfolioData } from '../data';
import { StudentCharacter } from '../assets/illustrations/StudentCharacter';
import { OrangeTabbyCat, TuxedoCat } from '../assets/illustrations/Cats';
import { HeroSquiggle } from '../assets/squiggles/HeroSquiggle';
import { MarqueeStrip } from '../components/MarqueeStrip';
import { MagneticButton } from '../components/MagneticButton';
import { DraggableStickers } from '../components/DraggableStickers';
import { sound } from '../utils/sound';

const KineticWord: React.FC<{ text: string; className?: string; hoverColor?: string }> = ({
  text,
  className = '',
  hoverColor = '#141414',
}) => {
  return (
    <span className={`inline-block select-none ${className}`}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          className="inline-block transition-colors cursor-pointer"
          whileHover={{
            y: -16,
            scale: 1.25,
            rotate: (i % 2 === 0 ? 1 : -1) * 8,
            color: hoverColor,
          }}
          onHoverStart={() => sound.playPluck()}
          transition={{ type: 'spring', stiffness: 450, damping: 14 }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

export const HeroSection: React.FC = () => {
  const { personal, marqueeItems } = portfolioData;

  const [tabbyBubble, setTabbyBubble] = useState<string | null>(null);
  const [studentBubble, setStudentBubble] = useState<string | null>(null);
  const [tuxedoBubble, setTuxedoBubble] = useState<string | null>(null);

  const tabbyQuotes = ["meow! 🐾", "debugging python...", "purrrrr~", "feed me algorithms!"];
  const studentQuotes = ["Optimizing neural nets!", "Built with React & Vite", "Thejus CSE (AI) 🚀", "Welcome to my portfolio!"];
  const tuxedoQuotes = ["*curious sniff*", "git commit -m 'purr'", "100% bug-free", "meowww! ✨"];

  const triggerBubble = (
    quotes: string[],
    setBubble: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setBubble(randomQuote);
    setTimeout(() => setBubble(null), 2500);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 md:pt-36 flex flex-col justify-between overflow-hidden bg-[#FBE3E1]"
    >
      {/* Background Decorative Squiggle Lines (Left & Right) */}
      <div className="absolute top-16 -left-12 md:left-6 w-48 md:w-80 pointer-events-none opacity-85 z-0">
        <HeroSquiggle variant="left" />
      </div>
      <div className="absolute top-20 -right-16 md:right-4 w-52 md:w-88 pointer-events-none opacity-85 z-0">
        <HeroSquiggle variant="right" />
      </div>

      {/* Draggable Studio Stickers (Interactive floating stamps) */}
      <DraggableStickers />

      {/* Floating Mini Decorative Badges */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden md:flex absolute top-36 left-[18%] z-10 items-center gap-1.5 bg-[#FFF8F5] px-3.5 py-1.5 rounded-full border border-[#141414]/15 shadow-sm text-xs font-bold text-[#141414]"
      >
        <Terminal className="w-3.5 h-3.5 text-[#FF4D00]" />
        <span>Python &amp; ML</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0], rotate: [2, -2, 2] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden md:flex absolute top-44 right-[16%] z-10 items-center gap-1.5 bg-[#FFF8F5] px-3.5 py-1.5 rounded-full border border-[#141414]/15 shadow-sm text-xs font-bold text-[#141414]"
      >
        <Cpu className="w-3.5 h-3.5 text-[#FF4D00]" />
        <span>AI Specialization</span>
      </motion.div>

      {/* Central Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 w-full text-center my-auto">
        
        {/* Top Studio Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-4 md:mb-6"
        >
          <span className="font-display text-xl md:text-2xl tracking-widest text-[#FF4D00] uppercase font-bold">
            THEJUS 2024–28
          </span>
          <span className="text-[#141414]/30 font-bold">/</span>
          <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#635E5D]">
            CREATIVE AI &amp; CODE STUDIO
          </span>
        </motion.div>

        {/* Massive Headline with Overlapping Dark Pills */}
        <div className="relative inline-block w-full max-w-5xl mx-auto">
          {/* Main Display Headline with Kinetic Bouncing Letters */}
          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black text-[#FF4D00] uppercase tracking-tight leading-[0.88] select-none">
            <span className="block drop-shadow-sm">
              <KineticWord text="HI, I'M ABHINAND" hoverColor="#141414" />
            </span>
            <span className="block text-[#141414]">
              <KineticWord text="I BUILD SMART" hoverColor="#FF4D00" />
            </span>
            <span className="block drop-shadow-sm">
              <KineticWord text="THINGS" hoverColor="#141414" />
            </span>
          </h1>

          {/* Overlapping Black Pills (Two26 Studio Signature) */}
          {/* Pill 1: Top Left overlap */}
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: -6 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 300, damping: 20 }}
            className="absolute top-[8%] left-[6%] sm:left-[12%] md:left-[16%] z-20"
          >
            <div className="studio-pill bg-[#141414] text-white text-[11px] md:text-xs py-1.5 px-3.5 rounded-full shadow-lg border border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse" />
              <span>FIRST-YEAR · CSE (AI)</span>
            </div>
          </motion.div>

          {/* Pill 2: Center Right overlap */}
          <motion.div
            initial={{ scale: 0, rotate: 12 }}
            animate={{ scale: 1, rotate: 4 }}
            transition={{ delay: 0.45, type: 'spring', stiffness: 300, damping: 20 }}
            className="absolute top-[38%] right-[4%] sm:right-[10%] md:right-[12%] z-20"
          >
            <div className="studio-pill bg-[#141414] text-white text-[11px] md:text-xs py-1.5 px-3.5 rounded-full shadow-lg border border-white/10 flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-[#FF4D00]" />
              <span>CREATIVE CODER</span>
            </div>
          </motion.div>

          {/* Pill 3: Bottom Left/Center overlap */}
          <motion.div
            initial={{ scale: 0, rotate: -8 }}
            animate={{ scale: 1, rotate: -3 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 300, damping: 20 }}
            className="absolute bottom-[22%] left-[10%] sm:left-[18%] md:left-[22%] z-20"
          >
            <div className="studio-pill bg-[#141414] text-white text-[11px] md:text-xs py-1.5 px-3.5 rounded-full shadow-lg border border-white/10 flex items-center gap-2">
              <span className="text-[#FF4D00]">📍</span>
              <span>THEJUS ENGG · THRISSUR</span>
            </div>
          </motion.div>
        </div>

        {/* Walking Characters Staging Area */}
        <div className="relative mt-2 md:mt-4 max-w-4xl mx-auto flex items-end justify-center gap-4 sm:gap-12 md:gap-16 z-20">
          
          {/* Walking Orange Tabby Cat on the Left */}
          <div
            className="w-24 sm:w-32 md:w-36 mb-2 cursor-pointer relative group"
            onClick={() => triggerBubble(tabbyQuotes, setTabbyBubble)}
            title="Click me!"
          >
            <AnimatePresence>
              {tabbyBubble && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: -20, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.8 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#141414] text-white text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-xl z-30 pointer-events-none"
                >
                  {tabbyBubble}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#141414]" />
                </motion.div>
              )}
            </AnimatePresence>
            <OrangeTabbyCat />
          </div>

          {/* Walking Student Character in the Center */}
          <div
            className="w-48 sm:w-60 md:w-72 cursor-pointer relative group"
            onClick={() => triggerBubble(studentQuotes, setStudentBubble)}
            title="Click me!"
          >
            <AnimatePresence>
              {studentBubble && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: -25, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.8 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#FF4D00] text-white text-xs font-bold px-3.5 py-1.5 rounded-full whitespace-nowrap shadow-2xl z-30 pointer-events-none"
                >
                  {studentBubble}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#FF4D00]" />
                </motion.div>
              )}
            </AnimatePresence>
            <StudentCharacter />
          </div>

          {/* Walking Tuxedo Cat on the Right */}
          <div
            className="w-24 sm:w-32 md:w-36 mb-2 cursor-pointer relative group"
            onClick={() => triggerBubble(tuxedoQuotes, setTuxedoBubble)}
            title="Click me!"
          >
            <AnimatePresence>
              {tuxedoBubble && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: -20, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.8 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#141414] text-white text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-xl z-30 pointer-events-none"
                >
                  {tuxedoBubble}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#141414]" />
                </motion.div>
              )}
            </AnimatePresence>
            <TuxedoCat />
          </div>

        </div>

        {/* Quick CTA Actions under characters */}
        <div className="mt-4 mb-2 flex items-center justify-center gap-4 z-20 relative">
          <MagneticButton strength={0.3}>
            <a
              href="#projects"
              data-cursor="view"
              className="inline-flex items-center gap-2 bg-[#141414] hover:bg-[#FF4D00] text-white px-6 py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-xl"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </MagneticButton>

          <MagneticButton strength={0.3}>
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-[#FFF8F5] hover:bg-[#FFF] text-[#141414] border border-[#141414]/15 px-6 py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all shadow-sm"
            >
              <span>About Me</span>
              <Sparkles className="w-4 h-4 text-[#FF4D00]" />
            </a>
          </MagneticButton>
        </div>
      </div>

      {/* Signature Two26 Curved Orange Arch with Live Marquee at Base */}
      <div className="relative w-full mt-6 z-20 overflow-hidden">
        {/* SVG Arched Hill Header */}
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 md:h-24 block translate-y-1"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C480,20 960,20 1440,100 L1440,100 L0,100 Z"
            fill="#FF4D00"
          />
        </svg>

        {/* Solid Orange Marquee Band inside the Hill */}
        <div className="bg-[#FF4D00] py-4 sm:py-5 text-white">
          <MarqueeStrip
            items={marqueeItems}
            className="bg-[#FF4D00] text-white"
            itemClassName="text-xl sm:text-2xl md:text-3xl font-display font-black tracking-wider uppercase px-4 sm:px-6"
            separator="—"
          />
        </div>
      </div>
    </section>
  );
};

