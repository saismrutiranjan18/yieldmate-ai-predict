import React from 'react';
import Navbar from '../components/ui/navbar';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import StatsSection from '../components/sections/StatsSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import PredictionToolSection from '../components/sections/PredictionToolSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FooterSection from '../components/sections/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <HowItWorksSection />
        <PredictionToolSection />
        <TestimonialsSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
