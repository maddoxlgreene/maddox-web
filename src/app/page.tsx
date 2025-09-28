"use client";
import React from 'react';

import Background from '@/components/sections/Background';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/Hero';
import JourneySection from '@/components/sections/Journey';
import WorkSection from '@/components/sections/Collaborations';
import CertificationsSection from '@/components/sections/Certifications';
import ProjectsSection from '@/components/sections/Projects';
import ContactSection from '@/components/sections/Contact';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans relative overflow-x-hidden">
      <Background />
      <Header />

      <main>
        <HeroSection />
        <JourneySection />
        <WorkSection />
        <CertificationsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioPage;