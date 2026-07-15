import { Project, Service, Testimonial } from './types';

export const DICTIONARY = {
  ar: {
    brandName: "مدار",
    brandSubtitle: "للتصميم الداخلي",
    langLabel: "English",
    
    // Navigation
    navHome: "الرئيسية",
    navServices: "خدماتنا",
    navPortfolio: "أعمالنا",
    navAbout: "عن مدار",
    navContact: "اتصل بنا",
    
    // Hero
    heroTitle: "مساحتك... حكاية بتتقال بالتفاصيل",
    heroSubtitle: "مساحات فاخرة... بتصميم عملي",
    btnConsultation: "احجز استشارة مجانية",
    btnPortfolio: "شاهد أعمالنا",
    
    // Services Section
    servicesTitle: "خدماتنا الإبداعية",
    servicesSubtitle: "نجمع بين الجمال والوظيفة لنصمم مساحات تحكي قصتك وتلبي احتياجات حياتك اليومية",
    
    // Portfolio Section
    portfolioTitle: "معرض أعمالنا",
    portfolioSubtitle: "شاهد كيف حولنا المساحات العادية إلى تحف فنية تنبض بالرقي والراحة",
    allCategories: "الكل",
    
    // Statistics Section
    statsTitle: "أرقام تتحدث عن جودتنا",
    statsProjects: "مشروع مكتمل",
    statsExperience: "عام من الخبرة",
    statsSatisfaction: "رضا العملاء",
    statsTeam: "مصمم محترف",

    // About Section
    aboutTitle: "فلسفتنا في التصميم",
    aboutPara1: "في مدار، نؤمن بأن التصميم الداخلي ليس مجرد ترتيب لقطع الأثاث، بل هو صياغة فنية تعكس شخصية العميل وتلائم أسلوب حياته. نحن نهتم بكل زاوية، ونحرص على دمج الفخامة بالعملية لتقديم مساحات ملهمة تدوم طويلاً.",
    aboutPara2: "منذ تأسيسنا، عملنا مع نخبة من العملاء لتنفيذ مشاريع سكنية وتجارية مميزة، واضعين نصب أعيننا جودة المواد ودقة التنفيذ والالتزام التام بالجداول الزمنية.",
    aboutSpec1Title: "تخصيص كامل",
    aboutSpec1Desc: "نصمم خصيصاً لتطلعاتك وهويتك الفريدة.",
    aboutSpec2Title: "إشراف دقيق",
    aboutSpec2Desc: "متابعة مستمرة للتنفيذ لضمان مطابقة المخططات.",
    aboutSpec3Title: "حلول ذكية",
    aboutSpec3Desc: "استغلال مثالي للمساحات مهما كانت التحديات.",
    
    // Consultation Modal
    modalTitle: "احجز استشارتك المجانية",
    modalSubtitle: "تحدث مع أحد مستشارينا المبدعين لتطوير رؤية واضحة لمساحتك القادمة",
    formName: "الاسم الكامل",
    formEmail: "البريد الإلكتروني",
    formPhone: "رقم الهاتف",
    formStyle: "طراز التصميم المفضل",
    formStyleSelect: "اختر الطراز...",
    formStyleModern: "مودرن / حديث",
    formStyleClassic: "كلاسيك / تقليدي",
    formStyleNeoClassic: "نيو كلاسيك / معاصر",
    formStyleMinimalist: "مينيماليست / تبسيطي",
    formMessage: "أخبرنا المزيد عن مساحتك (نوعها، حجمها، أهدافك)",
    formMessagePlaceholder: "مثال: أريد تجديد غرفة المعيشة بمظهر دافئ وعصري...",
    btnSubmit: "تأكيد حجز الاستشارة",
    btnSubmitting: "جاري إرسال طلبك...",
    formSuccessTitle: "تم استلام طلبك بنجاح!",
    formSuccessDesc: "شكراً لتواصلك مع مدار. تم تسجيل حجزك وسيقوم أحد مهندسينا بالتواصل معك هاتفياً في أقرب وقت لتأكيد الموعد.",
    btnClose: "إغلاق",

    // Admin Panel / Bookings Tracker
    bookingsTitle: "الاستشارات المحجوزة (المحاكاة)",
    bookingsEmpty: "لا توجد حجوزات حالياً. احجز استشارة مجانية لتجربة تدفق البيانات!",
    bookingStatusPending: "قيد الانتظار",
    bookingStatusConfirmed: "تم تأكيد الاتصال",
    bookingDate: "تاريخ الحجز",
    
    // Footer
    footerContact: "اتصل بنا",
    footerLinks: "روابط سريعة",
    footerCopy: "جميع الحقوق محفوظة © ٢٠٢٦ مدار للتصميم."
  },
  en: {
    brandName: "Madar",
    brandSubtitle: "Interior Design",
    langLabel: "العربية",
    
    // Navigation
    navHome: "Home",
    navServices: "Services",
    navPortfolio: "Portfolio",
    navAbout: "About Madar",
    navContact: "Contact",
    
    // Hero
    heroTitle: "Your Space... A Story Told in Details",
    heroSubtitle: "Luxury Spaces... With Practical Design",
    btnConsultation: "Book Free Consultation",
    btnPortfolio: "See Our Works",
    
    // Services Section
    servicesTitle: "Our Creative Services",
    servicesSubtitle: "We blend aesthetic elegance with operational utility to design spaces that narrative your lifestyle",
    
    // Portfolio Section
    portfolioTitle: "Our Featured Portfolio",
    portfolioSubtitle: "Explore how we transform ordinary rooms into breathtaking masterpieces of comfort and style",
    allCategories: "All",
    
    // Statistics Section
    statsTitle: "Quality in Numbers",
    statsProjects: "Completed Projects",
    statsExperience: "Years of Experience",
    statsSatisfaction: "Client Satisfaction",
    statsTeam: "Design Experts",

    // About Section
    aboutTitle: "Our Design Philosophy",
    aboutPara1: "At Madar, we believe interior design is far more than furniture arrangement. It is the synthesis of art and lifestyle. We pay meticulous attention to every corner, blending timeless luxury with smart utility to deliver inspiring, enduring environments.",
    aboutPara2: "Since our establishment, we have collaborated with selective clients to complete high-end residential and commercial projects, focusing on material quality, executive precision, and complete adherence to timelines.",
    aboutSpec1Title: "Full Customization",
    aboutSpec1Desc: "Crafted exclusively around your unique aspirations.",
    aboutSpec2Title: "Rigorous Supervision",
    aboutSpec2Desc: "On-site inspection to guarantee flawless implementation.",
    aboutSpec3Title: "Smart Solutions",
    aboutSpec3Desc: "Optimal layout planning even for the most complex zones.",
    
    // Consultation Modal
    modalTitle: "Book Your Free Consultation",
    modalSubtitle: "Speak with one of our master designers to conceptualize your upcoming project",
    formName: "Full Name",
    formEmail: "Email Address",
    formPhone: "Phone Number",
    formStyle: "Preferred Design Style",
    formStyleSelect: "Select style...",
    formStyleModern: "Modern",
    formStyleClassic: "Classic",
    formStyleNeoClassic: "Neo-Classic",
    formStyleMinimalist: "Minimalist",
    formMessage: "Tell us about your space (type, size, goals)",
    formMessagePlaceholder: "Example: I want to renovate my living room with a warm contemporary vibe...",
    btnSubmit: "Confirm Booking",
    btnSubmitting: "Submitting request...",
    formSuccessTitle: "Booking Confirmed!",
    formSuccessDesc: "Thank you for choosing Madar. Your request has been received. One of our lead designers will call you shortly to finalize your appointment.",
    btnClose: "Close",

    // Admin Panel / Bookings Tracker
    bookingsTitle: "Booked Consultations (Demo)",
    bookingsEmpty: "No bookings recorded yet. Try booking a free consultation above to see live updates!",
    bookingStatusPending: "Pending Review",
    bookingStatusConfirmed: "Contacted",
    bookingDate: "Date booked",
    
    // Footer
    footerContact: "Contact",
    footerLinks: "Quick Links",
    footerCopy: "All rights reserved © 2026 Madar Interior Design."
  }
};

export const SERVICES: Service[] = [
  {
    id: "serv-1",
    titleAr: "التصميم الداخلي السكني",
    titleEn: "Residential Interior Design",
    descriptionAr: "تصميم متكامل للفلل والشقق الفاخرة يجمع بين الهوية الشخصية والرفاهية اليومية، من غرف النوم وحتى المطابخ والمجالس.",
    descriptionEn: "Complete design for villas and luxury apartments that merges personal identity with daily comfort, from bedroom suites to formal parlors.",
    iconName: "Home"
  },
  {
    id: "serv-2",
    titleAr: "التصميم التجاري والمكتبي",
    titleEn: "Commercial & Office Design",
    descriptionAr: "نهيئ بيئات عمل ملهمة ومحلات تجارية جذابة تعزز الإنتاجية وتترك انطباعاً مذهلاً وراسخاً لدى عملائك.",
    descriptionEn: "We structure inspiring work hubs and captivating retail environments that drive productivity and leave an unforgettable brand impression.",
    iconName: "Briefcase"
  },
  {
    id: "serv-3",
    titleAr: "تنسيق الأثاث والديكور",
    titleEn: "Furniture Styling & Decoration",
    descriptionAr: "اختيار وتنسيق قطع الأثاث، الإضاءة، السجاد، واللوحات الفنية بما يتناغم تماماً مع طراز المساحة ومقاساتها.",
    descriptionEn: "Curation and layout of high-end furniture, custom lighting fixtures, carpets, and fine arts to harmonize with your home scale.",
    iconName: "Palette"
  },
  {
    id: "serv-4",
    titleAr: "الإشراف وإدارة التنفيذ",
    titleEn: "Site Supervision & Contracting",
    descriptionAr: "متابعة دقيقة لمراحل التشطيب والتنفيذ على أرض الواقع لضمان مطابقة المواد والجودة للمواصفات الهندسية.",
    descriptionEn: "Vigilant on-site supervision of finishing stages to ensure materials and artisan quality exactly match blueprints.",
    iconName: "Compass"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    titleAr: "فيلا ريفيرا المعاصرة",
    titleEn: "Contemporary Riviera Villa",
    categoryAr: "سكني",
    categoryEn: "Residential",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    descriptionAr: "فيلا سكنية فاخرة تتميز بدمج الإضاءة الطبيعية مع الخامات الخشبية والأسطح الرخامية لخلق شعور بالاتساع والدفء.",
    descriptionEn: "A magnificent residential villa featuring generous natural sunlight paired with timber wall panelling and polished marble floors.",
    areaAr: "٦٥٠ متر مربع",
    areaEn: "650 sqm",
    locationAr: "الرياض، المملكة العربية السعودية",
    locationEn: "Riyadh, Saudi Arabia",
    year: "2025"
  },
  {
    id: "proj-2",
    titleAr: "شقة بنتهاوس مينيماليست",
    titleEn: "Minimalist Penthouse Apartment",
    categoryAr: "سكني",
    categoryEn: "Residential",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    descriptionAr: "تصميم شقة علوية يرتكز على مبدأ التبسيط، مع اختيار لوحة ألوان هادئة من الرمادي والبيج لضمان سكينة بصرية فائقة.",
    descriptionEn: "Penthouse design emphasizing clean lines and negative space, featuring a soothing monochromatic beige palette.",
    areaAr: "٣٢٠ متر مربع",
    areaEn: "320 sqm",
    locationAr: "دبي، الإمارات العربية المتحدة",
    locationEn: "Dubai, UAE",
    year: "2025"
  },
  {
    id: "proj-3",
    titleAr: "مقر شركة واحة الرقمية",
    titleEn: "Oasis Digital Headquarters",
    categoryAr: "تجاري",
    categoryEn: "Commercial",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80",
    descriptionAr: "مساحة عمل مفتوحة تم تصميمها لتشجيع التعاون والابتكار، مع زوايا خضراء مدمجة وإضاءة ذكية تحاكي الضوء الطبيعي.",
    descriptionEn: "An open-plan workplace crafted to foster team collaboration, styled with biophilic elements and smart circadian lighting.",
    areaAr: "١٢٠٠ متر مربع",
    areaEn: "1200 sqm",
    locationAr: "القاهرة، مصر",
    locationEn: "Cairo, Egypt",
    year: "2026"
  },
  {
    id: "proj-4",
    titleAr: "صالة طعام ونادي ترفيهي",
    titleEn: "Luxe Dining & Recreation Lounge",
    categoryAr: "تجاري",
    categoryEn: "Commercial",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80",
    descriptionAr: "تصميم داخلي لصالة طعام خاصة يدمج الإضاءة الخافتة الساحرة مع جدران مكسوة بالمخمل والنحاس المصقول لتوفير أجواء استثنائية.",
    descriptionEn: "Private dining room interior layout marrying dim atmospheric illumination with rich velvet wall finishes and brushed brass trim.",
    areaAr: "٤٥٠ متر مربع",
    areaEn: "450 sqm",
    locationAr: "جدة، المملكة العربية السعودية",
    locationEn: "Jeddah, Saudi Arabia",
    year: "2026"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    nameAr: "المهندس خالد العتيبي",
    nameEn: "Eng. Khalid Al-Otaibi",
    roleAr: "صاحب فيلا المعذر",
    roleEn: "Al-Maather Villa Owner",
    textAr: "تجربة العمل مع أركان كانت مذهلة بكل المقاييس. لقد استوعبوا تماماً رؤيتنا وحولوها إلى حقيقة بدقة متناهية والتزام بالوقت وخبرة رائعة بالخامات والإنارة.",
    textEn: "Working with Arkan was a masterclass in professional design. They fully understood our vision and materialised it with meticulous precision and timely handoff.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "test-2",
    nameAr: "سارة عبد الرحمن",
    nameEn: "Sarah Abdulrahman",
    roleAr: "مؤسسة مقهى غلايف",
    roleEn: "Founder of Glyph Cafe",
    textAr: "الكل يسألني عن تصميم المقهى! لقد استغلوا المساحة بشكل عبقري والإنارة جعلت المكان مفضلاً لرواد التصوير ومحبي الراحة البصرية.",
    textEn: "Everyone asks about our cafe design! The layout optimization is pure genius, and the lighting schemes have made us a trending spot for social media.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  }
];
