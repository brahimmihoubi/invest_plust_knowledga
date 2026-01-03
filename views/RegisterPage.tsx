import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import RegistrationForm from '../components/RegistrationForm';
import PartnerRegistrationForm from '../components/forms/PartnerRegistrationForm';
import MemberRegistrationForm from '../components/forms/MemberRegistrationForm';
import InvestorRegistrationForm from '../components/forms/InvestorRegistrationForm';

interface RegisterPageProps {
  type?: 'general' | 'partner' | 'member' | 'investor';
}

const RegisterPage: React.FC<RegisterPageProps> = ({ type = 'general' }) => {
  const { t } = useTranslation();

  const renderForm = () => {
    switch (type) {
      case 'partner':
        return <PartnerRegistrationForm />;
      case 'member':
        return <MemberRegistrationForm />;
      case 'investor':
        return <InvestorRegistrationForm />;
      default:
        return <RegistrationForm />;
    }
  };

  const getPageTitle = () => {
    switch (type) {
      case 'partner': return t('forms.partner.title');
      case 'member': return t('forms.member.title');
      case 'investor': return t('forms.investor.title');
      default: return t('register.page_title');
    }
  };

  const getPageSubtitle = () => {
    switch (type) {
      case 'partner': return t('forms.partner.subtitle');
      case 'member': return t('forms.member.subtitle');
      case 'investor': return t('forms.investor.subtitle');
      default: return t('register.page_subtitle');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{getPageTitle()}</h1>
            <p className="text-slate-600 text-lg">{getPageSubtitle()}</p>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mt-6"></div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
            {renderForm()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
