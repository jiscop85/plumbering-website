import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '../hooks/useLanguage';
import { Wrench, Zap, Thermometer, Settings, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PopularServices = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'fa';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const services = [
    {
      title: t('plumbing'),
      icon: Wrench,
      description: 'Pipe repair, leak fixing, valve installation',
      color: 'from-yellow-400 to-yellow-500',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      link: '/services/plumbing',
      image: '🔧'
    },
    {
      title: t('heating'),
      icon: Thermometer,
      description: 'Water heater repair, AC installation, heating systems',
      color: 'from-gray-400 to-gray-500',
      bgColor: 'bg-gray-50',
      iconColor: 'text-gray-600',
      link: '/services/heating',
      image: '🔥'
    },
    {
      title: t('maintenance'),
      icon: Settings,
      description: 'Regular maintenance, general repairs, preventive service',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-700',
      link: '/services/maintenance',
      image: '🛠️'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-yellow-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-800 mb-6">
            {t('popularServicesTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We take pride in our emergency plumbing services and always have a helpful technician ready to assist you 365 days a year.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link key={index} to={service.link}>
                <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-lg cursor-pointer bg-white relative overflow-hidden border border-gray-200">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <CardContent className="p-8 text-center relative">
                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <div className={`w-24 h-24 ${service.bgColor} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg border-2 border-gray-200`}>
                        <Icon className={`h-12 w-12 ${service.iconColor}`} />
                      </div>
                      
                      {/* Floating Emoji */}
                      <div className="absolute -top-2 -right-2 text-3xl transform group-hover:rotate-12 group-hover:scale-125 transition-all duration-500">
                        {service.image}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-center text-yellow-600 font-bold text-lg group-hover:gap-3 transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowIcon className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
