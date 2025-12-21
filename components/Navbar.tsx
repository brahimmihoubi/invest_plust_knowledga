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
      const sections = ['about', 'members', 'experts', 'projects', 'method', 'investisor', 'partners', 'achievements'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 100) setActiveSection('hero');
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
        scrolled ? 'glass py-2' : 'bg-transparent py-4'
      } border-b border-transparent ${scrolled ? 'border-slate-200/50' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center h-auto lg:h-20 py-2 lg:py-0">
          <div className="flex items-center justify-between w-full lg:w-auto mb-2 lg:mb-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" onClick={(e) => handleNavClick(e, 'hero')} className="flex items-center">
                <img 
                  src="/logo.png" 
                  alt="InvestPlus" 
                  className={`h-16 lg:h-20 w-auto scale-125 ${i18n.language === 'ar' ? 'origin-right' : 'origin-left'}`} 
                />
              </Link>
            </motion.div>
            
            <div className="flex items-center gap-3 lg:hidden">
              <LanguageSwitcher />
              <motion.div whileTap={{ scale: 0.9 }}>
                <Link to="/register" className="px-3.5 py-1.5 bg-primary text-white rounded-full font-bold text-[11px] whitespace-nowrap shadow-lg shadow-primary/25">
                  {t('nav.join')}
                </Link>
              </motion.div>
            </div>
          </div>
          
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
            className="flex items-center w-full lg:w-auto overflow-x-auto no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0"
          >
            <div className="flex gap-1 lg:gap-1 items-center min-w-max pb-1 lg:pb-0 relative">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 rounded-full font-bold transition-colors text-sm whitespace-nowrap z-10 ${
                    activeSection === item.id 
                      ? 'text-primary' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center gap-4 ms-4">
            <div className="h-6 w-px bg-slate-200/60 me-4"></div>
            <LanguageSwitcher />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/register" className="px-5 py-1.5 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 whitespace-nowrap">
                {t('nav.join')}
              </Link>
            </motion.div>
          </div>
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
