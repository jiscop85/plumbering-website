
import React from 'react';
import { Star, Trophy, CheckCircle, Zap, Users, ThumbsUp, Award, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

const QualityGuarantee = () => {
  const { t } = useLanguage();

  const qualityFeatures = [
    {
      icon: Trophy,
      title: 'متخصصین ممتاز',
      description: 'فقط بهترین متخصصین با بیشترین امتیاز در پلتفرم ما فعالیت می‌کنند',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: CheckCircle,
      title: 'ضمانت نتیجه',
      description: 'در صورت عدم رضایت، کار مجدداً و رایگان انجام می‌شود',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Star,
      title: 'نظام امتیازدهی',
      description: 'سیستم دقیق ارزیابی عملکرد متخصصین توسط مشتریان',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: RefreshCw,
      title: 'پیگیری مستمر',
      description: 'نظارت و پیگیری کار تا رسیدن به نتیجه مطلوب',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const guaranteeSteps = [
    {
      title: 'انتخاب متخصص',
      description: 'متخصص با بیشترین امتیاز انتخاب می‌شود'
    },
    {
      title: 'اجرای کار',
      description: 'کار تحت نظارت دقیق انجام می‌پذیرد'
    },
    {
      title: 'بررسی کیفیت',
      description: 'نتیجه کار توسط تیم کیفی بررسی می‌شود'
    },
    {
      title: 'تأیید نهایی',
      description: 'رضایت مشتری تأیید و ضمانت فعال می‌شود'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Trophy className="h-20 w-20 mx-auto mb-6 text-yellow-200" />
          <h1 className="text-5xl font-bold mb-6">تضمین کیفیت</h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
            کیفیت کار برای ما اولویت اول است. با سیستم‌های پیشرفته کنترل کیفیت و ضمانت نتیجه، رضایت شما را تضمین می‌کنیم
          </p>
        </div>
      </section>

      {/* Quality Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              چگونه کیفیت را تضمین می‌کنیم؟
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              سیستم‌های پیشرفته ما برای حفظ بالاترین استانداردهای کیفیت
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityFeatures.map((feature, index) => {
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
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
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

      {/* Guarantee Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              فرآیند تضمین کیفیت
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              چهار مرحله کلیدی برای تضمین کیفیت خدمات
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {guaranteeSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                  
                  {index < guaranteeSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-yellow-300 to-orange-300 transform -translate-x-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Stats */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">آمار کیفیت ما</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">98.5%</div>
              <div className="text-yellow-200">رضایت مشتریان</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-yellow-200">میانگین امتیاز</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-yellow-200">ضمانت نتیجه</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">&lt;1%</div>
              <div className="text-yellow-200">نارضایتی</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            کیفیت تضمینی را تجربه کنید
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            با اطمینان کامل از کیفیت، درخواست خود را ثبت کنید
          </p>
          <Link to="/service-request">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-4 text-lg">
              درخواست با ضمانت کیفیت
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QualityGuarantee;
