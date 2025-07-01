
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wrench, Star, Clock, Shield, Users, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlumbingService = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'fa';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const services = [
    {
      title: language === 'fa' ? 'رفع نشتی لوله' : language === 'en' ? 'Pipe Leak Repair' : 'Réparation de fuite de tuyau',
      description: language === 'fa' ? 'تشخیص و رفع انواع نشتی در لوله‌های آب گرم و سرد' : 
                   language === 'en' ? 'Detection and repair of all types of leaks in hot and cold water pipes' :
                   'Détection et réparation de tous types de fuites dans les tuyaux d\'eau chaude et froide',
      price: '150,000',
      duration: language === 'fa' ? '1-2 ساعت' : language === 'en' ? '1-2 hours' : '1-2 heures'
    },
    {
      title: language === 'fa' ? 'نصب شیرآلات' : language === 'en' ? 'Faucet Installation' : 'Installation de robinetterie',
      description: language === 'fa' ? 'نصب و تعویض شیرآلات آشپزخانه و حمام' : 
                   language === 'en' ? 'Installation and replacement of kitchen and bathroom faucets' :
                   'Installation et remplacement de robinets de cuisine et salle de bain',
      price: '200,000',
      duration: language === 'fa' ? '2-3 ساعت' : language === 'en' ? '2-3 hours' : '2-3 heures'
    },
    {
      title: language === 'fa' ? 'بازکردن لوله مسدود' : language === 'en' ? 'Drain Cleaning' : 'Débouchage de canalisation',
      description: language === 'fa' ? 'بازکردن لوله‌های مسدود با تجهیزات مدرن' : 
                   language === 'en' ? 'Clearing blocked pipes with modern equipment' :
                   'Débouchage de tuyaux avec équipement moderne',
      price: '100,000',
      duration: language === 'fa' ? '1 ساعت' : language === 'en' ? '1 hour' : '1 heure'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: language === 'fa' ? 'ضمانت کیفیت' : language === 'en' ? 'Quality Guarantee' : 'Garantie qualité',
      desc: language === 'fa' ? '6 ماه گارانتی' : language === 'en' ? '6 months warranty' : '6 mois de garantie'
    },
    {
      icon: Clock,
      title: language === 'fa' ? 'سرویس 24/7' : language === 'en' ? '24/7 Service' : 'Service 24/7',
      desc: language === 'fa' ? 'خدمات اضطراری' : language === 'en' ? 'Emergency services' : 'Services d\'urgence'
    },
    {
      icon: Users,
      title: language === 'fa' ? 'متخصصین مجرب' : language === 'en' ? 'Expert Technicians' : 'Techniciens experts',
      desc: language === 'fa' ? 'بیش از 10 سال تجربه' : language === 'en' ? 'Over 10 years experience' : 'Plus de 10 ans d\'expérience'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Wrench className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {language === 'fa' ? 'خدمات لوله‌کشی حرفه‌ای' : 
               language === 'en' ? 'Professional Plumbing Services' :
               'Services de plomberie professionnels'}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              {language === 'fa' ? 'رفع تمامی مشکلات لوله‌کشی با کیفیت بالا و قیمت مناسب' :
               language === 'en' ? 'Solving all plumbing problems with high quality and reasonable price' :
               'Résoudre tous les problèmes de plomberie avec une haute qualité et un prix raisonnable'}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {language === 'fa' ? 'خدمات ما' : language === 'en' ? 'Our Services' : 'Nos services'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                    <span>{service.duration}</span>
                    <span className="text-blue-600 font-bold">از {service.price} تومان</span>
                  </div>
                  <Link to="/service-request">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
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
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'fa' ? 'نیاز به خدمات لوله‌کشی دارید؟' :
             language === 'en' ? 'Need Plumbing Services?' :
             'Besoin de services de plomberie?'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === 'fa' ? 'همین الان درخواست خود را ثبت کنید' :
             language === 'en' ? 'Submit your request right now' :
             'Soumettez votre demande maintenant'}
          </p>
          <Link to="/service-request">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              {language === 'fa' ? 'ثبت درخواست' : language === 'en' ? 'Submit Request' : 'Soumettre une demande'}
              <ArrowIcon className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlumbingService;
