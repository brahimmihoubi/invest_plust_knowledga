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
      <footer className="py-12 border-t border-slate-200 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          {/* Logo at the start */}
          <div className="flex justify-center md:justify-start">
            <img src="/logo.png" alt="InvestPlus" className="h-16 w-auto invert brightness-0" />
          </div>
          
          {/* Links and Switcher in the middle */}
          <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm font-bold items-center min-w-max">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
            <a href="#" className="hover:text-accent transition-colors">{t('footer.status')}</a>
          </div>

          {/* Empty div to balance the grid for perfect centering of the middle part */}
          <div className="hidden md:block"></div>
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
