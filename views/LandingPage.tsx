import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import LanguageSwitcher from '../components/LanguageSwitcher';
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

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
              {t('hero.title')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-primary">
                {t('hero.highlight')}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register" className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-xl shadow-primary/20">
                {t('hero.join')}
              </Link>
              <Link to="/admin" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all">
                {t('hero.admin')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

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
      <footer className="py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="InvestPlus" className="h-16 w-auto grayscale brightness-0 opacity-80" />
          </div>
          <div className="flex gap-8 text-slate-500 text-sm font-bold items-center">
            <a href="#" className="hover:text-primary">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-primary">{t('footer.terms')}</a>
            <a href="#" className="hover:text-primary">{t('footer.status')}</a>
            <div className="h-4 w-px bg-slate-200"></div>
            <LanguageSwitcher />
          </div>
          <p className="text-slate-400 text-sm font-bold">{t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
