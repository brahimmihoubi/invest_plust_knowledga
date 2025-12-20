
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { analyzeData } from '../services/geminiService';

const data = [
  { name: 'Mon', users: 400, revenue: 2400 },
  { name: 'Tue', users: 300, revenue: 1398 },
  { name: 'Wed', users: 200, revenue: 9800 },
  { name: 'Thu', users: 278, revenue: 3908 },
  { name: 'Fri', users: 189, revenue: 4800 },
  { name: 'Sat', users: 239, revenue: 3800 },
  { name: 'Sun', users: 349, revenue: 4300 },
];

const Overview: React.FC = () => {
  const [insights, setInsights] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const fetchAIInsights = async () => {
    setIsAnalyzing(true);
    const result = await analyzeData(data);
    setInsights(result.insights);
    setIsAnalyzing(false);
  };

  useEffect(() => {
    fetchAIInsights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
          <p className="text-slate-500">Monitor your key metrics and AI-driven insights.</p>
        </div>
        <button 
          onClick={fetchAIInsights}
          disabled={isAnalyzing}
          className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-dark disabled:opacity-50 flex items-center gap-2"
        >
          {isAnalyzing ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : '✨'} 
          Refresh Insights
        </button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Active Users', value: '12,543', change: '+12.5%', trend: 'up' },
          { label: 'Revenue', value: '$45,210', change: '+8.2%', trend: 'up' },
          { label: 'Churn Rate', value: '2.4%', change: '-0.5%', trend: 'down' },
          { label: 'Avg Session', value: '4m 32s', change: '+1.2%', trend: 'up' },
        ].map((metric, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">{metric.label}</span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-2xl font-bold text-slate-900">{metric.value}</span>
              <span className={`text-sm font-semibold ${metric.trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 h-96">
          <h3 className="font-bold text-slate-900 mb-6">Revenue Growth</h3>
          <ResponsiveContainer width="100%" height="85%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3FAF6C" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#3FAF6C" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#3FAF6C" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* AI Insight Sidebar */}
        <div className="bg-primary-dark text-white p-6 rounded-2xl shadow-xl shadow-primary-dark/20 flex flex-col">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">⚡</span>
            <h3 className="font-bold">AI Business Insights</h3>
          </div>
          <div className="flex-1 space-y-4">
            {isAnalyzing ? (
               <div className="space-y-4">
                 {[1,2,3].map(i => (
                   <div key={i} className="h-12 bg-white/10 rounded-xl animate-pulse"></div>
                 ))}
               </div>
            ) : (
              insights.map((insight, idx) => (
                <div key={idx} className="p-4 bg-white/10 border border-white/20 rounded-xl text-sm leading-relaxed">
                  {insight}
                </div>
              ))
            )}
          </div>
          <p className="mt-6 text-xs text-primary-light italic text-center">Generated by Gemini 3 Flash</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
