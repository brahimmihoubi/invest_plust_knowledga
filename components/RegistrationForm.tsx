
import React, { useState } from 'react';
import { RegisteredUser } from '../types';

const RegistrationForm: React.FC = () => {
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
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="p-8 bg-primary/5 border border-primary/20 rounded-3xl text-center animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">✓</div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Welcome aboard!</h3>
        <p className="text-slate-600">Your registration was successful. You can now access the dashboard to see your entry.</p>
      </div>
    );
  }

  return (
    <div id="register" className="glass p-8 md:p-12 rounded-3xl border border-slate-200 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
      <h3 className="text-3xl font-bold text-slate-900 mb-2">Join the waitlist</h3>
      <p className="text-slate-600 mb-8">Get early access to our AI features and join 2,000+ other companies.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
            <input 
              required
              type="text" 
              placeholder="Jane Doe"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email</label>
            <input 
              required
              type="email" 
              placeholder="jane@company.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
          <input 
            required
            type="text" 
            placeholder="Acme Inc."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
            value={formData.company}
            onChange={e => setFormData({...formData, company: e.target.value})}
          />
        </div>
        <button 
          type="submit"
          className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 transform active:scale-[0.98]"
        >
          Register for Early Access
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
