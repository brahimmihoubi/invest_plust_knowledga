import React from 'react';
import { useTranslation } from 'react-i18next';

const InvestisorSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="investisor" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{t('investisor.title')}</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="text-center text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
          {t('investisor.content')}
        </div>
      </div>
    </section>
  );
};

export default InvestisorSection;
