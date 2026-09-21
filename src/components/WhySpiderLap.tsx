import React from 'react';
import { 
  Lightbulb, 
  Bot, 
  Layers, 
  Cpu, 
  TrendingUp, 
  Users2, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';

export const WhySpiderLap: React.FC = () => {
  const pillars = [
    {
      icon: Lightbulb,
      title: 'Product Thinking',
      tagline: 'Strategy Before Syntax',
      description: "We don't just write code blindly from a brief. We analyze unit economics, user retention loops, competitive moats, and product-market fit to ensure what we build succeeds commercially.",
      metric: '3.4x Faster Time-to-Market',
      gradient: 'from-cyan-500/20 to-transparent'
    },
    {
      icon: Bot,
      title: 'AI First Architecture',
      tagline: 'Native Intelligence at the Core',
      description: 'We don’t treat AI as a gimmicky afterthought or cosmetic plugin. We design autonomous agent swarms, vector retrieval, and automated reasoning directly into the core application layer.',
      metric: 'Sub-25ms Agent Execution',
      gradient: 'from-indigo-500/20 to-transparent'
    },
    {
      icon: Layers,
      title: 'Scalable Architecture',
      tagline: 'Engineered for Millions of Users',
      description: 'Built today with tomorrow’s exponential growth in mind. We implement multi-tenant isolated databases, edge caching, and auto-scaling container clusters that eliminate costly rewrites.',
      metric: '99.995% Uptime Architecture',
      gradient: 'from-purple-500/20 to-transparent'
    },
    {
      icon: Cpu,
      title: 'Modern Engineering',
      tagline: 'Zero Legacy Technical Debt',
      description: 'We adhere to the 2026 engineering frontier: strict TypeScript, automated test gates, immutable infrastructure as code, deterministic API contracts, and continuous delivery pipelines.',
      metric: '100% Test & Security Coverage',
      gradient: 'from-emerald-500/20 to-transparent'
    },
    {
      icon: TrendingUp,
      title: 'Business Focused',
      tagline: 'Obsession with Measurable ROI',
      description: 'Technology is an investment vehicle, not an expense. Every technical choice—from database sharding to micro-interactions—is evaluated against its impact on conversion, churn, and revenue.',
      metric: '$120M+ Value Generated',
      gradient: 'from-amber-500/20 to-transparent'
    },
    {
      icon: Users2,
      title: 'Long-Term Partnership',
      tagline: 'Beyond Day-1 Launch',
      description: 'We don’t abandon you after production launch. We provide ongoing telemetry monitoring, performance optimizations, feature sprint execution, and technical co-founder level advisory.',
      metric: '94% Client Retention Rate',
      gradient: 'from-blue-500/20 to-transparent'
    },
  ];

  return (
    <section id="why-us" className="relative py-28 bg-cyber-bg overflow-hidden border-t border-white/[0.05]">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            THE SPIDERLAP ADVANTAGE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why SpiderLap?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            We are not a traditional IT outsource shop or a generic web agency. We are an elite technology and product engineering company that builds unfair technical advantages for ambitious founders and enterprises.
          </p>
        </div>

        {/* 6 Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;

            return (
              <div
                key={idx}
                className="group relative rounded-2xl p-7 bg-slate-900/40 border border-white/[0.08] hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-[0_15px_40px_-10px_rgba(6,182,212,0.2)]"
              >
                {/* Glow aura */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                      {pillar.metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-200 transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 mb-3">{pillar.tagline}</div>

                  <p className="text-sm text-slate-300 font-normal leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-cyan-300 transition-colors">
                  <span>Guaranteed Deliverable</span>
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

