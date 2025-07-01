import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../hooks/useLanguage';
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'fa';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f59e0b%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 animate-bounce">
        <Sparkles className="h-8 w-8 text-yellow-400" />
      </div>
      <div className="absolute bottom-10 right-10 animate-pulse">
        <Sparkles className="h-6 w-6 text-yellow-300" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {t('readyToStart')}
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            {t('ctaDescription')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/service-request">
              <Button 
                size="lg" 
                variant="secondary" 
                className="group text-lg px-10 py-4 rounded-xl bg-yellow-500 text-gray-900 hover:bg-yellow-400 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-yellow-400"
              >
                {t('submitRequest')}
                <ArrowIcon className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/professionals">
              <Button 
                variant="outline" 
                size="lg" 
                className="group text-lg px-10 py-4 rounded-xl border-2 border-yellow-400 text-yellow-400 bg-transparent hover:bg-yellow-400 hover:text-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {t('joinProfessionals')}
                <ArrowIcon className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-300">
            <div>
              <div className="text-2xl font-bold text-yellow-400">24/7</div>
              <div className="text-sm">Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">100%</div>
              <div className="text-sm">Quality Guarantee</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">2500+</div>
              <div className="text-sm">Expert Professionals</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">10K+</div>
              <div className="text-sm">Satisfied Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
