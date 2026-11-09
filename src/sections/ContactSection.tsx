import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Copy,
  CheckCircle2,
  Send,
  Github,
  Linkedin,
  Instagram,
  Mail,
  ArrowUpRight,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data';
import { SectionHeading } from '../components/SectionHeading';
import { MagneticButton } from '../components/MagneticButton';
import { StudentCharacter } from '../assets/illustrations/StudentCharacter';
import { sound } from '../utils/sound';

interface ContactSectionProps {
  onCopyEmail: () => void;
}

const socialIconMap: Record<string, React.ReactNode> = {
  Github: <Github className="w-5 h-5" />,
  Linkedin: <Linkedin className="w-5 h-5" />,
  Instagram: <Instagram className="w-5 h-5" />,
  Mail: <Mail className="w-5 h-5" />,
};

export const ContactSection: React.FC<ContactSectionProps> = ({ onCopyEmail }) => {
  const { personal, socials } = portfolioData;

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please write at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      sound.playSuccessChime();

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#FF4D00', '#141414', '#FBE3E1', '#FFFFFF'],
        });
      } catch (err) {
        // fallback gracefully
      }
    }, 900);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#FBE3E1] relative overflow-hidden">
      {/* Studio Ghost Watermark Number 05 */}
      <div className="absolute right-6 top-10 studio-watermark-num select-none">
        05
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        
        {/* Giant Headline */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#201E1D] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-md border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse" />
            <span>05 / GET IN TOUCH</span>
          </div>

          <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#141414] uppercase leading-[0.88] tracking-tight">
            LET'S BUILD <span className="text-[#FF4D00]">SOMETHING SMART</span> TOGETHER.
          </h2>

          <p className="mt-6 text-base sm:text-xl text-[#635E5D] font-medium max-w-2xl mx-auto">
            Have a project idea, campus collaboration, or just want to discuss Python &amp; AI?
            My inbox is always open.
          </p>
        </div>

        {/* Form and Contact Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (5 cols): Waving Character + Direct Info & Social Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Waving Student Character Card */}
            <div className="bg-[#201E1D] text-white p-6 rounded-3xl border border-white/10 shadow-lg flex items-center justify-between overflow-hidden relative">
              <div className="relative z-10 max-w-[180px]">
                <span className="text-[10px] font-mono uppercase text-[#FF4D00] font-bold block mb-1">
                  DISPATCH // STATUS
                </span>
                <h4 className="font-display text-2xl font-black uppercase text-white leading-tight">
                  ALWAYS READY TO CONNECT
                </h4>
                <p className="text-xs text-white/70 mt-1">
                  Send a transmission from Thrissur to anywhere.
                </p>
              </div>

              {/* Student Waving Variant */}
              <div className="w-28 sm:w-36 -mb-4 -mr-2">
                <StudentCharacter variant="waving" />
              </div>
            </div>
            
            {/* Quick Email Copy Card */}
            <div className="bg-[#FFF8F5] p-8 rounded-3xl border border-[#201E1D]/15 shadow-sm relative">
              <div className="crosshair-corner top-3 left-3 text-[#201E1D]/30" />
              <div className="crosshair-corner top-3 right-3 text-[#201E1D]/30" />

              <span className="text-xs font-bold uppercase tracking-widest text-[#FF4D00] block mb-2">
                DIRECT INBOX
              </span>
              <p className="text-lg sm:text-xl font-bold text-[#141414] font-mono break-all mb-4">
                {personal.email}
              </p>

              <MagneticButton strength={0.25} className="w-full">
                <button
                  onClick={onCopyEmail}
                  data-cursor="copy"
                  className="w-full flex items-center justify-center gap-2 bg-[#201E1D] hover:bg-[#FF4D00] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                >
                  <Copy className="w-4 h-4" />
                  <span>Copy To Clipboard</span>
                </button>
              </MagneticButton>
            </div>

            {/* Social Channels Grid */}
            <div className="bg-[#FFF8F5] p-8 rounded-3xl border border-[#141414]/10 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-[#635E5D] block mb-4">
                FIND ME ONLINE
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3.5 rounded-2xl bg-[#FBE3E1]/70 hover:bg-[#141414] hover:text-white transition-all text-[#141414] border border-[#141414]/5"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[#FF4D00] group-hover:text-white transition-colors">
                        {socialIconMap[social.icon] || <Sparkles className="w-4 h-4" />}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider">
                        {social.platform}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* College Details Card */}
            <div className="bg-[#141414] text-white p-7 rounded-3xl shadow-xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF4D00] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Academic Station</span>
              </div>
              <h4 className="font-display text-2xl uppercase tracking-wide font-black">
                {personal.college}
              </h4>
              <p className="text-xs text-white/70 mt-1 font-medium">
                {personal.branch} · {personal.location}
              </p>
            </div>

          </div>

          {/* Right Column (7 cols): Validated Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFF8F5] p-8 sm:p-12 rounded-[2.5rem] border-2 border-[#141414]/10 shadow-xl relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center flex flex-col items-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#FF4D00] text-white flex items-center justify-center mb-6 shadow-xl animate-bounce">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-display text-4xl sm:text-5xl font-black text-[#141414] uppercase tracking-tight mb-2">
                      MESSAGE TRANSMITTED!
                    </h3>
                    <p className="text-base text-[#635E5D] max-w-md mx-auto mb-8 font-medium">
                      Thank you for reaching out, {formData.name}. I'll review your note and get back to you promptly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="bg-[#141414] hover:bg-[#FF4D00] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    noValidate
                  >
                    <div className="flex items-center justify-between pb-4 border-b border-[#141414]/10">
                      <h3 className="font-display text-3xl font-black text-[#141414] uppercase tracking-tight">
                        TRANSMIT A NOTE
                      </h3>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF4D00] bg-[#FF4D00]/10 px-3 py-1 rounded-full">
                        Fast Response
                      </span>
                    </div>

                    {/* Name Input */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#141414] mb-2">
                        Your Name <span className="text-[#FF4D00]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ada Lovelace"
                        className={`w-full px-5 py-3.5 rounded-2xl bg-[#FBE3E1]/50 border ${
                          errors.name ? 'border-red-500 bg-red-50/50' : 'border-[#141414]/15'
                        } focus:outline-none focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 text-[#141414] placeholder:text-[#635E5D]/60 font-medium transition-all`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-600 font-bold flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#141414] mb-2">
                        Email Address <span className="text-[#FF4D00]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className={`w-full px-5 py-3.5 rounded-2xl bg-[#FBE3E1]/50 border ${
                          errors.email ? 'border-red-500 bg-red-50/50' : 'border-[#141414]/15'
                        } focus:outline-none focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 text-[#141414] placeholder:text-[#635E5D]/60 font-medium transition-all`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-600 font-bold flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message Area */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#141414] mb-2">
                        Your Message or Project Idea <span className="text-[#FF4D00]">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about what you'd like to collaborate on..."
                        className={`w-full px-5 py-3.5 rounded-2xl bg-[#FBE3E1]/50 border ${
                          errors.message ? 'border-red-500 bg-red-50/50' : 'border-[#141414]/15'
                        } focus:outline-none focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 text-[#141414] placeholder:text-[#635E5D]/60 font-medium transition-all resize-none`}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-red-600 font-bold flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <MagneticButton strength={0.2} className="w-full">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 bg-[#FF4D00] hover:bg-[#E04300] disabled:bg-stone-400 text-white py-4 rounded-full font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </MagneticButton>

                    <p className="text-center text-[11px] text-[#635E5D] font-medium">
                      Built with clean client-side validation · Ready for Formspree / EmailJS
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

