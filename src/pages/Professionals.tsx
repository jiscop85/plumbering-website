
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Phone, Award, CheckCircle } from 'lucide-react';

const Professionals = () => {
  const { t } = useLanguage();

  const professionals = [
    {
      id: 1,
      name: 'احمد محمدی',
      specialty: 'متخصص لوله‌کشی',
      rating: 4.9,
      reviews: 247,
      experience: '۱۰ سال',
      location: 'تهران - شمال',
      price: '۱۸۰,۰۰۰',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      verified: true,
      completedJobs: 856
    },
    {
      id: 2,
      name: 'علی حسینی',
      specialty: 'برق‌کار ماهر',
      rating: 4.8,
      reviews: 189,
      experience: '۸ سال',
      location: 'تهران - غرب',
      price: '۲۲۰,۰۰۰',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      verified: true,
      completedJobs: 634
    },
    {
      id: 3,
      name: 'محمد رضایی',
      specialty: 'تعمیرکار پکیج',
      rating: 5.0,
      reviews: 156,
      experience: '۱۲ سال',
      location: 'تهران - جنوب',
      price: '۳۵۰,۰۰۰',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      verified: true,
      completedJobs: 423
    },
    {
      id: 4,
      name: 'رضا احمدی',
      specialty: 'تاسیسات عمومی',
      rating: 4.7,
      reviews: 312,
      experience: '۱۵ سال',
      location: 'تهران - شرق',
      price: '۲۰۰,۰۰۰',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
      verified: true,
      completedJobs: 921
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            متخصصین ماهر ما
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            بهترین متخصصین تاسیسات کشور آماده خدمت‌رسانی به شما هستند
          </p>
        </div>
      </section>

      {/* Professionals Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {professionals.map((pro) => (
              <Card key={pro.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-6">
                  {/* Profile Image */}
                  <div className="relative mb-4">
                    <img
                      src={pro.avatar}
                      alt={pro.name}
                      className="w-20 h-20 rounded-full mx-auto object-cover"
                    />
                    {pro.verified && (
                      <div className="absolute -top-1 -right-1 bg-blue-600 rounded-full p-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Name and Specialty */}
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{pro.name}</h3>
                    <p className="text-sm text-gray-600">{pro.specialty}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(pro.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold">{pro.rating}</span>
                    <span className="text-sm text-gray-500">({pro.reviews})</span>
                  </div>

                  {/* Stats */}
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>{pro.experience} تجربه</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{pro.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>{pro.completedJobs} کار انجام شده</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <span className="text-lg font-bold text-blue-600">از {pro.price} تومان</span>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      مشاهده پروفایل
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      تماس مستقیم
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">متخصص هستید؟</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            به جمع متخصصین ما بپیوندید و درآمد خود را افزایش دهید
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            همین حالا عضو شوید
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Professionals;
