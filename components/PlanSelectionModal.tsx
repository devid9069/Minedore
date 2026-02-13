
import React, { useState } from 'react';
import { X, CheckCircle2, CreditCard, ArrowRight, ShieldCheck } from 'lucide-react';
import { dataService } from '../services/dataService';

interface PlanSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  price: string;
}

const PlanSelectionModal: React.FC<PlanSelectionModalProps> = ({ isOpen, onClose, planName, price }) => {
  const [status, setStatus] = useState<'IDLE' | 'PROCESSING' | 'SUCCESS'>('IDLE');
  const [email, setEmail] = useState('');

  const handleProceed = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('PROCESSING');
    
    // Simulate payment gateway initialization
    setTimeout(() => {
      dataService.saveOrder({
        email: email,
        plan: planName,
        price: price,
        type: 'Subscription'
      });
      setStatus('SUCCESS');
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-12">
          {status === 'SUCCESS' ? (
            <div className="text-center py-10 animate-in slide-in-from-bottom-4">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Order Confirmed</h3>
              <p className="text-slate-400 mb-8">Access instructions sent to <br/><span className="text-indigo-400 font-bold">{email}</span></p>
              <button 
                onClick={onClose}
                className="w-full py-4 bg-white text-black font-black uppercase tracking-widest rounded-xl hover:bg-indigo-600 hover:text-white transition-all"
              >
                Go to Dashboard
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-indigo-600/20 text-indigo-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-indigo-500/20">Selected Plan</span>
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">{planName}</h3>
                <div className="text-4xl font-black text-indigo-500 mt-2">{price}</div>
              </div>

              <form onSubmit={handleProceed} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-2">Contact Email</label>
                    <input 
                      required
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-indigo-600/50 transition-all"
                    />
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-indigo-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tight leading-relaxed">
                    Secure transaction. Your data is encrypted using military-grade protocols.
                  </p>
                </div>

                <button 
                  type="submit"
                  disabled={status === 'PROCESSING'}
                  className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-3 group active:scale-95 disabled:opacity-50"
                >
                  {status === 'PROCESSING' ? (
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Confirm & Pay
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanSelectionModal;
