
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle, Users } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Phone,
      title: 'تماس تلفنی',
      description: 'پاسخگویی ۲۴/۷',
      value: '۰۲۱-۱۲۳۴۵۶۷۸',
      color: 'bg-blue-500'
    },
    {
      icon: MessageCircle,
      title: 'پشتیبانی آنلاین',
      description: 'چت زنده با کارشناسان',
      value: 'شروع چت',
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      title: 'ایمیل',
      description: 'پاسخ در کمتر از ۲۴ ساعت',
      value: 'support@tasisiab.com',
      color: 'bg-purple-500'
    },
    {
      icon: MapPin,
      title: 'آدرس دفتر',
      description: 'مراجعه حضوری',
      value: 'تهران، خیابان ولیعصر، پلاک ۱۲۳',
      color: 'bg-orange-500'
    }
  ];

  const workingHours = [
    { day: 'شنبه تا چهارشنبه', hours: '۸:۰۰ - ۱۸:۰۰' },
    { day: 'پنج‌شنبه', hours: '۸:۰۰ - ۱۳:۰۰' },
    { day: 'جمعه', hours: 'تعطیل' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            تماس با ما
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            ما همیشه آماده پاسخگویی به سوالات و نیازهای شما هستیم
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                    <p className="text-gray-900 font-semibold">{method.value}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  پیام خود را برای ما ارسال کنید
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">نام</Label>
                      <Input id="firstName" placeholder="نام خود را وارد کنید" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">نام خانوادگی</Label>
                      <Input id="lastName" placeholder="نام خانوادگی خود را وارد کنید" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">ایمیل</Label>
                      <Input id="email" type="email" placeholder="example@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">شماره تماس</Label>
                      <Input id="phone" placeholder="09123456789" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">موضوع</Label>
                    <Input id="subject" placeholder="موضوع پیام خود را وارد کنید" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">پیام</Label>
                    <Textarea
                      id="message"
                      placeholder="متن پیام خود را اینجا بنویسید..."
                      rows={6}
                    />
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                    ارسال پیام
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Working Hours */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">ساعات کاری</h3>
                  </div>
                  <div className="space-y-3">
                    {workingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="text-gray-600">{schedule.day}</span>
                        <span className="font-semibold text-gray-900">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Link */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">سوالات متداول</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    شاید پاسخ سوال شما در بخش سوالات متداول موجود باشد
                  </p>
                  <Button variant="outline" className="w-full">
                    مشاهده سوالات متداول
                  </Button>
                </CardContent>
              </Card>

              {/* Emergency */}
              <Card className="bg-red-50 border-red-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-red-700">خدمات اضطراری</h3>
                  </div>
                  <p className="text-red-600 mb-4">
                    برای خدمات فوری و اضطراری ۲۴ ساعته با ما تماس بگیرید
                  </p>
                  <p className="text-2xl font-bold text-red-700">۰۹۱۲-۳۴۵-۶۷۸۹</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
