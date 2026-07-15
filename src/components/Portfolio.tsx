/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, Minimize2, Layers, Sparkles } from 'lucide-react';
import { Language, Project } from '../types';
import { DICTIONARY, PROJECTS } from '../data';

interface PortfolioProps {
  lang: Language;
  onOpenConsultationWithStyle: (styleName: string) => void;
}

export default function Portfolio({ lang, onOpenConsultationWithStyle }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const d = DICTIONARY[lang];

  // Derive all unique categories
  const categories = [
    { key: 'all', label: d.allCategories },
    { key: 'Residential', label: lang === 'ar' ? 'سكني' : 'Residential' },
    { key: 'Commercial', label: lang === 'ar' ? 'تجاري' : 'Commercial' },
  ];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.categoryEn === selectedCategory);

  return (
    <section id="portfolio" className={`py-24 sm:py-32 bg-[#120e0c] text-white relative ${activeProject ? 'z-50' : 'z-10'}`}>
      {/* Decorative subtle texture backdrops */}
      <div className="absolute inset-0 bg-[radial-gradient(#3c2a21_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-brand/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brown-brand/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          

          <motion.h2
            id="portfolio-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight"
          >
            {d.portfolioTitle}
          </motion.h2>

          <motion.p
            id="portfolio-subheading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 font-sans text-sm sm:text-base text-gray-400 leading-relaxed"
          >
            {d.portfolioSubtitle}
          </motion.p>
        </div>

        {/* Filter Navigation */}
        <div id="portfolio-filters" className="flex justify-center mb-12 sm:mb-16">
          <div className="inline-flex p-1.5 bg-[#1e1511] rounded-full border border-[#2d221c]/60 shadow-inner">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`relative px-6 py-2 rounded-full font-sans text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.key
                    ? 'text-black font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {selectedCategory === cat.key && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-gold-brand rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div
          id="portfolio-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6 }}
                onClick={() => setActiveProject(project)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-[#2d221c] bg-[#1a120f] shadow-lg flex flex-col justify-between"
              >
                {/* Image Wrapper */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={project.image}
                    alt={lang === 'ar' ? project.titleAr : project.titleEn}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />
                  
                  {/* Floating Tag */}
                  <div className={`absolute top-4 ${lang === 'ar' ? 'right-4' : 'left-4'} px-3 py-1 bg-black/60 border border-gold-brand/30 rounded-full text-[11px] font-medium text-gold-brand backdrop-blur-md`}>
                    {lang === 'ar' ? project.categoryAr : project.categoryEn}
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6 sm:p-8">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-sans font-bold text-xl sm:text-2xl text-white group-hover:text-gold-brand transition-colors duration-200">
                        {lang === 'ar' ? project.titleAr : project.titleEn}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-400 font-sans">
                        <MapPin size={12} className="text-gold-brand" />
                        <span>{lang === 'ar' ? project.locationAr : project.locationEn}</span>
                      </div>
                    </div>
                    
                    <span className="font-mono text-xs text-gold-brand font-semibold px-2.5 py-1 rounded border border-gold-brand/20 bg-gold-brand/5 mt-1">
                      {project.year}
                    </span>
                  </div>

                  <p className="mt-4 font-sans text-xs sm:text-sm text-gray-400 line-clamp-2 leading-relaxed">
                    {lang === 'ar' ? project.descriptionAr : project.descriptionEn}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#2d221c]/60 flex items-center justify-between text-xs font-sans font-semibold text-gold-brand">
                    <span>{lang === 'ar' ? 'شاهد تفاصيل المشروع' : 'View Project Details'}</span>
                    <span className="rtl-flip text-[10px] group-hover:translate-x-1 transition-transform">➔</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Details / Lightbox Modal */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              id="portfolio-lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-md"
            >
              <motion.div
                id="portfolio-lightbox-card"
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1a120f] border border-[#2d221c] w-full max-w-3xl rounded-2xl shadow-2xl relative max-h-[85vh] overflow-y-auto scrollbar-thin"
              >
                {/* Close Button */}
                <button
                  id="lightbox-close-btn"
                  onClick={() => setActiveProject(null)}
                  className={`absolute top-4 ${lang === 'ar' ? 'left-4' : 'right-4'} z-10 p-2 rounded-full bg-black/60 hover:bg-gold-brand hover:text-black text-white transition-all duration-200 cursor-pointer`}
                  aria-label="Close Details"
                >
                  <X size={18} />
                </button>

                {/* Lightbox Hero Image */}
                <div className="relative h-[200px] sm:h-[300px] w-full overflow-hidden">
                  <img
                    src={activeProject.image}
                    alt={lang === 'ar' ? activeProject.titleAr : activeProject.titleEn}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a120f] via-transparent to-black/20" />
                </div>

                {/* Content Details */}
                <div className="p-5 sm:p-8">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-5 border-b border-[#2d221c]">
                    <div>
                      <span className="inline-block px-3 py-1 bg-gold-brand/10 text-gold-brand border border-gold-brand/20 rounded-full text-[10px] font-semibold mb-2">
                        {lang === 'ar' ? activeProject.categoryAr : activeProject.categoryEn}
                      </span>
                      <h3 className="font-sans font-bold text-xl sm:text-2xl text-white">
                        {lang === 'ar' ? activeProject.titleAr : activeProject.titleEn}
                      </h3>
                    </div>

                    <button
                      id="lightbox-book-btn"
                      onClick={() => {
                        const styleLabel = lang === 'ar' ? activeProject.titleAr : activeProject.titleEn;
                        onOpenConsultationWithStyle(styleLabel);
                        setActiveProject(null);
                      }}
                      className="px-5 py-2 bg-gold-brand hover:bg-gold-dark text-black font-sans text-xs sm:text-sm font-bold rounded-full transition-all duration-300"
                    >
                      {lang === 'ar' ? 'اطلب تصميماً مماثلاً' : 'Request Similar Design'}
                    </button>
                  </div>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-5 border-b border-[#2d221c]">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-gold-brand/5 text-gold-brand border border-gold-brand/10">
                        <MapPin size={15} />
                      </div>
                      <div>
                        <p className="text-[9px] text-gray-500 uppercase tracking-wider">{lang === 'ar' ? 'الموقع' : 'Location'}</p>
                        <p className="text-xs sm:text-sm font-semibold text-white">{lang === 'ar' ? activeProject.locationAr : activeProject.locationEn}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-gold-brand/5 text-gold-brand border border-gold-brand/10">
                        <Layers size={15} />
                      </div>
                      <div>
                        <p className="text-[9px] text-gray-500 uppercase tracking-wider">{lang === 'ar' ? 'المساحة' : 'Area'}</p>
                        <p className="text-xs sm:text-sm font-semibold text-white">{lang === 'ar' ? activeProject.areaAr : activeProject.areaEn}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-gold-brand/5 text-gold-brand border border-gold-brand/10">
                        <Calendar size={15} />
                      </div>
                      <div>
                        <p className="text-[9px] text-gray-500 uppercase tracking-wider">{lang === 'ar' ? 'العام' : 'Year'}</p>
                        <p className="text-xs sm:text-sm font-semibold text-white">{activeProject.year}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mt-5">
                    <h4 className="font-sans font-bold text-xs text-gold-brand mb-1.5">{lang === 'ar' ? 'نبذة عن المشروع' : 'Project Overview'}</h4>
                    <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {lang === 'ar' ? activeProject.descriptionAr : activeProject.descriptionEn}
                    </p>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
