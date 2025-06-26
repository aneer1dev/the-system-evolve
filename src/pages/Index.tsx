
import React from 'react';
import TopNavigation from '../components/TopNavigation';
import HeroSection from '../components/HeroSection';
import PhilosophySection from '../components/PhilosophySection';
import FeaturesSection from '../components/FeaturesSection';
import AppPreviewSection from '../components/AppPreviewSection';
import SystemTab from '../components/SystemTab';
import CommunitySection from '../components/CommunitySection';
import WaitlistSection from '../components/WaitlistSection';
import Footer from '../components/Footer';
import SystemNotification from '../components/SystemNotification';

const Index = () => {
  return (
    <div className="min-h-screen bg-bg-primary">
      <TopNavigation />
      <HeroSection />
      <PhilosophySection />
      <FeaturesSection />
      <AppPreviewSection />
      <SystemTab />
      <CommunitySection />
      <WaitlistSection />
      <Footer />
      <SystemNotification />
    </div>
  );
};

export default Index;
