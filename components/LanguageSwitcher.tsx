import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇩🇿' }
  ];

  const currentLang = languages.find(l => i18n.language.startsWith(l.code)) || languages[0];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all border border-slate-200 font-bold text-sm text-slate-600"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="uppercase">{currentLang.code}</span>
        <motion.span 
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-xs opacity-50"
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: -10 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute bottom-full mb-2 right-0 bg-white shadow-2xl rounded-2xl border border-slate-100 p-2 min-w-[160px] z-50 overflow-hidden"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`flex items-center w-full px-4 py-3 text-sm font-bold hover:bg-slate-50 rounded-xl transition-colors gap-3 ${
                  i18n.language.startsWith(lang.code) ? 'text-primary bg-primary/5' : 'text-slate-600'
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <div className="flex flex-col items-start translate-y-[-1px]">
                  <span className="leading-none">{lang.name}</span>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
