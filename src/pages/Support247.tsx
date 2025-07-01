
import React from 'react';
import { Clock, MessageCircle, Phone, Mail, Headphones, Users, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

const Support247 = () => {
  const { t } = useLanguage();

  const supportChannels = [
    {
      icon: Phone,
      title: 'تماس تلفنی',
      description: 'پشتیبانی فوری از طریق تماس تلفنی در تمام ساعات شبانه‌روز',
      contact: '۰۲۱-۱۲۳۴۵۶۷۸',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageCircle,
      title: 'چت آنلاین',
      description: 'گفتگوی زنده با تیم پشتیبانی برای حل سریع مشکلات',
      contact: 'چت آنلاین',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'ایمیل',
      description: 'ارسال درخواست‌های تفصیلی و دریافت پاسخ در کمتر از یک ساعت',
      contact: 'support@tasissyab.com',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Headphones,
      title: 'پشتیبانی اختصاصی',
      description: 'پشتیبانی اختصاصی برای پروژه‌های بزرگ و مشتریان ویژه',
      contact: 'درخواست مشاور',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const supportFeatures = [
    'پاسخگویی در کمتر از 5 دقیقه',
    'تیم متخصص و با تجربه',
    'حل مشکل در اولین تماس',
    'پیگیری تا رسیدن به نتیجه',
    'راهنمایی رایگان',
    'پشتیبانی چند زبانه'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <Clock className="h-20 w-20 mx-auto mb-6 text-green-200" />
          <h1 className="text-5xl font-bold mb-6">پشتیبانی ۲۴/۷</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            هر زمان که نیاز داشتید، ما اینجا هستیم. تیم پشتیبانی ما آماده کمک به شما در تمام ساعات شبانه‌روز است
          </p>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              راه‌های ارتباط با پشتیبانی
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              از هر کانال که راحت‌ترید، با ما در ارتباط باشید
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg bg-white overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${channel.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                          {channel.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {channel.description}
                        </p>
                        <div className="text-green-600 font-semibold">
                          {channel.contact}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ویژگی‌های پشتیبانی ما
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              چه چیزی پشتیبانی ما را متمایز می‌کند
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">زمان پاسخگویی</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              سرعت پاسخگویی در انواع مختلف درخواست‌ها
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <Zap className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <div className="text-3xl font-bold mb-2">&lt; 2 دقیقه</div>
              <div className="text-green-200">مسائل فوری</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <Clock className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <div className="text-3xl font-bold mb-2">&lt; 15 دقیقه</div>
              <div className="text-green-200">سوالات عمومی</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <Users className="h-12 w-12 mx-auto mb-4 text-purple-300" />
              <div className="text-3xl font-bold mb-2">&lt; 1 ساعت</div>
              <div className="text-green-200">مشاوره تخصصی</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            نیاز به کمک دارید؟
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            تیم پشتیبانی ما آماده پاسخگویی به سوالات شماست
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-teal-700 hover:from-green-700 hover:to-teal-800 text-white px-8 py-4 text-lg">
              شروع چت
            </Button>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg">
                تماس با ما
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support247;
