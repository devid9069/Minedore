
import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Vikram Malhotra",
    role: "CEO, TechFlow Solutions",
    rating: 5,
    text: "The AI implementation provided by Minedore transformed our customer support overnight. Highly recommended for any growing enterprise!",
    avatar: "https://i.pravatar.cc/150?u=vikram"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Marketing Director",
    rating: 4,
    text: "Exceptional UI design. Our conversion rates increased by 40% after the redesign. Great attention to detail and user journey mapping.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 3,
    name: "Ananya Rao",
    role: "E-commerce Owner",
    rating: 5,
    text: "Professional, fast, and extremely knowledgeable. Their team handled our complex integration flawlessly with zero downtime.",
    avatar: "https://i.pravatar.cc/150?u=ananya"
  },
  {
    id: 4,
    name: "David Chen",
    role: "Product Manager",
    rating: 5,
    text: "The best digital services agency we've worked with. The AI models are genuinely intelligent and provide real-world value to our stack.",
    avatar: "https://i.pravatar.cc/150?u=david"
  },
  {
    id: 5,
    name: "Priya Sharma",
    role: "Startup Founder",
    rating: 4,
    text: "Reliable partner for long-term growth. Their strategic branding gave our company a unique identity in a crowded marketplace.",
    avatar: "https://i.pravatar.cc/150?u=priya"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "CTO, CloudScale",
    rating: 5,
    text: "Clean code, robust architecture, and cutting-edge tech. Minedore is in a league of its own when it comes to high-end development.",
    avatar: "https://i.pravatar.cc/150?u=james"
  }
];

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="flex-shrink-0 w-[300px] md:w-[450px] p-8 md:p-10 rounded-[2.5rem] bg-slate-900 border border-white/5 relative group hover:border-indigo-500/30 transition-all duration-500 mx-4 flex flex-col justify-between">
      <Quote className="absolute top-6 right-8 w-10 h-10 text-white/5 group-hover:text-indigo-500/10 transition-colors" />
      
      <div>
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < review.rating ? 'text-amber-500 fill-amber-500' : 'text-slate-800'}`} 
            />
          ))}
        </div>

        {/* Fixed: Added whitespace-normal and break-words to ensure text doesn't overflow horizontally */}
        <p className="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed font-medium whitespace-normal break-words">
          "{review.text}"
        </p>
      </div>

      <div className="flex items-center gap-4 border-t border-white/5 pt-6">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-700 bg-slate-800 flex-shrink-0">
          <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
        </div>
        <div className="overflow-hidden">
          <h5 className="text-white font-bold uppercase text-xs tracking-widest flex items-center gap-2 truncate">
            {review.name}
            <CheckCircle className="w-3 h-3 text-indigo-500 flex-shrink-0" />
          </h5>
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] mt-1 truncate">{review.role}</p>
        </div>
      </div>
    </div>
  );
};

const ReviewSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-10 mb-16 text-center">
        <h2 className="text-indigo-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Client Testimonials</h2>
        <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
          Live <span className="text-slate-700">Reviews</span>
        </h3>
        <p className="text-slate-500 max-w-2xl mx-auto font-medium text-sm uppercase tracking-wide">
          Direct feedback from our global partners.
        </p>
      </div>

      {/* Marquee Animation Container */}
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee py-6 whitespace-nowrap">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
          {/* Duplicate for seamless loop */}
          {reviews.map((review) => (
            <ReviewCard key={`dup-${review.id}`} review={review} />
          ))}
        </div>
        
        {/* Simple Side Gradients */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ReviewSection;
