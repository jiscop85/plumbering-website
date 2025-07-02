
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">Terms of Service</h1>
          <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed">
            <p className="mb-6">
              By using B&H Home Services, you agree to these terms and conditions. 
              Our services are provided with professional standards and quality assurance.
            </p>
            <p>
              All work is guaranteed and we maintain full insurance coverage for your protection.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
