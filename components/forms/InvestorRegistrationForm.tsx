import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const InvestorRegistrationForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    company: '',
    type: 'Individual',
    portfolioSize: 'medium', 
    sectors: [] as string[],
    accredited: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Investor Registration:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ 
        name: '', 
        email: '', 
        phone: '',
        company: '',
        type: 'Individual', 
        portfolioSize: 'medium', 
        sectors: [],
        accredited: false
      });
    }, 4000);
  };

  const toggleSector = (sector: string) => {
    setFormData(prev => ({
      ...prev,
      sectors: prev.sectors.includes(sector) 
        ? prev.sectors.filter(s => s !== sector)
        : [...prev.sectors, sector]
    }));
  };

  const sectorOptions = ['tech', 'real_estate', 'energy', 'healthcare', 'finance'];

  return (
    <div className="glass p-8 md:p-12 rounded-3xl border border-slate-200 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
      
      {submitted ? (
        <div className="text-center animate-in fade-in zoom-in duration-300">
           <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">✓</div>
           <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('register.success_title')}</h3>
           <p className="text-slate-600">{t('register.success_message')}</p>
        </div>
      ) : (
        <>
          <h3 className="text-3xl font-bold text-slate-900 mb-2">{t('forms.investor.title')}</h3>
          <p className="text-slate-600 mb-8">{t('forms.investor.subtitle')}</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name & Email */}
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

            {/* Phone & Type */}
            <div className="grid md:grid-cols-2 gap-4">
               <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">{t('forms.investor.phone')}</label>
                <input type="tel" className="input-field" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">{t('forms.investor.type')}</label>
                <select className="input-field" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                  <option value="Individual">Individual</option>
                  <option value="Angel Investor">Angel Investor</option>
                  <option value="Venture Capital">Venture Capital</option>
                  <option value="Corporate">Corporate</option>
                </select>
              </div>
            </div>
            
            {/* Company (Conditional) & Portfolio */}
            <div className="grid md:grid-cols-2 gap-4">
              {formData.type !== 'Individual' && (
                <div className="animate-in fade-in zoom-in duration-300">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">{t('forms.investor.company_name')}</label>
                    <input type="text" className="input-field" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                </div>
              )}
              <div className={formData.type === 'Individual' ? 'md:col-span-2' : ''}>
                <label className="block text-sm font-semibold text-slate-700 mb-2">{t('forms.investor.portfolioSize')}</label>
                <select className="input-field" value={formData.portfolioSize} onChange={e => setFormData({...formData, portfolioSize: e.target.value})}>
                  <option value="small">{t('forms.investor.ranges.small')}</option>
                  <option value="medium">{t('forms.investor.ranges.medium')}</option>
                  <option value="large">{t('forms.investor.ranges.large')}</option>
                </select>
              </div>
            </div>

            {/* Sectors */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">{t('forms.investor.sectors')}</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {sectorOptions.map(sector => (
                    <button
                        key={sector}
                        type="button"
                        onClick={() => toggleSector(sector)}
                        className={`text-sm py-2 px-4 rounded-xl border transition-all duration-200 ${
                            formData.sectors.includes(sector) 
                            ? 'bg-primary text-white border-primary shadow-md' 
                            : 'bg-white text-slate-600 border-slate-200 hover:border-primary/50'
                        }`}
                    >
                        {t(`forms.investor.sector_options.${sector}`)}
                    </button>
                ))}
              </div>
            </div>

            {/* Accreditation */}
            <div className="flex items-center gap-3 py-2">
                <input 
                    type="checkbox" 
                    id="accredited"
                    checked={formData.accredited}
                    onChange={e => setFormData({...formData, accredited: e.target.checked})}
                    className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"
                />
                <label htmlFor="accredited" className="text-sm text-slate-600 cursor-pointer select-none">
                    {t('forms.investor.accredited')}
                </label>
            </div>

            <button type="submit" className="submit-btn mt-6">{t('register.button')}</button>
          </form>
        </>
      )}
      <style>{`
        .input-field { width: 100%; padding: 0.75rem 1rem; border-radius: 0.75rem; border: 1px solid #e2e8f0; outline: none; transition: all 0.2s; }
        .input-field:focus { ring: 2px; ring-color: #0ea5e9; border-color: #0ea5e9; }
        .submit-btn { width: 100%; padding: 1rem; background-color: #0ea5e9; color: white; border-radius: 0.75rem; font-weight: bold; transition: all 0.2s; box-shadow: 0 10px 15px -3px rgba(14, 165, 233, 0.2); }
        .submit-btn:hover { background-color: #0284c7; transform: scale(0.98); }
      `}</style>
    </div>
  );
};

export default InvestorRegistrationForm;
