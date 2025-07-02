
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">{t('about')}</h1>
          <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
            <p className="mb-6">
              B&H Home Services has been providing exceptional home maintenance and repair services for over 15 years. 
              Our team of certified professionals is dedicated to delivering quality workmanship and outstanding customer service.
            </p>
            <p className="mb-6">
              We specialize in plumbing, electrical work, heating and cooling systems, and general home maintenance. 
              Our commitment to excellence and customer satisfaction has made us the trusted choice for homeowners throughout the region.
            </p>
            <p>
              Available 24/7 for emergency services, we ensure that your home is always in perfect condition. 
              Contact us today to experience the B&H difference.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
