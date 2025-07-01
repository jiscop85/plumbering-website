import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-lg font-black text-white">B&H</span>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400">B&H Home</h3>
            </div>
            <p className="text-gray-300">
              پلتفرم آنلاین ارتباط با بهترین متخصصین تاسیسات منزل
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">خدمات</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/services/plumbing" className="hover:text-yellow-400 transition-colors duration-200">لوله‌کشی</Link></li>
              <li><Link to="/services/electricity" className="hover:text-yellow-400 transition-colors duration-200">برق‌کاری</Link></li>
              <li><Link to="/services/heating" className="hover:text-yellow-400 transition-colors duration-200">گرمایش و سرمایش</Link></li>
              <li><Link to="/services/maintenance" className="hover:text-yellow-400 transition-colors duration-200">تاسیسات بهداشتی</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">شرکت</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors duration-200">درباره ما</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400 transition-colors duration-200">تماس با ما</Link></li>
              <li><Link to="/faq" className="hover:text-yellow-400 transition-colors duration-200">سوالات متداول</Link></li>
              <li><Link to="/blog" className="hover:text-yellow-400 transition-colors duration-200">بلاگ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">تماس با ما</h4>
            <div className="space-y-2 text-gray-300">
              <p className="hover:text-yellow-400 transition-colors duration-200">📞 ۰۲۱-۱۲۳۴۵۶۷۸</p>
              <p className="hover:text-yellow-400 transition-colors duration-200">✉️ info@bnhhome.com</p>
              <p className="hover:text-yellow-400 transition-colors duration-200">📍 تهران، ایران</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © ۱۴۰۳ B&H Home. تمامی حقوق محفوظ است.
          </p>
          <div className="flex space-x-4 space-x-reverse mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">قوانین و مقررات</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">حریم خصوصی</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
