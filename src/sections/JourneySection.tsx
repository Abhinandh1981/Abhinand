import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Sparkles, Compass } from 'lucide-react';
import { portfolioData } from '../data';
import { SectionHeading } from '../components/SectionHeading';
import { StudentCharacter } from '../assets/illustrations/StudentCharacter';

export const JourneySection: React.FC = () => {
  const { journey } = portfolioData;

  return (
    <section id="journey" className="py-24 md:py-32 bg-[#FBE3E1] relative overflow-hidden">
      {/* Studio Ghost Watermark Number 04 */}
      <div className="absolute left-6 top-12 studio-watermark-num select-none">
        04
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        
        {/* Header with Traveler Character */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <SectionHeading
            pillText="04 / ROADMAP"
            title="MY JOURNEY"
            subtitle="From early science fascination to engineering undergraduate studies at Thejus Engineering College."
            className="mb-0"
          />

          {/* Traveler Student Character */}
          <div className="w-28 sm:w-36 shrink-0 self-center md:self-end">
            <StudentCharacter variant="traveler" />
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-16">
          
          {/* Vertical Progress Spine (Orange central track) */}
          <div className="absolute top-4 bottom-4 left-6 md:left-1/2 -translate-x-1/2 w-1.5 bg-[#141414]/15 rounded-full" />
          
          {/* Dynamic Fill Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute top-4 left-6 md:left-1/2 -translate-x-1/2 w-1.5 bg-[#FF4D00] rounded-full origin-top"
          />

          {/* Timeline Nodes */}
          <div className="space-y-12 md:space-y-16">
            {journey.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Indicator Node / Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#141414] border-4 border-[#FBE3E1] shadow-md flex items-center justify-center z-10">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FF4D00]" />
                  </div>

                  {/* Spacer for Alternate Desktop Layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Milestone Content Card */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-10">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className={`p-6 sm:p-8 rounded-3xl relative group hover:-translate-y-1 transition-all ${
                        item.badge
                          ? 'bg-[#201E1D] text-white border-2 border-[#FF4D00] shadow-xl'
                          : 'bg-[#FFF8F5] text-[#141414] border border-[#201E1D]/15 shadow-sm'
                      }`}
                    >
                      {/* Crosshairs */}
                      <div className="crosshair-corner top-3 left-3 opacity-30" />
                      <div className="crosshair-corner top-3 right-3 opacity-30" />

                      {/* Top Date & Badge Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                          item.badge ? 'bg-[#FF4D00] text-white' : 'bg-[#201E1D] text-white'
                        }`}>
                          <Calendar className={`w-3.5 h-3.5 ${item.badge ? 'text-white' : 'text-[#FF4D00]'}`} />
                          <span>{item.period}</span>
                        </span>

                        {item.badge && (
                          <span className="inline-flex items-center gap-1 bg-white/10 text-[#FF4D00] px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border border-[#FF4D00]/40">
                            <Sparkles className="w-3 h-3" />
                            <span>{item.badge}</span>
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className={`font-display text-2xl sm:text-3xl font-black uppercase leading-tight mb-1 transition-colors ${
                        item.badge ? 'text-white group-hover:text-[#FF4D00]' : 'text-[#141414] group-hover:text-[#FF4D00]'
                      }`}>
                        {item.title}
                      </h3>

                      {/* Location & Organization */}
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF4D00] uppercase tracking-wider mb-4">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.organization} · {item.location}</span>
                      </div>

                      {/* Description */}
                      <p className={`text-sm md:text-base leading-relaxed mb-5 font-medium ${
                        item.badge ? 'text-white/80' : 'text-[#635E5D]'
                      }`}>
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                              item.badge ? 'bg-white/10 text-white' : 'bg-[#EAE2DE] text-[#201E1D]'
                            }`}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

