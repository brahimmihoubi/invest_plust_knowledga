import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const MethodSection: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    { key: 'analysis', icon: '🔍', color: 'from-blue-500 to-blue-600' },
    { key: 'strategy', icon: '📊', color: 'from-purple-500 to-purple-600' },
    { key: 'implementation', icon: '⚙️', color: 'from-green-500 to-green-600' },
    { key: 'monitoring', icon: '📈', color: 'from-orange-500 to-orange-600' },
    { key: 'optimization', icon: '🎯', color: 'from-red-500 to-red-600' }
  ];

  return (
    <section id="method" className="py-24 bg-white">
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
              {t('method.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 mt-6">{t('method.title')}</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t('method.content')}
            </p>
          </motion.div>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" 
               style={{ top: '80px' }}></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-slate-100 group hover:scale-105 relative z-10">
                  {/* Step Number */}
                  <div className={`absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3 text-center">
                    {t(`method.steps.${step.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed text-center">
                    {t(`method.steps.${step.key}.description`)}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
            <p className="text-lg font-semibold text-slate-700 mb-4">
              {t('method.cta.text')}
            </p>
            <a 
              href="#investisor"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-bold hover:shadow-lg transition-all"
            >
              {t('method.cta.button')}
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

export default MethodSection;
