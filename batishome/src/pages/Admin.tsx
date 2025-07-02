
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Admin = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">Admin Panel</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Administrative access for B&H Home Services management and operations.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
