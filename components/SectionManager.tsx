import React from 'react';

const SectionManagerList: React.FC = () => {
  const sections = [
    'About us', 'Members', 'Experts', 'Investments Projects', 
    'Work method', 'Investisor', 'Partners', 'Achievements'
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Content Management</h1>
        <p className="text-slate-500">Manage the content for each section of your landing page.</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <div key={section} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase rounded">Section</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{section}</h3>
            <p className="text-sm text-slate-500 mb-4">Update the text, images, and data shown in the {section} section.</p>
            <button className="w-full py-2 bg-slate-50 text-slate-600 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-colors">
              Edit Content
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionManagerList;
