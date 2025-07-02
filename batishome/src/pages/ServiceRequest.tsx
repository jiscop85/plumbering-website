
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/hooks/useLanguage';

const ServiceRequest = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">{t('newRequest')}</h1>
          
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <Input type="text" placeholder="Enter your full name" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <Input type="tel" placeholder="Enter your phone number" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                <select className="w-full p-3 border border-gray-300 rounded-md">
                  <option>Select a service</option>
                  <option>Plumbing</option>
                  <option>Electrical</option>
                  <option>Heating & Cooling</option>
                  <option>Maintenance</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea 
                  className="w-full p-3 border border-gray-300 rounded-md h-32"
                  placeholder="Describe your service needs"
                ></textarea>
              </div>
              
              <Button className="w-full" size="lg">Submit Request</Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceRequest;
