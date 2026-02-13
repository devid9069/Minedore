
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Target, 
  Zap, 
  Users, 
  MapPin, 
  Share2, 
  BarChart, 
  Globe, 
  Search,
  MessageCircle,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  // Detailed content for Digital Marketing
  const digitalMarketingContent = {
    title: "Digital Marketing",
    subtitle: "Grow Your Brand in the Digital Era",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2070",
    intro: "Digital marketing is the use of digital channels—like search engines, social media, and email—to connect with customers. In today's hyper-connected world, it's not just about being online; it's about being visible, authoritative, and trusted. At Minedore, we turn digital noise into strategic growth.",
    howWeWork: "Our approach is built on a 'Data-First' philosophy. We don't guess; we analyze. We start by auditing your current presence, identifying your ideal customer persona, and building a 360-degree funnel that captures interest and converts it into revenue. We leverage cutting-edge AI tools to predict trends and automate engagement, ensuring your brand stays ahead of the competition.",
    benefits: [
      {
        title: "Skyrocket Your ROI",
        desc: "Precision targeting ensures your budget is spent only on users likely to convert, maximizing every rupee.",
        icon: <TrendingUp className="w-6 h-6" />
      },
      {
        title: "24/7 Brand Presence",
        desc: "Your business never sleeps. We ensure your services are being discovered while you rest.",
        icon: <Globe className="w-6 h-6" />
      },
      {
        title: "Measurable Success",
        desc: "Unlike traditional ads, every click, view, and sale is tracked with total transparency.",
        icon: <BarChart className="w-6 h-6" />
      }
    ],
    whyUs: [
      "We combine AI technology with creative human strategy.",
      "Customized plans tailored to your specific industry niche.",
      "Focus on long-term authority, not just short-term traffic.",
      "Direct support and weekly performance reporting."
    ],
    specificServices: [
      {
        title: "Google Business Profile",
        desc: "Optimize your local presence on Google Maps. We ensure your business appears in the 'Local Pack' when customers search nearby.",
        icon: <MapPin className="w-6 h-6" />
      },
      {
        title: "Social Media Content",
        desc: "Engaging visuals and high-impact captions for Instagram, Facebook, and LinkedIn to build a community around your brand.",
        icon: <Share2 className="w-6 h-6" />
      },
      {
        title: "SEO & Search Ranking",
        desc: "Technical and content-based SEO to rank your website on the first page of Google for relevant keywords.",
        icon: <Search className="w-6 h-6" />
      },
      {
        title: "PPC & Meta Ads",
        desc: "High-conversion ad campaigns across Google Ads and Meta to drive instant traffic and leads to your business.",
        icon: <Zap className="w-6 h-6" />
      }
    ]
  };

  // Default content for other services
  const defaultContent = {
    title: serviceId?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || "Our Premium Service",
    subtitle: "Excellence in Digital Engineering",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072",
    intro: "At Minedore, we provide world-class technical solutions tailored for the modern enterprise. Our services are designed to scale your operations and solidify your digital footprint.",
    howWeWork: "We follow an agile methodology—Sprint, Review, Deploy. Every project undergoes rigorous quality assurance to ensure it meets our elite standards of performance and security.",
    benefits: [
      { title: "Precision Design", desc: "Expertly crafted layouts for maximum impact.", icon: <Target className="w-6 h-6" /> },
      { title: "Scalable Tech", desc: "Architecture that grows as your business grows.", icon: <Zap className="w-6 h-6" /> },
      { title: "Elite Support", desc: "Direct access to our senior engineering team.", icon: <Users className="w-6 h-6" /> }
    ],
    whyUs: ["Expert Team", "SOP-Driven Process", "Latest Tech Stack", "Customer-First Approach"],
    specificServices: []
  };

  const content = serviceId === 'digital-marketing' ? digitalMarketingContent : defaultContent;

  return (
    <div className="bg-slate-950 min-h-screen text-white pb-24">
      {/* Hero Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('${content.heroImage}')`,
          }}
        ></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-indigo-400 font-black uppercase text-[10px] tracking-[0.4em] mb-8 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-4">{content.title}</h1>
          <p className="text-indigo-500 font-bold uppercase tracking-[0.4em] text-sm md:text-lg">{content.subtitle}</p>
        </div>
      </section>

      {/* Intro & How it Works */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight mb-8">What is {content.title}?</h2>
            <p className="text-slate-400 text-xl leading-relaxed italic font-light border-l-4 border-indigo-600 pl-8">
              {content.intro}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Our Working Strategy</h2>
            <p className="text-slate-400 text-xl leading-relaxed font-medium">
              {content.howWeWork}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-center mb-16">Why You Need This</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {content.benefits.map((benefit, idx) => (
              <div key={idx} className="p-10 rounded-[2.5rem] bg-slate-900 border border-white/5 hover:border-indigo-600 transition-all group">
                <div className="bg-indigo-600/10 text-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-black uppercase mb-4 text-white">{benefit.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Minedore? */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-none">Why Choose <br /> Minedore?</h2>
              <p className="text-indigo-100 text-xl font-medium mb-10">We don't just provide services; we deliver measurable excellence.</p>
              <div className="grid grid-cols-1 gap-4">
                {content.whyUs.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-white font-bold uppercase tracking-widest text-sm bg-white/10 p-4 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-indigo-200" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
               <div className="bg-white rounded-[2.5rem] p-10 text-slate-950 shadow-2xl">
                  <ShieldCheck className="w-16 h-16 text-indigo-600 mb-8" />
                  <h4 className="text-3xl font-black uppercase tracking-tight mb-4">Elite Partnership</h4>
                  <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10">Working with us means having an entire team of senior strategists and developers at your command.</p>
                  <Link to="/contact" className="inline-block px-10 py-5 bg-slate-950 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-indigo-600 transition-all text-center w-full">Get Started Now</Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services (Specific Offerings) */}
      {content.specificServices.length > 0 && (
        <section className="py-24 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-16">Key Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.specificServices.map((sub, idx) => (
              <div key={idx} className="p-10 bg-white/5 rounded-[2.5rem] border border-white/5 flex gap-8 items-start hover:bg-white/10 transition-all group">
                <div className="p-5 bg-indigo-600/20 text-indigo-400 rounded-2xl group-hover:scale-110 transition-transform">
                  {sub.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase mb-4 text-white group-hover:text-indigo-400 transition-colors">{sub.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">{sub.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-32 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 text-white/40 leading-none">Ready to transform your <br /><span className="text-white">Digital World?</span></h2>
        <Link to="/contact" className="px-16 py-6 border-[4px] border-white text-white hover:bg-white hover:text-black font-black uppercase tracking-[0.3em] text-xl transition-all inline-block">
          Let's Collaborate
        </Link>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
