
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">{t('contact')}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <Phone className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600">021-12345678</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <Mail className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600">info@bh-home.com</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <MapPin className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-gray-600">123 Service Street, Tehran, Iran</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;