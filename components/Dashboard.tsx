import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Layers, 
  Zap, 
  Bell, 
  CheckCircle2,
  ChevronRight,
  LogOut
} from 'lucide-react';
import Navbar from './Navbar';
import { authService } from '../services/authService';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>({
    displayName: 'Admin Account',
    photoURL: null
  });

  const handleLogout = async () => {
    await authService.logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#0a0f12] text-white flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow pt-[140px] pb-24 px-4 md:px-10 max-w-[1440px] mx-auto w-full">
        {/* Portal Header */}
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 mb-20">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6 leading-none">
              Client <span className="text-indigo-600">Portal</span>
            </h1>
            <p className="text-white/40 text-2xl font-light italic tracking-widest">Welcome back, {user?.displayName || 'Authorized Client'}.</p>
          </div>
          <div className="flex items-center gap-8">
            <button 
              onClick={handleLogout}
              className="p-6 bg-red-500/10 rounded-3xl border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-all group"
              title="Logout"
            >
              <LogOut className="w-7 h-7 group-hover:scale-110 transition-transform" />
            </button>
            <div className="flex items-center gap-6 bg-white/5 p-4 pr-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-tr from-indigo-600 to-indigo-900 shadow-xl border border-white/20">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="User" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white font-black text-2xl">
                    {user?.displayName?.charAt(0) || 'A'}
                  </div>
                )}
              </div>
              <div>
                <p className="text-lg font-black uppercase tracking-widest">{user?.displayName || 'Admin Account'}</p>
                <p className="text-xs text-indigo-500 uppercase font-black tracking-[0.3em] mt-1">Verified Client</p>
              </div>
            </div>
          </div>
        </header>

        {/* Action Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { label: 'Project Feed', icon: <LayoutDashboard />, active: true },
            { label: 'Billing', icon: <FileText />, active: false },
            { label: 'Services', icon: <Layers />, active: false },
            { label: 'AI Assets', icon: <Zap />, active: false }
          ].map((item) => (
            <button 
              key={item.label}
              className={`flex flex-col items-center justify-center gap-6 p-12 rounded-[3.5rem] border transition-all ${
                item.active 
                ? 'bg-indigo-600 border-indigo-400 text-white shadow-3xl shadow-indigo-600/30 scale-105' 
                : 'bg-white/5 border-white/5 text-white/50 hover:border-white/20 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="w-10 h-10">{item.icon}</span>
              <span className="font-black uppercase tracking-[0.2em] text-sm">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <div className="p-12 bg-white/5 rounded-[4rem] border border-white/10 group hover:border-indigo-600/40 transition-all">
            <p className="text-white/30 text-xs font-black uppercase tracking-[0.4em] mb-8">Active Pipelines</p>
            <div className="text-8xl font-black">04</div>
            <p className="mt-8 text-sm text-green-400 font-bold flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5" /> All systems operational
            </p>
          </div>
          <div className="p-12 bg-white/5 rounded-[4rem] border border-white/10 group hover:border-indigo-600/40 transition-all">
            <p className="text-white/30 text-xs font-black uppercase tracking-[0.4em] mb-8">Uptime Monitor</p>
            <div className="text-8xl font-black">99.9</div>
            <p className="mt-8 text-sm text-white/40 font-bold uppercase tracking-widest font-mono">Service Availability</p>
          </div>
          <div className="p-12 bg-white/5 rounded-[4rem] border border-white/10 group hover:border-indigo-600/40 transition-all">
            <p className="text-white/30 text-xs font-black uppercase tracking-[0.4em] mb-8">Pending Updates</p>
            <div className="text-8xl font-black">00</div>
            <p className="mt-8 text-sm text-indigo-500 font-bold uppercase tracking-widest">Up to date</p>
          </div>
        </div>

        {/* Current Deliveries */}
        <div className="space-y-10">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-12">Ongoing Deliveries</h2>
          {[
            { title: 'Web Architecture Redesign', subtitle: 'Phase 2: UI Optimization', progress: 92, color: 'bg-indigo-600' },
            { title: 'Custom LLM Implementation', subtitle: 'Phase 1: Model Training', progress: 45, color: 'bg-indigo-900' }
          ].map((proj, i) => (
            <div key={i} className="bg-white/5 rounded-[4.5rem] p-12 border border-white/5 hover:border-indigo-500/30 transition-all flex flex-col md:flex-row items-center gap-16 group">
              <div className={`w-32 h-32 ${proj.color} rounded-[3rem] flex items-center justify-center flex-shrink-0 shadow-3xl group-hover:scale-105 transition-transform`}>
                <Zap className="w-16 h-16 text-white" />
              </div>
              <div className="flex-grow w-full">
                <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 group-hover:text-indigo-400 transition-colors">{proj.title}</h3>
                <p className="text-white/30 font-bold text-xl mb-10 uppercase tracking-[0.2em]">{proj.subtitle}</p>
                <div className="w-full h-5 bg-white/5 rounded-full overflow-hidden mb-6 shadow-inner">
                  <div className={`${proj.color} h-full rounded-full shadow-lg`} style={{ width: `${proj.progress}%` }}></div>
                </div>
                <div className="flex justify-between items-center">
                   <p className="text-xs font-black uppercase tracking-[0.3em] text-white/20">System Status: Active</p>
                   <p className="text-3xl font-black text-indigo-500">{proj.progress}%</p>
                </div>
              </div>
              <button className="bg-white/10 hover:bg-indigo-600 p-10 rounded-[3rem] transition-all shadow-xl">
                <ChevronRight className="w-10 h-10" />
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;