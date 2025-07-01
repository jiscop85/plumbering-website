
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: 'چگونه می‌توانم درخواست خدمت ثبت کنم؟',
      answer: 'برای ثبت درخواست خدمت، کافی است روی دکمه "ثبت درخواست جدید" کلیک کنید و جزئیات کار خود را شرح دهید. سپس متخصصین واجد شرایط پیشنهاد خود را ارسال خواهند کرد.'
    },
    {
      question: 'آیا متخصصین تأیید شده هستند؟',
      answer: 'بله، تمامی متخصصین پلتفرم ما مدارک و مجوزهای لازم را دارند و هویت آنها تأیید شده است. همچنین سابقه کار و امتیاز هر متخصص قابل مشاهده است.'
    },
    {
      question: 'هزینه استفاده از پلتفرم چقدر است؟',
      answer: 'ثبت درخواست و دریافت پیشنهادات کاملاً رایگان است. شما فقط هزینه کار را مستقیماً به متخصص انتخابی پرداخت می‌کنید.'
    },
    {
      question: 'آیا ضمانت برای کارها وجود دارد؟',
      answer: 'بله، تمامی کارهای انجام شده از طریق پلتفرم ما دارای ضمانت کیفیت هستند. در صورت بروز مشکل، تیم پشتیبانی ما در خدمت شماست.'
    },
    {
      question: 'چقدر طول می‌کشد تا متخصص پیدا کنم؟',
      answer: 'معمولاً ظرف چند ساعت پیشنهادات متخصصین را دریافت خواهید کرد. در موارد اورژانسی، امکان پیدا کردن متخصص در کمتر از یک ساعت وجود دارد.'
    },
    {
      question: 'آیا می‌توانم با متخصص قبل از شروع کار صحبت کنم؟',
      answer: 'بله، بعد از انتخاب متخصص، می‌توانید از طریق سیستم چت پلتفرم با او در تماس باشید و جزئیات کار را هماهنگ کنید.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">سوالات متداول</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            پاسخ سوالات پرتکرار شما در مورد خدمات تاسیس‌یاب
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-lg border-0"
              >
                <AccordionTrigger className="px-6 py-4 text-right hover:no-underline">
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            سوال دیگری دارید؟
          </h2>
          <p className="text-gray-600 mb-8">
            تیم پشتیبانی ما آماده پاسخگویی به سوالات شماست
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            تماس با ما
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
