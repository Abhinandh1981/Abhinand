import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Move, Code2, MapPin } from 'lucide-react';
import { sound } from '../utils/sound';

type StyleMode = 'greyish' | 'slate' | 'color';

export const HeroProfileVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [styleMode, setStyleMode] = useState<StyleMode>('greyish');
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Unified Mouse Coordinates for 3D Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 260, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Background Sculpture (Image C) - Back Layer: subtle counter-tilt & slow parallax
  const bgRotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const bgRotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const bgX = useTransform(smoothX, [-0.5, 0.5], [14, -14]);
  const bgY = useTransform(smoothY, [-0.5, 0.5], [10, -10]);

  // Foreground Profile (Image B) - Front Layer: dynamic responsive tilt & lift
  const fgRotateX = useTransform(smoothY, [-0.5, 0.5], [14, -14]);
  const fgRotateY = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const fgX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const fgY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  // Dynamic spotlight glare across the front profile card
  const glareX = useTransform(smoothX, [-0.5, 0.5], ['10%', '90%']);
  const glareY = useTransform(smoothY, [-0.5, 0.5], ['10%', '90%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
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

  // Profile filter classes based on selected style
  const getFilterClass = () => {
    switch (styleMode) {
      case 'greyish':
        // High-fashion monochrome greyish tone blending with intro
        return 'grayscale contrast-125 brightness-95 saturate-0';
      case 'slate':
        // Cool moody slate charcoal
        return 'grayscale-[80%] contrast-130 brightness-90 hue-rotate-15';
      case 'color':
        return 'filter-none';
      default:
        return 'grayscale contrast-125';
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-4xl mx-auto flex items-center justify-center select-none perspective-[1400px] z-20 py-4 px-2"
    >
      {/* ========================================================= */}
      {/* LAYER 1: BACKDROP - Image C Sculpture OUTSIDE & BEHIND   */}
      {/* ========================================================= */}
      <motion.div
        style={{
          rotateX: bgRotateX,
          rotateY: bgRotateY,
          x: bgX,
          y: bgY,
          transformStyle: 'preserve-3d',
        }}
        className="absolute inset-0 -inset-x-4 sm:-inset-x-12 md:-inset-x-16 -top-10 -bottom-6 flex items-center justify-center pointer-events-none z-0"
      >
        <div className="relative w-full h-full max-w-4xl rounded-3xl overflow-hidden">
          {/* Image C: 3D Ribbed Coil Sculpture Design */}
          <img
            src="/images/sculpture-wide-backdrop.png"
            alt="3D Sculpture Architecture Backdrop (Image C)"
            className="w-full h-full object-cover object-center opacity-85 brightness-90 contrast-110 drop-shadow-2xl"
          />

          {/* Deep dark gradient overlay around edges to blend with Hero section */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-[#141414]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FBE3E1]/20 via-transparent to-[#FBE3E1]/20" />

          {/* Studio Orange Glow Accent behind the sculpture */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#FF4D00]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Floating Architectural Backdrop Badge (Image C context) */}
          <div className="absolute top-4 left-6 hidden sm:flex items-center gap-2 bg-[#141414]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono tracking-wider text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D00] animate-pulse" />
            <span>3D ARCHITECTURAL OVERLAY · IMAGE C</span>
          </div>
        </div>
      </motion.div>

      {/* ========================================================= */}
      {/* LAYER 2: FOREGROUND - Image B Profile IN FRONT (Movable)  */}
      {/* ========================================================= */}
      <motion.div
        drag
        dragConstraints={{ left: -70, right: 70, top: -35, bottom: 35 }}
        dragElastic={0.18}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        style={{
          rotateX: fgRotateX,
          rotateY: fgRotateY,
          x: fgX,
          y: fgY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.25 }}
        className={`relative z-20 w-[290px] sm:w-[330px] md:w-[360px] rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.65)] border-2 border-white/20 bg-[#141414]/90 backdrop-blur-xl cursor-grab active:cursor-grabbing transition-shadow duration-300 ${
          isHovered
            ? 'shadow-[0_30px_60px_-10px_rgba(255,77,0,0.35)] border-[#FF4D00]/50'
            : 'shadow-2xl'
        }`}
      >
        {/* Dynamic Glass Glare Sheen across Profile Card */}
        <motion.div
          style={{
            background: `radial-gradient(circle 260px at ${glareX} ${glareY}, rgba(255,255,255,0.22), transparent 70%)`,
          }}
          className="absolute inset-0 pointer-events-none z-30 mix-blend-overlay"
        />

        {/* Card Header: Live Badge + Movable Status */}
        <div className="relative z-30 pt-3.5 px-4 flex items-center justify-between text-[11px] font-mono tracking-wider text-white">
          <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-ping" />
            <span className="font-bold text-white text-[10px] tracking-widest uppercase">
              ABHINAND
            </span>
          </div>

          <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15 text-[10px] text-white/80">
            <Move className="w-3 h-3 text-[#FF4D00]" />
            <span>DRAG ME</span>
          </div>
        </div>

        {/* Profile Image Container: New Image B in Greyish Shade Style */}
        <div className="relative z-20 w-full h-[340px] sm:h-[380px] md:h-[410px] flex items-center justify-center overflow-hidden pt-2 px-3">
          <motion.img
            src="/images/profile-new-feathered.png"
            alt="Abhinand (Image B Profile)"
            className={`w-full h-full object-cover object-top rounded-2xl drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] transition-all duration-500 ease-out ${getFilterClass()}`}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />

          {/* Smooth bottom gradient overlay blending into card bottom */}
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#141414] via-[#141414]/70 to-transparent pointer-events-none" />

          {/* Floating Pill on bottom of photo */}
          <div className="absolute bottom-4 z-30 flex items-center gap-2">
            <div className="bg-[#141414]/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold py-1.5 px-3.5 rounded-full border border-white/20 shadow-xl flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-[#FF4D00]" />
              <span className="tracking-wide">CSE (AI) · THEJUS</span>
              <span className="text-white/40">|</span>
              <span className="text-[#FF4D00] flex items-center gap-1 font-mono">
                <MapPin className="w-3 h-3 inline" />
                THRISSUR
              </span>
            </div>
          </div>
        </div>

        {/* Card Footer: Interactive Style Switcher Controls */}
        <div className="relative z-30 bg-[#100F0E] px-4 py-3 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono uppercase text-white/50">
              Style:
            </span>
            <div className="inline-flex rounded-full bg-white/10 p-0.5 border border-white/10">
              <button
                type="button"
                onClick={() => {
                  setStyleMode('greyish');
                  sound.playPop();
                }}
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  styleMode === 'greyish'
                    ? 'bg-[#FF4D00] text-white shadow'
                    : 'text-white/70 hover:text-white'
                }`}
                title="Monochrome greyish shade style (requested)"
              >
                Greyish
              </button>

              <button
                type="button"
                onClick={() => {
                  setStyleMode('slate');
                  sound.playPop();
                }}
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  styleMode === 'slate'
                    ? 'bg-[#FF4D00] text-white shadow'
                    : 'text-white/70 hover:text-white'
                }`}
                title="Cinematic slate tone"
              >
                Slate
              </button>

              <button
                type="button"
                onClick={() => {
                  setStyleMode('color');
                  sound.playPop();
                }}
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  styleMode === 'color'
                    ? 'bg-[#FF4D00] text-white shadow'
                    : 'text-white/70 hover:text-white'
                }`}
                title="Original color"
              >
                Color
              </button>
            </div>
          </div>

          <div className="flex items-center gap-1 text-[10px] font-mono text-white/60">
            <Sparkles className="w-3 h-3 text-[#FF4D00]" />
            <span>2024–28</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
