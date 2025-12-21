import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import RegistrationForm from '../components/RegistrationForm';

const RegisterPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{t('register.page_title')}</h1>
            <p className="text-slate-600 text-lg">{t('register.page_subtitle')}</p>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mt-6"></div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
