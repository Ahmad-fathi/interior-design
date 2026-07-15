/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'ar' | 'en';

export interface BookingInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  style: string;
  message: string;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'archived';
}

export interface Project {
  id: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  image: string;
  descriptionAr: string;
  descriptionEn: string;
  areaAr: string;
  areaEn: string;
  locationAr: string;
  locationEn: string;
  year: string;
}

export interface Service {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  nameAr: string;
  nameEn: string;
  roleAr: string;
  roleEn: string;
  textAr: string;
  textEn: string;
  rating: number;
  avatar: string;
}
