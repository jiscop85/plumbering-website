
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Stay updated with the latest home maintenance tips, industry news, and expert advice from B&H Home Services.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
