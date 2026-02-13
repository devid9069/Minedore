import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Phone, Mail, Plus } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'AI Models', path: '/ai-models' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Updated Logo URL
  const LOGO_URL = "https://res.cloudinary.com/dv2pntqsr/image/upload/v1770663986/plo0yfjtxdaxwys4niz5.jpg";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Black Professional Header Bar */}
      <div className="bg-[#2d3436] h-[75px] border-b border-white/10 flex items-center shadow-2xl">
        <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-black rounded-xl overflow-hidden flex items-center justify-center border-2 border-white/20 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={LOGO_URL} 
                  alt="Minedore Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white font-black text-2xl tracking-tighter uppercase">Minedore</span>
            </Link>

            {/* Main Navigation */}
            <nav className="hidden lg:flex items-center ml-10 space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-[14px] font-bold uppercase tracking-widest transition-all ${
                    isActive(link.path) 
                    ? 'text-white' 
                    : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-[-15px] left-4 right-4 h-[3px] bg-white rounded-full"></span>
                  )}
                </Link>
              ))}
              <button className="text-white/40 hover:text-white px-2">
                <Plus className="w-4 h-4" />
              </button>
            </nav>
          </div>

          {/* Right Section: Tools & Contacts */}
          <div className="flex items-center gap-4 lg:gap-8">
            <div className="hidden xl:flex items-center gap-8">
              {/* Circular Search */}
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white/90 hover:bg-white/20 transition-all border border-white/5">
                <Search className="w-5 h-5" />
              </button>

              {/* Contact Info */}
              <div className="flex items-center gap-6 text-[13px] text-white/60 font-semibold border-l border-white/10 pl-8">
                <a href="tel:+919911230354" className="flex items-center gap-2 hover:text-white transition-colors whitespace-nowrap">
                  <Phone className="w-4 h-4" />
                  +91 9911-230-354
                </a>
                <a href="mailto:azoxmart44@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors whitespace-nowrap">
                  <Mail className="w-4 h-4" />
                  azoxmart44@gmail.com
                </a>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#1e272e] border-t border-white/10 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-6 py-10 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-5 py-4 rounded-xl text-lg font-black uppercase tracking-widest ${
                  isActive(link.path) 
                  ? 'text-white bg-white/10' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-8 border-t border-white/5 space-y-6">
              <div className="flex flex-col gap-4 px-4 text-sm text-white/40 font-bold uppercase tracking-widest">
                <div className="flex items-center gap-3 whitespace-nowrap">
                  <Phone className="w-5 h-5" /> +91 9911-230-354
                </div>
                <div className="flex items-center gap-3 whitespace-nowrap">
                  <Mail className="w-5 h-5" /> azoxmart44@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;