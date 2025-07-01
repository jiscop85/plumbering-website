
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Star, Clock, Shield, Users, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ElectricityService = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'fa';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const services = [
    {
      title: language === 'fa' ? 'سیم‌کشی ساختمان' : language === 'en' ? 'Building Wiring' : 'Câblage de bâtiment',
      description: language === 'fa' ? 'سیم‌کشی کامل ساختمان با استانداردهای روز' : 
                   language === 'en' ? 'Complete building wiring with modern standards' :
                   'Câblage complet du bâtiment avec des normes modernes',
      price: '500,000',
      duration: language === 'fa' ? '1-2 روز' : language === 'en' ? '1-2 days' : '1-2 jours'
    },
    {
      title: language === 'fa' ? 'نصب پریز و کلید' : language === 'en' ? 'Outlet & Switch Installation' : 'Installation prises et interrupteurs',
      description: language === 'fa' ? 'نصب و تعویض پریز، کلید و تجهیزات برقی' : 
                   language === 'en' ? 'Installation and replacement of outlets, switches and electrical equipment' :
                   'Installation et remplacement de prises, interrupteurs et équipements électriques',
      price: '150,000',
      duration: language === 'fa' ? '2-4 ساعت' : language === 'en' ? '2-4 hours' : '2-4 heures'
    },
    {
      title: language === 'fa' ? 'تعمیر تابلو برق' : language === 'en' ? 'Electrical Panel Repair' : 'Réparation tableau électrique',
      description: language === 'fa' ? 'تعمیر و بهینه‌سازی تابلو برق ساختمان' : 
                   language === 'en' ? 'Repair and optimization of building electrical panel' :
                   'Réparation et optimisation du tableau électrique du bâtiment',
      price: '300,000',
      duration: language === 'fa' ? '3-5 ساعت' : language === 'en' ? '3-5 hours' : '3-5 heures'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: language === 'fa' ? 'ایمنی تضمینی' : language === 'en' ? 'Guaranteed Safety' : 'Sécurité garantie',
      desc: language === 'fa' ? 'مطابق استانداردهای ملی' : language === 'en' ? 'According to national standards' : 'Selon les normes nationales'
    },
    {
      icon: Clock,
      title: language === 'fa' ? 'سرویس اضطراری' : language === 'en' ? 'Emergency Service' : 'Service d\'urgence',
      desc: language === 'fa' ? 'پاسخگویی در کمترین زمان' : language === 'en' ? 'Response in minimum time' : 'Réponse en temps minimum'
    },
    {
      icon: Users,
      title: language === 'fa' ? 'برق‌کاران مجاز' : language === 'en' ? 'Licensed Electricians' : 'Électriciens agréés',
      desc: language === 'fa' ? 'دارای مجوز رسمی' : language === 'en' ? 'With official license' : 'Avec licence officielle'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {language === 'fa' ? 'خدمات برق‌کاری تخصصی' : 
               language === 'en' ? 'Professional Electrical Services' :
               'Services électriques professionnels'}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              {language === 'fa' ? 'انجام تمامی کارهای برقی با بالاترین ایمنی و کیفیت' :
               language === 'en' ? 'Performing all electrical work with highest safety and quality' :
               'Réalisation de tous travaux électriques avec la plus haute sécurité et qualité'}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {language === 'fa' ? 'خدمات برق‌کاری' : language === 'en' ? 'Electrical Services' : 'Services électriques'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                    <span>{service.duration}</span>
                    <span className="text-yellow-600 font-bold">از {service.price} تومان</span>
                  </div>
                  <Link to="/service-request">
                    <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                      {language === 'fa' ? 'درخواست سرویس' : language === 'en' ? 'Request Service' : 'Demander un service'}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'fa' ? 'مشکل برقی دارید؟' :
             language === 'en' ? 'Have an Electrical Problem?' :
             'Avez-vous un problème électrique?'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === 'fa' ? 'برق‌کاران مجرب ما آماده کمک هستند' :
             language === 'en' ? 'Our experienced electricians are ready to help' :
             'Nos électriciens expérimentés sont prêts à vous aider'}
          </p>
          <Link to="/service-request">
            <Button size="lg" variant="secondary" className="bg-white text-yellow-600 hover:bg-gray-100">
              {language === 'fa' ? 'تماس فوری' : language === 'en' ? 'Emergency Call' : 'Appel d\'urgence'}
              <ArrowIcon className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ElectricityService;
