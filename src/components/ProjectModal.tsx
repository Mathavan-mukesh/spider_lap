import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Send, 
  Bot, 
  Cloud, 
  Globe, 
  Smartphone, 
  Workflow, 
  Cpu, 
  Clock, 
  Check,
  ShieldCheck
} from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [selectedProduct, setSelectedProduct] = useState<string>('ai');
  const [timeline, setTimeline] = useState<string>('6-8w');
  const [budgetRange, setBudgetRange] = useState<string>('30k-60k');
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    company: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const productOptions = [
    { id: 'ai', title: 'AI Products & Agents', icon: Bot, desc: 'Autonomous swarms, RAG, custom models' },
    { id: 'saas', title: 'SaaS Platforms', icon: Cloud, desc: 'Multi-tenancy, Stripe billing, RBAC' },
    { id: 'web', title: 'Web Applications', icon: Globe, desc: '60fps UI, edge SSR, enterprise state' },
    { id: 'mobile', title: 'Mobile Applications', icon: Smartphone, desc: 'iOS & Android native performance' },
    { id: 'automation', title: 'Business Automation', icon: Workflow, desc: 'Event-driven queues & webhook integration' },
    { id: 'custom', title: 'Custom Enterprise', icon: Cpu, desc: 'Bespoke distributed architecture' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleReset = () => {
    setStep(1);
    setIsSuccess(false);
    setClientInfo({ name: '', email: '', company: '', notes: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-2xl bg-slate-950 border border-cyan-500/40 p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.8)] overflow-hidden max-h-[92vh] overflow-y-auto">
        
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">SpiderLap Project Estimator</h3>
              <p className="text-[11px] font-mono text-cyan-400">Step {step} of 2 · Architecture Scope</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-5">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">Scope Blueprint In Review</h4>
            <p className="text-sm text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
              We have generated your preliminary architectural blueprint. An executive engineering partner will contact you at <span className="text-cyan-300 font-mono font-medium">{clientInfo.email}</span> within 4 hours with a comprehensive roadmap.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <div>
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 font-semibold mb-3">
                    1. Select Core Architectural Focus
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {productOptions.map((opt) => {
                      const Icon = opt.icon;
                      const isSelected = selectedProduct === opt.id;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => setSelectedProduct(opt.id)}
                          className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                            isSelected
                              ? 'bg-cyan-500/15 border-cyan-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                              : 'bg-slate-900/50 border-white/5 text-slate-400 hover:bg-slate-900 hover:border-white/20'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            isSelected ? 'bg-cyan-500/30 text-cyan-300' : 'bg-slate-800 text-slate-400'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">{opt.title}</div>
                            <div className="text-[11px] text-slate-400 mt-0.5">{opt.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 font-semibold mb-3">
                    2. Target Production Timeline
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: '4w', label: 'Fast Track (4 Weeks)', desc: 'MVP / Core Prototype' },
                      { id: '6-8w', label: 'Standard (6–8 Weeks)', desc: 'Production SaaS / AI' },
                      { id: '12w+', label: 'Enterprise (12+ Weeks)', desc: 'Multi-service platform' },
                    ].map((t) => (
                      <button
                        type="button"
                        key={t.id}
                        onClick={() => setTimeline(t.id)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          timeline === t.id
                            ? 'bg-indigo-500/20 border-indigo-400 text-white'
                            : 'bg-slate-900/50 border-white/5 text-slate-400 hover:border-white/10'
                        }`}
                      >
                        <div className="text-xs font-bold text-white">{t.label}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{t.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center gap-2"
                  >
                    <span>Proceed to Contact & Estimate</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientInfo.name}
                      onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                      placeholder="Alex Mercer"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:border-cyan-400 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={clientInfo.email}
                      onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:border-cyan-400 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={clientInfo.company}
                    onChange={(e) => setClientInfo({ ...clientInfo, company: e.target.value })}
                    placeholder="Stealth / Series-A Startup / Enterprise"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:border-cyan-400 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Key Features or System Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={clientInfo.notes}
                    onChange={(e) => setClientInfo({ ...clientInfo, notes: e.target.value })}
                    placeholder="Briefly describe what integrations, AI models, or user volumes you anticipate..."
                    className="w-full p-3 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:border-cyan-400 outline-none resize-none"
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="text-slate-400">Target Estimate Tier:</span>
                  <span className="text-cyan-300 font-bold">$25,000 – $65,000 USD</span>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white"
                  >
                    ← Back to Scope
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Analyzing Architecture...</span>
                    ) : (
                      <>
                        <span>Submit Architecture Scope</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

