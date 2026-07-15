/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Sparkles, Send } from 'lucide-react';
import { Language, BookingInquiry } from '../types';
import { DICTIONARY } from '../data';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  preselectedStyle?: string;
  onBookingAdded: () => void;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  lang,
  preselectedStyle = '',
  onBookingAdded,
}: ConsultationModalProps) {
  const d = DICTIONARY[lang];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [style, setStyle] = useState('');
  const [message, setMessage] = useState('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync preselected style from props when modal opens
  useEffect(() => {
    if (isOpen) {
      setStyle(preselectedStyle);
      setIsSuccess(false);
      setErrors({});
    }
  }, [isOpen, preselectedStyle]);

  if (!isOpen) return null;

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!name.trim()) {
      tempErrors.name = lang === 'ar' ? 'الاسم مطلوب' : 'Name is required';
    }
    if (!phone.trim()) {
      tempErrors.phone = lang === 'ar' ? 'رقم الهاتف مطلوب' : 'Phone is required';
    } else if (!/^[0-9+ ]{8,15}$/.test(phone)) {
      tempErrors.phone = lang === 'ar' ? 'رقم الهاتف غير صالح' : 'Invalid phone number';
    }
    if (email.trim() && !/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = lang === 'ar' ? 'البريد الإلكتروني غير صالح' : 'Invalid email format';
    }
    if (!style) {
      tempErrors.style = lang === 'ar' ? 'يرجى اختيار الطراز المفضل' : 'Please select a style';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate luxury api latency
    setTimeout(() => {
      const newInquiry: BookingInquiry = {
        id: 'inq-' + Date.now(),
        name,
        email,
        phone,
        style,
        message,
        createdAt: new Date().toISOString(),
        status: 'pending',
      };

      // Retrieve existing bookings and insert new
      const existing = localStorage.getItem('arkan_consultations');
      const list = existing ? JSON.parse(existing) : [];
      list.unshift(newInquiry);
      localStorage.setItem('arkan_consultations', JSON.stringify(list));

      setIsSubmitting(false);
      setIsSuccess(true);
      onBookingAdded(); // Trigger callback to update inquiries list live

      // Reset form fields
      setName('');
      setEmail('');
      setPhone('');
      setStyle('');
      setMessage('');
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Dialog Body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden z-10 my-auto"
        >
          {/* Header Accent Bar */}
          <div className="h-2 bg-gradient-to-r from-gold-brand to-gold-dark" />

          {/* Close Button */}
          <button
            id="close-consultation-modal"
            onClick={onClose}
            className={`absolute top-5 ${lang === 'ar' ? 'left-5' : 'right-5'} p-1.5 rounded-full text-gray-400 hover:text-black hover:bg-luxury-cream transition-colors cursor-pointer`}
          >
            <X size={18} />
          </button>

          <div className="p-6 sm:p-10">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Titles */}
                <div>
                  
                  <h3 className="font-sans font-bold text-2xl sm:text-3xl text-brown-brand">
                    {d.modalTitle}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-500 mt-1">
                    {d.modalSubtitle}
                  </p>
                </div>

                {/* Form Fields Grid */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans font-bold text-xs sm:text-sm text-brown-brand flex items-center justify-between">
                      <span>{d.formName} *</span>
                      {errors.name && <span className="text-red-500 text-xs font-normal">{errors.name}</span>}
                    </label>
                    <input
                      id="input-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={lang === 'ar' ? 'أحمد علي' : 'e.g. John Doe'}
                      className={`w-full px-4 py-2.5 bg-luxury-cream rounded-lg border text-sm font-sans text-brown-brand focus:outline-none focus:ring-1 transition-all ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                          : 'border-[#eae2d5] focus:ring-gold-brand focus:border-gold-brand'
                      }`}
                    />
                  </div>

                  {/* Phone & Email fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans font-bold text-xs sm:text-sm text-brown-brand flex items-center justify-between">
                        <span>{d.formPhone} *</span>
                        {errors.phone && <span className="text-red-500 text-xs font-normal">{errors.phone}</span>}
                      </label>
                      <input
                        id="input-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+966 50 000 0000"
                        className={`w-full px-4 py-2.5 bg-luxury-cream rounded-lg border text-sm font-sans text-brown-brand focus:outline-none focus:ring-1 transition-all ${
                          errors.phone
                            ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                            : 'border-[#eae2d5] focus:ring-gold-brand focus:border-gold-brand'
                        }`}
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans font-bold text-xs sm:text-sm text-brown-brand flex items-center justify-between">
                        <span>{d.formEmail}</span>
                        {errors.email && <span className="text-red-500 text-xs font-normal">{errors.email}</span>}
                      </label>
                      <input
                        id="input-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@mail.com"
                        className={`w-full px-4 py-2.5 bg-luxury-cream rounded-lg border text-sm font-sans text-brown-brand focus:outline-none focus:ring-1 transition-all ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                            : 'border-[#eae2d5] focus:ring-gold-brand focus:border-gold-brand'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Design Style */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans font-bold text-xs sm:text-sm text-brown-brand flex items-center justify-between">
                      <span>{d.formStyle} *</span>
                      {errors.style && <span className="text-red-500 text-xs font-normal">{errors.style}</span>}
                    </label>
                    <select
                      id="input-style"
                      value={style}
                      onChange={(e) => setStyle(e.target.value)}
                      className={`w-full px-4 py-2.5 bg-luxury-cream rounded-lg border text-sm font-sans text-brown-brand focus:outline-none focus:ring-1 transition-all cursor-pointer ${
                        errors.style
                          ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                          : 'border-[#eae2d5] focus:ring-gold-brand focus:border-gold-brand'
                      }`}
                    >
                      <option value="">{d.formStyleSelect}</option>
                      <option value="Modern">{d.formStyleModern}</option>
                      <option value="Classic">{d.formStyleClassic}</option>
                      <option value="Neo-Classic">{d.formStyleNeoClassic}</option>
                      <option value="Minimalist">{d.formStyleMinimalist}</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans font-bold text-xs sm:text-sm text-brown-brand">
                      {d.formMessage}
                    </label>
                    <textarea
                      id="input-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={d.formMessagePlaceholder}
                      className="w-full px-4 py-2.5 bg-luxury-cream rounded-lg border border-[#eae2d5] text-sm font-sans text-brown-brand focus:outline-none focus:ring-1 focus:ring-gold-brand focus:border-gold-brand transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  id="submit-consultation-form"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gold-brand hover:bg-gold-dark disabled:bg-gold-brand/60 text-black font-sans font-bold text-base rounded-lg transition-all duration-300 shadow-md hover:shadow-gold-brand/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>{d.btnSubmitting}</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} className="rtl-flip" />
                      <span>{d.btnSubmit}</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success Anim Block */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center flex flex-col items-center gap-5"
              >
                <div className="w-16 h-16 rounded-full bg-green-50 text-green-500 border border-green-100 flex items-center justify-center">
                  <CheckCircle size={36} fill="currentColor" className="text-white bg-green-500 rounded-full" />
                </div>
                
                <div>
                  <h3 className="font-sans font-extrabold text-2xl text-brown-brand">
                    {d.formSuccessTitle}
                  </h3>
                  <p className="font-sans text-sm text-gray-500 mt-2 max-w-sm mx-auto leading-relaxed">
                    {d.formSuccessDesc}
                  </p>
                </div>

                <button
                  id="success-close-btn"
                  onClick={onClose}
                  className="mt-4 px-6 py-2.5 bg-brown-brand hover:bg-brown-dark text-white font-sans text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer"
                >
                  {d.btnClose}
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
