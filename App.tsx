
import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import AIModelsSection from './components/AIModelsSection';
import ServicesSection from './components/ServicesSection';
import ReviewSection from './components/ReviewSection';
import UIShowcase from './components/UIShowcase';
import TrustSection from './components/TrustSection';
import ContactSection from './components/ContactSection';
import FounderCard from './components/FounderCard';
import EnterpriseCustomizer from './components/EnterpriseCustomizer';
import PlanSelectionModal from './components/PlanSelectionModal';
import AdminPanel from './components/AdminPanel';
import ServiceDetailPage from './components/ServiceDetailPage';

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Page Components
const HomePage: React.FC = () => (
  <>
    <Hero />
    <ServicesSection />
    <ReviewSection />
    <FounderCard />
    <UIShowcase />
    <TrustSection />
    <ContactSection />
  </>
);

const AboutPage: React.FC = () => (
  <div className="pt-20">
    <AboutSection />
    <FounderCard />
    <TrustSection />
  </div>
);

const AIModelsPage: React.FC = () => (
  <div className="pt-20">
    <AIModelsSection />
  </div>
);

const ServicesPage: React.FC = () => (
  <div className="pt-20">
    <ServicesSection />
    <ReviewSection />
    <UIShowcase />
  </div>
);

const PricingPage: React.FC = () => {
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [selectionModal, setSelectionModal] = useState<{ isOpen: boolean; plan: string; price: string }>({
    isOpen: false,
    plan: '',
    price: ''
  });

  const handleAction = (plan: string, price: string) => {
    if (plan === 'Enterprise') {
      setIsCustomizerOpen(true);
    } else {
      setSelectionModal({ isOpen: true, plan, price });
    }
  };

  return (
    <div className="pt-40 pb-32 text-center bg-slate-950 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-indigo-500 font-black uppercase tracking-[0.3em] text-sm mb-4">Transparent Costs</h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-16">Our Service <span className="text-white/30">Plans</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Standard', price: '₹299' },
            { name: 'Professional', price: '₹499' },
            { name: 'Enterprise', price: 'Custom' }
          ].map((plan) => (
            <div key={plan.name} className={`p-12 rounded-[3rem] bg-white/5 border border-white/10 hover:border-indigo-600/50 transition-all text-left group flex flex-col relative ${plan.name === 'Professional' ? 'scale-105 border-indigo-500/30 bg-white/10' : ''}`}>
              {plan.name === 'Professional' && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full shadow-lg">Most Popular</span>
              )}
              <h2 className="text-2xl font-black uppercase mb-4 text-white">{plan.name}</h2>
              <div className="text-5xl font-black mb-8 text-indigo-500">
                {plan.price}
              </div>
              <ul className="text-slate-400 space-y-4 mb-10 font-medium flex-grow">
                <li>✓ Custom Web Development</li>
                <li>✓ Basic AI Integration</li>
                <li>✓ Secure Cloud Hosting</li>
                <li>{plan.name !== 'Standard' ? '✓ Advanced SEO Suite' : '✗ Advanced SEO Suite'}</li>
                <li>{plan.name === 'Enterprise' ? '✓ Custom AI Model Training' : '✗ Custom AI Model Training'}</li>
              </ul>
              <button 
                onClick={() => handleAction(plan.name, plan.price)}
                className="w-full py-4 bg-indigo-600 group-hover:bg-white group-hover:text-black rounded-2xl font-black uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-indigo-600/20"
              >
                {plan.name === 'Enterprise' ? 'Customize' : `Select ${plan.name}`}
              </button>
            </div>
          ))}
        </div>
      </div>

      <EnterpriseCustomizer 
        isOpen={isCustomizerOpen} 
        onClose={() => setIsCustomizerOpen(false)} 
      />

      <PlanSelectionModal 
        isOpen={selectionModal.isOpen}
        planName={selectionModal.plan}
        price={selectionModal.price}
        onClose={() => setSelectionModal({ ...selectionModal, isOpen: false })}
      />
    </div>
  );
};

const ContactPage: React.FC = () => (
  <div className="pt-20">
    <ContactSection />
  </div>
);

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
        <Route path="/ai-models" element={<MainLayout><AIModelsPage /></MainLayout>} />
        <Route path="/services" element={<MainLayout><ServicesPage /></MainLayout>} />
        <Route path="/services/:serviceId" element={<MainLayout><ServiceDetailPage /></MainLayout>} />
        <Route path="/pricing" element={<MainLayout><PricingPage /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
