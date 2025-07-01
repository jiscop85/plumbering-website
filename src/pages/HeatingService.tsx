
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Thermometer, Star, Clock, Shield, Users, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeatingService = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'fa';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const services = [
    {
      title: language === 'fa' ? 'تعمیر پکیج' : language === 'en' ? 'Boiler Repair' : 'Réparation chaudière',
      description: language === 'fa' ? 'تعمیر و سرویس انواع پکیج‌های گازی و برقی' : 
                   language === 'en' ? 'Repair and service of all types of gas and electric boilers' :
                   'Réparation et entretien de tous types de chaudières gaz et électriques',
      price: '250,000',
      duration: language === 'fa' ? '2-4 ساعت' : language === 'en' ? '2-4 hours' : '2-4 heures'
    },
    {
      title: language === 'fa' ? 'نصب کولر گازی' : language === 'en' ? 'AC Installation' : 'Installation climatisation',
      description: language === 'fa' ? 'نصب و راه‌اندازی انواع کولرهای گازی' : 
                   language === 'en' ? 'Installation and setup of all types of air conditioners' :
                   'Installation et mise en service de tous types de climatiseurs',
      price: '400,000',
      duration: language === 'fa' ? '4-6 ساعت' : language === 'en' ? '4-6 hours' : '4-6 heures'
    },
    {
      title: language === 'fa' ? 'سرویس رادیاتور' : language === 'en' ? 'Radiator Service' : 'Service radiateur',
      description: language === 'fa' ? 'شستشو و تعمیر رادیاتورهای شوفاژ' : 
                   language === 'en' ? 'Cleaning and repair of heating radiators' :
                   'Nettoyage et réparation des radiateurs de chauffage',
      price: '180,000',
      duration: language === 'fa' ? '2-3 ساعت' : language === 'en' ? '2-3 hours' : '2-3 heures'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: language === 'fa' ? 'تجهیزات اصل' : language === 'en' ? 'Original Equipment' : 'Équipement original',
      desc: language === 'fa' ? 'استفاده از قطعات اصل' : language === 'en' ? 'Using original parts' : 'Utilisation de pièces originales'
    },
    {
      icon: Clock,
      title: language === 'fa' ? 'خدمات فصلی' : language === 'en' ? 'Seasonal Services' : 'Services saisonniers',
      desc: language === 'fa' ? 'سرویس قبل از فصل' : language === 'en' ? 'Pre-season service' : 'Service pré-saison'
    },
    {
      icon: Users,
      title: language === 'fa' ? 'تکنسین‌های مجرب' : language === 'en' ? 'Expert Technicians' : 'Techniciens experts',
      desc: language === 'fa' ? 'متخصص انواع برند' : language === 'en' ? 'Specialist in all brands' : 'Spécialiste de toutes marques'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-500 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Thermometer className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {language === 'fa' ? 'خدمات گرمایش و سرمایش' : 
               language === 'en' ? 'Heating & Cooling Services' :
               'Services de chauffage et climatisation'}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              {language === 'fa' ? 'نصب، تعمیر و سرویس انواع سیستم‌های گرمایشی و سرمایشی' :
               language === 'en' ? 'Installation, repair and service of all heating and cooling systems' :
               'Installation, réparation et entretien de tous systèmes de chauffage et climatisation'}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {language === 'fa' ? 'خدمات گرمایش و سرمایش' : language === 'en' ? 'HVAC Services' : 'Services CVC'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                    <span>{service.duration}</span>
                    <span className="text-red-600 font-bold">از {service.price} تومان</span>
                  </div>
                  <Link to="/service-request">
                    <Button className="w-full bg-red-600 hover:bg-red-700">
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
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-red-600" />
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
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'fa' ? 'پکیج یا کولر خراب دارید؟' :
             language === 'en' ? 'Is your heating or cooling system broken?' :
             'Votre système de chauffage ou climatisation est-il en panne?'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === 'fa' ? 'تکنسین‌های ما در سریع‌ترین زمان خدمات‌رسانی می‌کنند' :
             language === 'en' ? 'Our technicians provide service in the shortest time' :
             'Nos techniciens fournissent un service dans les plus brefs délais'}
          </p>
          <Link to="/service-request">
            <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
              {language === 'fa' ? 'درخواست فوری' : language === 'en' ? 'Emergency Request' : 'Demande urgente'}
              <ArrowIcon className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HeatingService;
