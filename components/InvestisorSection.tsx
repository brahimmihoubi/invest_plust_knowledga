import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

const InvestisorSection: React.FC = () => {
  const { t } = useTranslation();

  const investorTools = [
    { key: 'analytics', icon: '📊', color: 'from-blue-500 to-blue-600' },
    { key: 'portfolio', icon: '💼', color: 'from-purple-500 to-purple-600' },
    { key: 'insights', icon: '💡', color: 'from-yellow-500 to-orange-500' },
    { key: 'reports', icon: '📈', color: 'from-green-500 to-emerald-500' }
  ];

  const benefits = [
    { key: 'transparency', icon: '🔍' },
    { key: 'security', icon: '🔒' },
    { key: 'flexibility', icon: '🎯' },
    { key: 'support', icon: '🤝' }
  ];

  return (
    <section id="investisor" className="py-24 bg-gradient-to-b from-slate-50 to-white">
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
              {t('investisor.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 mt-6">{t('investisor.title')}</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t('investisor.content')}
            </p>
          </motion.div>
        </div>

        {/* Investor Tools */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-16">
          {investorTools.map((tool, index) => (
            <motion.div
              key={tool.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-slate-100 group"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                {tool.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{t(`investisor.tools.${tool.key}.title`)}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{t(`investisor.tools.${tool.key}.description`)}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.key}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-md border border-slate-200 flex items-start gap-4"
            >
              <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{t(`investisor.benefits.${benefit.key}.title`)}</h4>
                <p className="text-slate-600 leading-relaxed">{t(`investisor.benefits.${benefit.key}.description`)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-10 md:p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('investisor.cta.title')}</h3>
          <p className="text-lg opacity-95 mb-8 max-w-2xl mx-auto">{t('investisor.cta.description')}</p>
          <Link
            to="/register/investor"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold hover:shadow-2xl transition-all hover:scale-105"
          >
            {t('investisor.cta.button')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestisorSection;
