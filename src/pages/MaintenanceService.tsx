
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, Star, Clock, Shield, Users, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const MaintenanceService = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'fa';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const services = [
    {
      title: language === 'fa' ? 'سرویس دوره‌ای' : language === 'en' ? 'Periodic Maintenance' : 'Maintenance périodique',
      description: language === 'fa' ? 'سرویس منظم تجهیزات ساختمان' : 
                   language === 'en' ? 'Regular service of building equipment' :
                   'Entretien régulier des équipements du bâtiment',
      price: '100,000',
      duration: language === 'fa' ? '2-4 ساعت' : language === 'en' ? '2-4 hours' : '2-4 heures'
    },
    {
      title: language === 'fa' ? 'تعمیرات عمومی' : language === 'en' ? 'General Repairs' : 'Réparations générales',
      description: language === 'fa' ? 'رفع مشکلات متنوع ساختمان' : 
                   language === 'en' ? 'Solving various building problems' :
                   'Résolution de divers problèmes de bâtiment',
      price: '150,000',
      duration: language === 'fa' ? '1-6 ساعت' : language === 'en' ? '1-6 hours' : '1-6 heures'
    },
    {
      title: language === 'fa' ? 'نگهداری ساختمان' : language === 'en' ? 'Building Maintenance' : 'Maintenance de bâtiment',
      description: language === 'fa' ? 'نگهداری کامل فضاهای مسکونی و اداری' : 
                   language === 'en' ? 'Complete maintenance of residential and office spaces' :
                   'Maintenance complète des espaces résidentiels et de bureau',
      price: '200,000',
      duration: language === 'fa' ? 'نیم روز' : language === 'en' ? 'Half day' : 'Demi-journée'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: language === 'fa' ? 'قرارداد نگهداری' : language === 'en' ? 'Maintenance Contract' : 'Contrat de maintenance',
      desc: language === 'fa' ? 'برنامه‌ریزی سالانه' : language === 'en' ? 'Annual planning' : 'Planification annuelle'
    },
    {
      icon: Clock,
      title: language === 'fa' ? 'پیشگیری از خرابی' : language === 'en' ? 'Breakdown Prevention' : 'Prévention des pannes',
      desc: language === 'fa' ? 'کاهش هزینه تعمیرات' : language === 'en' ? 'Reducing repair costs' : 'Réduction des coûts de réparation'
    },
    {
      icon: Users,
      title: language === 'fa' ? 'تیم چندتخصصه' : language === 'en' ? 'Multi-skilled Team' : 'Équipe polyvalente',
      desc: language === 'fa' ? 'متخصص همه رشته‌ها' : language === 'en' ? 'Expert in all fields' : 'Expert dans tous les domaines'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-500 to-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Settings className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {language === 'fa' ? 'خدمات نگهداری و تعمیرات' : 
               language === 'en' ? 'Maintenance & Repair Services' :
               'Services de maintenance et réparation'}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              {language === 'fa' ? 'نگهداری دوره‌ای و تعمیرات تخصصی ساختمان شما' :
               language === 'en' ? 'Periodic maintenance and professional repairs for your building' :
               'Maintenance périodique et réparations professionnelles pour votre bâtiment'}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {language === 'fa' ? 'خدمات نگهداری' : language === 'en' ? 'Maintenance Services' : 'Services de maintenance'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                    <span>{service.duration}</span>
                    <span className="text-green-600 font-bold">از {service.price} تومان</span>
                  </div>
                  <Link to="/service-request">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
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
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
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
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'fa' ? 'نیاز به نگهداری دوره‌ای دارید؟' :
             language === 'en' ? 'Need periodic maintenance?' :
             'Besoin d\'une maintenance périodique?'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === 'fa' ? 'با برنامه‌ریزی مناسب از خرابی‌های آینده جلوگیری کنید' :
             language === 'en' ? 'Prevent future breakdowns with proper planning' :
             'Prévenez les pannes futures avec une planification appropriée'}
          </p>
          <Link to="/service-request">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              {language === 'fa' ? 'شروع برنامه نگهداری' : language === 'en' ? 'Start Maintenance Program' : 'Commencer programme maintenance'}
              <ArrowIcon className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MaintenanceService;
