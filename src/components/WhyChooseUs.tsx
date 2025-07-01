import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '../hooks/useLanguage';
import { Shield, Star, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      title: t('highSecurity'),
      description: t('highSecurityDesc'),
      icon: Shield,
      color: 'from-yellow-400 to-yellow-500',
      bgColor: 'bg-yellow-50',
      link: '/high-security',
      image: '🛡️'
    },
    {
      title: t('qualityGuarantee'),
      description: t('qualityGuaranteeDesc'),
      icon: Star,
      color: 'from-gray-400 to-gray-500',
      bgColor: 'bg-gray-50',
      link: '/quality-guarantee',
      image: '⭐'
    },
    {
      title: t('support247'),
      description: t('support247Desc'),
      icon: Clock,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      link: '/support-247',
      image: '⏰'
    },
    {
      title: t('transparentPricing'),
      description: t('transparentPricingDesc'),
      icon: DollarSign,
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50',
      link: '/transparent-pricing',
      image: '💰'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-800 mb-6">
            چرا ما را انتخاب کنید؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ما در خدمات اضطراری لوله‌کشی خود افتخار می‌کنیم و همیشه یک تکنسین مفید آماده کمک به شما داریم.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Link key={index} to={benefit.link} className="block">
                <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 border shadow-lg bg-white cursor-pointer h-full relative overflow-hidden border-gray-100">
                  <CardContent className="p-8 text-center relative overflow-hidden h-full flex flex-col">
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 ${benefit.bgColor} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg border-2 border-gray-100`}>
                        <Icon className="h-10 w-10 text-gray-700 group-hover:text-yellow-600 transition-colors duration-300" />
                      </div>
                      
                      {/* Floating Emoji */}
                      <div className="absolute -top-2 -right-2 text-2xl transform group-hover:rotate-12 group-hover:scale-125 transition-all duration-500">
                        {benefit.image}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {benefit.description}
                    </p>
                    
                    {/* Decorative element */}
                    <div className={`absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-150`}></div>
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

export default WhyChooseUs;
