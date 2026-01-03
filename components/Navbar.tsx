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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (location.pathname === '/') {
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
    } else {
      navigate('/');
      setTimeout(() => {
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
      }, 100);
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
              <Link to="/" onClick={(e) => handleNavClick(e, 'hero')} className="flex items-center">
                <img 
                  src="/logo.png" 
                  alt="InvestPlus" 
                  className={`h-10 lg:h-16 w-auto max-w-[140px] lg:max-w-none ${i18n.language === 'ar' ? 'origin-right' : 'origin-left'}`} 
                />
              </Link>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-2 rounded-full font-bold transition-colors text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-100/50"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="h-6 w-px bg-slate-200 mx-2"></div>
              <LanguageSwitcher />
              <Link to="/register" className="ml-2 px-5 py-2.5 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                {t('nav.join')}
              </Link>
            </div>

            {/* Mobile Header Icons */}
            <div className="flex items-center gap-3 lg:hidden">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600 hover:text-primary transition-colors"
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
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 w-full z-40 lg:hidden glass overflow-hidden border-b border-slate-200/50 shadow-2xl"
          >
            <div className="px-4 pt-4 pb-8 space-y-2 bg-white/80 backdrop-blur-md max-h-[85vh] overflow-y-auto">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  whileTap={{ scale: 0.98 }}
                  className="block px-4 py-3 rounded-2xl font-bold text-lg text-slate-800 hover:bg-primary/10 hover:text-primary transition-all underline-offset-4"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link 
                  to="/register" 
                  className="block w-full text-center py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/25"
                >
                  {t('nav.join')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
