import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, Flame } from 'lucide-react';
import { portfolioData } from '../data';
import { SectionHeading } from '../components/SectionHeading';
import { MagneticButton } from '../components/MagneticButton';
import { sound } from '../utils/sound';

const categories = [
  { id: 'all', label: 'All Disciplines' },
  { id: 'core', label: 'Core CS & Python' },
  { id: 'ai-ml', label: 'AI & Data Foundations' },
  { id: 'web', label: 'Web Development' },
  { id: 'tools', label: 'Tools & Workflow' },
];

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { skills } = portfolioData;

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#FBE3E1] relative overflow-hidden">
      {/* Studio Ghost Watermark Number 02 */}
      <div className="absolute right-6 top-10 studio-watermark-num select-none">
        02
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            pillText="02 / TOOLBOX"
            title="SKILLS &amp; CAPABILITIES"
            subtitle="Core languages, tools, and algorithms I'm actively mastering during my computer science journey."
            className="mb-0 md:mb-0"
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    sound.playPluck();
                    setActiveCategory(cat.id);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all active:scale-95 ${
                    isActive
                      ? 'bg-[#141414] text-white shadow-md'
                      : 'bg-[#FFF8F5] text-[#141414]/75 hover:bg-white hover:text-[#FF4D00] border border-[#141414]/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Chips Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const isHighlight = skill.highlight;

              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                >
                  <MagneticButton strength={0.2} className="w-full">
                    <motion.div
                      whileHover={{ scale: 1.03, y: -4 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => sound.playPop()}
                      onMouseEnter={() => sound.playPluck()}
                      className={`relative p-5 rounded-3xl border transition-all cursor-pointer select-none group ${
                        isHighlight
                          ? 'bg-[#FFF8F5] border-[#FF4D00] shadow-md hover:shadow-xl'
                          : 'bg-[#FFF8F5] border-[#141414]/10 hover:border-[#141414]/30 hover:shadow-lg'
                      }`}
                    >
                      {/* Highlight Badge */}
                      {isHighlight && (
                        <div className="absolute top-3 right-3 flex items-center justify-center w-5 h-5 rounded-full bg-[#FF4D00] text-white">
                          <Flame className="w-3 h-3" />
                        </div>
                      )}

                      <div className="flex flex-col justify-between h-20">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#635E5D] group-hover:text-[#FF4D00] transition-colors">
                          {skill.level}
                        </span>

                        <div>
                          <h4 className="font-display text-2xl font-black text-[#141414] leading-none uppercase tracking-wide group-hover:text-[#FF4D00] transition-colors">
                            {skill.name}
                          </h4>
                        </div>
                      </div>

                      {/* Small Bottom Accent Line */}
                      <div className="mt-3 w-full bg-[#141414]/10 h-1 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isHighlight ? 'w-full bg-[#FF4D00]' : 'w-2/3 bg-[#141414] group-hover:w-full'
                          }`}
                        />
                      </div>
                    </motion.div>
                  </MagneticButton>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Learning Note Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-[#FFF8F5] border border-[#141414]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FF4D00] text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#141414]">
                Constantly expanding my computational thinking &amp; engineering toolkit.
              </p>
              <p className="text-xs text-[#635E5D] font-medium">
                Currently exploring neural networks, gradient descent fundamentals, and real-time inference.
              </p>
            </div>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest bg-[#141414] text-white px-4 py-2 rounded-full shrink-0">
            Active Study
          </span>
        </div>

      </div>
    </section>
  );
};

