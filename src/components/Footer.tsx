/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY } from '../data';
import MadarLogo from './MadarLogo';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const d = DICTIONARY[lang];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0e0a09] text-white pt-20 pb-12 border-t border-[#231b17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#231b17]">
          
          {/* Col 1: Brand Info */}
          <div className="flex flex-col gap-5">
            <div className="flex">
              <MadarLogo lang={lang} size={40} />
            </div>
            
            <p className="font-sans text-sm text-gray-400 leading-relaxed max-w-sm">
              {lang === 'ar'
                ? "مكتب تصميم داخلي رائد متخصص في صياغة المساحات الفاخرة والعملية التي تعكس أسلوب حياتك وتجسد رؤيتك الإبداعية."
                : "A premier design bureau specializing in sculpting timeless, bespoke interiors that harmonise modern practicality with bespoke artistic expression."}
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#1e1511] hover:bg-gold-brand text-gray-300 hover:text-black flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#1e1511] hover:bg-gold-brand text-gray-300 hover:text-black flex items-center justify-center transition-all duration-300"
                aria-label="Pinterest"
              >
                {/* Use Facebook as alternative vector for Pinterest styling or standard FB */}
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-5">
            <h4 className="font-sans font-bold text-sm sm:text-base text-gold-brand uppercase tracking-wider">
              {d.footerLinks}
            </h4>
            
            <ul className="flex flex-col gap-3 font-sans text-sm text-gray-400">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, '#home')}
                  className="hover:text-gold-brand transition-colors duration-200"
                >
                  {d.navHome}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="hover:text-gold-brand transition-colors duration-200"
                >
                  {d.navServices}
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleLinkClick(e, '#portfolio')}
                  className="hover:text-gold-brand transition-colors duration-200"
                >
                  {d.navPortfolio}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, '#about')}
                  className="hover:text-gold-brand transition-colors duration-200"
                >
                  {d.navAbout}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="flex flex-col gap-5">
            <h4 className="font-sans font-bold text-sm sm:text-base text-gold-brand uppercase tracking-wider">
              {d.footerContact}
            </h4>
            
            <ul className="flex flex-col gap-4 font-sans text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-brand shrink-0 mt-1" />
                <span>
                  {lang === 'ar'
                    ? "طريق الملك فهد، حي المربع، الرياض، المملكة العربية السعودية"
                    : "King Fahd Road, Al Murabba, Riyadh, Saudi Arabia"}
                </span>
              </li>
              
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold-brand shrink-0" />
                <a href="tel:+966500000000" className="hover:text-gold-brand transition-colors font-mono">
                  +966 50 000 0000
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold-brand shrink-0" />
                <a href="mailto:info@arkan.design" className="hover:text-gold-brand transition-colors">
                  info@arkan.design
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter/Consult CTA */}
          <div className="flex flex-col gap-5">
            <h4 className="font-sans font-bold text-sm sm:text-base text-gold-brand uppercase tracking-wider">
              {lang === 'ar' ? "ساعات العمل" : "Business Hours"}
            </h4>
            
            <ul className="flex flex-col gap-2 font-sans text-sm text-gray-400">
              <li className="flex justify-between border-b border-[#231b17] pb-1.5">
                <span>{lang === 'ar' ? "الأحد - الخميس" : "Sun - Thu"}</span>
                <span className="font-mono text-xs">{lang === 'ar' ? "٩:٠٠ ص - ٦:٠٠ م" : "9:00 AM - 6:00 PM"}</span>
              </li>
              <li className="flex justify-between border-b border-[#231b17] pb-1.5 text-gray-500">
                <span>{lang === 'ar' ? "السبت" : "Saturday"}</span>
                <span className="font-mono text-xs">{lang === 'ar' ? "١٠:٠٠ ص - ٣:٠٠ م" : "10:00 AM - 3:00 PM"}</span>
              </li>
              <li className="flex justify-between text-gray-500">
                <span>{lang === 'ar' ? "الجمعة" : "Friday"}</span>
                <span className="font-semibold text-xs text-gold-dark">{lang === 'ar' ? "مغلق" : "Closed"}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Banner */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-gray-500 text-center sm:text-left">
            {d.footerCopy}
          </p>

          {/* Back to top */}
          <button
            onClick={handleScrollTop}
            className="group px-4 py-2 bg-[#1e1511] hover:bg-gold-brand text-gray-400 hover:text-black border border-[#2d221c] rounded-full text-xs font-sans font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer"
          >
            <span>{lang === 'ar' ? 'الرجوع للأعلى' : 'Back to Top'}</span>
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
