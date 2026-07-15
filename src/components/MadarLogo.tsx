import React from 'react';
import { Language } from '../types';

interface MadarLogoProps {
  lang: Language;
  layout?: 'horizontal' | 'vertical' | 'icon-only';
  size?: number;
  className?: string;
}

export default function MadarLogo({
  lang,
  layout = 'horizontal',
  size = 40,
  className = '',
}: MadarLogoProps) {
  const isRtl = lang === 'ar';

  const brandNameText = lang === 'ar' ? 'مدار' : 'Madar';
  const brandSubtitleText = lang === 'ar' ? 'للتصميم الداخلي' : 'Interior Design';

  if (layout === 'icon-only') {
    // If icon-only is requested but icon is deleted, let's just return a clean stylized first letter
    return (
      <div className={`font-sans font-extrabold text-xl text-gold-brand tracking-wider ${className}`}>
        {lang === 'ar' ? 'م' : 'M'}
      </div>
    );
  }

  if (layout === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        {/* Brand Name */}
        <span className="font-sans font-bold text-2xl text-gold-brand tracking-wider uppercase">
          {brandNameText}
        </span>
        {/* Subtitle */}
        <span className="text-[11px] sm:text-xs text-gray-400 mt-1 font-sans tracking-widest leading-relaxed">
          {brandSubtitleText}
        </span>
      </div>
    );
  }

  // Horizontal/Default layout
  return (
    <div 
      className={`flex flex-col select-none ${
        isRtl ? 'text-right' : 'text-left'
      } ${className}`}
    >
      <span className="font-sans font-bold text-lg sm:text-xl text-gold-brand leading-none tracking-wide">
        {brandNameText}
      </span>
      <span className="text-[9px] sm:text-[10px] text-gray-400 font-sans tracking-wide mt-1 leading-tight">
        {brandSubtitleText}
      </span>
    </div>
  );
}
