/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import { Language } from './types';

export default function App() {
  // Default to Arabic ('ar') since the requested screenshot layout, text weights, and buttons are in Arabic.
  const [lang, setLang] = useState<Language>('ar');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [preselectedStyle, setPreselectedStyle] = useState('');
  
  // A trigger counter to signal the InquiriesList tracker to reload its localStorage data live
  const [bookingTrigger, setBookingTrigger] = useState(0);

  // Synchronize document direction with active language
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const handleOpenConsultation = () => {
    setPreselectedStyle('');
    setIsConsultationOpen(true);
  };

  const handleOpenConsultationWithStyle = (styleName: string) => {
    setPreselectedStyle(styleName);
    setIsConsultationOpen(true);
  };

  const handleBookingAdded = () => {
    setBookingTrigger(prev => prev + 1);
  };

  const handleViewPortfolio = () => {
    const portfolioSection = document.querySelector('#portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-luxury-cream text-[#1a1512] selection:bg-gold-brand/30 selection:text-black">
      
      {/* Premium Header */}
      <Header
        lang={lang}
        setLang={setLang}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Hero: Replicates exact design and colors of user screenshot */}
      <Hero
        lang={lang}
        onOpenConsultation={handleOpenConsultation}
        onViewPortfolio={handleViewPortfolio}
      />

      {/* About Section with live stats counter */}
      <About lang={lang} />

      {/* Services Section */}
      <Services lang={lang} />

      {/* Portfolio Section with interactive category filters and Lightboxes */}
      <Portfolio
        lang={lang}
        onOpenConsultationWithStyle={handleOpenConsultationWithStyle}
      />

      {/* Premium Dark Footer */}
      <Footer lang={lang} />

      {/* Free Consultation Appointment Modal Form */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        lang={lang}
        preselectedStyle={preselectedStyle}
        onBookingAdded={handleBookingAdded}
      />

    </div>
  );
}

