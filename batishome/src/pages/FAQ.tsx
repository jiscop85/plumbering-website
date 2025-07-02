
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly can you respond to emergency calls?",
      answer: "We provide 24/7 emergency service and typically respond within 30-60 minutes for urgent situations."
    },
    {
      question: "Are your technicians licensed and insured?",
      answer: "Yes, all our technicians are fully licensed, certified, and insured for your peace of mind."
    },
    {
      question: "Do you offer warranties on your work?",
      answer: "We provide comprehensive warranties on all our services and guarantee customer satisfaction."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h1>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
