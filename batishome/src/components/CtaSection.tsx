
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Users, Briefcase } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'fa';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gray-900 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">{t('readyToStart')}</h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed font-medium">
            {t('ctaDescription')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <Link to="/service-request">
            <Button 
              size="lg" 
              className="group text-xl px-12 py-6 rounded-2xl bg-gray-900 text-white hover:bg-gray-800 shadow-2xl hover:shadow-gray-900/25 transition-all duration-300 transform hover:-translate-y-2 font-bold border-2 border-gray-900"
            >
              <Users className="mr-3 h-6 w-6" />
              {t('submitRequest')}
              <ArrowIcon className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
          
          <Link to="/professionals">
            <Button 
              variant="outline" 
              size="lg" 
              className="group text-xl px-12 py-6 rounded-2xl border-4 border-gray-900 text-gray-900 bg-white hover:bg-gray-50 shadow-2xl hover:shadow-gray-900/25 transition-all duration-300 transform hover:-translate-y-2 font-bold"
            >
              <Briefcase className="mr-3 h-6 w-6" />
              {t('joinProfessionals')}
              <ArrowIcon className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
