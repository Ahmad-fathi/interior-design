/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY } from '../data';
import heroBg from '../assets/images/luxury_interior_hero_1784134176910.jpg';

interface HeroProps {
  lang: Language;
  onOpenConsultation: () => void;
  onViewPortfolio: () => void;
}

export default function Hero({ lang, onOpenConsultation, onViewPortfolio }: HeroProps) {
  const d = DICTIONARY[lang];
  
  // Custom image generated from the design prompt to match the user screenshot exactly
  // Imported via ESM so Vite builds/renames it properly for Cloudflare/Production.

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Luxury Modern Living Room"
          className="w-full h-full object-cover scale-105 select-none"
          referrerPolicy="no-referrer"
          style={{ objectPosition: 'center 60%' }}
        />
        {/* Cinematic dark radial and linear overlays for optimal contrast and text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a09] via-black/40 to-black/60 z-10" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/20 to-black/75 z-10" />
      </div>

      {/* Floating Sparkle Elements to add luxury atmosphere */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[25%] left-[15%] w-2 h-2 rounded-full bg-gold-brand opacity-40 animate-pulse" />
        <div className="absolute top-[40%] right-[10%] w-3 h-3 rounded-full bg-gold-light opacity-35 animate-bounce" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-[20%] left-[30%] w-1.5 h-1.5 rounded-full bg-white opacity-50 animate-pulse" style={{ animationDuration: '4s' }} />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        
        {/* Subtle top tag */}
       
        {/* Heading: Exact match from uploaded image */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
          className="font-sans font-light text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-tight sm:leading-none"
        >
          <span className="block drop-shadow-md">
            {d.heroTitle}
          </span>
        </motion.h1>

        {/* Subheading: Exact match from uploaded image */}
        <motion.p
          id="hero-subheading"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className="mt-6 font-sans font-light text-base sm:text-xl md:text-2xl text-gray-200/90 max-w-3xl mx-auto drop-shadow-md leading-relaxed"
        >
          {d.heroSubtitle}
        </motion.p>

        {/* Hero CTA Button container: Replicates identical shapes and custom colors */}
        <motion.div
          id="hero-cta-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none"
        >
          {/* Right Button (Gold/Beige Ocre): "احجز استشارة مجانية" */}
          <button
            id="hero-book-btn"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-3.5 bg-gold-brand hover:bg-gold-dark text-[#1c1410] font-sans font-bold text-sm sm:text-base rounded-full shadow-lg shadow-gold-brand/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{d.btnConsultation}</span>
            {lang === 'ar' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
          </button>

          {/* Left Button (Dark Warm Brown Translucent): "شاهد أعمالنا" */}
          <button
            id="hero-portfolio-btn"
            onClick={onViewPortfolio}
            className="w-full sm:w-auto px-8 py-3.5 bg-brown-brand/75 hover:bg-brown-dark/90 border border-brown-brand/35 text-white font-sans font-bold text-sm sm:text-base rounded-full shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{d.btnPortfolio}</span>
          </button>
        </motion.div>

    

      </div>
    </section>
  );
}
