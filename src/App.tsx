import React, { useState } from 'react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatisticsSection } from './components/StatisticsSection';
import { WhatWeBuild } from './components/WhatWeBuild';
import { ServicesSection } from './components/ServicesSection';
import { AiSection } from './components/AiSection';
import { SaasSection } from './components/SaasSection';
import { ProductsSection } from './components/ProductsSection';
import { HowWeWork } from './components/HowWeWork';
import { TechnologySection } from './components/TechnologySection';
import { WhySpiderLap } from './components/WhySpiderLap';
import { CaseStudies } from './components/CaseStudies';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';

export const App: React.FC = () => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen bg-cyber-bg text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Desktop fluid trailing cursor */}
      <CustomCursor />

      {/* Interactive hardware-accelerated neural constellation canvas */}
      <ParticleCanvas />

      {/* Sticky futuristic navbar */}
      <Navbar onOpenProjectModal={() => setIsProjectModalOpen(true)} />

      {/* Main website sections */}
      <main className="relative z-10">
        <HeroSection onOpenProjectModal={() => setIsProjectModalOpen(true)} />
        <StatisticsSection />
        <WhatWeBuild onSelectCategory={() => setIsProjectModalOpen(true)} />
        <ServicesSection />
        <AiSection />
        <SaasSection />
        <ProductsSection />
        <HowWeWork />
        <TechnologySection />
        <WhySpiderLap />
        <CaseStudies />
        <ContactSection />
      </main>

      {/* Dark futuristic footer */}
      <Footer />

      {/* Global Interactive Project Estimator Modal */}
      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
      />

    </div>
  );
};

export default App;

