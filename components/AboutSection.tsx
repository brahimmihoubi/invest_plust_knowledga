import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    { key: 'years', icon: '📅' },
    { key: 'projects', icon: '🚀' },
    { key: 'investors', icon: '👥' },
    { key: 'countries', icon: '🌍' }
  ];

  const features = [
    { key: 'expertise', icon: '💡' },
    { key: 'technology', icon: '⚡' },
    { key: 'support', icon: '🤝' }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-black rounded-lg uppercase tracking-wider">
              {t('about.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 mt-6">{t('about.title')}</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t('about.content')}
            </p>
          </motion.div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 text-center group hover:scale-105"
            >
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">{t(`about.stats.${stat.key}.value`)}</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 uppercase tracking-wide">{t(`about.stats.${stat.key}.label`)}</div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{t(`about.features.${feature.key}.title`)}</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{t(`about.features.${feature.key}.description`)}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">{t('about.mission.title')}</h3>
          <p className="text-base sm:text-lg md:text-xl opacity-95 max-w-4xl mx-auto leading-relaxed">
            {t('about.mission.description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
