
import React from 'react';
import { FileText, Users, UserCheck, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: FileText,
      title: t('step1Title'),
      description: t('step1Desc'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: t('step2Title'),
      description: t('step2Desc'),
      color: 'from-green-500 to-green-600'
    },
    {
      icon: UserCheck,
      title: t('step3Title'),
      description: t('step3Desc'),
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: CheckCircle,
      title: t('step4Title'),
      description: t('step4Desc'),
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">{t('howItWorksTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting professional home services has never been easier. Follow these simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Lines */}
          <div className="hidden lg:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              <div className="relative inline-block mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mx-auto`}>
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-sm font-bold text-gray-900">{index + 1}</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
