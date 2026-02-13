
import React, { useState } from 'react';
import { 
  MessageSquare, 
  Zap, 
  Database, 
  Search, 
  Send, 
  Bot, 
  Sparkles, 
  ChevronDown, 
  ChevronUp,
  Target,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';
import { geminiService } from '../services/geminiService';

const AIModelsSection: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleDemo = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse('');
    const result = await geminiService.generateDemoResponse(prompt);
    setResponse(result || 'Something went wrong.');
    setLoading(false);
  };

  const models = [
    {
      name: 'AI Chat Model',
      icon: <MessageSquare className="w-6 h-6" />,
      desc: 'Advanced natural language processing for customer support and interaction.',
      tech: 'Built using LLMs to understand and respond like a human.',
      details: {
        capabilities: ['Multi-language support', 'Context-aware conversations', 'Sentiment analysis'],
        limitations: ['May occasionally hallucinate facts', 'No real-time physical world access'],
        applications: ['24/7 Customer Support', 'Lead Generation Bots', 'Smart FAQ Assistants']
      }
    },
    {
      name: 'Automation Model',
      icon: <Zap className="w-6 h-6" />,
      desc: 'Streamline repetitive tasks with intelligent workflow automation.',
      tech: 'Uses logic mapping to handle complex business processes.',
      details: {
        capabilities: ['Error-free task execution', 'High-speed data entry', 'Workflow chaining'],
        limitations: ['Requires structured data inputs', 'Limited abstract decision making'],
        applications: ['Inventory Management', 'Invoice Processing', 'CRM Automation']
      }
    },
    {
      name: 'Data/Content AI',
      icon: <Database className="w-6 h-6" />,
      desc: 'Analyze large amounts of data to generate insights or creative content.',
      tech: 'Pattern recognition algorithms for smart predictions.',
      details: {
        capabilities: ['Trend forecasting', 'Automated report writing', 'SEO optimization'],
        limitations: ['Needs large training datasets', 'Reflects historical biases'],
        applications: ['Market Research', 'Blog Content Generation', 'Sales Predictions']
      }
    }
  ];

  const toggleExpand = (idx: number) => {
    setExpandedCard(expandedCard === idx ? null : idx);
  };

  return (
    <section id="ai-models" className="py-24 bg-slate-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-400 font-semibold mb-2 tracking-wide uppercase text-sm">Real Demonstrations</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">Our <span className="text-white">AI Models</span> & How They Work</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">We don't just talk about AI—we build it. Explore our working models below.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-start">
          {models.map((model, idx) => (
            <div 
              key={idx} 
              onClick={() => toggleExpand(idx)}
              className={`p-8 rounded-[2.5rem] bg-slate-950 border transition-all duration-500 shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-2 group flex flex-col cursor-pointer overflow-hidden relative ${
                expandedCard === idx ? 'border-indigo-500/50 scale-[1.02] shadow-indigo-500/20' : 'border-white/5 hover:border-indigo-500/40'
              }`}
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-transparent to-indigo-500/0 group-hover:from-indigo-500/5 transition-all duration-700 pointer-events-none"></div>
              
              <div className="bg-indigo-500/10 text-indigo-400 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-indigo-500/20 transition-all duration-500 relative z-10">
                {model.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-300 transition-colors duration-500 relative z-10">{model.name}</h4>
              <p className="text-slate-400 mb-6 leading-relaxed relative z-10">{model.desc}</p>
              
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors duration-500 mb-6 relative z-10">
                <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">How it works</p>
                <p className="text-sm text-slate-300">{model.tech}</p>
              </div>

              {/* Expandable Section */}
              {expandedCard === idx && (
                <div className="animate-in fade-in slide-in-from-top duration-500 space-y-6 pb-6 border-t border-white/5 pt-6 relative z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-indigo-400">
                      <Target className="w-4 h-4" />
                      <span className="text-sm font-bold uppercase tracking-tight">Capabilities</span>
                    </div>
                    <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                      {model.details.capabilities.map((cap, i) => <li key={i}>{cap}</li>)}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-amber-400">
                      <AlertTriangle className="w-4 h-4" />
                      <span className="text-sm font-bold uppercase tracking-tight">Limitations</span>
                    </div>
                    <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                      {model.details.limitations.map((lim, i) => <li key={i}>{lim}</li>)}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-green-400">
                      <Lightbulb className="w-4 h-4" />
                      <span className="text-sm font-bold uppercase tracking-tight">Applications</span>
                    </div>
                    <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                      {model.details.applications.map((app, i) => <li key={i}>{app}</li>)}
                    </ul>
                  </div>
                </div>
              )}

              <button 
                className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-white/5 group-hover:bg-indigo-600/20 text-indigo-300 rounded-xl transition-all font-semibold text-sm border border-indigo-500/10 relative z-10"
              >
                {expandedCard === idx ? (
                  <>Show Less <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>Learn More <ChevronDown className="w-4 h-4" /></>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Live Demo Container */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-indigo-900/20">
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-sm font-medium text-slate-400">Minedore AI Assistant Demo</span>
              </div>
              <Bot className="w-5 h-5 text-indigo-400" />
            </div>
            
            <div className="p-8 md:p-12">
              <div className="mb-8 min-h-[150px] bg-slate-900/50 rounded-2xl p-6 border border-white/5 overflow-y-auto custom-scrollbar">
                {loading ? (
                  <div className="flex flex-col items-center justify-center h-full gap-4 text-slate-500">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-indigo-500"></div>
                    <p className="text-sm animate-pulse">Thinking like a pro...</p>
                  </div>
                ) : response ? (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-4 h-4 text-indigo-400" />
                      <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">AI Response</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">{response}</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-slate-500 text-center">
                    <Search className="w-12 h-12 mb-4 opacity-20" />
                    <p>Ask our AI something simple like:<br /> "How can AI help my business scale?"</p>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <input 
                  type="text" 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleDemo()}
                  placeholder="Type a question for Minedore AI..."
                  className="flex-grow bg-slate-800 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-white"
                />
                <button 
                  onClick={handleDemo}
                  disabled={loading}
                  className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white p-4 rounded-2xl transition-all shadow-lg shadow-indigo-600/30"
                >
                  <Send className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIModelsSection;
