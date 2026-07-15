/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, HeartHandshake, Quote } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY } from '../data';

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const d = DICTIONARY[lang];

  const specs = [
    {
      title: d.aboutSpec1Title,
      desc: d.aboutSpec1Desc,
      icon: Award,
    },
    {
      title: d.aboutSpec2Title,
      desc: d.aboutSpec2Desc,
      icon: ShieldCheck,
    },
    {
      title: d.aboutSpec3Title,
      desc: d.aboutSpec3Desc,
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative side accent lines */}
      <div className="absolute top-1/2 left-0 w-24 h-[1px] bg-gold-brand/30" />
      <div className="absolute top-1/2 right-0 w-24 h-[1px] bg-gold-brand/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Split Layout: Text Content left/right, Image opposite */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center`}>
          
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#eae2d5]">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                alt="Luxury design project work details"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/70 to-transparent" />
              
              {/* Highlight card overlapping */}
              <div className={`absolute bottom-6 ${lang === 'ar' ? 'left-6' : 'right-6'} bg-gold-brand/95 backdrop-blur-md p-6 rounded-2xl max-w-xs shadow-xl text-[#1a1512]`}>
                <Quote size={20} className="text-[#3c2a21] opacity-60 mb-2 rotate-180" />
                <p className="font-sans font-bold text-sm leading-relaxed">
                  {lang === 'ar'
                    ? "التفاصيل الصغيرة ليست مجرد ديكور، بل هي جوهر الرقي والفخامة."
                    : "The micro details are not just decorations; they represent the heart of absolute refinement."}
                </p>
              </div>
            </div>

            {/* Behind frame border backdrop */}
            <div className="absolute -inset-4 border border-gold-brand/20 rounded-3xl -z-10 translate-x-2 translate-y-2 pointer-events-none" />
          </motion.div>

          {/* Text Content Side */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 text-gold-dark font-sans text-xs font-semibold uppercase tracking-wider"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gold-brand" />
              <span>{lang === 'ar' ? 'رحلتنا وفلسفتنا' : 'Our Legacy & Philosophy'}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brown-brand leading-tight"
            >
              {d.aboutTitle}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-4 font-sans text-sm sm:text-base text-gray-600 leading-relaxed"
            >
              <p>{d.aboutPara1}</p>
              <p>{d.aboutPara2}</p>
            </motion.div>

            {/* Specifications row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 pt-8 border-t border-[#eae2d5]">
              {specs.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex flex-col gap-2"
                  >
                    <div className="w-9 h-9 rounded-lg bg-luxury-cream text-gold-dark border border-gold-brand/10 flex items-center justify-center">
                      <IconComponent size={18} />
                    </div>
                    <h4 className="font-sans font-bold text-sm sm:text-base text-brown-brand">
                      {item.title}
                    </h4>
                    <p className="font-sans text-xs text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

        {/* Statistics Banner */}
        <div id="statistics-banner" className="mt-24 sm:mt-32">
          <div className="bg-[#1e1511] border border-[#3c2a21] rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-at-c from-gold-brand/5 to-transparent opacity-50 pointer-events-none" />
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
              
              <div className="flex flex-col items-center">
                <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gold-brand tracking-tight">120+</span>
                <span className="font-sans text-xs sm:text-sm text-gray-300 mt-2">{d.statsProjects}</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gold-brand tracking-tight">10+</span>
                <span className="font-sans text-xs sm:text-sm text-gray-300 mt-2">{d.statsExperience}</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gold-brand tracking-tight">98%</span>
                <span className="font-sans text-xs sm:text-sm text-gray-300 mt-2">{d.statsSatisfaction}</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gold-brand tracking-tight">15+</span>
                <span className="font-sans text-xs sm:text-sm text-gray-300 mt-2">{d.statsTeam}</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
