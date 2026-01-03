import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const PartnersSection: React.FC = () => {
  const { t } = useTranslation();

  const partnerTypes = [
    { key: 'strategic', icon: '🤝', color: 'from-blue-500 to-indigo-500' },
    { key: 'financial', icon: '🏦', color: 'from-green-500 to-emerald-500' },
    { key: 'technology', icon: '💻', color: 'from-purple-500 to-pink-500' },
    { key: 'academic', icon: '🎓', color: 'from-orange-500 to-red-500' }
  ];

  return (
    <section id="partners" className="py-24 bg-white">
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
              {t('partners.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 mt-6">{t('partners.title')}</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t('partners.content')}
            </p>
          </motion.div>
        </div>

        {/* Partner Types */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-16">
          {partnerTypes.map((type, index) => (
            <motion.div
              key={type.key}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-slate-100 text-center group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                {type.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{t(`partners.types.${type.key}.title`)}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">{t(`partners.types.${type.key}.description`)}</p>
              <div className="text-primary font-semibold text-sm">{t(`partners.types.${type.key}.count`)}</div>
            </motion.div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{t('partners.benefits.title')}</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('partners.benefits.description')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {['network', 'resources', 'growth'].map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-100 text-center"
              >
                <div className="text-4xl mb-3">{t(`partners.benefits.${benefit}.icon`)}</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{t(`partners.benefits.${benefit}.title`)}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{t(`partners.benefits.${benefit}.description`)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-slate-100 to-slate-50 rounded-2xl p-8 border border-slate-200">
            <p className="text-lg font-semibold text-slate-700 mb-4">{t('partners.cta.text')}</p>
            <a
              href="#hero"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-bold hover:shadow-lg transition-all"
            >
              {t('partners.cta.button')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
