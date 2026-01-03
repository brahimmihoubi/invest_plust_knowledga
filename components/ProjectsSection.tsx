import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();

  const projectCategories = [
    { key: 'renewable', icon: '⚡', color: 'from-yellow-500 to-orange-500', bgColor: 'bg-yellow-50' },
    { key: 'technology', icon: '🚀', color: 'from-blue-500 to-indigo-500', bgColor: 'bg-blue-50' },
    { key: 'realestate', icon: '🏗️', color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-50' },
    { key: 'healthcare', icon: '🏥', color: 'from-red-500 to-rose-500', bgColor: 'bg-red-50' },
    { key: 'infrastructure', icon: '🌉', color: 'from-gray-600 to-gray-700', bgColor: 'bg-gray-50' },
    { key: 'agriculture', icon: '🌾', color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-50' }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50">
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
              {t('projects.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 mt-6">{t('projects.title')}</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t('projects.content')}
            </p>
          </motion.div>
        </div>

        {/* Project Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-16">
          {projectCategories.map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${category.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-slate-200 group cursor-pointer`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{t(`projects.categories.${category.key}.title`)}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">{t(`projects.categories.${category.key}.description`)}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">{t(`projects.categories.${category.key}.count`)}</span>
                    <span className={`text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {t(`projects.categories.${category.key}.roi`)}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{t('projects.portfolio.title')}</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('projects.portfolio.description')}</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {['total_value', 'active_projects', 'avg_return', 'success_rate'].map((metric, index) => (
              <motion.div
                key={metric}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100"
              >
                <div className="text-4xl font-bold text-primary mb-2">{t(`projects.portfolio.${metric}.value`)}</div>
                <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">{t(`projects.portfolio.${metric}.label`)}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
