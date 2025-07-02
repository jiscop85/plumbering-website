
import React, { createContext, useContext, useState } from 'react';

type Language = 'fa' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fa: {
    // Navigation
    home: 'خانه',
    about: 'درباره ما',
    services: 'خدمات',
    professionals: 'متخصصین',
    contact: 'تماس با ما',
    
    // Services
    plumbing: 'لوله‌کشی',
    electricity: 'برق‌کاری',
    heating: 'تهویه و گرمایش',
    maintenance: 'نگهداری',
    
    // Common
    loginSignup: 'ورود / ثبت نام',
    newRequest: 'درخواست جدید',
    searchPlaceholder: 'جستجو...',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    professionals: 'Professionals',
    contact: 'Contact',
    
    // Services
    plumbing: 'Plumbing',
    electricity: 'Electricity',
    heating: 'Heating & Cooling',
    maintenance: 'Maintenance',
    
    // Common
    loginSignup: 'Login / Sign Up',
    newRequest: 'New Request',
    searchPlaceholder: 'Search...',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fa');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fa] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
