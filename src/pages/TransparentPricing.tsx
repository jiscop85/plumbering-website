
import React from 'react';
import { DollarSign, Calculator, Eye, FileText, CheckCircle, TrendingUp, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

const TransparentPricing = () => {
  const { t } = useLanguage();

  const pricingFeatures = [
    {
      icon: Eye,
      title: 'قیمت از پیش مشخص',
      description: 'تمام هزینه‌ها قبل از شروع کار مشخص و اعلام می‌شود',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Calculator,
      title: 'محاسبه‌گر آنلاین',
      description: 'با محاسبه‌گر آنلاین ما تخمین دقیق هزینه را دریافت کنید',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FileText,
      title: 'صورتحساب شفاف',
      description: 'جزئیات کامل هزینه‌ها در صورتحساب نهایی قابل مشاهده است',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'بدون هزینه پنهان',
      description: 'هیچ هزینه اضافی یا پنهان وجود ندارد، همه چیز روشن است',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const pricingProcess = [
    {
      title: 'درخواست خدمت',
      description: 'شرح کامل کار و دریافت قیمت اولیه'
    },
    {
      title: 'بررسی متخصص',
      description: 'بازدید رایگان و ارائه قیمت نهایی'
    },
    {
      title: 'تأیید قیمت',
      description: 'تأیید قیمت توسط شما قبل از شروع کار'
    },
    {
      title: 'اجرا و پرداخت',
      description: 'انجام کار و پرداخت طبق قیمت توافقی'
    }
  ];

  const priceRanges = [
    {
      service: 'لوله‌کشی',
      basic: '150,000 - 500,000',
      advanced: '500,000 - 2,000,000',
      description: 'تعمیر نشتی، نصب شیرآلات، لوله‌کشی'
    },
    {
      service: 'برق‌کاری',
      basic: '200,000 - 600,000',
      advanced: '600,000 - 3,000,000',
      description: 'سیم‌کشی، نصب پریز، تعمیر تابلو'
    },
    {
      service: 'گرمایش',
      basic: '300,000 - 800,000',
      advanced: '800,000 - 5,000,000',
      description: 'تعمیر پکیج، نصب رادیاتور'
    },
    {
      service: 'تعمیرات عمومی',
      basic: '100,000 - 400,000',
      advanced: '400,000 - 1,500,000',
      description: 'خدمات نگهداری و تعمیرات'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <DollarSign className="h-20 w-20 mx-auto mb-6 text-purple-200" />
          <h1 className="text-5xl font-bold mb-6">قیمت‌گذاری شفاف</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            بدون هزینه پنهان، بدون سوءتفاهم. تمام قیمت‌ها از ابتدا مشخص و شفاف است تا با خیال راحت تصمیم بگیرید
          </p>
        </div>
      </section>

      {/* Pricing Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              چرا قیمت‌گذاری ما شفاف است؟
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              اصول ما در قیمت‌گذاری منصفانه و شفاف
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingFeatures.map((feature, index) => {
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
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
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

      {/* Price Ranges */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              محدوده قیمت خدمات
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              تخمین کلی هزینه‌ها برای انواع خدمات تاسیساتی
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {priceRanges.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.service}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium text-gray-700">کارهای ساده</span>
                      <span className="font-bold text-green-600">{service.basic} تومان</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium text-gray-700">کارهای پیچیده</span>
                      <span className="font-bold text-blue-600">{service.advanced} تومان</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Process */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              فرآیند قیمت‌گذاری
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              چگونه قیمت کار شما محاسبه می‌شود
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {pricingProcess.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                  
                  {index < pricingProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 transform -translate-x-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">مزایای قیمت‌گذاری شفاف</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-green-300" />
              <h3 className="text-xl font-bold mb-3">صرفه‌جویی</h3>
              <p className="text-purple-100">بهترین قیمت بازار بدون هزینه اضافی</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-bold mb-3">اعتماد</h3>
              <p className="text-purple-100">شفافیت کامل در تمام مراحل</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-bold mb-3">آسودگی خیال</h3>
              <p className="text-purple-100">بدون نگرانی از هزینه‌های پنهان</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            قیمت کار خود را محاسبه کنید
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            با محاسبه‌گر آنلاین ما تخمین دقیق هزینه را دریافت کنید
          </p>
          <Link to="/service-request">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 text-white px-8 py-4 text-lg">
              محاسبه قیمت رایگان
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TransparentPricing;
