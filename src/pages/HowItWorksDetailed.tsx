
import React from 'react';
import { FileText, Users, UserCheck, CheckCircle, Play, ArrowRight, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

const HowItWorksDetailed = () => {
  const { t } = useLanguage();

  const detailedSteps = [
    {
      number: '1',
      title: 'درخواست ثبت کنید',
      icon: FileText,
      description: 'جزئیات کار خود را کامل و دقیق شرح دهید',
      details: [
        'نوع خدمت مورد نیاز را انتخاب کنید',
        'آدرس و زمان مناسب را مشخص کنید',
        'توضیحات تکمیلی و عکس اضافه کنید',
        'بودجه تخمینی خود را اعلام کنید'
      ],
      color: 'from-blue-500 to-blue-600',
      time: '5 دقیقه'
    },
    {
      number: '2',
      title: 'پیشنهاد دریافت کنید',
      icon: Users,
      description: 'متخصصین واجد شرایط پیشنهادهای خود را ارسال می‌کنند',
      details: [
        'بررسی درخواست توسط متخصصین',
        'ارسال پیشنهاد قیمت و زمان‌بندی',
        'مشاهده نمونه کارها و نظرات',
        'امکان گفتگو با متخصصین'
      ],
      color: 'from-purple-500 to-purple-600',
      time: '1-2 ساعت'
    },
    {
      number: '3',
      title: 'متخصص انتخاب کنید',
      icon: UserCheck,
      description: 'بهترین گزینه را براساس امتیاز و قیمت انتخاب کنید',
      details: [
        'مقایسه پیشنهادها و قیمت‌ها',
        'بررسی امتیاز و نظرات مشتریان',
        'انتخاب متخصص مناسب',
        'تأیید نهایی و هماهنگی زمان'
      ],
      color: 'from-green-500 to-green-600',
      time: '30 دقیقه'
    },
    {
      number: '4',
      title: 'کار انجام شود',
      icon: CheckCircle,
      description: 'متخصص انتخابی کار را با کیفیت انجام می‌دهد',
      details: [
        'حضور متخصص در زمان مقرر',
        'اجرای کار با استانداردهای بالا',
        'پیگیری و نظارت بر کیفیت',
        'تأیید نهایی و پرداخت'
      ],
      color: 'from-orange-500 to-red-500',
      time: 'متغیر'
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: 'سرعت بالا',
      description: 'از درخواست تا انجام کار در کمترین زمان ممکن'
    },
    {
      icon: Star,
      title: 'کیفیت تضمینی',
      description: 'متخصصین برتر با بالاترین امتیازات'
    },
    {
      icon: UserCheck,
      title: 'انتخاب آزاد',
      description: 'شما تعیین می‌کنید چه کسی کار شما را انجام دهد'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <Play className="h-20 w-20 mx-auto mb-6 text-indigo-200" />
          <h1 className="text-5xl font-bold mb-6">چگونه کار می‌کند؟</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
            با چهار گام ساده و سریع، متخصص مورد نیاز خود را پیدا کنید و کارتان را با بهترین کیفیت انجام دهید
          </p>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              مراحل تفصیلی
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              هر مرحله به تفصیل و با جزئیات کامل
            </p>
          </div>

          <div className="space-y-12">
            {detailedSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="overflow-hidden border-0 shadow-xl bg-white">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[300px]">
                        {/* Content */}
                        <div className="lg:col-span-8 p-8 lg:p-12">
                          <div className="flex items-start gap-6 mb-6">
                            <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0 relative`}>
                              <Icon className="h-8 w-8 text-white" />
                              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                {step.number}
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {step.title}
                              </h3>
                              <p className="text-lg text-gray-600 mb-6">
                                {step.description}
                              </p>
                              
                              <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                                <Clock className="h-4 w-4" />
                                <span>زمان تخمینی: {step.time}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            {step.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-center gap-3">
                                <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full`}></div>
                                <span className="text-gray-700">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Visual */}
                        <div className={`lg:col-span-4 bg-gradient-to-br ${step.color} flex items-center justify-center p-8`}>
                          <div className="text-center text-white">
                            <Icon className="h-24 w-24 mx-auto mb-4 opacity-80" />
                            <div className="text-6xl font-bold opacity-20">{step.number}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Arrow */}
                  {index < detailedSteps.length - 1 && (
                    <div className="flex justify-center my-8">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <ArrowRight className="h-6 w-6 text-gray-600" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              مزایای روش کار ما
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              چرا این روش بهترین انتخاب برای شماست
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">آمار موفقیت</h2>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              نتایج عملکرد سیستم ما در ارائه خدمات
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-indigo-200">موفقیت در اولین تلاش</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2 ساعت</div>
              <div className="text-indigo-200">میانگین زمان پیدا کردن متخصص</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-indigo-200">رضایت از فرآیند</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-indigo-200">پروژه موفق</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            آماده شروع هستید؟
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            همین الان اولین درخواست خود را ثبت کنید و سادگی کار با ما را تجربه کنید
          </p>
          <Link to="/service-request">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white px-8 py-4 text-lg">
              شروع فرآیند
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorksDetailed;
