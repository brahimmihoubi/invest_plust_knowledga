import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

const MembersSection: React.FC = () => {
  const { t } = useTranslation();

  const teamRoles = [
    { key: 'leadership', icon: '👔', color: 'from-blue-500 to-blue-600' },
    { key: 'analysts', icon: '📊', color: 'from-purple-500 to-purple-600' },
    { key: 'advisors', icon: '🎓', color: 'from-green-500 to-green-600' },
    { key: 'operations', icon: '⚙️', color: 'from-orange-500 to-orange-600' }
  ];

  return (
    <section id="members" className="py-24 bg-slate-50">
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
              {t('members.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 mt-6">{t('members.title')}</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t('members.content')}
            </p>
          </motion.div>
        </div>

        {/* Team Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-16">
          {teamRoles.map((role, index) => (
            <motion.div
              key={role.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:scale-105"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${role.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                {role.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">{t(`members.roles.${role.key}.title`)}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2 sm:mb-3">{t(`members.roles.${role.key}.description`)}</p>
              <div className="text-xl sm:text-2xl font-bold text-primary">{t(`members.roles.${role.key}.count`)}</div>
            </motion.div>
          ))}
        </div>

        {/* Team Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {['excellence', 'innovation', 'integrity'].map((value, index) => (
            <div key={value} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 text-center">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{t(`members.values.${value}.icon`)}</div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2">{t(`members.values.${value}.title`)}</h4>
              <p className="text-xs sm:text-sm text-slate-600">{t(`members.values.${value}.description`)}</p>
            </div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            to="/register/member"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary hover:text-white transition-all shadow-md"
          >
            {t('nav.join')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
