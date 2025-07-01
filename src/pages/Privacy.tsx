
import React from 'react';
import { Lock, Eye, Database, UserCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  const privacySections = [
    {
      title: 'جمع‌آوری اطلاعات',
      icon: Database,
      content: [
        'اطلاعات شخصی: نام، شماره تماس، آدرس ایمیل',
        'اطلاعات درخواست: جزئیات خدمات مورد نیاز شما',
        'اطلاعات فنی: IP، نوع مرورگر، سیستم عامل',
        'اطلاعات استفاده: نحوه تعامل شما با پلتفرم'
      ]
    },
    {
      title: 'استفاده از اطلاعات',
      icon: UserCheck,
      content: [
        'ارائه خدمات درخواستی و ارتباط با متخصصین مناسب',
        'بهبود کیفیت خدمات و تجربه کاربری',
        'ارسال اطلاعیه‌های مهم و به‌روزرسانی‌ها',
        'پیشگیری از تقلب و تضمین امنیت پلتفرم'
      ]
    },
    {
      title: 'محافظت از اطلاعات',
      icon: Lock,
      content: [
        'رمزگذاری تمامی اطلاعات حساس',
        'محدود کردن دسترسی به اطلاعات شخصی',
        'نظارت مداوم بر امنیت سیستم‌ها',
        'پشتیبان‌گیری منظم از داده‌ها'
      ]
    },
    {
      title: 'حقوق شما',
      icon: Eye,
      content: [
        'دسترسی به اطلاعات شخصی خود',
        'درخواست تصحیح اطلاعات نادرست',
        'حذف اطلاعات شخصی (در موارد مجاز)',
        'انصراف از دریافت ایمیل‌های تبلیغاتی'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Lock className="h-20 w-20 mx-auto mb-6 text-purple-200" />
          <h1 className="text-5xl font-bold mb-6">حریم خصوصی</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            حفاظت از اطلاعات شخصی شما اولویت اصلی ماست
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {privacySections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">تماس با ما</h2>
            <p className="text-gray-700 mb-4">
              اگر سوالی در مورد حریم خصوصی یا نحوه استفاده از اطلاعات شما دارید، می‌توانید با ما تماس بگیرید:
            </p>
            <div className="space-y-2 text-gray-600">
              <p>📧 privacy@tasissyab.com</p>
              <p>📞 ۰۲۱-۱۲۳۴۵۶۷۸</p>
            </div>
          </div>

          {/* Last Updated */}
          <div className="mt-8 text-center text-sm text-gray-500">
            آخرین به‌روزرسانی: ۱۵ آذر ۱۴۰۳
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
