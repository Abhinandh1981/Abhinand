import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { portfolioData } from '../data';
import { MarqueeStrip } from '../components/MarqueeStrip';
import { MagneticButton } from '../components/MagneticButton';

export const Footer: React.FC = () => {
  const { personal, marqueeItems } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141414] text-white pt-12 pb-8 overflow-hidden relative">
      
      {/* Top Footer Marquee Strip */}
      <div className="border-y border-white/10 py-3 mb-12">
        <MarqueeStrip
          items={marqueeItems}
          reverse={true}
          className="bg-transparent text-[#FFF8F5]"
          itemClassName="text-xl sm:text-2xl font-display font-bold tracking-wider uppercase px-4 text-[#FF4D00]"
          separator="✦"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Left: Brand & Institution Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
              <span className="w-8 h-8 rounded-full bg-[#FF4D00] text-white flex items-center justify-center font-display font-bold text-lg">
                A
              </span>
              <span className="font-display text-3xl font-black tracking-wider uppercase">
                {personal.name}
              </span>
            </div>
            <p className="text-xs text-white/60 font-medium max-w-sm">
              First-year B.Tech CSE (Artificial Intelligence) · {personal.college}, Thrissur, Kerala.
            </p>
          </div>

          {/* Center: Navigation Pill Links */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {portfolioData.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white/80 hover:text-[#FF4D00] hover:bg-white/5 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right: "Back to top" Magnetic Button */}
          <div>
            <MagneticButton strength={0.3}>
              <button
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                className="flex items-center gap-2 bg-[#FF4D00] hover:bg-[#E04300] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
              >
                <span>Back To Top</span>
                <ArrowUp className="w-4 h-4" />
              </button>
            </MagneticButton>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50 font-medium">
          <p className="flex items-center gap-1.5">
            Designed &amp; engineered with{' '}
            <Heart className="w-3.5 h-3.5 text-[#FF4D00] fill-[#FF4D00]" /> in Thrissur, Kerala.
          </p>

          <p>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

