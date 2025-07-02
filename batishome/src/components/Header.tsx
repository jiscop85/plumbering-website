
import React from 'react';
import { Search, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/hooks/useLanguage';
import LanguageSelector from './LanguageSelector';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { t, language } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isRTL = language === 'fa';

  return (
    <header className="bg-gray-900 shadow-lg border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/about" className="text-white hover:text-yellow-400 transition-colors duration-200 font-semibold relative group">
              {t('about')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/services" className="text-white hover:text-yellow-400 transition-colors duration-200 font-semibold relative group">
              {t('services')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Center Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border-2 border-yellow-200">
                  <span className="text-2xl font-black text-white">B&H</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
            </Link>
          </div>

          {/* Right Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/professionals" className="text-white hover:text-yellow-400 transition-colors duration-200 font-semibold relative group">
              {t('professionals')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="text-white hover:text-yellow-400 transition-colors duration-200 font-semibold relative group">
              {t('contact')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <div className="flex items-center gap-4">
              <LanguageSelector />
              
              <Button variant="outline" size="sm" className="flex items-center gap-2 hover:bg-gray-800 transition-all duration-200 border-gray-600 hover:border-yellow-400 text-white font-semibold">
                <User className="h-4 w-4" />
                <span className="hidden xl:inline">{t('loginSignup')}</span>
              </Button>
              
              <Link to="/service-request">
                <Button size="sm" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 border border-yellow-400">
                  {t('newRequest')}
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <LanguageSelector />
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-gray-800 transition-all duration-200 border-gray-600 text-white"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden mt-4">
          <div className="relative">
            <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5`} />
            <Input
              type="text"
              placeholder={t('searchPlaceholder')}
              className={`w-full ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-3 border border-gray-600 rounded-xl bg-gray-800 focus:bg-gray-700 hover:border-gray-500 transition-all duration-200 shadow-sm text-white`}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-700 bg-gray-900 backdrop-blur-sm rounded-b-xl shadow-lg">
            <nav className="flex flex-col gap-4 mt-4">
              <Link to="/about" className="text-white hover:text-yellow-400 font-medium py-2 hover:bg-gray-800 rounded-lg px-2 transition-all duration-200">
                {t('about')}
              </Link>
              <Link to="/services" className="text-white hover:text-yellow-400 font-medium py-2 hover:bg-gray-800 rounded-lg px-2 transition-all duration-200">
                {t('services')}
              </Link>
              <Link to="/professionals" className="text-white hover:text-yellow-400 font-medium py-2 hover:bg-gray-800 rounded-lg px-2 transition-all duration-200">
                {t('professionals')}
              </Link>
              <Link to="/contact" className="text-white hover:text-yellow-400 font-medium py-2 hover:bg-gray-800 rounded-lg px-2 transition-all duration-200">
                {t('contact')}
              </Link>
            </nav>
            
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-700">
              <Button variant="outline" className="justify-center hover:bg-gray-800 transition-all duration-200 text-white border-gray-600">
                <User className="h-4 w-4 mr-2" />
                {t('loginSignup')}
              </Button>
              <Link to="/service-request">
                <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 justify-center w-full shadow-lg hover:shadow-xl transition-all duration-200 text-black font-bold">
                  {t('newRequest')}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
