
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'fa';

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-xl font-black text-gray-900">B&H</span>
              </div>
              <span className="text-2xl font-bold">B&H Home Services</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Professional home services with expert technicians available 24/7. Quality guaranteed with transparent pricing and reliable service you can trust.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300 group">
                <Facebook className="h-5 w-5 text-gray-300 group-hover:text-gray-900" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300 group">
                <Twitter className="h-5 w-5 text-gray-300 group-hover:text-gray-900" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300 group">
                <Instagram className="h-5 w-5 text-gray-300 group-hover:text-gray-900" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300 group">
                <Linkedin className="h-5 w-5 text-gray-300 group-hover:text-gray-900" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link to="/professionals" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  {t('professionals')}
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  {t('howItWorks')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">021-12345678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">info@bh-home.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Service Street,<br />
                  Tehran, Iran
                </span>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <p className="text-yellow-400 font-semibold mb-2">Emergency Service</p>
              <p className="text-gray-300 text-sm">Available 24/7 for urgent repairs</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 B&H Home Services. All rights reserved.
            </p>
            
            <div className="flex gap-6 text-sm">
              <Link to="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
