
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">Privacy Policy</h1>
          <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed">
            <p className="mb-6">
              B&H Home Services respects your privacy and is committed to protecting your personal information. 
              We collect only necessary information to provide our services effectively.
            </p>
            <p>
              Your information is never shared with third parties without your consent.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
