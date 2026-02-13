
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with Professional Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070')`,
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 overflow-hidden">
          <span className="text-white font-medium text-lg md:text-xl tracking-[0.3em] uppercase block animate-float-up opacity-0">
            Welcome to our website
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-8 uppercase leading-tight">
          The New Digital <br />
          <span className="text-white">Services Center</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white/70 mb-14 font-light italic tracking-widest">
          Embrace the journey. Achievements await.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-14 py-5 border-[3px] border-white text-white hover:bg-white hover:text-black font-black uppercase tracking-[0.2em] transition-all text-lg inline-block"
          >
            Contact Now
          </Link>
        </div>
      </div>

      {/* Aesthetic Blend Shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </section>
  );
};

export default Hero;
