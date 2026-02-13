
import React, { useState } from 'react';
import { X, CheckCircle2, Send, Cpu, Shield, Globe, Zap, MessageSquare } from 'lucide-react';
import { dataService } from '../services/dataService';

interface EnterpriseCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnterpriseCustomizer: React.FC<EnterpriseCustomizerProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS'>('IDLE');
  const [email, setEmail] = useState('');

  const features = [
    { id: 'ai', label: 'Custom AI Model Training', icon: <Cpu className="w-5 h-5" /> },
    { id: 'sec', label: 'Advanced Security Protocols', icon: <Shield className="w-5 h-5" /> },
    { id: 'scale', label: 'Global Edge Deployment', icon: <Globe className="w-5 h-5" /> },
    { id: 'perf', label: 'Dedicated Performance Optimization', icon: <Zap className="w-5 h-5" /> },
    { id: 'support', label: '24/7 Priority VIP Support', icon: <MessageSquare className="w-5 h-5" /> },
  ];

  const toggleFeature = (id: string) => {
    setSelectedFeatures(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENDING');
    
    // Simulate API call
    setTimeout(() => {
      dataService.saveOrder({
        email: email,
        plan: 'Enterprise',
        price: 'Bespoke',
        type: 'Enterprise',
        details: selectedFeatures.map(id => features.find(f => f.id === id)?.label || id)
      });
      setStatus('SUCCESS');
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#0a0f12] border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="p-10 md:p-14">
          {status === 'SUCCESS' ? (
            <div className="text-center py-20 animate-in slide-in-from-bottom-4">
              <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Request Logged</h3>
              <p className="text-slate-400 max-w-sm mx-auto mb-10">Our enterprise strategic team will contact you within 12 hours with a bespoke proposal.</p>
              <button 
                onClick={onClose}
                className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest rounded-2xl hover:bg-indigo-600 hover:text-white transition-all"
              >
                Close Portal
              </button>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <span className="text-indigo-500 font-black uppercase tracking-[0.4em] text-[10px]">Tier: Enterprise</span>
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter mt-2">Customize <span className="text-white/20">Your Plan</span></h3>
                <p className="text-slate-500 mt-4 text-sm font-medium">Select the high-performance modules required for your ecosystem.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <button
                      key={feature.id}
                      type="button"
                      onClick={() => toggleFeature(feature.id)}
                      className={`flex items-center gap-4 p-5 rounded-2xl border transition-all text-left ${
                        selectedFeatures.includes(feature.id)
                        ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/20'
                        : 'bg-white/5 border-white/5 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      <div className={`${selectedFeatures.includes(feature.id) ? 'text-white' : 'text-indigo-500'}`}>
                        {feature.icon}
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest leading-tight">{feature.label}</span>
                    </button>
                  ))}
                </div>

                <div className="pt-8 space-y-4">
                  <div className="group">
                    <input 
                      required
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Corporate Email Address"
                      className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 px-8 text-white focus:outline-none focus:border-indigo-600/50 transition-all font-medium"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={status === 'SENDING' || selectedFeatures.length === 0}
                    className="w-full bg-white text-black py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs transition-all flex items-center justify-center gap-4 group/btn disabled:opacity-50"
                  >
                    {status === 'SENDING' ? 'Processing Proposal...' : 'Secure Custom Quote'}
                    <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnterpriseCustomizer;
