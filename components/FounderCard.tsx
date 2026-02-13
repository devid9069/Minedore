
import React, { useState } from 'react';
import { Mail, MessageCircle, ShieldCheck, ExternalLink, RotateCcw } from 'lucide-react';

const FounderCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Updated Logo URL
  const LOGO_URL = "https://res.cloudinary.com/dv2pntqsr/image/upload/v1770663986/plo0yfjtxdaxwys4niz5.jpg";

  const handleToggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="py-40 bg-slate-950 overflow-hidden perspective-2000">
      <div className="max-w-7xl mx-auto px-4 text-center mb-20">
        <h2 className="text-indigo-500 font-black uppercase tracking-[0.4em] text-xs mb-4">Executive Identity</h2>
        <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">Founder <span className="text-white/20">Profile</span></h3>
      </div>

      <div className="flex justify-center items-center h-[500px]">
        {/* 3D Card Container */}
        <div 
          onClick={handleToggleFlip}
          className="relative w-full max-w-[700px] h-[400px] transition-transform duration-700 ease-in-out cursor-pointer group/card-container"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: `rotateY(${isFlipped ? '180' : '0'}deg)`
          }}
        >
          {/* FRONT FACE */}
          <div 
            className="absolute inset-0 w-full h-full backface-hidden rounded-[3rem] p-1 shadow-2xl"
            style={{ 
              background: 'linear-gradient(135deg, #1e272e 0%, #0a0f12 100%)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <div className="h-full w-full rounded-[2.8rem] border border-white/5 p-12 flex flex-col justify-between overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
              
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/20 bg-black">
                    <img src={LOGO_URL} alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-xl uppercase tracking-widest">MINEDORE</h4>
                    <p className="text-indigo-500 text-[10px] font-black tracking-[0.3em] uppercase">Digital Services Center</p>
                  </div>
                </div>
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  <span className="text-[10px] text-white/60 font-black uppercase tracking-widest">ID: 8820-MN</span>
                </div>
              </div>

              <div className="relative z-10">
                <h5 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-2">Abhishek Sen</h5>
                <p className="text-indigo-400 font-bold uppercase tracking-[0.4em] text-sm flex items-center gap-4">
                  Founder & CEO <span className="h-[1px] w-12 bg-indigo-500/30"></span>
                </p>
              </div>

              <div className="flex justify-between items-end">
                <div className="text-white/20 text-xs font-mono uppercase tracking-widest">
                  Est. 2024 / New Delhi, India
                </div>
                <div className="flex items-center gap-3 text-white/60 text-[10px] font-black uppercase group-hover/card-container:text-indigo-400 transition-colors">
                  Tap to view contacts <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* BACK FACE */}
          <div 
            className="absolute inset-0 w-full h-full backface-hidden rounded-[3rem] p-1 shadow-2xl"
            style={{ 
              background: 'linear-gradient(135deg, #0a0f12 0%, #1e272e 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
              transform: 'rotateY(180deg)'
            }}
          >
            <div className="h-full w-full rounded-[2.8rem] border border-white/5 p-12 flex flex-col justify-between relative bg-slate-900/40">
              <div className="flex justify-between items-center mb-8">
                <span className="text-indigo-500 font-black text-xs uppercase tracking-[0.4em]">Direct Connection</span>
                <button onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }} className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all">
                   <RotateCcw className="w-4 h-4 text-white/40" />
                </button>
              </div>

              <div className="space-y-8">
                <a 
                  href="https://wa.me/919911230354" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-8 group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="w-20 h-20 bg-green-500/10 rounded-[1.5rem] flex items-center justify-center text-green-500 border border-green-500/20 group-hover/link:bg-green-500 group-hover/link:text-white transition-all duration-500">
                    <MessageCircle className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-1">WhatsApp Business</p>
                    <p className="text-white text-3xl font-black tracking-tight">+91 9911-230-354</p>
                  </div>
                </a>

                <a 
                  href="mailto:azoxmart44@gmail.com" 
                  className="flex items-center gap-8 group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="w-20 h-20 bg-indigo-500/10 rounded-[1.5rem] flex items-center justify-center text-indigo-400 border border-indigo-500/20 group-hover/link:bg-indigo-600 group-hover/link:text-white transition-all duration-500">
                    <Mail className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Direct Email</p>
                    <p className="text-white text-3xl font-black tracking-tight">azoxmart44@gmail.com</p>
                  </div>
                </a>
              </div>

              <div className="pt-8 border-t border-white/5 flex justify-between items-center">
                <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">Verified Professional Credential</p>
                <div className="h-8 w-24 bg-white/5 rounded-md flex items-center justify-center border border-white/10 opacity-50">
                   <div className="grid grid-cols-4 gap-1">
                      {[1,2,3,4,5,6,7,8].map(i => <div key={i} className="w-1 h-1 bg-white/40 rounded-full"></div>)}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .perspective-2000 {
          perspective: 2000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default FounderCard;
