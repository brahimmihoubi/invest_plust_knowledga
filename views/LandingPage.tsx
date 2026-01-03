import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import LanguageSwitcher from '../components/LanguageSwitcher';
import IconButton from '../components/ui/IconButton';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MembersSection from '../components/MembersSection';
import ExpertsSection from '../components/ExpertsSection';
import ProjectsSection from '../components/ProjectsSection';
import MethodSection from '../components/MethodSection';
import InvestisorSection from '../components/InvestisorSection';
import PartnersSection from '../components/PartnersSection';
import AchievementsSection from '../components/AchievementsSection';

import SectionReveal from '../components/ui/SectionReveal';

const LandingPage: React.FC = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <HeroSection />

      <SectionReveal>
        <AboutSection />
      </SectionReveal>
      
      <SectionReveal>
        <MembersSection />
      </SectionReveal>
      
      <SectionReveal>
        <ExpertsSection />
      </SectionReveal>
      
      <SectionReveal>
        <ProjectsSection />
      </SectionReveal>
      
      <SectionReveal>
        <MethodSection />
      </SectionReveal>
      
      <SectionReveal>
        <InvestisorSection />
      </SectionReveal>
      
      <SectionReveal>
        <PartnersSection />
      </SectionReveal>
      
      <SectionReveal>
        <AchievementsSection />
      </SectionReveal>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start space-y-4">
            <img src="/logo.png" alt="InvestPlus" className="h-16 w-auto invert brightness-0" />
            
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-bold text-lg text-primary">{t('nav.about')}</h4>
            <div className="flex flex-col space-y-2 text-sm text-slate-300">
              <a href="#" className="hover:text-primary transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-primary transition-colors">{t('footer.terms')}</a>
              <a href="#" className="hover:text-primary transition-colors">{t('footer.status')}</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-bold text-lg text-primary">{t('footer.contact_title')}</h4>
            <div className="flex flex-col space-y-2 text-sm text-slate-300 items-center md:items-start">
              <div className="flex items-center gap-2">
                <span className="text-xl">📞</span>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                  <a href="tel:0770587788" className="hover:text-primary transition-colors dir-ltr">0770 58 77 88</a>
                  <span className="hidden md:inline text-slate-600">|</span>
                  <a href="tel:0777878085" className="hover:text-primary transition-colors dir-ltr">0777 87 80 85</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">📍</span>
                <span>{t('footer.address')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">✉️</span>
                <a href="mailto:Info@innov.Plus" className="hover:text-primary transition-colors">Info@innov.Plus</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            className="fixed bottom-8 right-8 rtl:right-auto rtl:left-8 z-50 pointer-events-auto"
          >
            <IconButton
              variant="primary"
              size="lg"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              }
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
