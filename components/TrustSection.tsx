
import React from 'react';
import { ShieldCheck, Laptop, Globe, CheckCircle2, Award } from 'lucide-react';

const TrustSection: React.FC = () => {
  return (
    <section className="py-32 bg-white text-black">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-black uppercase tracking-widest mb-10">
              <ShieldCheck className="w-5 h-5" />
              <span>Elite Verified Partner</span>
            </div>
            <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12">
              Unmatched <br /><span className="text-indigo-600">Precision</span>
            </h3>
            <p className="text-slate-600 text-2xl mb-14 leading-relaxed font-medium">
              Our engineering lifecycle follows strict <span className="text-black font-black uppercase">Standard Operating Procedures</span> to ensure your projects are delivered with 100% accuracy and efficiency.
            </p>
            
            <div className="grid grid-cols-2 gap-16">
              <div className="space-y-4 border-l-8 border-slate-900 pl-8">
                <div className="text-6xl font-black text-black">850+</div>
                <div className="text-slate-500 font-black uppercase text-xs tracking-[0.3em]">Delivered Assets</div>
              </div>
              <div className="space-y-4 border-l-8 border-slate-900 pl-8">
                <div className="text-6xl font-black text-black">100%</div>
                <div className="text-slate-500 font-black uppercase text-xs tracking-[0.3em]">Client Success</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
             <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-200 hover:shadow-2xl transition-all">
                <Globe className="w-16 h-16 text-indigo-600 mb-8" />
                <h5 className="font-black uppercase tracking-tighter text-2xl mb-4">Global Reach</h5>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">Scaling businesses across borders with localized digital tech.</p>
             </div>
             <div className="bg-slate-900 p-12 rounded-[3.5rem] text-white hover:shadow-2xl transition-all translate-y-12">
                <CheckCircle2 className="w-16 h-16 text-indigo-400 mb-8" />
                <h5 className="font-black uppercase tracking-tighter text-2xl mb-4">Reliability</h5>
                <p className="text-lg text-slate-400 font-medium leading-relaxed">Predictable timelines and high-fidelity project execution.</p>
             </div>
             <div className="bg-indigo-600 p-12 rounded-[3.5rem] text-white hover:shadow-2xl transition-all">
                <Award className="w-16 h-16 text-white mb-8" />
                <h5 className="font-black uppercase tracking-tighter text-2xl mb-4">Excellence</h5>
                <p className="text-lg text-indigo-100 font-medium leading-relaxed">Winner of multiple digital innovation awards in 2024.</p>
             </div>
             <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-200 hover:shadow-2xl transition-all translate-y-12">
                <Laptop className="w-16 h-16 text-indigo-600 mb-8" />
                <h5 className="font-black uppercase tracking-tighter text-2xl mb-4">Modern Tech</h5>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">Always utilizing the latest frameworks and AI models.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
