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

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};


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

      <AboutSection />
      
      <motion.div {...fadeInUp}>
        <MembersSection />
      </motion.div>
      
      <motion.div {...fadeInUp}>
        <ExpertsSection />
      </motion.div>
      
      <motion.div {...fadeInUp}>
        <ProjectsSection />
      </motion.div>
      
      <motion.div {...fadeInUp}>
        <MethodSection />
      </motion.div>
      
      <motion.div {...fadeInUp}>
        <InvestisorSection />
      </motion.div>
      
      <motion.div {...fadeInUp}>
        <PartnersSection />
      </motion.div>
      
      <motion.div {...fadeInUp}>
        <AchievementsSection />
      </motion.div>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200" style={{ backgroundColor: '#1F5F63' }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="InvestPlus" className="h-16 w-auto invert brightness-0" />
          </div>
          <div className="flex gap-8 text-white/80 text-sm font-bold items-center">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
            <a href="#" className="hover:text-primary-light transition-colors">{t('footer.status')}</a>
            <div className="h-4 w-px bg-white/20"></div>
            <LanguageSwitcher />
          </div>
          <p className="text-white/60 text-sm font-bold">{t('footer.rights')}</p>
        </div>
      </footer>

      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            className="fixed bottom-8 right-8 z-50 pointer-events-auto"
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
