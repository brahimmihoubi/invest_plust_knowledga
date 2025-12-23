import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-2' : 'bg-transparent py-3'
      } border-b border-transparent ${scrolled ? 'border-slate-200/50' : ''}`}
    >
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center h-auto lg:h-18 py-2 lg:py-0 gap-2 lg:gap-3">
          {/* Logo Section */}
          <div className="flex items-center justify-between w-full lg:w-auto mb-2 lg:mb-0 flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" onClick={(e) => handleNavClick(e, 'hero')} className="flex items-center">
                <img 
                  src="/logo.png" 
                  alt="InvestPlus" 
                  className={`h-16 lg:h-20 w-auto ${i18n.language === 'ar' ? 'origin-right' : 'origin-left'}`} 
                />
              </Link>
            </motion.div>
            
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageSwitcher />
              <motion.div whileTap={{ scale: 0.9 }}>
                <Link to="/register" className="px-3 py-1.5 bg-primary text-white rounded-full font-bold text-[10px] whitespace-nowrap shadow-lg shadow-primary/25">
                  {t('nav.join')}
                </Link>
              </motion.div>
            </div>
          </div>
          
          {/* Navigation and Action Buttons - Unified Animation */}
          <motion.div 
            initial={false}
            animate={{ 
              opacity: isHovered || !scrolled ? 1 : 0,
              y: isHovered || !scrolled ? 0 : -10,
              scale: isHovered || !scrolled ? 1 : 0.98,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ 
              pointerEvents: isHovered || !scrolled ? 'auto' : 'none',
              visibility: isHovered || !scrolled ? 'visible' : 'hidden' 
            }}
            className="flex items-center w-full lg:flex-1 gap-2 lg:gap-3"
          >
            {/* Navigation Items */}
            <div className="flex items-center w-full lg:flex-1 lg:justify-center overflow-x-auto no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-1">
              <div className="flex flex-wrap lg:flex-nowrap justify-center gap-x-0.5 gap-y-1 items-center min-w-max lg:min-w-0 pb-1 lg:pb-0 relative">
                {navItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-2.5 py-1.5 rounded-full font-bold transition-colors text-xs whitespace-nowrap z-10 text-slate-700 hover:text-slate-900"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
              <div className="h-5 w-px bg-slate-200/60"></div>
              <LanguageSwitcher />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/register" className="px-4 py-1.5 bg-primary text-white rounded-full font-bold text-xs hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 whitespace-nowrap">
                  {t('nav.join')}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
