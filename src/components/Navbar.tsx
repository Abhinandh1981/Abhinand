import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { portfolioData } from '../data';
import { MagneticButton } from './MagneticButton';
import { SoundToggle } from './SoundToggle';
import { sound } from '../utils/sound';

export const Navbar: React.FC = () => {
  const { scrollDirection, isAtTop } = useScrollDirection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Auto-hide when scrolling down, show when scrolling up
  const isHidden = scrollDirection === 'down' && !isAtTop && !mobileMenuOpen;

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-10 py-4 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Floating Brand Pill */}
          <div className="pointer-events-auto">
            <a
              href="#hero"
              className="group flex items-center gap-2.5 bg-[#FFF8F5]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#141414]/10 shadow-sm hover:shadow-md transition-all hover:border-[#FF4D00]"
            >
              <span className="w-7 h-7 rounded-full bg-[#FF4D00] text-white flex items-center justify-center font-display font-bold text-base transition-transform group-hover:rotate-12">
                A
              </span>
              <span className="font-display font-black text-lg tracking-wider text-[#141414] uppercase">
                {portfolioData.personal.name}
              </span>
            </a>
          </div>

          {/* Center: Desktop Navigation Links Pill */}
          <nav className="hidden md:flex items-center gap-1 bg-[#FFF8F5]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#141414]/10 shadow-sm pointer-events-auto">
            {portfolioData.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#141414]/80 hover:text-[#FF4D00] hover:bg-[#FBE3E1] transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Status Pill, Sound Toggle & "Let's Talk" CTA */}
          <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto">
            {/* Interactive Sound Effects Toggle */}
            <SoundToggle />

            {/* Live Location / Status Badge (hidden on smallest screens) */}
            <div className="hidden lg:flex items-center gap-2 bg-[#FFF8F5]/80 backdrop-blur-md px-3.5 py-2 rounded-full border border-[#141414]/10 text-[11px] font-bold text-[#141414] tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Thrissur, KL</span>
            </div>

            {/* "Let's Talk" Orange Pill Button */}
            <MagneticButton strength={0.25}>
              <a
                href="#contact"
                className="group flex items-center gap-2 bg-[#FF4D00] hover:bg-[#E04300] text-white px-5 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                <span>Let's Talk</span>
                <div className="w-5 h-5 rounded-full bg-white text-[#FF4D00] flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>
            </MagneticButton>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#FFF8F5] border border-[#141414]/15 text-[#141414] shadow-sm active:scale-95"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#FBE3E1] pt-24 px-6 pb-10 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col gap-3">
              <div className="text-xs font-bold uppercase tracking-widest text-[#FF4D00] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Navigation
              </div>
              {portfolioData.navigation.map((item, idx) => (
                <motion.a
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-4xl font-black text-[#141414] hover:text-[#FF4D00] transition-colors uppercase tracking-tight py-2 border-b border-[#141414]/10"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#FF4D00] text-white py-3.5 rounded-full font-bold uppercase tracking-wider text-sm shadow-md"
              >
                Let's Talk · Contact Me
              </a>
              <div className="text-center text-xs font-semibold text-[#635E5D]">
                Thejus Engineering College · Thrissur, Kerala
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

