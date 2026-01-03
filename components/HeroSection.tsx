import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getLatestAnnouncements } from '../services/announcementService';
import IconButton from './ui/IconButton';

import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const announcements = getLatestAnnouncements();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setCurrentIndex((prev) => (prev + newDirection + announcements.length) % announcements.length);
  }, [announcements.length, page]);

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('about');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        paginate(1);
      }
    }, 8000);
    return () => clearInterval(timer);
  }, [paginate, isPaused]);

  // Handle scroll snap on mobile to update dots
  const handleScroll = () => {
    if (scrollRef.current && window.innerWidth < 768) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      // critical fix: Math.abs handles negative scroll values in RTL browsers
      // bounds check prevents accessing undefined index (which crashed the app)
      const index = Math.round(Math.abs(scrollPosition) / width);
      if (index !== currentIndex && index >= 0 && index < announcements.length) {
        setCurrentIndex(index);
      }
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section id="hero" className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/5 via-white to-white overflow-hidden min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto w-full relative group">
        
        {/* Navigation Buttons (Floating) - Desktop Only */}
        <div className={`absolute ${i18n.language === 'ar' ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 z-20 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity`}>
          <IconButton 
            variant="glass" 
            size="lg"
            className="!rounded-full border-none bg-gradient-to-br from-[#3FAF6C] to-[#2D8D56] shadow-xl text-white transform hover:scale-110"
            onClick={() => paginate(i18n.language === 'ar' ? 1 : -1)}
            icon={<svg className={`w-6 h-6 ${i18n.language === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>}
          />
        </div>

        <div className={`absolute ${i18n.language === 'ar' ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 z-20 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity`}>
          <IconButton 
            variant="glass" 
            size="lg"
            className="!rounded-full border-none bg-gradient-to-br from-[#3FAF6C] to-[#2D8D56] shadow-xl text-white transform hover:scale-110"
            onClick={() => paginate(i18n.language === 'ar' ? -1 : 1)}
            icon={<svg className={`w-6 h-6 ${i18n.language === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>}
          />
        </div>

        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 bg-primary text-white text-xs font-black rounded-lg uppercase tracking-[0.2em] shadow-lg shadow-primary/20"
          >
            {t('nav.announcements') || 'Latest Announcements'}
          </motion.span>
        </div>

        {/* Slides Container */}
        <div className="relative mb-8 min-h-[250px] md:min-h-0">
          {/* Desktop Carousel */}
          <div 
            className="hidden md:block h-48 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
              >
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight max-w-4xl tracking-tight px-2">
                  {t(`news.announcement_${(announcements[currentIndex] || announcements[0]).id}.title`)}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed px-4">
                  {t(`news.announcement_${(announcements[currentIndex] || announcements[0]).id}.content`)}
                </p>
                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-primary">
                  <div className="w-8 h-px bg-primary/30"></div>
                  {(announcements[currentIndex] || announcements[0]).date}
                  <div className="w-8 h-px bg-primary/30"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Horizontally Scrollable Slides */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 no-scrollbar pb-4 scroll-smooth overscroll-x-contain"
          >
            {announcements.map((item) => (
              <div 
                key={item.id} 
                className="w-full flex-shrink-0 snap-center px-2"
              >
                <div className="glass p-8 rounded-[2rem] border border-slate-200/50 text-center min-h-[300px] flex flex-col items-center justify-center">
                  <h1 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                    {t(`news.announcement_${item.id}.title`)}
                  </h1>
                  <p className="text-base text-slate-600 leading-relaxed mb-6">
                    {t(`news.announcement_${item.id}.content`)}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold text-primary">
                    <div className="w-4 h-px bg-primary/30"></div>
                    {item.date}
                    <div className="w-4 h-px bg-primary/30"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-3 mt-8 mb-12">
          {announcements.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (window.innerWidth < 768 && scrollRef.current) {
                   scrollRef.current.scrollTo({
                     left: idx * scrollRef.current.offsetWidth,
                     behavior: 'smooth'
                   });
                } else {
                  const newDirection = idx > currentIndex ? 1 : -1;
                  setPage([page + newDirection, newDirection]);
                  setCurrentIndex(idx);
                }
              }}
              className={`h-2 transition-all duration-500 rounded-full ${
                idx === currentIndex ? 'w-10 bg-primary' : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <motion.a
            href="#about"
            onClick={scrollToAbout}
            whileHover={{ 
              scale: 1.02,
              y: -2,
              boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)"
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold border-2 border-slate-100 hover:border-primary/30 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            {t('hero.more_about')}
            <svg className={`transition-transform w-5 h-5 text-primary ${i18n.language === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {(announcements[currentIndex] || announcements[0]).videoUrl ? (
              <a
                href={announcements[currentIndex].videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-red-600 text-white rounded-2xl font-bold shadow-xl shadow-red-600/25 transition-all flex items-center justify-center gap-2 w-full"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
                {t('news.watch_video')}
              </a>
            ) : (
              <Link
                to="/register"
                className="px-10 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl font-bold shadow-xl shadow-primary/25 transition-all flex items-center justify-center gap-2 w-full"
              >
                {t('hero.join_now')}
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default HeroSection;
