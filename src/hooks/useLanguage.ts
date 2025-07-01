
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fa' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    siteName: 'Batis Home',
    searchPlaceholder: 'Search home services...',
    services: 'Services',
    howItWorks: 'How It Works',
    professionals: 'Professionals',
    about: 'About',
    contact: 'Contact',
    loginSignup: 'Login / Sign Up',
    newRequest: 'New Request',
    
    // Hero Section
    heroTitle: 'Finding Reliable Home Professionals Made Easy',
    heroSubtitle: 'From plumbing to electrical work, find the best professionals with just a few clicks',
    requestService: 'Request Service',
    viewProfessionals: 'View Professionals',
    
    // Popular Services
    popularServicesTitle: 'Popular Services',
    plumbing: 'Plumbing',
    electricity: 'Electrical',
    heating: 'Heating & Cooling',
    maintenance: 'Maintenance & Repair',
    
    // How It Works
    howItWorksTitle: 'How It Works?',
    step1Title: '1. Submit Request',
    step1Desc: 'Describe the details of your job',
    step2Title: '2. Receive Proposals',
    step2Desc: 'Qualified professionals submit proposals',
    step3Title: '3. Choose Professional',
    step3Desc: 'Select the best option based on ratings',
    step4Title: '4. Get Job Done',
    step4Desc: 'Your chosen professional completes the work',
    
    // Why Choose Us
    whyChooseUsTitle: 'Why Choose Us?',
    highSecurity: 'High Security',
    highSecurityDesc: 'All professionals are verified and licensed',
    qualityGuarantee: 'Quality Guarantee',
    qualityGuaranteeDesc: 'Guarantee of work quality and customer satisfaction',
    support247: '24/7 Support',
    support247Desc: 'Support available around the clock',
    transparentPricing: 'Transparent Pricing',
    transparentPricingDesc: 'No hidden fees, clear pricing from the start',
    
    // Testimonials
    testimonialsTitle: 'Customer Reviews',
    
    // CTA
    readyToStart: 'Ready to Start?',
    ctaDescription: 'Submit your request now and connect with the best home professionals',
    submitRequest: 'Submit Service Request',
    joinProfessionals: 'Join Our Professionals',
  },
  fa: {
    // Header
    siteName: 'تاسیس‌یاب',
    searchPlaceholder: 'جستجوی خدمات تاسیسات...',
    services: 'خدمات',
    howItWorks: 'چگونه کار می‌کند',
    professionals: 'متخصصین',
    about: 'درباره ما',
    contact: 'تماس',
    loginSignup: 'ورود / ثبت نام',
    newRequest: 'ثبت درخواست جدید',
    
    // Hero Section
    heroTitle: 'پیدا کردن متخصص تاسیسات مطمئن، آسان شد',
    heroSubtitle: 'از لوله‌کشی تا برق‌کاری، با چند کلیک بهترین متخصصین را بیابید',
    requestService: 'درخواست خدمت دهید',
    viewProfessionals: 'مشاهده متخصصین',
    
    // Popular Services
    popularServicesTitle: 'خدمات محبوب',
    plumbing: 'لوله‌کشی',
    electricity: 'برق‌کاری',
    heating: 'گرمایش و سرمایش',
    maintenance: 'نگهداری و تعمیرات',
    
    // How It Works
    howItWorksTitle: 'چگونه کار می‌کند؟',
    step1Title: '۱. درخواست ثبت کنید',
    step1Desc: 'جزئیات کار خود را شرح دهید',
    step2Title: '۲. پیشنهاد دریافت کنید',
    step2Desc: 'متخصصین واجد شرایط پیشنهاد می‌دهند',
    step3Title: '۳. متخصص انتخاب کنید',
    step3Desc: 'بهترین گزینه را براساس امتیاز انتخاب کنید',
    step4Title: '۴. کار انجام شود',
    step4Desc: 'متخصص انتخابی کار را انجام می‌دهد',
    
    // Why Choose Us
    whyChooseUsTitle: 'چرا تاسیس‌یاب؟',
    highSecurity: 'امنیت بالا',
    highSecurityDesc: 'تمامی متخصصین تأیید شده و دارای مجوز هستند',
    qualityGuarantee: 'تضمین کیفیت',
    qualityGuaranteeDesc: 'ضمانت کیفیت کار و رضایت مشتری',
    support247: 'پشتیبانی ۲۴/۷',
    support247Desc: 'پشتیبانی در تمام ساعات شبانه‌روز',
    transparentPricing: 'قیمت‌گذاری شفاف',
    transparentPricingDesc: 'بدون هزینه پنهان، قیمت واضح از ابتدا',
    
    // Testimonials
    testimonialsTitle: 'نظرات مشتریان',
    
    // CTA
    readyToStart: 'آماده شروع هستید؟',
    ctaDescription: 'همین الان درخواست خود را ثبت کنید و با بهترین متخصصین تاسیسات ارتباط برقرار کنید',
    submitRequest: 'ثبت درخواست خدمت',
    joinProfessionals: 'به جمع متخصصین بپیوندید',
  },
  fr: {
    // Header
    siteName: 'TrouveurInstall',
    searchPlaceholder: 'Rechercher des services d\'installation...',
    services: 'Services',
    howItWorks: 'Comment ça marche',
    professionals: 'Professionnels',
    about: 'À propos',
    contact: 'Contact',
    loginSignup: 'Connexion / Inscription',
    newRequest: 'Nouvelle demande',
    
    // Hero Section
    heroTitle: 'Trouver des experts en installations fiables, c\'est facile',
    heroSubtitle: 'De la plomberie à l\'électricité, trouvez les meilleurs professionnels en quelques clics',
    requestService: 'Demander un service',
    viewProfessionals: 'Voir les professionnels',
    
    // Popular Services
    popularServicesTitle: 'Services populaires',
    plumbing: 'Plomberie',
    electricity: 'Électricité',
    heating: 'Chauffage et climatisation',
    maintenance: 'Maintenance et réparation',
    
    // How It Works
    howItWorksTitle: 'Comment ça marche ?',
    step1Title: '1. Soumettre une demande',
    step1Desc: 'Décrivez les détails de votre travail',
    step2Title: '2. Recevoir des propositions',
    step2Desc: 'Les professionnels qualifiés soumettent des propositions',
    step3Title: '3. Choisir un professionnel',
    step3Desc: 'Sélectionnez la meilleure option basée sur les évaluations',
    step4Title: '4. Faire le travail',
    step4Desc: 'Votre professionnel choisi termine le travail',
    
    // Why Choose Us
    whyChooseUsTitle: 'Pourquoi nous choisir ?',
    highSecurity: 'Haute sécurité',
    highSecurityDesc: 'Tous les professionnels sont vérifiés et agréés',
    qualityGuarantee: 'Garantie de qualité',
    qualityGuaranteeDesc: 'Garantie de qualité du travail et satisfaction client',
    support247: 'Support 24/7',
    support247Desc: 'Support disponible 24h/24',
    transparentPricing: 'Tarification transparente',
    transparentPricingDesc: 'Pas de frais cachés, prix clairs dès le début',
    
    // Testimonials
    testimonialsTitle: 'Avis clients',
    
    // CTA
    readyToStart: 'Prêt à commencer ?',
    ctaDescription: 'Soumettez votre demande maintenant et connectez-vous avec les meilleurs professionnels',
    submitRequest: 'Soumettre une demande de service',
    joinProfessionals: 'Rejoignez nos professionnels',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'fa' ? 'rtl' : 'ltr'} className={language === 'fa' ? 'font-iranian-sans' : 'font-inter'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
