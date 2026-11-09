import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BrainCircuit, Calendar, MapPin, Sparkles, Copy, ArrowUpRight, Terminal } from 'lucide-react';
import { portfolioData } from '../data';
import { SectionHeading } from '../components/SectionHeading';
import { MagneticButton } from '../components/MagneticButton';
import { StudentCharacter } from '../assets/illustrations/StudentCharacter';
import { sound } from '../utils/sound';

interface AboutSectionProps {
  onCopyEmail: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-5 h-5 text-[#FF4D00]" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-[#FF4D00]" />,
  Calendar: <Calendar className="w-5 h-5 text-[#FF4D00]" />,
  MapPin: <MapPin className="w-5 h-5 text-[#FF4D00]" />,
};

export const AboutSection: React.FC<AboutSectionProps> = ({ onCopyEmail }) => {
  const { personal, quickFacts } = portfolioData;

  return (
    <section id="about" className="py-24 md:py-32 bg-[#FBE3E1] relative overflow-hidden">
      {/* Studio Ghost Watermark Number 01 */}
      <div className="absolute right-4 top-12 studio-watermark-num select-none">
        01
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <SectionHeading
          pillText="01 / WHO I AM"
          title="MEET ABHINAND"
          subtitle="A curious first-year engineering student blending rigorous computer science with creative front-end design."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (7 cols): Split-text style narrative bio */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-[#FFF8F5] p-8 sm:p-10 rounded-3xl border border-[#141414]/10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4D00]/5 rounded-bl-[80px] pointer-events-none" />
              
              <div className="inline-flex items-center gap-2 bg-[#FF4D00]/10 text-[#FF4D00] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Bio &amp; Philosophy</span>
              </div>

              {/* High impact intro paragraph */}
              <p className="font-display text-3xl sm:text-4xl text-[#141414] leading-[1.1] uppercase mb-6 font-bold">
                "Driven by curiosity for how algorithms understand patterns and how human-centered interfaces bring them to life."
              </p>

              {/* Narrative paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-[#141414]/85 leading-relaxed font-medium">
                {personal.extendedBio.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#141414]/10 flex flex-wrap items-center gap-4">
                <MagneticButton strength={0.25}>
                  <button
                    onClick={onCopyEmail}
                    data-cursor="copy"
                    className="inline-flex items-center gap-2 bg-[#FF4D00] hover:bg-[#E04300] text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                  >
                    <Copy className="w-4 h-4" />
                    <span>Copy Email Address</span>
                  </button>
                </MagneticButton>

                <MagneticButton strength={0.25}>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-[#141414] hover:bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all"
                  >
                    <span>Send Message</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Student Coding Scene + Quick Facts + Studio Badge */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Studio Creative Character Card: Coding at Desk */}
            <div className="bg-[#201E1D] text-white p-6 rounded-3xl border border-white/10 shadow-lg relative overflow-hidden flex flex-col items-center text-center">
              <div className="w-full flex items-center justify-between text-[11px] font-mono text-white/50 mb-2">
                <span className="flex items-center gap-1.5 text-[#FF4D00] font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-ping" />
                  LIVE DEV
                </span>
                <span>THRISSUR [10.52° N, 76.21° E]</span>
              </div>

              {/* The Student Coding Variant */}
              <div className="w-56 sm:w-64 my-1">
                <StudentCharacter variant="coding" />
              </div>

              <div className="mt-2 text-xs font-bold uppercase tracking-wider text-white/80">
                Abhinand · Refining ML Models &amp; Modern React
              </div>
            </div>

            {/* Quick Facts Card (Matte Gray Surface with Crosshair marks) */}
            <div className="bg-[#FFF8F5] p-8 rounded-3xl border border-[#201E1D]/15 shadow-sm relative">
              <div className="crosshair-corner top-3 left-3 text-[#201E1D]/30" />
              <div className="crosshair-corner top-3 right-3 text-[#201E1D]/30" />
              <div className="crosshair-corner bottom-3 left-3 text-[#201E1D]/30" />
              <div className="crosshair-corner bottom-3 right-3 text-[#201E1D]/30" />

              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#201E1D]/10">
                <div className="text-xs font-bold uppercase tracking-widest text-[#FF4D00] flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  <span>Dossier // 2024</span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-[#201E1D] text-white px-2.5 py-0.5 rounded-full">
                  Undergrad
                </span>
              </div>

              <div className="space-y-4">
                {quickFacts.map((fact, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 6 }}
                    onMouseEnter={() => sound.playPluck()}
                    className="flex items-start gap-4 p-2.5 rounded-2xl hover:bg-[#EAE2DE]/50 transition-colors cursor-default"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-[#EAE2DE] flex items-center justify-center shrink-0 mt-0.5 border border-[#201E1D]/15">
                      {iconMap[fact.iconName] || <Sparkles className="w-5 h-5 text-[#FF4D00]" />}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#635E5D] block">
                        {fact.label}
                      </span>
                      <span className="text-base font-bold text-[#141414] block mt-0.5 leading-snug">
                        {fact.value}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Studio Badge Card with Interactive Spin */}
            <div className="bg-[#201E1D] text-white p-7 rounded-3xl relative overflow-hidden flex items-center justify-between shadow-xl border border-white/10">
              <div className="relative z-10 max-w-[200px]">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF4D00] block mb-1">
                  CURRENT STATUS
                </span>
                <h4 className="font-display text-2xl uppercase tracking-wide font-black leading-tight text-white">
                  OPEN FOR PROJECTS &amp; TECH COLLABS
                </h4>
                <p className="text-xs text-white/70 mt-2">
                  Let's create something bold together.
                </p>
              </div>

              {/* Rotating Circular Seal (Hover/Click to spin faster) */}
              <motion.div
                animate={{ rotate: 360 }}
                whileHover={{ scale: 1.15, rotate: 720 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => sound.playPop()}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="relative w-24 h-24 shrink-0 rounded-full border border-dashed border-[#FF4D00] flex items-center justify-center cursor-pointer select-none"
                title="Click me!"
              >
                <div className="w-14 h-14 rounded-full bg-[#FF4D00] text-white flex items-center justify-center font-display font-black text-2xl shadow-lg">
                  AI
                </div>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

