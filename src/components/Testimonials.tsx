import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '../hooks/useLanguage';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'مریم احمدی',
      role: 'مدیر خانه',
      content: 'خدمات فوق‌العاده‌ای دریافت کردم. متخصص لوله‌کشی خیلی حرفه‌ای بود و مشکل نشتی آشپزخانه‌ام را کاملاً حل کرد.',
      rating: 5,
      image: '👩‍💼',
      bgColor: 'from-yellow-400 to-yellow-500'
    },
    {
      name: 'علی رضایی',
      role: 'مالک آپارتمان',
      content: 'قیمت‌گذاری کاملاً شفاف بود و هیچ هزینه اضافی نداشتم. متخصص برق در زمان تعیین شده آمد و کار را انجام داد.',
      rating: 5,
      image: '👨‍💻',
      bgColor: 'from-gray-400 to-gray-500'
    },
    {
      name: 'زهرا محمودی',
      role: 'مدیر اداری',
      content: 'پشتیبانی 24 ساعته واقعاً عالی است. حتی شب‌ها هم پاسخگو هستند و مشکل فوری ما را حل کردند.',
      rating: 5,
      image: '👩‍💼',
      bgColor: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-800 mb-6">
            نظرات مشتریان
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            آنچه مشتریان ما درباره خدماتمان می‌گویند و چرا ما را انتخاب می‌کنند
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border shadow-lg relative overflow-hidden bg-white border-gray-100">
              <CardContent className="p-8 relative">
                {/* Quote Background */}
                <div className="absolute -top-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-20 w-20 text-yellow-500 transform rotate-12" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-gray-700 mb-8 leading-relaxed italic text-lg relative z-10">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.bgColor} rounded-full flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className={`absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br ${testimonial.bgColor} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
