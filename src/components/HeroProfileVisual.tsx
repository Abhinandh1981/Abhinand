import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Move, Eye, Sliders, ShieldCheck } from 'lucide-react';
import { sound } from '../utils/sound';

type StyleMode = 'greyish' | 'cinematic' | 'natural';

export const HeroProfileVisual: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [styleMode, setStyleMode] = useState<StyleMode>('greyish');
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Mouse tilt physics using Framer Motion springs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 280, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // 3D rotations based on cursor
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-14, 14]);

  // Parallax offsets for distinct layers
  // Background (Image C sculpture) moves slightly opposite
  const bgTranslateX = useTransform(smoothMouseX, [-0.5, 0.5], [10, -10]);
  const bgTranslateY = useTransform(smoothMouseY, [-0.5, 0.5], [10, -10]);

  // Foreground profile (Image B) floats forward
  const fgTranslateX = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);
  const fgTranslateY = useTransform(smoothMouseY, [-0.5, 0.5], [-8, 8]);

  // Dynamic reflection / glare position
  const glareX = useTransform(smoothMouseX, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(smoothMouseY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isDragging) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    sound.playPluck();
  };

  // Profile filter styles
  const getFilterClass = () => {
    switch (styleMode) {
      case 'greyish':
        // High-fashion monochrome greyish tone blending with intro
        return 'grayscale contrast-125 brightness-95 saturate-0';
      case 'cinematic':
        // Cool moody slate charcoal
        return 'grayscale-[85%] contrast-130 brightness-90 hue-rotate-15';
      case 'natural':
        return 'filter-none';
      default:
        return 'grayscale contrast-125';
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center select-none perspective-[1200px] z-20 py-2">
      {/* Interactive Movable Container (Supports 3D Tilt + Dragging) */}
      <motion.div
        ref={cardRef}
        drag
        dragConstraints={{ left: -80, right: 80, top: -40, bottom: 40 }}
        dragElastic={0.2}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          y: isHovered ? -6 : [0, -6, 0],
        }}
        transition={{
          y: isHovered
            ? { duration: 0.3 }
            : { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
        className={`relative w-72 sm:w-80 md:w-96 rounded-3xl overflow-hidden shadow-2xl border border-[#141414]/20 bg-[#161514] cursor-grab active:cursor-grabbing transition-shadow duration-300 ${
          isHovered ? 'shadow-[0_25px_60px_-15px_rgba(255,77,0,0.3)]' : 'shadow-2xl'
        }`}
      >
        {/* Layer 1: Image C - 3D Sculptural Coil Backdrop (Overlay Background) */}
        <motion.div
          style={{
            x: bgTranslateX,
            y: bgTranslateY,
            scale: 1.12,
          }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          {/* Sculpture image texture */}
          <img
            src="/images/sculpture-card-bg.jpg"
            alt="3D Sculpture Architecture Backdrop"
            className="w-full h-full object-cover object-center opacity-85 brightness-95 contrast-110"
          />

          {/* Studio dark vignette and ambient gradient to meld with Abhinand */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-[#121110]/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#141414]/80 via-transparent to-[#141414]/90" />
          {/* Subtle warm studio orange glow reflection */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#FF4D00]/20 rounded-full blur-3xl pointer-events-none" />
        </motion.div>

        {/* Dynamic Glass Glare Overlay */}
        <motion.div
          style={{
            background: `radial-gradient(circle 240px at ${glareX} ${glareY}, rgba(255,255,255,0.18), transparent 70%)`,
          }}
          className="absolute inset-0 pointer-events-none z-30 mix-blend-overlay"
        />

        {/* Top Control Bar inside the Card */}
        <div className="relative z-30 pt-3.5 px-4 flex items-center justify-between text-[11px] font-mono tracking-wider text-white/80">
          <div className="flex items-center gap-1.5 bg-[#141414]/75 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse" />
            <span className="font-bold text-white text-[10px] tracking-widest uppercase">
              ABHINAND · PROFILE
            </span>
          </div>

          <div className="flex items-center gap-1 bg-[#141414]/75 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[10px] text-white/70">
            <Move className="w-3 h-3 text-[#FF4D00]" />
            <span className="hidden sm:inline">MOVABLE</span>
          </div>
        </div>

        {/* Layer 2: Image B - Abhinand's Profile in Greyish Shade Style */}
        <motion.div
          style={{
            x: fgTranslateX,
            y: fgTranslateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative z-20 flex flex-col items-center justify-end h-[340px] sm:h-[390px] md:h-[430px] pt-4 px-3"
        >
          {/* Profile Photo Container with Greyish Blend & Soft Bottom Fade */}
          <div className="relative w-full h-full flex items-end justify-center overflow-hidden">
            <motion.img
              src="/images/profile-portrait-feathered.png"
              alt="Abhinand Profile"
              className={`max-h-full w-auto object-contain object-bottom drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] transition-all duration-500 ease-out ${getFilterClass()}`}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />

            {/* Seamless Bottom Gradient to blend into card floor */}
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent pointer-events-none" />
          </div>

          {/* Floating Pill on Abhinand's Chest / Waist (Studio Signature Badge) */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-16 sm:bottom-18 z-30"
          >
            <div className="bg-[#141414]/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold py-1.5 px-3.5 rounded-full border border-white/15 shadow-xl flex items-center gap-2">
              <span className="text-[#FF4D00]">✦</span>
              <span className="tracking-wide">FIRST-YEAR · CSE (AI)</span>
              <span className="text-white/40">|</span>
              <span className="text-[#FF4D00] font-mono">THRISSUR</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Card Bottom Bar: Interactive Style Switcher + Status */}
        <div className="relative z-30 bg-[#121110]/95 backdrop-blur-md px-4 py-3 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono uppercase text-white/50 hidden sm:inline">
              Tone:
            </span>
            <div className="inline-flex rounded-full bg-white/5 p-0.5 border border-white/10">
              <button
                type="button"
                onClick={() => {
                  setStyleMode('greyish');
                  sound.playPop();
                }}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  styleMode === 'greyish'
                    ? 'bg-[#FF4D00] text-white shadow'
                    : 'text-white/60 hover:text-white'
                }`}
                title="Monochrome greyish studio tone (Requested style)"
              >
                Greyish
              </button>

              <button
                type="button"
                onClick={() => {
                  setStyleMode('cinematic');
                  sound.playPop();
                }}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  styleMode === 'cinematic'
                    ? 'bg-[#FF4D00] text-white shadow'
                    : 'text-white/60 hover:text-white'
                }`}
                title="Cinematic dark tone"
              >
                Slate
              </button>

              <button
                type="button"
                onClick={() => {
                  setStyleMode('natural');
                  sound.playPop();
                }}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  styleMode === 'natural'
                    ? 'bg-[#FF4D00] text-white shadow'
                    : 'text-white/60 hover:text-white'
                }`}
                title="Original color"
              >
                Color
              </button>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/60">
            <Sparkles className="w-3 h-3 text-[#FF4D00]" />
            <span className="tracking-wider">THEJUS 24–28</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Interactive Micro-Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-2.5 flex items-center gap-2 text-[11px] font-semibold text-[#141414]/70 bg-white/70 backdrop-blur-sm px-3.5 py-1 rounded-full border border-[#141414]/10 shadow-xs"
      >
        <Move className="w-3 h-3 text-[#FF4D00] animate-pulse" />
        <span>Movable 3D profile · Hover to tilt, drag to reposition</span>
      </motion.div>
    </div>
  );
};
