
import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Cpu, TrendingUp, ShieldCheck } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      title: 'Digital Solutions',
      desc: 'End-to-end strategy and implementation for your digital infrastructure.',
      icon: <Target className="w-6 h-6" />,
      path: '/services'
    },
    {
      title: 'AI Deployment',
      desc: 'We build and upload custom AI models tailored to your specific workflow.',
      icon: <Cpu className="w-6 h-6" />,
      path: '/ai-models'
    },
    {
      title: 'Business Scale',
      desc: 'Data-driven approaches to help your business reach new heights.',
      icon: <TrendingUp className="w-6 h-6" />,
      path: '/pricing'
    },
    {
      title: 'Secure Delivery',
      desc: 'Robust hosting and high-level security for every project we build.',
      icon: <ShieldCheck className="w-6 h-6" />,
      path: '/contact'
    }
  ];

  return (
    <section id="about" className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2">
            <h2 className="text-indigo-500 font-black uppercase tracking-[0.4em] text-sm mb-6">Our Agency Mission</h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-10 uppercase leading-tight tracking-tight">
              The Hub of <br /> <span className="text-white/30">AI Innovation</span>
            </h3>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed font-light italic">
              Minedore is a premier digital services center. We specialize in engineering high-performance AI models, 
              bespoke web architectures, and strategic branding for businesses ready for the future.
            </p>
            <div className="flex items-center gap-6 p-8 rounded-[2rem] bg-white/5 border border-white/10 max-w-lg">
              <div className="bg-indigo-600 p-4 rounded-2xl text-white">
                <Target className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-black uppercase tracking-widest text-white text-sm">Our Focus</h4>
                <p className="text-slate-400 text-sm mt-1">Driving measurable results through advanced technology.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((item, idx) => (
              <Link 
                key={idx} 
                to={item.path}
                className="p-10 rounded-[2.5rem] bg-[#1e272e] border border-white/5 hover:border-indigo-600 transition-all group block"
              >
                <div className="bg-indigo-600/10 text-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white group-hover:text-indigo-400 transition-colors">{item.title}</h4>
                <p className="text-slate-400 text-base leading-relaxed font-medium">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
