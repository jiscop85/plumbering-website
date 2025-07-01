
import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      title: 'راهنمای کامل انتخاب لوله‌کش مناسب',
      excerpt: 'نکات مهم برای انتخاب بهترین متخصص لوله‌کشی و جلوگیری از مشکلات رایج',
      author: 'تیم تاسیس‌یاب',
      date: '۱۵ آذر ۱۴۰۳',
      category: 'لوله‌کشی',
      image: '/placeholder.svg'
    },
    {
      title: 'نگهداری تابستانی سیستم‌های تهویه',
      excerpt: 'چگونه سیستم گرمایش و سرمایش خود را برای فصل گرم آماده کنید',
      author: 'تیم تاسیس‌یاب',
      date: '۱۰ آذر ۱۴۰۳',
      category: 'تهویه',
      image: '/placeholder.svg'
    },
    {
      title: 'علائم هشدار در سیستم برق ساختمان',
      excerpt: 'نشانه‌هایی که نشان می‌دهد نیاز به تعمیر سیستم برقی دارید',
      author: 'تیم تاسیس‌یاب',
      date: '۵ آذر ۱۴۰۳',
      category: 'برق‌کاری',
      image: '/placeholder.svg'
    },
    {
      title: 'بهینه‌سازی مصرف انرژی در منزل',
      excerpt: 'راه‌های کاهش هزینه‌های انرژی و افزایش بهره‌وری تاسیسات',
      author: 'تیم تاسیس‌یاب',
      date: '۱ آذر ۱۴۰۳',
      category: 'بهینه‌سازی',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">بلاگ تاسیس‌یاب</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            مقالات مفید و راهنماهای تخصصی در زمینه تاسیسات ساختمان
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg bg-white overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20"></div>
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {post.category}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-blue-50 transition-colors">
                    ادامه مطلب
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            عضویت در خبرنامه
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            برای دریافت جدیدترین مقالات و راهنماهای تخصصی در خبرنامه ما عضو شوید
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="ایمیل شما"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
              عضویت
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
