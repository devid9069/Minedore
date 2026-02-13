
import React, { useState } from 'react';
import { Mail, MessageCircle, HelpCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { dataService } from '../services/dataService';

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENDING');

    try {
      // Save to mock database for Admin Panel
      dataService.saveLead({
        name: formData.name,
        email: formData.email,
        message: formData.message
      });

      // Original external logic
      const response = await fetch("https://formsubmit.co/ajax/azoxmart44@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `New Message from Minedore: ${formData.name}`
        })
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      console.error("Form error:", error);
      setStatus('ERROR');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-600 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-16 overflow-hidden relative shadow-2xl shadow-indigo-600/40">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-[100px]"></div>
          
          <div className="lg:w-1/2 relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Need Help? <br />Let's Connect.</h3>
            <p className="text-indigo-100 text-lg mb-10 leading-relaxed">
              Have questions about our services? Our team is ready to help you navigate your digital journey. Your message will be delivered directly to our support inbox.
            </p>
            
            <div className="space-y-6">
              <a href="https://wa.me/919911230354" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white group transition-transform hover:translate-x-2">
                <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-white/20 transition-all">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-indigo-200 uppercase tracking-widest font-bold">WhatsApp Support</div>
                  <div className="text-xl font-black">+91 99112-30354</div>
                </div>
              </a>
              <a href="mailto:azoxmart44@gmail.com" className="flex items-center gap-4 text-white group transition-transform hover:translate-x-2">
                <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-white/20 transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-indigo-200 uppercase tracking-widest font-bold">Email Us</div>
                  <div className="text-xl font-black">azoxmart44@gmail.com</div>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative z-10">
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl transition-all duration-500">
              {status === 'SUCCESS' ? (
                <div className="py-12 text-center animate-in zoom-in duration-500">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">Message Sent!</h4>
                  <p className="text-slate-500 mb-8 font-medium">Thank you for reaching out. We will get back to you at azoxmart44@gmail.com as soon as possible.</p>
                  <button 
                    onClick={() => setStatus('IDLE')}
                    className="text-indigo-600 font-black uppercase text-xs tracking-[0.3em] hover:text-slate-900 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h4 className="text-slate-900 text-2xl font-bold mb-6">Send us a message</h4>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    {status === 'ERROR' && (
                        <div className="p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-3 text-sm font-bold border border-red-100 animate-in slide-in-from-top-2">
                            <AlertCircle className="w-5 h-5" />
                            <span>Failed to send. Please try again or use WhatsApp.</span>
                        </div>
                    )}
                    <div>
                      <label className="block text-slate-600 text-sm font-semibold mb-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900" 
                        placeholder="Enter your name" 
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 text-sm font-semibold mb-2">Email Address</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900" 
                        placeholder="your@email.com" 
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 text-sm font-semibold mb-2">How can we help?</label>
                      <textarea 
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 h-32 resize-none" 
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      disabled={status === 'SENDING'}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      {status === 'SENDING' ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                      ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5" />
                          </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section Preview */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex gap-4 p-6 bg-slate-900/40 rounded-3xl border border-white/5">
            <HelpCircle className="w-10 h-10 text-indigo-400 flex-shrink-0" />
            <div>
              <h5 className="font-bold text-white mb-2">Service Timelines?</h5>
              <p className="text-slate-400 text-sm">Web projects typically take 1-3 weeks depending on complexity.</p>
            </div>
          </div>
          <div className="flex gap-4 p-6 bg-slate-900/40 rounded-3xl border border-white/5">
            <HelpCircle className="w-10 h-10 text-indigo-400 flex-shrink-0" />
            <div>
              <h5 className="font-bold text-white mb-2">AI Capabilities?</h5>
              <p className="text-slate-400 text-sm">We build specialized models for automation, data analysis, and support.</p>
            </div>
          </div>
          <div className="flex gap-4 p-6 bg-slate-900/40 rounded-3xl border border-white/5">
            <HelpCircle className="w-10 h-10 text-indigo-400 flex-shrink-0" />
            <div>
              <h5 className="font-bold text-white mb-2">Pricing Models?</h5>
              <p className="text-slate-400 text-sm">We offer both fixed project pricing and flexible monthly subscriptions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
