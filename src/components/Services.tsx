/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Home, Briefcase, Palette, Compass, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { DICTIONARY, SERVICES } from '../data';

interface ServicesProps {
  lang: Language;
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Home: Home,
  Briefcase: Briefcase,
  Palette: Palette,
  Compass: Compass,
};

export default function Services({ lang }: ServicesProps) {
  const d = DICTIONARY[lang];

  return (
    <section id="services" className="py-24 sm:py-32 bg-luxury-cream relative">
      {/* Decorative shadow layer */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0e0a09] to-transparent opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-1.5 text-gold-brand font-sans text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Star size={12} fill="currentColor" />
            <span>{lang === 'ar' ? 'ماذا نقدم لك' : 'What We Offer'}</span>
          </motion.div>
          
          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brown-brand tracking-tight leading-tight"
          >
            {d.servicesTitle}
          </motion.h2>
          
          <motion.p
            id="services-subheading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 font-sans text-sm sm:text-base text-gray-600 leading-relaxed"
          >
            {d.servicesSubtitle}
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Star;
            return (
              <motion.div
                key={service.id}
                id={`service-card-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative bg-white border border-[#eae2d5] p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-gold-brand/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Accent line */}
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-gold-brand to-gold-dark rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-luxury-cream group-hover:bg-[#dfb76c]/10 text-brown-brand group-hover:text-gold-dark flex items-center justify-center transition-all duration-300 mb-6">
                    <IconComponent size={24} className="transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="font-sans font-bold text-lg sm:text-xl text-brown-brand mb-3 group-hover:text-gold-dark transition-colors duration-200">
                    {lang === 'ar' ? service.titleAr : service.titleEn}
                  </h3>
                  
                  <p className="font-sans text-sm text-gray-500 leading-relaxed">
                    {lang === 'ar' ? service.descriptionAr : service.descriptionEn}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-[#eae2d5]/60 flex items-center gap-1.5 text-xs font-sans font-semibold text-gold-dark opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                  <span>{lang === 'ar' ? 'اكتشف المزيد' : 'Learn More'}</span>
                  <span className="rtl-flip text-[10px]">➔</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
