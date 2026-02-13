import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Phone, Globe, User, ArrowRight, Lock, ShieldCheck, AlertCircle } from 'lucide-react';
import { authService } from '../services/authService';

const Login: React.FC = () => {
  const [method, setMethod] = useState<'email' | 'phone'>('email');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    // Simulating authentication
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      await authService.loginWithGoogle();
      navigate('/dashboard');
    } catch (err: any) {
      setError("Authorization failed. Please try again.");
      setLoading(false);
    }
  };

  const handleGuestLogin = async () => {
    setLoading(true);
    try {
      await authService.loginAsGuest();
      navigate('/dashboard');
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f12] flex items-center justify-center px-4 py-32 relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-indigo-600/10 rounded-full blur-[160px] animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[140px]"></div>

      <div className="w-full max-w-[540px] relative z-10">
        <div className="bg-white/[0.03] border border-white/10 rounded-[4rem] p-10 md:p-14 backdrop-blur-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]">
          
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-inner">
              <ShieldCheck className="w-3.5 h-3.5" /> Secure Protocol
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 leading-tight">
              Portal <span className="text-white/30">Entry</span>
            </h1>
            <p className="text-slate-500 font-bold uppercase tracking-[0.1em] text-xs">Access Minedore Digital Hub</p>
          </div>

          {error && (
            <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-400 text-xs font-bold animate-in fade-in duration-300">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Method Switcher */}
          <div className="flex bg-black/40 p-1.5 rounded-[2rem] border border-white/5 mb-12 shadow-inner">
            <button 
              onClick={() => setMethod('email')}
              className={`flex-1 py-4 rounded-[1.8rem] text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${method === 'email' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
            >
              Email Auth
            </button>
            <button 
              onClick={() => setMethod('phone')}
              className={`flex-1 py-4 rounded-[1.8rem] text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${method === 'phone' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
            >
              Phone SMS
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-8">
            {method === 'email' ? (
              <>
                <div className="group">
                  <label className="block text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-3 ml-4">Credential Identifier</label>
                  <div className="relative">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 group-focus-within:text-indigo-500 transition-colors" />
                    <input 
                      required
                      type="email" 
                      placeholder="root@minedore.systems" 
                      className="w-full bg-black/40 border border-white/5 rounded-3xl py-5 pl-16 pr-8 text-white focus:outline-none focus:border-indigo-600/50 transition-all font-medium"
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-3 ml-4">Access Key</label>
                  <div className="relative">
                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 group-focus-within:text-indigo-500 transition-colors" />
                    <input 
                      required
                      type="password" 
                      placeholder="••••••••••••" 
                      className="w-full bg-black/40 border border-white/5 rounded-3xl py-5 pl-16 pr-8 text-white focus:outline-none focus:border-indigo-600/50 transition-all font-medium"
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="group">
                <label className="block text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-3 ml-4">Terminal Mobile</label>
                <div className="relative">
                  <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 group-focus-within:text-indigo-500 transition-colors" />
                  <input 
                    required
                    type="tel" 
                    placeholder="+91 99000-00000" 
                    className="w-full bg-black/40 border border-white/5 rounded-3xl py-5 pl-16 pr-8 text-white focus:outline-none focus:border-indigo-600/50 transition-all font-medium"
                  />
                </div>
              </div>
            )}

            <button 
              disabled={loading}
              className="w-full bg-white text-black hover:bg-indigo-600 hover:text-white py-6 rounded-3xl font-black uppercase tracking-[0.3em] text-xs transition-all duration-500 flex items-center justify-center gap-4 group/btn disabled:opacity-50 active:scale-95 shadow-xl"
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </div>
              ) : (
                <>
                  <span>Initiate Access</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="relative my-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <div className="relative flex justify-center text-[10px] font-black uppercase tracking-[0.4em]">
              <span className="bg-[#0f1418] px-8 text-slate-600">Cross-Authentication</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <button 
              onClick={handleGoogleLogin}
              disabled={loading}
              className="flex items-center justify-center gap-4 bg-white/[0.02] border border-white/5 py-5 rounded-3xl hover:bg-white hover:text-black transition-all group/social active:scale-95 disabled:opacity-50"
            >
              <Globe className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest">Connect Google</span>
            </button>
            <button 
              onClick={handleGuestLogin}
              disabled={loading}
              className="flex items-center justify-center gap-4 bg-white/[0.02] border border-white/5 py-5 rounded-3xl hover:bg-white hover:text-black transition-all group/social active:scale-95 disabled:opacity-50"
            >
              <User className="w-5 h-5 text-slate-500 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest">Guest Entry</span>
            </button>
          </div>

          <div className="mt-16 text-center space-y-4">
             <Link to="/" className="text-white/20 hover:text-indigo-400 text-[10px] font-black uppercase tracking-widest transition-colors">Back to Main Terminal</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;