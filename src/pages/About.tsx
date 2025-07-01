
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Clock, Shield, Target, Heart } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { number: '10,000+', label: 'مشتری راضی', icon: Users },
    { number: '2,500+', label: 'متخصص ماهر', icon: Award },
    { number: '50,000+', label: 'کار انجام شده', icon: Clock },
    { number: '99%', label: 'رضایت مشتری', icon: Shield }
  ];

  const values = [
    {
      title: 'کیفیت بالا',
      description: 'ارائه خدمات با بالاترین کیفیت و استانداردهای روز دنیا',
      icon: Award,
      color: 'bg-blue-500'
    },
    {
      title: 'اعتماد و شفافیت',
      description: 'شفافیت کامل در قیمت‌گذاری و انجام کار',
      icon: Shield,
      color: 'bg-green-500'
    },
    {
      title: 'نوآوری',
      description: 'استفاده از جدیدترین تکنولوژی‌ها و روش‌های کار',
      icon: Target,
      color: 'bg-purple-500'
    },
    {
      title: 'مشتری‌محوری',
      description: 'مشتری در مرکز تمامی تصمیمات و فعالیت‌های ما',
      icon: Heart,
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            درباره تاسیس‌یاب
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed">
            ما پلتفرمی هستیم که مشتریان را با بهترین متخصصین تاسیسات کشور پیوند می‌دهد
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  داستان ما
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  تاسیس‌یاب در سال ۱۴۰۰ با هدف حل مشکل پیدا کردن متخصصین مطمئن تاسیسات تأسیس شد. 
                  ما متوجه شدیم که بسیاری از مردم با مشکل پیدا کردن متخصص قابل اعتماد مواجه هستند.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  امروز، با بیش از ۲۵۰۰ متخصص تأیید شده و ۱۰ هزار مشتری راضی، 
                  ما افتخار داریم که بزرگترین پلتفرم خدمات تاسیساتی ایران باشیم.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop"
                  alt="تیم تاسیس‌یاب"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            آمار ما در یک نگاه
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              ارزش‌های ما
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              این ارزش‌ها راهنمای ما در تمامی تصمیمات و فعالیت‌هایمان هستند
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              ماموریت ما
            </h2>
            <p className="text-xl leading-relaxed opacity-90">
              ما متعهد هستیم که دسترسی به خدمات تاسیساتی باکیفیت را برای همه آسان کنیم. 
              هدف ما ایجاد پلتفرمی است که در آن اعتماد، کیفیت و رضایت مشتری در اولویت قرار دارد.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
