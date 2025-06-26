
import React from 'react';
import TopNavigation from '../components/TopNavigation';
import HeroSection from '../components/HeroSection';
import PhilosophySection from '../components/PhilosophySection';
import FeaturesSection from '../components/FeaturesSection';
import AppPreviewSection from '../components/AppPreviewSection';
import CommunitySection from '../components/CommunitySection';
import SystemTab from '../components/SystemTab';
import WaitlistSection from '../components/WaitlistSection';
import Footer from '../components/Footer';
import SystemNotification from '../components/SystemNotification';
import FloatingTemplatePrompt from '../components/FloatingTemplatePrompt';

const Index = () => {
  return (
    <div className="min-h-screen bg-bg-primary">
      <TopNavigation />
      <HeroSection />
      <PhilosophySection />
      <FeaturesSection />
      <AppPreviewSection />
      <CommunitySection />
      <SystemTab />
      <WaitlistSection />
      <Footer />
      <SystemNotification />
      <FloatingTemplatePrompt />
    </div>
  );
};

export default Index;
