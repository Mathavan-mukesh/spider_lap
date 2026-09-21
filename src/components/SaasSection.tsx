import React, { useState } from 'react';
import { 
  Users, 
  ShieldCheck, 
  CreditCard, 
  Activity, 
  Bell, 
  Key, 
  Server, 
  TrendingUp, 
  Cpu, 
  Layers, 
  Sparkles,
  Zap,
  CheckCircle2,
  Bot
} from 'lucide-react';

export const SaasSection: React.FC = () => {
  const [selectedMetricPeriod, setSelectedMetricPeriod] = useState<'30d' | '90d' | '1y'>('30d');

  const lifecycleStages = [
    { number: '01', title: 'Idea & Validation', desc: 'Market analysis & pricing architecture' },
    { number: '02', title: 'Product Design', desc: 'Design system, Figma tokens, UX flows' },
    { number: '03', title: 'Core Engineering', desc: 'Multi-tenant DB, API gateway, frontend' },
    { number: '04', title: 'AI Integration', desc: 'Copilots, semantic search, automation' },
    { number: '05', title: 'Security & Tests', desc: 'SOC2 readiness, penetration & load tests' },
    { number: '06', title: 'Cloud Deploy', desc: 'Kubernetes, multi-region CDN, auto-scaling' },
    { number: '07', title: 'Scale & Retain', desc: 'Analytics telemetry, churn reduction' },
  ];

  const saasCapabilities = [
    { title: 'Multi-Tenancy', desc: 'Isolated tenant schemas and row-level security for zero data crossover.', icon: Users },
    { title: 'Auth & RBAC', desc: 'OAuth 2.1, SSO/SAML, passkeys, and granular role hierarchies.', icon: Key },
    { title: 'Admin Dashboards', desc: 'Real-time telemetry, user management, impersonation, and audit trails.', icon: Activity },
    { title: 'Subscription & Billing', desc: 'Tiered pricing, seat management, usage billing via Stripe & Paddle.', icon: CreditCard },
    { title: 'Analytics Engine', desc: 'Cohort retention, churn prediction, ARR forecasting, and usage metrics.', icon: TrendingUp },
    { title: 'Event Notifications', desc: 'Multi-channel dispatches across In-app, Email, Slack, and Webhooks.', icon: Bell },
    { title: 'High-Perf APIs', desc: 'Sub-15ms rate-limited REST, GraphQL, and gRPC endpoints.', icon: Cpu },
    { title: 'Cloud Auto-Scale', desc: 'Dynamic horizontal pod scaling based on real-time traffic spikes.', icon: Server },
  ];

  // Simulated metrics based on period
  const metricsData = {
    '30d': { mrr: '$164,280', arr: '$1.97M', growth: '+28.4%', activeTenants: 1420, churn: '0.8%', requests: '42.8M' },
    '90d': { mrr: '$142,100', arr: '$1.70M', growth: '+24.1%', activeTenants: 1210, churn: '0.9%', requests: '118M' },
    '1y': { mrr: '$98,400', arr: '$1.18M', growth: '+31.2%', activeTenants: 890, churn: '1.1%', requests: '450M' },
  };

  const currentStats = metricsData[selectedMetricPeriod];

  return (
    <section id="saas" className="relative py-28 bg-cyber-bg overflow-hidden border-t border-white/[0.05]">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            ENTERPRISE SAAS PLAYBOOK
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            From Idea to Scalable SaaS.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            We engineer complete SaaS businesses with enterprise foundations. From day one, your platform is primed for multi-tenancy, high-volume recurring revenue, and global scale.
          </p>
        </div>

        {/* Animated Horizontal Lifecycle Timeline */}
        <div className="mb-20">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-6 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>SpiderLap SaaS Engineering Pipeline</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 relative">
            {lifecycleStages.map((stage, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-cyan-400 font-bold">{stage.number}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 group-hover:bg-cyan-300 transition-colors" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-1 group-hover:text-cyan-200 transition-colors">
                    {stage.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    {stage.desc}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-white/5 flex items-center text-[10px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                  <span>Phase Gate ✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive SaaS Mockup & Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          
          {/* Left: Interactive SaaS Dashboard Mockup with Floating Toasts */}
          <div className="lg:col-span-7 relative">
            
            {/* Floating Live Notification Toast: Top Left */}
            <div className="absolute -top-4 -left-4 z-20 hidden sm:flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-900/95 border border-emerald-500/40 shadow-xl backdrop-blur-xl animate-float">
              <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <div className="text-[11px]">
                <div className="text-emerald-300 font-bold font-mono">Plan Upgrade</div>
                <div className="text-slate-300">Acme Global: +$36k/yr</div>
              </div>
            </div>

            {/* Floating Live Notification Toast: Bottom Right */}
            <div className="absolute -bottom-4 -right-4 z-20 hidden sm:flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-900/95 border border-cyan-500/40 shadow-xl backdrop-blur-xl animate-float-slow">
              <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <div className="text-[11px]">
                <div className="text-cyan-300 font-bold font-mono">AI Churn Defense</div>
                <div className="text-slate-300">Cohort retention: 99.2%</div>
              </div>
            </div>

            {/* Dashboard Container */}
            <div className="rounded-2xl bg-slate-950 border border-cyan-500/30 p-6 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.2)] relative z-10">
              
              {/* Dashboard Top Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-white/10">
                <div>
                  <div className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">
                    ENTERPRISE CONTROL PLANE
                  </div>
                  <h3 className="text-xl font-bold text-white">SaaS Revenue & Tenant Intelligence</h3>
                </div>

                {/* Period Selector Tabs */}
                <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-white/10">
                  {(['30d', '90d', '1y'] as const).map((period) => (
                    <button
                      key={period}
                      onClick={() => setSelectedMetricPeriod(period)}
                      className={`px-3 py-1 rounded-md text-xs font-mono font-medium transition-all ${
                        selectedMetricPeriod === period
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {period.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Monthly Recurring (MRR)</span>
                  <div className="text-xl font-bold font-mono text-white mt-0.5">{currentStats.mrr}</div>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">{currentStats.growth} MoM</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Annual Run-Rate</span>
                  <div className="text-xl font-bold font-mono text-cyan-300 mt-0.5">{currentStats.arr}</div>
                  <span className="text-[10px] font-mono text-slate-400">{currentStats.activeTenants} Organizations</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Net Churn SLA</span>
                  <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5">{currentStats.churn}</div>
                  <span className="text-[10px] font-mono text-slate-400">{currentStats.requests} API Invocations</span>
                </div>
              </div>

              {/* Interactive Telemetry Chart Visualization */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 mb-4">
                <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-3">
                  <span>Throughput & Cohort Retention Index</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE TELEMETRY
                  </span>
                </div>
                
                {/* Simulated Bar Visual */}
                <div className="flex items-end gap-2 h-24 pt-4">
                  {[45, 52, 60, 58, 65, 72, 80, 85, 92, 98, 94, 100].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                      <div
                        style={{ height: `${h}%` }}
                        className="w-full bg-gradient-to-t from-indigo-600 via-cyan-500 to-cyan-300 rounded-t-sm group-hover:brightness-125 transition-all"
                      />
                      <span className="text-[9px] font-mono text-slate-500">M{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Tenant Status Rows */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase flex justify-between">
                  <span>Recent Multi-Tenant Events</span>
                  <span>Isolation Protocol: SHA-256</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-semibold text-white">Acme Global Enterprise</span>
                    <span className="text-slate-400 text-[11px]">• Upgrade to Unlimited Plan</span>
                  </div>
                  <span className="font-mono text-cyan-400 font-semibold">+$24,000/yr</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="font-semibold text-white">Nexus Health Data Corp</span>
                    <span className="text-slate-400 text-[11px]">• Automated HIPAA Audit Passed</span>
                  </div>
                  <span className="font-mono text-slate-400 text-[11px]">100% Score</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right: SaaS Architecture Details */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                SCALABILITY FOUNDATION
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Built to Support Millions in ARR Without Re-Architecture
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Most agencies build prototype SaaS apps that break at 10,000 concurrent users. SpiderLap designs architectures that handle global multi-region traffic, complex entitlement billing, and strict data governance from day zero.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-bold text-white">Zero Data Crossover Guarantee</h5>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Row-Level Security (RLS) and schema-per-tenant isolation prevent accidental data leakage across enterprise clients.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-bold text-white">Turnkey Monetization Engine</h5>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Native support for seat-based pricing, metered consumption, prorated plan swaps, and tax compliance across 130+ currencies.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 flex items-start gap-3">
                <Server className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-bold text-white">Self-Healing Infrastructure</h5>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Automated blue/green deployments, canary testing, and Redis connection pool balancing ensure zero-downtime upgrades.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 8 SaaS Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {saasCapabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/40 border border-white/5 hover:border-cyan-500/30 transition-all hover:bg-slate-900/70"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{cap.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{cap.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
