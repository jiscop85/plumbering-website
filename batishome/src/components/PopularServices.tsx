
import React from 'react';
import { Wrench, Zap, Thermometer, Settings } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

const PopularServices = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Wrench,
      title: t('plumbing'),
      description: 'Professional plumbing services for all your water and pipe needs',
      link: '/services/plumbing',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: t('electricity'),
      description: 'Expert electrical work and installations by certified electricians',
      link: '/services/electricity',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Thermometer,
      title: t('heating'),
      description: 'Heating and cooling system maintenance and repair services',
      link: '/services/heating',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Settings,
      title: t('maintenance'),
      description: 'General home maintenance and repair services',
      link: '/services/maintenance',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">{t('popularServicesTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our most requested home services, all performed by verified professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200 hover:border-yellow-400/50"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="p-8 relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
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

export default PopularServices;
