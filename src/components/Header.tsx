/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, PhoneCall } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY } from '../data';
import MadarLogo from './MadarLogo';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenConsultation: () => void;
}

export default function Header({ lang, setLang, onOpenConsultation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const d = DICTIONARY[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
  };

  const menuItems = [
    { label: d.navHome, href: '#home' },
    { label: d.navServices, href: '#services' },
    { label: d.navPortfolio, href: '#portfolio' },
    { label: d.navAbout, href: '#about' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#120e0c]/90 backdrop-blur-md border-b border-[#2d221c]/50 py-3 shadow-lg'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            id="header-logo"
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center select-none"
          >
            <MadarLogo lang={lang} size={36} />
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {/* Nav items handle spacing based on RTL/LTR via custom CSS or native flex spacing */}
            <div className={`flex items-center gap-6 lg:gap-8 ${lang === 'ar' ? 'flex-row' : 'flex-row'}`}>
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  id={`nav-link-${index}`}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="font-sans text-sm font-medium text-gray-300 hover:text-gold-brand transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Header Action Buttons */}
          <div id="header-actions" className="hidden md:flex items-center gap-4">
            {/* Phone Quick Contact */}
            <a
              id="header-phone-contact"
              href="tel:+966500000000"
              className="flex items-center gap-2 text-xs font-sans text-gray-300 hover:text-gold-brand transition-colors"
            >
              <PhoneCall size={14} className="text-gold-brand" />
              <span className="font-mono text-left tracking-wider">+966 50 000 0000</span>
            </a>

            {/* Language Switcher */}
            <button
              id="desktop-lang-toggle"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-600 text-xs font-sans font-medium text-gray-300 hover:text-gold-brand hover:border-gold-brand transition-all duration-200"
            >
              <Globe size={13} className="text-gold-brand" />
              <span>{d.langLabel}</span>
            </button>

            {/* Book Button */}
            <button
              id="desktop-consult-btn"
              onClick={onOpenConsultation}
              className="px-4 py-2 bg-gold-brand hover:bg-gold-dark text-black font-sans text-xs font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-gold-brand/20 active:scale-95"
            >
              {d.btnConsultation}
            </button>
          </div>

          {/* Mobile Toggle / Lang Actions */}
          <div className="flex md:hidden items-center gap-3">
            {/* Lang Button */}
            <button
              id="mobile-lang-toggle"
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded-md border border-gray-600 text-xs font-sans text-gray-300"
            >
              <Globe size={12} className="text-gold-brand" />
              <span>{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-md text-gray-300 hover:text-gold-brand hover:bg-[#2d221c]/30 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed inset-0 top-[56px] z-30 bg-[#120e0c]/98 backdrop-blur-lg border-t border-[#2d221c]/50 transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          <nav className="flex flex-col gap-5">
            {menuItems.map((item, index) => (
              <a
                key={index}
                id={`mobile-nav-link-${index}`}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="font-sans text-lg font-medium text-gray-300 hover:text-gold-brand border-b border-[#2d221c]/30 pb-2 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 mt-4">
            <a
              id="mobile-phone-contact"
              href="tel:+966500000000"
              className="flex items-center gap-3 py-2 text-sm text-gray-300 hover:text-gold-brand"
            >
              <PhoneCall size={16} className="text-gold-brand" />
              <span className="font-mono">+966 50 000 0000</span>
            </a>

            <button
              id="mobile-consult-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 bg-gold-brand hover:bg-gold-dark text-black font-sans text-sm font-bold rounded-lg transition-all duration-300 shadow-md text-center"
            >
              {d.btnConsultation}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
