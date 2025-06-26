
import React from 'react';
import TopNavigation from '../components/TopNavigation';
import HeroSection from '../components/HeroSection';
import PhilosophySection from '../components/PhilosophySection';
import FeaturesSection from '../components/FeaturesSection';
import AppPreviewSection from '../components/AppPreviewSection';
import CommunitySection from '../components/CommunitySection';
import WaitlistSection from '../components/WaitlistSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-bg-primary">
      <TopNavigation />
      <HeroSection />
      <PhilosophySection />
      <FeaturesSection />
      <AppPreviewSection />
      <CommunitySection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;
