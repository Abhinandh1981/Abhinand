import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowDown, Code2, Terminal, Cpu } from 'lucide-react';
import { portfolioData } from '../data';
import { StudentCharacter } from '../assets/illustrations/StudentCharacter';
import { OrangeTabbyCat, TuxedoCat } from '../assets/illustrations/Cats';
import { HeroProfileVisual } from '../components/HeroProfileVisual';
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
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            delay: (i % 7) * 0.12,
            ease: 'easeInOut',
          }}
          whileHover={{
            y: -16,
            scale: 1.25,
            rotate: (i % 2 === 0 ? 1 : -1) * 8,
            color: hoverColor,
          }}
          onHoverStart={() => sound.playPluck()}
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
      <div className="absolute top-16 -left-12 md:left-6 w-32 sm:w-48 md:w-80 pointer-events-none opacity-40 sm:opacity-75 md:opacity-85 z-0">
        <HeroSquiggle variant="left" />
      </div>
      <div className="absolute top-20 -right-12 md:right-4 w-36 sm:w-52 md:w-88 pointer-events-none opacity-40 sm:opacity-75 md:opacity-85 z-0">
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
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 md:px-10 w-full text-center my-auto">
        
        {/* Top Studio Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-4 md:mb-6 flex-wrap justify-center px-2"
        >
          <span className="font-display text-sm sm:text-xl md:text-2xl tracking-widest text-[#FF4D00] uppercase font-bold">
            THEJUS 2026–30
          </span>
          <span className="text-[#141414]/30 font-bold">/</span>
          <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-[#635E5D]">
            CREATIVE AI &amp; CODE STUDIO
          </span>
        </motion.div>

        {/* Massive Headline with Overlapping Dark Pills */}
        <div className="relative inline-block w-full max-w-5xl mx-auto">
          {/* Main Display Headline with Kinetic Bouncing Letters */}
          <h1 className="font-display text-[2.5rem] xs:text-[3.1rem] sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10.5rem] font-black text-[#FF4D00] uppercase tracking-tighter sm:tracking-tight leading-[0.92] sm:leading-[0.88] select-none text-center">
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

          {/* Desktop Overlapping Black Pills (Hidden on Mobile to Prevent Obscuring Words) */}
          {/* Pill 1: Top Left overlap */}
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: -6 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 300, damping: 20 }}
            className="hidden sm:block absolute top-[8%] left-[6%] sm:left-[12%] md:left-[16%] z-20"
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
            className="hidden sm:block absolute top-[38%] right-[4%] sm:right-[10%] md:right-[12%] z-20"
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
            className="hidden sm:block absolute bottom-[22%] left-[10%] sm:left-[18%] md:left-[22%] z-20"
          >
            <div className="studio-pill bg-[#141414] text-white text-[11px] md:text-xs py-1.5 px-3.5 rounded-full shadow-lg border border-white/10 flex items-center gap-2">
              <span className="text-[#FF4D00]">📍</span>
              <span>THEJUS ENGG · THRISSUR</span>
            </div>
          </motion.div>
        </div>

        {/* Mobile Responsive Pill Row (Clean flex row so text stays 100% visible on phones) */}
        <div className="flex sm:hidden flex-wrap items-center justify-center gap-1.5 mt-3 mb-2 px-2">
          <div className="studio-pill bg-[#141414] text-white text-[10px] py-1 px-3 rounded-full shadow-md border border-white/10 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D00] animate-pulse" />
            <span>FIRST-YEAR · CSE (AI)</span>
          </div>
          <div className="studio-pill bg-[#141414] text-white text-[10px] py-1 px-3 rounded-full shadow-md border border-white/10 flex items-center gap-1.5">
            <Code2 className="w-3 h-3 text-[#FF4D00]" />
            <span>CREATIVE CODER</span>
          </div>
          <div className="studio-pill bg-[#141414] text-white text-[10px] py-1 px-3 rounded-full shadow-md border border-white/10 flex items-center gap-1.5">
            <span className="text-[#FF4D00]">📍</span>
            <span>THEJUS · THRISSUR</span>
          </div>
        </div>

        {/* Mobile Moving Font Ribbon (Continuous Kinetic Marquee in Mobile View) */}
        <div className="block sm:hidden w-full max-w-sm mx-auto overflow-hidden my-2.5 py-1.5 px-3 bg-[#141414] text-white rounded-full border border-white/15 shadow-lg">
          <MarqueeStrip
            items={[
              "ABHINAND SANTHOSH",
              "THEJUS 2026–30",
              "CREATIVE CODER",
              "CSE (AI) SPECIALIST",
              "PYTHON & ML",
              "INTERACTIVE DESIGN"
            ]}
            className="bg-transparent py-0.5 text-white"
            itemClassName="font-display text-[11px] font-black tracking-widest uppercase text-white px-2.5"
            separator="✦"
          />
        </div>

        {/* Walking Characters Staging Area */}
        <div className="relative mt-2 md:mt-4 max-w-4xl mx-auto flex flex-col sm:flex-row items-center sm:items-end justify-center gap-3 sm:gap-8 md:gap-14 z-20">
          
          {/* Walking Orange Tabby Cat (Desktop Flank) */}
          <div
            className="hidden sm:block w-24 sm:w-28 md:w-36 mb-2 cursor-pointer relative group flex-shrink-0"
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

          {/* Centerpiece: Real Profile Visual */}
          <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl mx-auto z-20">
            <HeroProfileVisual />
          </div>

          {/* Walking Tuxedo Cat (Desktop Flank) */}
          <div
            className="hidden sm:block w-24 sm:w-28 md:w-36 mb-2 cursor-pointer relative group flex-shrink-0"
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

          {/* Mobile Cats Row: Flanking side-by-side neatly beneath profile */}
          <div className="flex sm:hidden items-center justify-center gap-6 mt-1 mb-2">
            <div
              className="w-18 cursor-pointer relative group"
              onClick={() => triggerBubble(tabbyQuotes, setTabbyBubble)}
              title="Click me!"
            >
              <AnimatePresence>
                {tabbyBubble && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: -20, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.8 }}
                    className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#141414] text-white text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap shadow-lg z-30 pointer-events-none"
                  >
                    {tabbyBubble}
                  </motion.div>
                )}
              </AnimatePresence>
              <OrangeTabbyCat />
            </div>

            <div
              className="w-18 cursor-pointer relative group"
              onClick={() => triggerBubble(tuxedoQuotes, setTuxedoBubble)}
              title="Click me!"
            >
              <AnimatePresence>
                {tuxedoBubble && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: -20, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.8 }}
                    className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#141414] text-white text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap shadow-lg z-30 pointer-events-none"
                  >
                    {tuxedoBubble}
                  </motion.div>
                )}
              </AnimatePresence>
              <TuxedoCat />
            </div>
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

