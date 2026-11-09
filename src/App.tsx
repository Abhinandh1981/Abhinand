import React, { useState } from 'react';
import { useLenis } from './hooks/useLenis';
import { portfolioData } from './data';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Toast } from './components/Toast';
import { ClickSparkles } from './components/ClickSparkles';
import { ScrollWalkingCompanion } from './components/ScrollWalkingCompanion';
import {
  HeroToAboutSquiggle,
  AboutToSkillsSquiggle,
  SkillsToProjectsSquiggle,
  ProjectsToJourneySquiggle,
  JourneyToContactSquiggle,
} from './components/SectionConnectors';
import { sound } from './utils/sound';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { JourneySection } from './sections/JourneySection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';

export const App: React.FC = () => {
  // Initialize Lenis Smooth Scrolling
  useLenis();

  const [isLoading, setIsLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = () => {
    sound.playSuccessChime();
    navigator.clipboard.writeText(portfolioData.personal.email).then(() => {
      setToastMessage('Email copied to clipboard!');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }).catch(() => {
      setToastMessage(portfolioData.personal.email);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    });
  };

  return (
    <div className="relative min-h-screen bg-[#FBE3E1] text-[#141414] font-sans overflow-x-hidden">
      {/* Interactive Global Click Sparkle Burst */}
      <ClickSparkles />

      {/* Intro Preloader Curtain */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Custom Trailing Studio Cursor */}
      <CustomCursor />

      {/* Floating Pill Sticky Navbar */}
      <Navbar />

      {/* Single Page Anchored Sections with Continuous Orange Squiggle Line Connectors */}
      <main className="relative">
        <HeroSection />
        <HeroToAboutSquiggle className="-my-8 md:-my-14 z-20" />
        <AboutSection onCopyEmail={handleCopyEmail} />
        <AboutToSkillsSquiggle className="-my-8 md:-my-14 z-20" />
        <SkillsSection />
        <SkillsToProjectsSquiggle className="-my-8 md:-my-14 z-20" />
        <ProjectsSection />
        <ProjectsToJourneySquiggle className="-my-8 md:-my-14 z-20" />
        <JourneySection />
        <JourneyToContactSquiggle className="-my-8 md:-my-14 z-20" />
        <ContactSection onCopyEmail={handleCopyEmail} />
      </main>

      {/* Studio Footer */}
      <Footer />

      {/* Interactive Bottom Scroll-Walking Student Companion */}
      <ScrollWalkingCompanion />

      {/* Copy-to-clipboard Toast Alert */}
      <Toast message={toastMessage} isVisible={showToast} />
    </div>
  );
};

export default App;

