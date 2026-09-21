import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  ExternalLink, 
  ShieldCheck,
  Cpu,
  Bot,
  Activity
} from 'lucide-react';

interface CaseStudy {
  id: string;
  client: string;
  category: string;
  title: string;
  tagline: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: { metric: string; label: string }[];
  accentColor: string;
  mockupVisual: {
    title: string;
    stats: string;
    subtext: string;
    badge: string;
  };
}

export const CaseStudies: React.FC = () => {
  const [activeStudyModal, setActiveStudyModal] = useState<CaseStudy | null>(null);

  const studies: CaseStudy[] = [
    {
      id: 'synthflow',
      client: 'SynthFlow AI Inc.',
      category: 'Autonomous AI Platform',
      title: 'Real-Time Voice AI & Customer Intelligence Swarm',
      tagline: 'Reduced average customer response latency from 4 hours to 850 milliseconds.',
      challenge: 'The client faced 70,000 monthly enterprise support tickets with high churn and poor visibility into multi-lingual customer intent across phone and web.',
      solution: 'SpiderLap architected a distributed multi-agent swarm with bidirectional WebSocket audio streaming, sub-second vector RAG retrieval, and deterministic escalation safety rules.',
      technologies: ['Gemini 2.0 Flash', 'Python', 'FastAPI', 'Qdrant', 'WebSockets', 'AWS'],
      results: [
        { metric: '850ms', label: 'Voice Response Latency' },
        { metric: '74%', label: 'Autonomous Resolution' },
        { metric: '$1.4M', label: 'Annual Labor Saved' },
      ],
      accentColor: 'from-cyan-500/20 via-sky-500/10 to-transparent',
      mockupVisual: {
        title: 'SynthFlow Voice Agent v2.4',
        stats: '14,820 Active Concurrent Calls',
        subtext: 'P99 Latency: 780ms · Zero Drop Rate',
        badge: 'AI Swarm Live'
      }
    },
    {
      id: 'hyperscale',
      client: 'HyperScale FinTech',
      category: 'Enterprise SaaS & Billing',
      title: 'Global Multi-Tenant Billing & Entitlement Gateway',
      tagline: 'Orchestrating $40M+ in cross-border recurring SaaS subscriptions with zero transaction drop.',
      challenge: 'HyperScale needed to migrate 1,800 enterprise tenants away from a fragile legacy billing monolith to support complex usage meters, tiered seats, and global taxes.',
      solution: 'We engineered a high-throughput, multi-tenant subscription engine with row-level tenant data isolation, Stripe webhook fault-tolerance, and real-time revenue analytics.',
      technologies: ['React 19', 'Next.js', 'PostgreSQL RLS', 'Redis', 'Stripe API', 'Docker'],
      results: [
        { metric: '$40M+', label: 'Volume Processed' },
        { metric: '99.999%', label: 'Billing Gateway Uptime' },
        { metric: '0%', label: 'Data Cross-Contamination' },
      ],
      accentColor: 'from-indigo-500/20 via-purple-500/10 to-transparent',
      mockupVisual: {
        title: 'HyperScale Billing Engine',
        stats: '$3.42M MRR Verified',
        subtext: '1,840 Isolated Tenant DBs Synchronized',
        badge: 'FinTech Secure'
      }
    },
    {
      id: 'omnicare',
      client: 'OmniCare Health',
      category: 'Mobile & HealthTech',
      title: 'HIPAA-Compliant Patient Telemetry & Diagnostic App',
      tagline: 'Connecting 120,000 patients directly to remote diagnostic doctors with edge biometric encryption.',
      challenge: 'Severe patient dropout and strict HIPAA regulations prevented seamless remote cardiac and blood glucose monitoring across disparate wearable hardware.',
      solution: 'Engineered a unified native iOS/Android application with offline-first synchronization, automated ECG anomaly detection, and end-to-end encrypted doctor tele-visits.',
      technologies: ['React Native', 'TypeScript', 'Node.js', 'WebRTC', 'AWS HIPAA Cloud'],
      results: [
        { metric: '120k+', label: 'Active Monitored Patients' },
        { metric: '4.9★', label: 'App Store Rating' },
        { metric: '100%', label: 'HIPAA & SOC2 Audit Pass' },
      ],
      accentColor: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      mockupVisual: {
        title: 'OmniCare Telemetry Hub',
        stats: '2.4M Vitals Synced Daily',
        subtext: 'Real-time Cardiac Anomaly Detection',
        badge: 'HIPAA Verified'
      }
    },
    {
      id: 'vaultlogistics',
      client: 'Vault Logistics Global',
      category: 'Custom Enterprise Software',
      title: 'Autonomous Real-Time Fleet Routing & Telematics Engine',
      tagline: 'Optimizing 4,200 commercial freight vehicles across North America in real-time.',
      challenge: 'Rising diesel fuel prices and driver route inefficiencies caused $8M in annual dispatch waste with zero predictive maintenance foresight.',
      solution: 'Built a distributed spatial graph optimization engine that ingests IoT GPS telematics, calculates dynamic weather-adjusted freight routes, and automates driver load matching.',
      technologies: ['Go', 'Kafka', 'PostGIS', 'Kubernetes', 'FastAPI', 'Mapbox GL'],
      results: [
        { metric: '-22%', label: 'Fuel Consumption Cut' },
        { metric: '4,200', label: 'Live Trucks Routed' },
        { metric: '14.8M', label: 'Annual Cost Savings' },
      ],
      accentColor: 'from-amber-500/20 via-orange-500/10 to-transparent',
      mockupVisual: {
        title: 'Vault Dynamic Dispatch Engine',
        stats: 'Sub-second Route Recalculation',
        subtext: '4,200 Trucks Online · GPS Ping: 500ms',
        badge: 'Enterprise Engine'
      }
    },
  ];

  return (
    <section id="work" className="relative py-28 bg-slate-950 overflow-hidden border-t border-white/[0.05]">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-600/10 blur-[170px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            MEASURABLE IMPACT
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ideas We've Turned Into Technology.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Real enterprise transformations. We engineer products that generate eight-figure enterprise value, eliminate technical friction, and outpace market competitors.
          </p>
        </div>

        {/* 4 Large Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {studies.map((study) => (
            <div
              key={study.id}
              className="group relative rounded-2xl p-7 sm:p-8 bg-slate-900/50 border border-white/[0.08] hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
            >
              {/* Dynamic Aura */}
              <div
                className={`absolute -inset-1 bg-gradient-to-br ${study.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none`}
              />

              <div className="relative z-10">
                
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider">
                      {study.client}
                    </span>
                    <span className="text-slate-600 mx-2">•</span>
                    <span className="text-xs text-slate-400 font-medium">
                      {study.category}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 text-[10px] font-mono rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {study.mockupVisual.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors leading-snug">
                  {study.title}
                </h3>
                <p className="text-sm font-medium text-slate-300 mb-6 leading-relaxed">
                  {study.tagline}
                </p>

                {/* Interactive Simulated Product UI Preview Card */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 mb-6 font-mono text-xs">
                  <div className="flex justify-between items-center pb-2 mb-2 border-b border-white/5 text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <Activity className="w-3.5 h-3.5" />
                      {study.mockupVisual.title}
                    </span>
                    <span className="text-emerald-400 text-[10px]">PRODUCTION LIVE</span>
                  </div>
                  <div className="text-base font-bold text-white mb-1">
                    {study.mockupVisual.stats}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {study.mockupVisual.subtext}
                  </div>
                </div>

                {/* Challenge & Solution Summary */}
                <div className="space-y-3 mb-6 text-xs text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-950/50 border border-white/5">
                    <span className="text-slate-500 font-mono font-bold uppercase block mb-1">CHALLENGE:</span>
                    <p className="leading-relaxed">{study.challenge}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/50 border border-cyan-500/20">
                    <span className="text-cyan-400 font-mono font-bold uppercase block mb-1">SOLUTION:</span>
                    <p className="leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Results Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {study.results.map((r, rIdx) => (
                    <div key={rIdx} className="p-3 rounded-xl bg-slate-800/60 border border-white/5 text-center">
                      <div className="text-base sm:text-lg font-bold font-mono text-cyan-300">{r.metric}</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">{r.label}</div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom Tech Pills & Deep-Dive Link */}
              <div className="relative z-10 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {study.technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-slate-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveStudyModal(study)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Full Architecture Modal */}
      {activeStudyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-2xl bg-slate-950 border border-cyan-500/40 p-7 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold">{activeStudyModal.client}</span>
                <h3 className="text-xl font-bold text-white mt-0.5">{activeStudyModal.title}</h3>
              </div>
              <button
                onClick={() => setActiveStudyModal(null)}
                className="p-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-300 leading-relaxed mb-6">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                <h5 className="text-white font-bold font-mono mb-1">THE CLIENT'S SITUATION</h5>
                <p>{activeStudyModal.challenge}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-cyan-500/20">
                <h5 className="text-cyan-300 font-bold font-mono mb-1">THE SPIDERLAP ARCHITECTURE</h5>
                <p>{activeStudyModal.solution}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-emerald-500/20">
                <h5 className="text-emerald-400 font-bold font-mono mb-2">VERIFIED COMMERCIAL RESULTS</h5>
                <div className="grid grid-cols-3 gap-2">
                  {activeStudyModal.results.map((r, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-slate-950 text-center">
                      <div className="text-sm font-bold font-mono text-white">{r.metric}</div>
                      <div className="text-[10px] text-slate-400">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setActiveStudyModal(null)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-white/10"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setActiveStudyModal(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 shadow-md"
              >
                Build Similar Architecture
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

