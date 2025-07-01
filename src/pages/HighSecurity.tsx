
import React from 'react';
import { Shield, UserCheck, Lock, Award, CheckCircle, Star, Eye, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

const HighSecurity = () => {
  const { t } = useLanguage();

  const securityFeatures = [
    {
      icon: UserCheck,
      title: 'تأیید هویت متخصصین',
      description: 'تمامی متخصصین از طریق مدارک و سوابق کاری بررسی می‌شوند',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Lock,
      title: 'رمزنگاری داده‌ها',
      description: 'اطلاعات شخصی شما با بالاترین استانداردهای امنیتی محافظت می‌شود',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      title: 'مجوزهای معتبر',
      description: 'متخصصین دارای مجوزهای کاری از سازمان‌های ذی‌صلاح هستند',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Eye,
      title: 'نظارت مستمر',
      description: 'فرآیند کار تحت نظارت مستمر قرار دارد تا کیفیت حفظ شود',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const verificationSteps = [
    'بررسی مدارک تحصیلی',
    'تأیید سوابق کاری',
    'بررسی پیشینه قانونی',
    'آزمون مهارت عملی',
    'ارزیابی رفتار حرفه‌ای'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-20 w-20 mx-auto mb-6 text-blue-200" />
          <h1 className="text-5xl font-bold mb-6">امنیت بالا</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            امنیت شما اولویت اصلی ماست. با سیستم‌های پیشرفته تأیید هویت و نظارت مستمر، اطمینان کامل از کیفیت خدمات را تضمین می‌کنیم
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ویژگی‌های امنیتی ما
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              چگونه امنیت شما و کیفیت خدمات را تضمین می‌کنیم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg bg-white overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              فرآیند تأیید متخصصین
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              هر متخصص قبل از پیوستن به تیم ما، مراحل دقیق تأیید هویت را طی می‌کند
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {verificationSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                      {index + 1}
                    </div>
                    <p className="text-sm font-medium text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-200">متخصصین تأیید شده</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">نظارت امنیتی</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-200">امنیت داده‌ها</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">0</div>
              <div className="text-blue-200">نقض امنیتی</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            آماده تجربه امنیت کامل؟
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            همین الان درخواست خود را ثبت کنید و با خیال راحت با متخصصین تأیید شده کار کنید
          </p>
          <Link to="/service-request">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-4 text-lg">
              درخواست خدمت امن
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HighSecurity;
