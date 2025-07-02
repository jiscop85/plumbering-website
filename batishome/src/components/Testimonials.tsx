
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'Excellent service! The plumber arrived on time and fixed our leak quickly. Very professional and reasonably priced.',
      rating: 5,
      image: '/lovable-uploads/ae366129-fe50-481b-99f4-29c09a93248c.png'
    },
    {
      name: 'Michael Chen',
      role: 'Property Manager',
      content: 'I use B&H for all my properties. Their team is reliable, skilled, and always delivers quality work. Highly recommend!',
      rating: 5,
      image: '/lovable-uploads/f0ce09ee-269a-422d-8a38-1c9fbc5386ef.png'
    },
    {
      name: 'Emily Davis',
      role: 'Apartment Owner',
      content: 'Amazing electrical work! The technician was knowledgeable and explained everything clearly. Will definitely use again.',
      rating: 5,
      image: '/lovable-uploads/a32d164c-8053-4253-94cc-2842ae9b3608.png'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">{t('testimonialsTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear what our satisfied customers have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200 hover:border-yellow-400/50 relative"
            >
              <div className="absolute top-4 right-4 text-yellow-400">
                <Quote className="h-8 w-8 opacity-20" />
              </div>
              
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
