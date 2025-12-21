
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RegisteredUser } from '../types';

const RegistrationForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: RegisteredUser = {
      ...formData,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString(),
    };

    // Simulate backend persistence
    const existingUsers = JSON.parse(localStorage.getItem('nexus_users') || '[]');
    localStorage.setItem('nexus_users', JSON.stringify([...existingUsers, newUser]));

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '' });
    }, 4000);
  };

  if (submitted) {
    return (
      <div className="p-8 bg-primary/5 border border-primary/20 rounded-3xl text-center animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">✓</div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('register.success_title')}</h3>
        <p className="text-slate-600">{t('register.success_message')}</p>
      </div>
    );
  }

  return (
    <div id="register" className="glass p-8 md:p-12 rounded-3xl border border-slate-200 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
      <h3 className="text-3xl font-bold text-slate-900 mb-2">{t('register.title')}</h3>
      <p className="text-slate-600 mb-8">{t('register.subtitle')}</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">{t('register.name')}</label>
            <input 
              required
              type="text" 
              placeholder={t('register.name_placeholder')}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">{t('register.email')}</label>
            <input 
              required
              type="email" 
              placeholder={t('register.email_placeholder')}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">{t('register.company')}</label>
          <input 
            required
            type="text" 
            placeholder={t('register.company_placeholder')}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
            value={formData.company}
            onChange={e => setFormData({...formData, company: e.target.value})}
          />
        </div>
        <button 
          type="submit"
          className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 transform active:scale-[0.98]"
        >
          {t('register.button')}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
