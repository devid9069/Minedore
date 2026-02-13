
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Palette, TrendingUp, ArrowRight } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'web-design',
      title: 'Web Design',
      desc: 'Expert layouts and creative user experiences optimized for performance and conversion.',
      icon: <Globe className="w-10 h-10" />,
      img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'graphics-design',
      title: 'Graphics Design',
      desc: 'Top-tier branding, custom logos, and high-impact digital graphics for modern brands.',
      icon: <Palette className="w-10 h-10" />,
      img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      desc: 'Grow your business with data-driven strategies, SEO, and powerful social media presence.',
      icon: <TrendingUp className="w-10 h-10" />,
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white text-black">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        <div className="mb-20">
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none text-slate-900">
            All Our Services
          </h3>
          <div className="h-2 w-24 bg-indigo-600 mt-6 shadow-lg shadow-indigo-600/20"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <div key={idx} className="group flex flex-col bg-slate-100 rounded-[2.5rem] overflow-hidden border border-slate-200 transition-all hover:shadow-2xl">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
                <div className="absolute bottom-6 left-6 bg-white p-4 rounded-2xl shadow-2xl">
                  <div className="text-indigo-600">{service.icon}</div>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h4 className="text-3xl font-black uppercase mb-6 tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">{service.title}</h4>
                <p className="text-slate-600 mb-10 leading-relaxed font-medium text-lg">
                  {service.desc}
                </p>
                <Link 
                  to={`/services/${service.id}`} 
                  className="mt-auto inline-flex items-center gap-3 text-indigo-600 font-black uppercase text-sm tracking-widest hover:gap-6 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
