import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const AchievementsSection: React.FC = () => {
  const { t } = useTranslation();

  const milestones = [
    { key: '2010', icon: '🎯', color: 'from-blue-500 to-blue-600' },
    { key: '2015', icon: '🚀', color: 'from-purple-500 to-purple-600' },
    { key: '2020', icon: '🏆', color: 'from-green-500 to-green-600' },
    { key: '2025', icon: '⭐', color: 'from-orange-500 to-orange-600' }
  ];

  const awards = [
    { key: 'innovation', icon: '💡' },
    { key: 'excellence', icon: '🏅' },
    { key: 'sustainability', icon: '🌱' },
    { key: 'leadership', icon: '👑' }
  ];

  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-slate-50 to-white">
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
              {t('achievements.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 mt-6">{t('achievements.title')}</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t('achievements.content')}
            </p>
          </motion.div>
        </div>

        {/* Timeline Milestones */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-10">{t('achievements.timeline.title')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-slate-100 group">
                  <div className={`w-14 h-14 bg-gradient-to-br ${milestone.color} rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg`}>
                    {milestone.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">{milestone.key}</div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{t(`achievements.timeline.${milestone.key}.title`)}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{t(`achievements.timeline.${milestone.key}.description`)}</p>
                  </div>
                </div>
                {index < milestones.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 mb-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{t('achievements.awards.title')}</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('achievements.awards.description')}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-100 text-center group hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{award.icon}</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{t(`achievements.awards.${award.key}.title`)}</h4>
                <p className="text-sm text-slate-600">{t(`achievements.awards.${award.key}.year`)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-10 md:p-12 text-white shadow-2xl"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('achievements.impact.title')}</h3>
            <p className="text-lg opacity-95 max-w-2xl mx-auto">{t('achievements.impact.description')}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {['capital', 'jobs', 'communities', 'sustainability'].map((metric, index) => (
              <div key={metric} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">{t(`achievements.impact.${metric}.value`)}</div>
                <div className="text-sm opacity-90 uppercase tracking-wide">{t(`achievements.impact.${metric}.label`)}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
