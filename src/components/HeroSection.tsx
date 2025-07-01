import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { ArrowRight, ArrowLeft, Phone, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import TypewriterText from './TypewriterText';

const HeroSection = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'fa';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-yellow-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f59e0b%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      {/* Floating shapes with enhanced animations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-gray-200 rounded-full opacity-40 animate-float delay-300"></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-yellow-300 rounded-full opacity-25 animate-float delay-500"></div>
      
      {/* Emergency Call Badge with fade-in */}
      <div className="absolute top-8 left-8 z-20 fade-in-element animate-fade-in-down">
        <div className="glass-effect rounded-2xl px-6 py-4 shadow-xl border border-yellow-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center animate-pulse">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-yellow-600 font-bold text-sm">تماس اضطراری</p>
              <p className="text-gray-900 font-bold text-lg">۰۲۱-۱۲۳۴۵۶۷۸</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badge with fade-in */}
      <div className="absolute top-8 right-8 z-20 fade-in-element animate-fade-in-down delay-200">
        <div className="glass-effect rounded-2xl px-6 py-4 shadow-xl border border-gray-200">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-right">
              <p className="text-gray-900 font-bold text-sm">۴۲۰+</p>
              <p className="text-gray-600 text-xs">خدمات انجام شده</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content with staggered fade-in */}
          <div className="text-right">
            <div className="mb-8">
              <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="block text-gray-800 fade-in-element animate-fade-in-right">متخصصین</span>
                <span className="block fade-in-element animate-fade-in-right delay-300">
                  <TypewriterText 
                    text="تاسیسات" 
                    speed={120}
                    className="gradient-text font-black"
                    startDelay={800}
                    showCursor={true}
                    cursorChar="█"
                  />
                </span>
                <span className="block text-2xl lg:text-3xl font-normal text-gray-600 mt-4 fade-in-element animate-fade-in-right delay-500">
                  ما درست انجام می‌دهیم.
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-lg fade-in-element animate-fade-in-up delay-600">
                بهترین متخصصین تاسیسات را در کمترین زمان پیدا کنید. 
                خدمات با کیفیت، قیمت شفاف و ضمانت کامل.
              </p>
            </div>

            {/* Action Buttons with fade-in */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 fade-in-element animate-fade-in-up delay-700">
              <Link to="/service-request">
                <Button 
                  size="lg" 
                  className="group text-lg px-8 py-4 rounded-xl bg-yellow-500 text-white hover:bg-yellow-600 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-yellow-400"
                >
                  استخدام کنید
                  <ArrowIcon className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group text-lg px-8 py-4 rounded-xl border-2 border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                ۰۲۱-۱۲۳۴۵۶۷۸
                <Phone className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>

            {/* Features with staggered fade-in */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: CheckCircle, text: 'پشتیبانی ۲۴/۷', delay: 'delay-800' },
                { icon: CheckCircle, text: 'ضمانت کیفیت', delay: 'delay-[900ms]' },
                { icon: CheckCircle, text: 'قیمت شفاف', delay: 'delay-[1000ms]' },
                { icon: CheckCircle, text: 'متخصصین مجرب', delay: 'delay-[1100ms]' }
              ].map((feature, index) => (
                <div key={index} className={`flex items-center gap-3 text-gray-700 fade-in-element animate-fade-in-left ${feature.delay}`}>
                  <feature.icon className="h-6 w-6 text-yellow-500" />
                  <span className="font-semibold">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Owner Photos Section */}
          <div className="relative fade-in-element animate-fade-in-scale delay-400">
            <div className="relative">
              {/* Background Circles */}
              <div className="absolute inset-0 bg-yellow-100 rounded-full transform rotate-6 scale-110 opacity-60"></div>
              <div className="absolute inset-0 bg-gray-100 rounded-full transform -rotate-3 scale-105 opacity-40"></div>
              
              {/* Main Business Owner Card */}
              <div className="relative white-glass rounded-3xl p-8 transform hover:scale-105 transition-transform duration-500 shadow-2xl border border-yellow-200">
                
                {/* Primary Professional Image */}
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-300 shadow-xl mx-auto mb-4 bg-gradient-to-br from-yellow-100 to-yellow-200 p-2">
                      <img 
                        src="/lovable-uploads/a32d164c-8053-4253-94cc-2842ae9b3608.png"
                        alt="صاحب کسب‌وکار - متخصص تاسیسات"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    {/* Professional Badge */}
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <span className="text-white text-xl font-bold">✓</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">مدیر عامل و بنیانگذار</h3>
                  <p className="text-gray-600 mb-4">متخصص ارشد تاسیسات با ۱۵ سال تجربه</p>
                  
                  {/* Secondary Image - Casual Look */}
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 rounded-xl overflow-hidden border-3 border-gray-300 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <img 
                        src="/lovable-uploads/f0ce09ee-269a-422d-8a38-1c9fbc5386ef.png"
                        alt="صاحب کسب‌وکار - نمای غیررسمی"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Professional Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">۱۵+</div>
                      <div className="text-sm text-gray-600">سال تجربه</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">۵۰۰+</div>
                      <div className="text-sm text-gray-600">پروژه موفق</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">۱۰۰%</div>
                      <div className="text-sm text-gray-600">رضایت مشتری</div>
                    </div>
                  </div>
                  
                  {/* Tool Belt */}
                  <div className="flex justify-center gap-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center transform rotate-12 shadow-lg hover:scale-110 transition-transform">
                      <span className="text-2xl">🔧</span>
                    </div>
                    <div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center transform -rotate-6 shadow-lg hover:scale-110 transition-transform">
                      <span className="text-2xl">🔨</span>
                    </div>
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center transform rotate-6 shadow-lg hover:scale-110 transition-transform">
                      <span className="text-2xl">⚡</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
