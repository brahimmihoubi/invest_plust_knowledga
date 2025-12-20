import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getLatestAnnouncements } from '../services/announcementService';
import IconButton from './ui/IconButton';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const announcements = getLatestAnnouncements();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setCurrentIndex((prev) => (prev + newDirection + announcements.length) % announcements.length);
  }, [announcements.length, page]);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 8000);
    return () => clearInterval(timer);
  }, [paginate]);

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
    <section id="hero" className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/5 via-white to-white overflow-hidden min-h-[500px] flex items-center">
      <div className="max-w-7xl mx-auto w-full relative group">
        
        {/* Navigation Buttons (Floating) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
          <IconButton 
            variant="glass" 
            size="lg"
            className="!rounded-full border-none bg-gradient-to-br from-[#3FAF6C] to-[#2D8D56] shadow-xl text-white transform hover:scale-110"
            onClick={() => paginate(-1)}
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>}
          />
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
          <IconButton 
            variant="glass" 
            size="lg"
            className="!rounded-full border-none bg-gradient-to-br from-[#3FAF6C] to-[#2D8D56] shadow-xl text-white transform hover:scale-110"
            onClick={() => paginate(1)}
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>}
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

        <div className="relative h-64 md:h-48">
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
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight max-w-4xl tracking-tight">
                {t(`news.announcement_${announcements[currentIndex].id}.title`)}
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
                {t(`news.announcement_${announcements[currentIndex].id}.content`)}
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-primary">
                <div className="w-8 h-px bg-primary/30"></div>
                {announcements[currentIndex].date}
                <div className="w-8 h-px bg-primary/30"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8 md:hidden">
          <IconButton 
            variant="secondary"
            size="md"
            className="!rounded-full border-none bg-gradient-to-br from-[#3FAF6C] to-[#2D8D56] shadow-lg text-white"
            onClick={() => paginate(-1)}
            icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>}
          />
          <IconButton 
            variant="secondary"
            size="md"
            className="!rounded-full border-none bg-gradient-to-br from-[#3FAF6C] to-[#2D8D56] shadow-lg text-white"
            onClick={() => paginate(1)}
            icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>}
          />
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {announcements.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                const newDirection = idx > currentIndex ? 1 : -1;
                setPage([page + newDirection, newDirection]);
                setCurrentIndex(idx);
              }}
              className={`h-2 transition-all duration-500 rounded-full ${
                idx === currentIndex ? 'w-10 bg-primary' : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
