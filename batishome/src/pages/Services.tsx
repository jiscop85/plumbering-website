
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopularServices from '@/components/PopularServices';
import { useLanguage } from '@/hooks/useLanguage';

const Services = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">{t('services')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Professional home services delivered by certified experts with guaranteed quality and transparent pricing.
          </p>
        </div>
        <PopularServices />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
