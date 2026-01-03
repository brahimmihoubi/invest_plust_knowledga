import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: id === 'hero' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (location.pathname === '/') {
      scrollToSection(id);
    } else {
      navigate('/');
      // Wait for navigation to complete and content to mount
      setTimeout(() => {
        scrollToSection(id);
      }, 300);
    }
  };

  const navItems = [
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.members'), id: 'members' },
    { label: t('nav.experts'), id: 'experts' },
    { label: t('nav.projects'), id: 'projects' },
    { label: t('nav.method'), id: 'method' },
    { label: t('nav.investisor'), id: 'investisor' },
    { label: t('nav.partners'), id: 'partners' },
    { label: t('nav.achievements'), id: 'achievements' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || isMenuOpen ? 'glass py-2' : 'bg-transparent py-4'
        } border-b border-transparent ${scrolled || isMenuOpen ? 'border-slate-200/50' : ''}`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <button 
                onClick={(e) => handleNavClick(e, 'hero')} 
                className="flex items-center"
              >
                <img 
                  src="/logo.png" 
                  alt="InvestPlus" 
                  className={`h-10 lg:h-16 w-auto max-w-[140px] lg:max-w-none ${i18n.language === 'ar' ? 'origin-right' : 'origin-left'}`} 
                />
              </button>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="px-3 py-2 rounded-full font-bold transition-all text-sm text-slate-700 hover:text-primary hover:bg-primary/5"
                >
                  {item.label}
                </button>
              ))}
              <div className="h-6 w-px bg-slate-200 mx-2"></div>
              <LanguageSwitcher />
              <Link 
                to="/register" 
                className="ml-2 px-5 py-2.5 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
              >
                {t('nav.join')}
              </Link>
            </div>

            {/* Mobile Header Icons */}
            <div className="flex items-center gap-3 lg:hidden">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600 hover:text-primary transition-colors bg-slate-100 rounded-xl"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] sm:w-[60%] z-50 lg:hidden bg-white shadow-2xl flex flex-col pt-24 px-6 overflow-y-auto"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="flex w-full items-center px-6 py-4 rounded-2xl font-bold text-lg text-slate-800 hover:bg-primary/10 hover:text-primary transition-all text-start"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-100">
                <Link 
                  to="/register" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/25"
                >
                  {t('nav.join')}
                </Link>
                
                <p className="mt-8 text-center text-slate-400 text-xs">
                  © 2026 KnowVest Plus. All rights reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
