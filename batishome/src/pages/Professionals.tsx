
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';

const Professionals = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">{t('professionals')}</h1>
          <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed text-center">
            <p className="mb-6">
              Our network of certified professionals includes experienced plumbers, electricians, HVAC technicians, 
              and general maintenance specialists. All professionals are verified, licensed, and insured.
            </p>
            <p>
              Join our team of professionals and grow your business with B&H Home Services. 
              We provide you with qualified leads and handle all the administrative work.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Professionals;
