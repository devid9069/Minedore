
import React from 'react';

const UIShowcase: React.FC = () => {
  const items = [
    { title: 'AI Dashboard', type: 'Web App', img: 'https://picsum.photos/seed/dashboard/800/600' },
    { title: 'Learning Portal', type: 'Platform', img: 'https://picsum.photos/seed/learning/800/600' },
    { title: 'E-commerce UI', type: 'Mobile', img: 'https://picsum.photos/seed/shop/800/600' },
    { title: 'Analytics View', type: 'UI/UX', img: 'https://picsum.photos/seed/stats/800/600' },
    { title: 'Mobile Wallet', type: 'App', img: 'https://picsum.photos/seed/wallet/800/600' }
  ];

  return (
    <section className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-indigo-400 font-semibold mb-2 tracking-wide uppercase text-sm text-center">Visual Credibility</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-center mb-4">App & UI <span className="text-white">Showcase</span></h3>
        <p className="text-slate-400 text-center max-w-2xl mx-auto">Take a look at the quality of work we deliver to our clients every day.</p>
      </div>

      <div className="flex gap-8 overflow-x-auto pb-12 px-8 custom-scrollbar snap-x">
        {items.map((item, idx) => (
          <div key={idx} className="flex-shrink-0 w-[300px] md:w-[450px] snap-center group">
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 mb-6 transition-all duration-500 group-hover:border-indigo-500/50">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <div className="px-2">
              <h4 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{item.title}</h4>
              <p className="text-slate-500 font-medium">{item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UIShowcase;
