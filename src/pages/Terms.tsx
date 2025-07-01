
import React from 'react';
import { Scale, Shield, Users, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  const sections = [
    {
      title: 'تعاریف و مفاهیم',
      icon: FileText,
      content: [
        'پلتفرم: سایت و اپلیکیشن تاسیس‌یاب که خدمات واسطه‌گری ارائه می‌دهد',
        'کاربر: هر فردی که از خدمات پلتفرم استفاده می‌کند',
        'متخصص: ارائه‌دهندگان خدمات تاسیساتی ثبت‌شده در پلتفرم',
        'خدمت: کلیه خدمات تاسیساتی قابل درخواست از طریق پلتفرم'
      ]
    },
    {
      title: 'حقوق و تکالیف کاربران',
      icon: Users,
      content: [
        'ارائه اطلاعات صحیح و کامل هنگام ثبت نام',
        'رعایت احترام در تعامل با متخصصین',
        'پرداخت به‌موقع هزینه خدمات دریافتی',
        'گزارش هرگونه مشکل یا تخلف به تیم پشتیبانی'
      ]
    },
    {
      title: 'مسئولیت‌ها و ضمانت‌ها',
      icon: Shield,
      content: [
        'پلتفرم تنها نقش واسطه‌گری دارد و مسئولیت کیفیت کار با متخصص است',
        'تأیید هویت و صلاحیت متخصصین از سوی پلتفرم',
        'ضمانت امنیت اطلاعات شخصی کاربران',
        'پشتیبانی در حل اختلافات احتمالی'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <Scale className="h-20 w-20 mx-auto mb-6 text-gray-300" />
          <h1 className="text-5xl font-bold mb-6">قوانین و مقررات</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            شرایط استفاده از خدمات پلتفرم تاسیس‌یاب
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Additional Terms */}
          <div className="mt-12 bg-blue-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">شرایط عمومی</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                با استفاده از خدمات پلتفرم تاسیس‌یاب، شما با تمامی قوانین و مقررات ذکر شده موافقت می‌کنید.
              </p>
              <p>
                پلتفرم حق تغییر این قوانین را محفوظ می‌دارد و کاربران از طریق اطلاعیه‌های پلتفرم مطلع خواهند شد.
              </p>
              <p>
                برای هرگونه سوال یا ابهام در مورد قوانین، می‌توانید با تیم پشتیبانی تماس بگیرید.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
