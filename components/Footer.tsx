import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  // Updated Logo URL
  const LOGO_URL = "https://res.cloudinary.com/dv2pntqsr/image/upload/v1770663986/plo0yfjtxdaxwys4niz5.jpg";

  const socialLinks = [
    { Icon: Twitter, url: '#' },
    { Icon: Instagram, url: 'https://www.instagram.com/minedore.in?igsh=MTZnbXM0amJxYnV5aQ==' },
    { Icon: Linkedin, url: '#' },
    { Icon: Github, url: '#' },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing to Minedore!");
  };

  return (
    <footer className="bg-slate-950 pt-32 pb-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="bg-black rounded-xl w-12 h-12 overflow-hidden flex items-center justify-center border border-white/10">
                <img 
                  src={LOGO_URL} 
                  alt="Minedore Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase">MINEDORE</span>
            </div>
            <p className="text-slate-500 leading-relaxed text-lg font-medium">
              The premier digital services center providing world-class AI models and web architecture.
            </p>
            <div className="flex gap-6">
              {socialLinks.map((item, i) => (
                <a 
                  key={i} 
                  href={item.url} 
                  target={item.url !== '#' ? "_blank" : undefined}
                  rel={item.url !== '#' ? "noopener noreferrer" : undefined}
                  className="p-3 bg-white/5 rounded-xl text-slate-400 hover:text-white hover:bg-indigo-600 transition-all"
                >
                  <item.Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h6 className="text-white font-black mb-10 uppercase tracking-[0.3em] text-xs">Solutions</h6>
            <ul className="space-y-6 text-slate-500 font-bold uppercase text-xs tracking-widest">
              <li><Link to="/services" className="hover:text-white transition-colors">Web Design</Link></li>
              <li><Link to="/ai-models" className="hover:text-white transition-colors">AI Models</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing Plans</Link></li>
            </ul>
          </div>

          <div>
            <h6 className="text-white font-black mb-10 uppercase tracking-[0.3em] text-xs">Company</h6>
            <ul className="space-y-6 text-slate-500 font-bold uppercase text-xs tracking-widest">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Process</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Strategy</Link></li>
            </ul>
          </div>

          <div>
            <h6 className="text-white font-black mb-10 uppercase tracking-[0.3em] text-xs">Subscribe</h6>
            <p className="text-slate-500 text-sm mb-6 font-medium">Get the latest insights on AI and web trends.</p>
            <form className="flex gap-3" onSubmit={handleSubscribe}>
              <input 
                required
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 flex-grow text-white"
              />
              <button type="submit" className="bg-indigo-600 text-white px-6 py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Join</button>
            </form>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-slate-600 text-sm font-bold uppercase tracking-widest">© 2024 Minedore Digital Services Center.</p>
          <div className="flex gap-10 text-slate-600 text-xs font-black uppercase tracking-[0.2em]">
            <Link to="/contact" className="hover:text-slate-300">Privacy</Link>
            <Link to="/contact" className="hover:text-slate-300">Terms</Link>
            <Link to="/contact" className="hover:text-slate-300">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;