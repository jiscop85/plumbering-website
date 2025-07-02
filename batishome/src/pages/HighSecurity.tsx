
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield } from 'lucide-react';

const HighSecurity = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Shield className="h-20 w-20 text-yellow-500 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-8">High Security Standards</h1>
          </div>
          
          <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
            <p className="mb-6">
              At B&H Home Services, security and trust are our top priorities. All our professionals undergo 
              comprehensive background checks and verification processes before joining our network.
            </p>
            <p className="mb-6">
              We maintain strict security protocols to ensure your home and family are always safe. 
              Our technicians are fully licensed, bonded, and insured for your complete peace of mind.
            </p>
            <p>
              Every service call is monitored and quality-controlled to maintain our high security standards.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HighSecurity;
