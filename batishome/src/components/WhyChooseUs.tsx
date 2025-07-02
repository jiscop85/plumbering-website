
import React from 'react';
import { Shield, Award, Clock, DollarSign } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t('highSecurity'),
      description: t('highSecurityDesc'),
      link: '/high-security',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      title: t('qualityGuarantee'),
      description: t('qualityGuaranteeDesc'),
      link: '/quality-guarantee',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      title: t('support247'),
      description: t('support247Desc'),
      link: '/support-247',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: DollarSign,
      title: t('transparentPricing'),
      description: t('transparentPricingDesc'),
      link: '/transparent-pricing',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">{t('whyChooseUsTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We stand out from the competition with our commitment to excellence and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200 hover:border-yellow-400/50"
            >
              <div className="p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
