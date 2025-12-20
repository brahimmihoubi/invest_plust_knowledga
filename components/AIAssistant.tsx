
import React, { useState } from 'react';
import { generateMarketingCopy } from '../services/geminiService';
import IconButton from './ui/IconButton';

const AIAssistant: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [features, setFeatures] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!productName) return;
    setLoading(true);
    const featureList = features.split(',').map(f => f.trim());
    const copy = await generateMarketingCopy(productName, featureList);
    setResult(copy || '');
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">AI Content Generator</h1>
        <p className="text-slate-500">Create high-converting copy in seconds using the InvestPlus core.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Product/Project Name</label>
            <input 
              type="text" 
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="e.g. InvestPlus Dashboard"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Key Features (comma separated)</label>
            <textarea 
              rows={4}
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
              placeholder="e.g. Real-time stats, Gemini integration, cloud storage"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
            ></textarea>
          </div>
          <button 
            onClick={handleGenerate}
            disabled={loading || !productName}
            className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
          >
            {loading ? 'Generating...' : 'Generate Copy ✨'}
          </button>
        </div>

        <div className="bg-slate-900 text-slate-100 p-8 rounded-2xl shadow-xl flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-light">AI Output</span>
            {result && (
              <IconButton 
                variant="glass"
                size="sm"
                onClick={() => navigator.clipboard.writeText(result)}
                icon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                }
              />
            )}
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {result ? (
              <div className="text-lg leading-relaxed font-medium text-slate-200 whitespace-pre-wrap">
                {result}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-500 text-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <p>Fill out the form to generate AI-powered marketing copy.</p>
              </div>
            )}
          </div>

          {loading && (
            <div className="mt-4 flex justify-center">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-primary-light rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-primary-light rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-primary-light rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
