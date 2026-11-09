import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data';
import { SectionHeading } from '../components/SectionHeading';
import { MagneticButton } from '../components/MagneticButton';
import { Project3DCard } from '../components/Project3DCard';
import { sound } from '../utils/sound';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#FBE3E1] relative overflow-hidden">
      {/* Studio Ghost Watermark Number 03 */}
      <div className="absolute right-4 top-14 studio-watermark-num select-none">
        03
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionHeading
            pillText="03 / SELECTED WORKS"
            title="FEATURED PROJECTS"
            subtitle="Hands-on software experiments combining Python data processing, AI models, and responsive web architecture."
            className="mb-0"
          />
          <div className="hidden md:flex items-center gap-2 bg-[#FFF8F5] px-4 py-2 rounded-full border border-[#141414]/10 text-xs font-bold uppercase tracking-wider text-[#141414]">
            <Layers className="w-4 h-4 text-[#FF4D00]" />
            <span>3 Active Case Studies</span>
          </div>
        </div>

        {/* Stacked Project Cards */}
        <div className="space-y-12 md:space-y-16">
          {projects.map((project, idx) => {
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                data-cursor="view"
                className="group studio-card bg-[#FFF8F5] p-6 sm:p-8 md:p-12 rounded-[2.5rem] border-2 border-[#141414]/10 shadow-lg relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column (5 cols): Project Details */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      {/* Top Meta info */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-display text-2xl font-black text-[#FF4D00]">
                          0{idx + 1}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#141414]/40" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#635E5D]">
                          {project.category} · {project.year}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[#141414] leading-[0.92] uppercase tracking-tight mb-4 group-hover:text-[#FF4D00] transition-colors">
                        {project.title}
                      </h3>

                      {/* Tagline */}
                      <p className="text-base sm:text-lg font-bold text-[#141414] mb-3">
                        {project.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-sm md:text-base text-[#635E5D] leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Key Metric Badge */}
                      {project.featuredMetric && (
                        <div className="inline-flex items-center gap-2 bg-[#FBE3E1] text-[#141414] px-3.5 py-1.5 rounded-full text-xs font-bold border border-[#FF4D00]/30 mb-6">
                          <Sparkles className="w-3.5 h-3.5 text-[#FF4D00]" />
                          <span>{project.featuredMetric}</span>
                        </div>
                      )}

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-[#141414]/5 hover:bg-[#141414] hover:text-white transition-colors text-[#141414] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-[#141414]/10">
                      <MagneticButton strength={0.25}>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#FF4D00] hover:bg-[#E04300] text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                        >
                          <span>Live Prototype</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </MagneticButton>

                      <MagneticButton strength={0.25}>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#141414] hover:bg-[#333] text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all"
                        >
                          <Github className="w-4 h-4" />
                          <span>Source Code</span>
                        </a>
                      </MagneticButton>
                    </div>
                  </div>

                  {/* Right Column (7 cols): Rounded "Monitor" Screen Mockup Frame with 3D Tilt */}
                  <div className="lg:col-span-7">
                    <Project3DCard>
                      <div className="bg-[#141414] p-3 sm:p-4 rounded-3xl shadow-2xl border-4 border-[#141414] overflow-hidden group-hover:scale-[1.01] transition-transform duration-500">
                        
                        {/* Monitor Top Bar */}
                        <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10">
                          {/* Traffic light dots */}
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                            <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                          </div>

                          {/* Centered browser address bar */}
                          <div className="bg-white/10 text-white/70 text-[10px] md:text-xs font-mono px-4 py-0.5 rounded-full truncate max-w-[200px] sm:max-w-xs">
                            https://abhinand.dev/{project.id}
                          </div>

                          <div className="w-12 text-right">
                            <span className="inline-block w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse" />
                          </div>
                        </div>

                        {/* Monitor Inner Screen Display Canvas */}
                        <div className={`mt-3 relative rounded-2xl overflow-hidden aspect-[16/10] bg-gradient-to-br ${project.previewGradient} flex flex-col justify-between p-6 sm:p-8 text-white select-none`}>
                          
                          {/* Inner Screen Header */}
                          <div className="flex items-center justify-between">
                            <div className="bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border border-white/20">
                              {project.category}
                            </div>
                            <span className="font-display text-xl tracking-wider opacity-80">
                              v1.0
                            </span>
                          </div>

                          {/* Inner Screen Graphic / Content */}
                          <div className="my-auto text-center py-6">
                            <span className="text-xs uppercase tracking-widest text-white/75 font-bold block mb-2">
                              PROJECT PREVIEW CANVAS
                            </span>
                            <h4 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white drop-shadow-md">
                              {project.title}
                            </h4>
                            <p className="text-xs sm:text-sm font-semibold max-w-md mx-auto text-white/90 mt-2">
                              {project.tagline}
                            </p>
                          </div>

                          {/* Inner Screen Footer Bar */}
                          <div className="flex items-center justify-between pt-3 border-t border-white/20 text-[11px] font-mono">
                            <span className="text-white/80">STATUS: DEPLOYED</span>
                            <span className="text-white/80 font-bold flex items-center gap-1">
                              INTERACTIVE DEMO <ExternalLink className="w-3 h-3" />
                            </span>
                          </div>
                        </div>

                      </div>
                    </Project3DCard>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

