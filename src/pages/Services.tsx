
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wrench, Zap, Thermometer, Settings, Star, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'plumbing',
      title: t('plumbing'),
      icon: Wrench,
      description: 'خدمات کامل لوله‌کشی شامل تعمیر نشتی، نصب شیرآلات، باز کردن لوله و تعمیرات اضطراری',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      price: 'از ۱۵۰,۰۰۰ تومان',
      duration: '۱-۳ ساعت',
      link: '/services/plumbing'
    },
    {
      id: 'electricity',
      title: t('electricity'),
      icon: Zap,
      description: 'سیم‌کشی، نصب پریز و کلید، تعمیر تابلو برق و رفع اتصالی',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      price: 'از ۲۰۰,۰۰۰ تومان',
      duration: '۲-۴ ساعت',
      link: '/services/electricity'
    },
    {
      id: 'heating',
      title: t('heating'),
      icon: Thermometer,
      description: 'تعمیر و نصب پکیج، کولر، رادیاتور و سیستم‌های گرمایشی و سرمایشی',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
      price: 'از ۳۰۰,۰۰۰ تومان',
      duration: '۳-۶ ساعت',
      link: '/services/heating'
    },
    {
      id: 'maintenance',
      title: t('maintenance'),
      icon: Settings,
      description: 'سرویس دوره‌ای، نگهداری ساختمان و تعمیرات عمومی تاسیسات',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      price: 'از ۱۰۰,۰۰۰ تومان',
      duration: '۱-۸ ساعت',
      link: '/services/maintenance'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            خدمات تاسیسات ما
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            ارائه تمامی خدمات تاسیساتی با بالاترین کیفیت و قیمت مناسب
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`h-10 w-10 ${service.iconColor}`} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4" />
                            <span>{service.price}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{service.duration}</span>
                          </div>
                        </div>
                        
                        <Link to={service.link}>
                          <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                            مشاهده جزئیات و ثبت درخواست
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">چرا ما را انتخاب کنید؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">تضمین کیفیت</h3>
              <p className="text-gray-600">ضمانت کامل کیفیت کار و رضایت مشتری</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">سرعت بالا</h3>
              <p className="text-gray-600">حضور سریع متخصص در کمترین زمان ممکن</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">متخصصین مجرب</h3>
              <p className="text-gray-600">کار با ماهرترین متخصصین تاسیسات کشور</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
