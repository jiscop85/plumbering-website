import React from 'react';
import { RocketIcon, BadgeCheckIcon, ShieldCheckIcon } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const HowItWorks = () => {
  const { language } = useLanguage();

  const steps = [
    {
      id: 1,
      titleKey: 'howItWorks.step1Title',
      descriptionKey: 'howItWorks.step1Description',
      icon: RocketIcon,
    },
    {
      id: 2,
      titleKey: 'howItWorks.step2Title',
      descriptionKey: 'howItWorks.step2Description',
      icon: BadgeCheckIcon,
    },
    {
      id: 3,
      titleKey: 'howItWorks.step3Title',
      descriptionKey: 'howItWorks.step3Description',
      icon: ShieldCheckIcon,
    },
  ];

  const translations = {
    en: {
      'howItWorks.title': 'How it Works',
      'howItWorks.step1Title': 'Fast Order',
      'howItWorks.step1Description': 'Place your order quickly and easily.',
      'howItWorks.step2Title': 'Best Technicians',
      'howItWorks.step2Description': 'We connect you with the best technicians in the city.',
      'howItWorks.step3Title': 'Safety Guarantee',
      'howItWorks.step3Description': 'We guarantee the safety and quality of our services.',
    },
    fa: {
      'howItWorks.title': 'نحوه کارکرد',
      'howItWorks.step1Title': 'سفارش سریع',
      'howItWorks.step1Description': 'سفارش خود را به سرعت و به آسانی ثبت کنید.',
      'howItWorks.step2Title': 'بهترین تکنسین‌ها',
      'howItWorks.step2Description': 'ما شما را با بهترین تکنسین‌ها در شهر مرتبط می‌کنیم.',
      'howItWorks.step3Title': 'تضمین ایمنی',
      'howItWorks.step3Description': 'ما ایمنی و کیفیت خدمات خود را تضمین می‌کنیم.',
    },
    fr: {
      'howItWorks.title': 'Comment ça marche',
      'howItWorks.step1Title': 'Commande Rapide',
      'howItWorks.step1Description': 'Passez votre commande rapidement et facilement.',
      'howItWorks.step2Title': 'Meilleurs Techniciens',
      'howItWorks.step2Description': 'Nous vous mettons en relation avec les meilleurs techniciens de la ville.',
      'howItWorks.step3Title': 'Garantie de Sécurité',
      'howItWorks.step3Description': 'Nous garantissons la sécurité et la qualité de nos services.',
    },
  };

  const t = translations[language] || translations.en;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">{t['howItWorks.title']}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{t[step.titleKey]}</h3>
                <p className="text-gray-600">{t[step.descriptionKey]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
