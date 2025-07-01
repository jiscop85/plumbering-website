
import React from 'react';
import { Button } from './ui/button';
import { useLanguage } from '../hooks/useLanguage';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fa', name: 'فارسی', flag: '🇮🇷' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  const currentLang = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-gray-300 text-gray-700 hover:bg-white/20 transition-all duration-200"
      >
        <Globe className="h-4 w-4" />
        <span className="flex items-center gap-1">
          <span>{currentLang?.flag}</span>
          <span className="hidden sm:inline text-sm">{currentLang?.name}</span>
        </span>
        <ChevronDown className="h-3 w-3" />
      </Button>
      
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg shadow-xl z-50 min-w-[160px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as 'en' | 'fa' | 'fr');
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors duration-200 flex items-center gap-3 ${
                language === lang.code ? 'bg-gray-100 text-yellow-600' : 'text-gray-700'
              } first:rounded-t-lg last:rounded-b-lg`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
