import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ExpertsSection: React.FC = () => {
  const { t } = useTranslation();

  const expertiseAreas = [
    { key: 'finance', icon: '💰', color: 'from-emerald-500 to-emerald-600' },
    { key: 'technology', icon: '💻', color: 'from-blue-500 to-blue-600' },
    { key: 'legal', icon: '⚖️', color: 'from-purple-500 to-purple-600' },
    { key: 'market', icon: '📈', color: 'from-orange-500 to-orange-600' },
    { key: 'sustainability', icon: '🌱', color: 'from-green-500 to-green-600' },
    { key: 'realestate', icon: '🏢', color: 'from-indigo-500 to-indigo-600' }
  ];

  return (
    <section id="experts" className="py-24 bg-white">
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
              {t('experts.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 mt-6">{t('experts.title')}</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t('experts.content')}
            </p>
          </motion.div>
        </div>

        {/* Expertise Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-16">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.key}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t(`experts.areas.${area.key}.title`)}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{t(`experts.areas.${area.key}.description`)}</p>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <span>{t(`experts.areas.${area.key}.count`)}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credentials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-10 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('experts.credentials.title')}</h3>
            <p className="text-lg opacity-95 max-w-3xl mx-auto">{t('experts.credentials.description')}</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {['certifications', 'publications', 'awards', 'experience'].map((cred) => (
              <div key={cred} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">{t(`experts.credentials.${cred}.value`)}</div>
                <div className="text-sm opacity-90">{t(`experts.credentials.${cred}.label`)}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertsSection;
