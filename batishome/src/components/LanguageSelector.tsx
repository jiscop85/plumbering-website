
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'fa', name: 'فا', flag: '🇮🇷' },
    { code: 'fr', name: 'FR', flag: '🇫🇷' }
  ];

  return (
    <div className="relative group">
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-2 hover:bg-gray-800 transition-all duration-200 border-gray-600 hover:border-yellow-400 text-white font-semibold"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm font-medium">
          {languages.find(lang => lang.code === language)?.name || 'EN'}
        </span>
      </Button>
      
      <div className="absolute top-full mt-2 left-0 bg-gray-800 border border-gray-600 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[120px]">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code as 'en' | 'fa' | 'fr')}
            className={`w-full px-4 py-2 text-left hover:bg-gray-700 transition-colors duration-200 flex items-center gap-3 ${
              language === lang.code ? 'bg-gray-700 text-yellow-400' : 'text-white'
            } first:rounded-t-lg last:rounded-b-lg`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="font-medium">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
