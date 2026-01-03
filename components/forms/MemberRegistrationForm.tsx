import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MemberRegistrationForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    role: 'Expert',
    specialization: '', 
    linkedin: '' 
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Member/Team Registration:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', role: 'Expert', specialization: '', linkedin: '' });
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
    <div className="glass p-8 md:p-12 rounded-3xl border border-slate-200 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
      <h3 className="text-3xl font-bold text-slate-900 mb-2">{t('forms.member.title')}</h3>
      <p className="text-slate-600 mb-8">{t('forms.member.subtitle')}</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">{t('register.name')}</label>
            <input required type="text" className="input-field" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">{t('register.email')}</label>
            <input required type="email" className="input-field" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">{t('forms.member.role')}</label>
          <select className="input-field" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})}>
            <option value="Expert">Expert</option>
            <option value="Employee">Employee</option>
            <option value="Advisor">Advisor</option>
            <option value="Analyst">Analyst</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">{t('forms.member.specialization')}</label>
          <input required type="text" className="input-field" value={formData.specialization} onChange={e => setFormData({...formData, specialization: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">{t('forms.member.linkedin')}</label>
          <input type="url" className="input-field" value={formData.linkedin} onChange={e => setFormData({...formData, linkedin: e.target.value})} />
        </div>
        <button type="submit" className="submit-btn">{t('register.button')}</button>
      </form>
      <style>{`
        .input-field { width: 100%; padding: 0.75rem 1rem; border-radius: 0.75rem; border: 1px solid #e2e8f0; outline: none; transition: all 0.2s; }
        .input-field:focus { ring: 2px; ring-color: #0ea5e9; border-color: #0ea5e9; }
        .submit-btn { width: 100%; padding: 1rem; background-color: #0ea5e9; color: white; border-radius: 0.75rem; font-weight: bold; transition: all 0.2s; box-shadow: 0 10px 15px -3px rgba(14, 165, 233, 0.2); }
        .submit-btn:hover { background-color: #0284c7; transform: scale(0.98); }
      `}</style>
    </div>
  );
};

export default MemberRegistrationForm;
