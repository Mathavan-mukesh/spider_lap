import React, { useState } from 'react';
import { 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  Mail,
  Building,
  User
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'AI Products',
    budget: '$30k – $60k',
    timeline: 'Within 2 Months',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const projectTypes = [
    'AI Products',
    'SaaS Platform',
    'Web Application',
    'Mobile App',
    'Business Automation',
    'Custom Enterprise',
  ];

  const budgetRanges = [
    '$15k – $30k',
    '$30k – $60k',
    '$60k – $120k',
    '$120k+',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in your name, email, and project vision.');
      return;
    }

    setIsSubmitting(true);
    // Simulate high-tech submission process
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-28 bg-cyber-bg overflow-hidden border-t border-white/[0.08]">
      
      {/* Dynamic ambient gradient spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/15 to-purple-600/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive Call to Action Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            INITIATE PROJECT SCOPE
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Have an Idea? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 drop-shadow-[0_0_35px_rgba(6,182,212,0.3)]">
              Let's Build It.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Tell us what you're building. We'll analyze your specifications, architect a solution, and help turn the idea into a scalable digital product.
          </p>
        </div>

        {/* Dual Form & Consultation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Founder / Advisory Schedule */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="p-7 rounded-2xl bg-slate-900/60 border border-cyan-500/30 backdrop-blur-xl">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 mb-5">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Book an Architectural Session
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Prefer an immediate conversation? Schedule a 30-minute deep-dive call directly with our principal software & AI architects.
              </p>

              <div className="space-y-3 mb-6 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>NDA & IP protection guaranteed from Day 0</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Commercial viability & tech stack review</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Accurate cost & timeline estimate delivered in 48h</span>
                </div>
              </div>

              <a
                href="mailto:contact@spiderlap.com?subject=Project%20Discovery%20Call%20Request"
                className="w-full py-3.5 px-5 rounded-xl font-semibold text-xs text-white bg-slate-800 hover:bg-slate-700 border border-white/10 hover:border-cyan-400/50 flex items-center justify-center gap-2 transition-all group"
              >
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Talk to SpiderLap Architects</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* SLA Commitments */}
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-xs font-bold text-white">4-Hour Response Time</div>
                  <div className="text-[11px] text-slate-400">Direct reply from an active engineering partner</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <div>
                  <div className="text-xs font-bold text-white">Strict Confidentiality</div>
                  <div className="text-[11px] text-slate-400">Mutual non-disclosure agreements executed upon request</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-7 sm:p-9 bg-slate-900/80 border border-white/10 backdrop-blur-2xl shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-6 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Project Brief Received!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                    Thank you, <span className="text-cyan-300 font-semibold">{formData.name}</span>. Our engineering architects are reviewing your specifications and will follow up within 4 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        projectType: 'AI Products',
                        budget: '$30k – $60k',
                        timeline: 'Within 2 Months',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white border border-white/10"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 font-semibold mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Elena Vance"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder:text-slate-600 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 font-semibold mb-2">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="elena@enterprise.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder:text-slate-600 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 font-semibold mb-2">
                      Company / Organization
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Vance Technologies / Stealth Startup"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder:text-slate-600 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type Selector Pills */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 font-semibold mb-2.5">
                      What are you building?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            formData.projectType === type
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                              : 'bg-slate-950/60 text-slate-400 border border-white/10 hover:text-slate-200 hover:border-white/20'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selector Pills */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 font-semibold mb-2.5">
                      Anticipated Budget (USD)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetRanges.map((range) => (
                        <button
                          type="button"
                          key={range}
                          onClick={() => setFormData({ ...formData, budget: range })}
                          className={`py-2 px-2 text-center rounded-lg text-xs font-mono transition-all ${
                            formData.budget === range
                              ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/50 shadow-[0_0_12px_rgba(99,102,241,0.3)]'
                              : 'bg-slate-950/60 text-slate-400 border border-white/10 hover:text-slate-200'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Vision / Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 font-semibold mb-2">
                      Tell Us About Your Vision & Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the product, target users, desired features, or technical challenges you want solved..."
                      className="w-full p-4 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder:text-slate-600 outline-none transition-all resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <div className="text-xs text-red-400 font-mono">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:shadow-[0_0_35px_rgba(6,182,212,0.4)] disabled:opacity-50 transition-all flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Scope to Architects...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <div className="text-center text-[11px] text-slate-500">
                    By submitting, you agree to our confidential project review terms. Zero spam, ever.
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

