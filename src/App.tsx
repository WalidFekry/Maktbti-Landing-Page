import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import AppContent from './components/AppContent';
import AppScreenshots from './components/AppScreenshots';
import VideoSection from './components/VideoSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import DownloadSection from './components/DownloadSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 5);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans text-right" dir="rtl">
      <Hero isVisible={isVisible} />
      <Features activeFeature={activeFeature} />
      <AppContent isVisible={isVisible} />
      <AppScreenshots />
      <VideoSection />
      <WhyChooseUs />
      <Testimonials />
      <DownloadSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;