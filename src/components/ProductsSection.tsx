import React, { useState } from 'react';
import { 
  Bot, 
  Workflow, 
  TrendingUp, 
  Database, 
  ArrowUpRight, 
  Sparkles, 
  Check, 
  Activity,
  Network,
  Radio,
  Server,
  Zap,
  ShieldCheck
} from 'lucide-react';

interface ProductItem {
  id: string;
  name: string;
  category: string;
  status: 'Live' | 'Private Beta' | 'Early Access';
  version: string;
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  gradient: string;
  icon: React.ElementType;
}

export const ProductsSection: React.FC = () => {
  const [activeProductModal, setActiveProductModal] = useState<ProductItem | null>(null);

  const products: ProductItem[] = [
    {
      id: 'cognita',
      name: 'SpiderLap Cognita',
      category: 'Autonomous AI Orchestration',
      status: 'Live',
      version: 'v2.4 LTS',
      tagline: 'Multi-Agent Enterprise Intelligence Engine',
      description: 'An enterprise agent orchestrator that coordinates specialized LLM swarms, manages shared state across long-running tasks, and executes tool calls with formal verification and deterministic guardrails.',
      highlights: [
        'Multi-agent hierarchical goal delegation',
        'Built-in deterministic vector memory & context pruning',
        'Automated code synthesis and sandboxed execution',
        'Enterprise RBAC with granular token consumption limits'
      ],
      techStack: ['Python', 'FastAPI', 'Gemini 2.0', 'Qdrant', 'Redis', 'Docker'],
      metrics: [
        { label: 'Agents Orchestrated', value: '1.2M+' },
        { label: 'Avg Latency', value: '18ms' },
        { label: 'Tool Precision', value: '99.98%' }
      ],
      gradient: 'from-cyan-500/20 via-sky-500/10 to-transparent',
      icon: Bot,
    },
    {
      id: 'flowforge',
      name: 'SpiderLap FlowForge',
      category: 'Event-Driven Automation',
      status: 'Private Beta',
      version: 'v1.2 Beta',
      tagline: 'Self-Healing Enterprise Workflow Pipeline',
      description: 'High-throughput event ingestion and automation platform. Seamlessly connect webhooks, internal enterprise ERPs, databases, and generative models with zero code bottlenecks and automatic dead-letter recovery.',
      highlights: [
        'Distributed event broker processing 50k events/sec',
        'Visual DAG builder with real-time state introspection',
        'Automatic retry policies and AI-powered error diagnostics',
        'End-to-end auditability and SOC2 compliance tracing'
      ],
      techStack: ['Go', 'Kafka', 'Temporal', 'PostgreSQL', 'React', 'Tailwind'],
      metrics: [
        { label: 'Events / Second', value: '50,000+' },
        { label: 'Zero-Drop Rate', value: '100%' },
        { label: 'Integrations', value: '80+' }
      ],
      gradient: 'from-indigo-500/20 via-purple-500/10 to-transparent',
      icon: Workflow,
    },
    {
      id: 'pulsemetrics',
      name: 'SpiderLap PulseMetrics',
      category: 'Predictive SaaS Telemetry',
      status: 'Live',
      version: 'v3.0 Live',
      tagline: 'AI Revenue & Churn Intelligence Platform',
      description: 'Predictive analytics engine that monitors product engagement patterns, flags churn risk 45 days in advance, and triggers proactive customer retention workflows automatically.',
      highlights: [
        'Machine learning cohort & churn risk scoring',
        'Automated seat expansion and upsell notifications',
        'Embedded customer health dashboards for CS teams',
        'Native bi-directional sync with Stripe, HubSpot, and Slack'
      ],
      techStack: ['TypeScript', 'ClickHouse', 'Python ML', 'Next.js', 'Stripe API'],
      metrics: [
        { label: 'Churn Prevented', value: '-38%' },
        { label: 'Revenue Monitored', value: '$84M' },
        { label: 'Model Confidence', value: '94.2%' }
      ],
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      icon: TrendingUp,
    },
    {
      id: 'nexusbase',
      name: 'SpiderLap NexusBase',
      category: 'Cloud Data & Edge Gateways',
      status: 'Early Access',
      version: 'v0.9 Preview',
      tagline: 'Multi-Tenant Edge Infrastructure Plane',
      description: 'Turnkey edge gateway that delivers instant global caching, tenant-isolated data partitioning, rate-limiting, and cryptographic request verification with zero cold-start overhead.',
      highlights: [
        'Global edge routing with sub-5ms TTFB anywhere',
        'Cryptographic request isolation per tenant domain',
        'Automatic schema migrations with zero lock time',
        'Integrated edge vector search acceleration'
      ],
      techStack: ['Rust', 'Cloudflare Workers', 'PostgreSQL', 'Wasm', 'Redis'],
      metrics: [
        { label: 'Edge Locations', value: '300+' },
        { label: 'Global TTFB', value: '< 6ms' },
        { label: 'Uptime SLA', value: '99.999%' }
      ],
      gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
      icon: Database,
    },
  ];

  // Render Product Mockup per ID
  const renderProductMockup = (productId: string) => {
    switch (productId) {
      case 'cognita':
        return (
          <div className="my-4 p-3 rounded-xl bg-slate-950/90 border border-cyan-500/30 font-mono text-[10px] group-hover:scale-[1.01] transition-transform duration-300">
            <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/10 text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                <Bot className="w-3.5 h-3.5" />
                Cognita Swarm Mesh
              </span>
              <span className="text-emerald-400">● 100% Deterministic</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 text-center mb-2">
              <div className="p-1.5 rounded bg-slate-900 border border-cyan-500/20">
                <span className="text-cyan-300 font-semibold block">Supervisor</span>
                <span className="text-[9px] text-slate-400">Task Routing</span>
              </div>
              <div className="p-1.5 rounded bg-slate-900 border border-indigo-500/20">
                <span className="text-indigo-300 font-semibold block">RAG Agent</span>
                <span className="text-[9px] text-slate-400">Semantic Recall</span>
              </div>
              <div className="p-1.5 rounded bg-slate-900 border border-purple-500/20">
                <span className="text-purple-300 font-semibold block">Code Exec</span>
                <span className="text-[9px] text-slate-400">Sandboxed Python</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1 border-t border-white/5">
              <span>Token Throughput: 142k/sec</span>
              <span className="text-cyan-300">Guardrails Active</span>
            </div>
          </div>
        );

      case 'flowforge':
        return (
          <div className="my-4 p-3 rounded-xl bg-slate-950/90 border border-indigo-500/30 font-mono text-[10px] group-hover:scale-[1.01] transition-transform duration-300">
            <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/10 text-slate-400">
              <span className="flex items-center gap-1.5 text-indigo-400 font-bold">
                <Workflow className="w-3.5 h-3.5" />
                FlowForge Visual DAG
              </span>
              <span className="text-indigo-300">50,000 evt/s</span>
            </div>
            <div className="flex items-center justify-between gap-1 text-[9px] text-center mb-2">
              <div className="p-1.5 rounded bg-slate-900 border border-white/5 flex-1">
                Webhook
              </div>
              <span className="text-indigo-400 font-bold">→</span>
              <div className="p-1.5 rounded bg-indigo-950/60 border border-indigo-500/30 text-indigo-200 flex-1 font-bold">
                Kafka Queue
              </div>
              <span className="text-indigo-400 font-bold">→</span>
              <div className="p-1.5 rounded bg-slate-900 border border-white/5 flex-1">
                Temporal Worker
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1 border-t border-white/5">
              <span>Dead-Letter Recovery: Auto</span>
              <span className="text-emerald-400">Zero Loss SLA</span>
            </div>
          </div>
        );

      case 'pulsemetrics':
        return (
          <div className="my-4 p-3 rounded-xl bg-slate-950/90 border border-emerald-500/30 font-mono text-[10px] group-hover:scale-[1.01] transition-transform duration-300">
            <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/10 text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <TrendingUp className="w-3.5 h-3.5" />
                PulseMetrics Telemetry
              </span>
              <span className="text-emerald-300">-38% Churn Risk</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div className="p-1.5 rounded bg-slate-900 border border-white/5">
                <span className="text-slate-400 block text-[9px]">Predicted Expansion</span>
                <span className="text-white font-bold">$420k NRR</span>
              </div>
              <div className="p-1.5 rounded bg-slate-900 border border-white/5">
                <span className="text-slate-400 block text-[9px]">Model Precision</span>
                <span className="text-emerald-400 font-bold">94.2% Conf</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1 border-t border-white/5">
              <span>Syncing with Stripe & HubSpot</span>
              <span className="text-cyan-300">Live Pings</span>
            </div>
          </div>
        );

      case 'nexusbase':
        return (
          <div className="my-4 p-3 rounded-xl bg-slate-950/90 border border-purple-500/30 font-mono text-[10px] group-hover:scale-[1.01] transition-transform duration-300">
            <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/10 text-slate-400">
              <span className="flex items-center gap-1.5 text-purple-400 font-bold">
                <Database className="w-3.5 h-3.5" />
                NexusBase Global Edge Plane
              </span>
              <span className="text-purple-300">&lt;6ms TTFB</span>
            </div>
            <div className="grid grid-cols-3 gap-1 text-center mb-2 text-[9px]">
              <div className="p-1 rounded bg-slate-900 border border-purple-500/20">
                <span className="text-purple-300 font-bold block">US-East</span>
                <span className="text-[8px] text-slate-400">3.2ms</span>
              </div>
              <div className="p-1 rounded bg-slate-900 border border-purple-500/20">
                <span className="text-purple-300 font-bold block">EU-Central</span>
                <span className="text-[8px] text-slate-400">4.8ms</span>
              </div>
              <div className="p-1 rounded bg-slate-900 border border-purple-500/20">
                <span className="text-purple-300 font-bold block">AP-East</span>
                <span className="text-[8px] text-slate-400">5.9ms</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1 border-t border-white/5">
              <span>Tenant Partitioning: Cryptographic</span>
              <span className="text-emerald-400">Zero Locks</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="products" className="relative py-28 bg-slate-950/80 overflow-hidden border-t border-white/[0.05]">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-cyan-600/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            PROPRIETARY PLATFORMS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Products We're Building.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            In addition to custom client engineering, SpiderLap invests heavily in internal R&D—building specialized platforms that accelerate development velocity for all our partners.
          </p>
        </div>

        {/* 4 Large Product Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <div
                key={product.id}
                className="group relative rounded-2xl p-7 sm:p-8 bg-slate-900/40 border border-white/[0.08] hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* Background glow on hover */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none`}
                />

                <div className="relative z-10">
                  
                  {/* Top Bar: Category, Status Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider block">
                          {product.category}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                          {product.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-1 text-[11px] font-mono font-semibold rounded-full border ${
                        product.status === 'Live'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : product.status === 'Private Beta'
                          ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                          : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
                      }`}>
                        {product.status}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 hidden sm:inline-block">
                        {product.version}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 font-normal leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* High-Fidelity Product UI Mockup */}
                  {renderProductMockup(product.id)}

                  {/* Highlights */}
                  <div className="space-y-2 mb-6 p-4 rounded-xl bg-slate-950/60 border border-white/5">
                    {product.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Live Benchmark Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {product.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-3 rounded-lg bg-slate-800/40 border border-white/5 text-center">
                        <div className="text-xs sm:text-sm font-bold font-mono text-cyan-300">{m.value}</div>
                        <div className="text-[10px] text-slate-400 font-mono mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom Bar: Tech Stack & Preview Trigger */}
                <div className="relative z-10 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {product.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveProductModal(product)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-200 transition-colors group/btn"
                  >
                    <span>Product Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Product Detailed Specs Modal */}
      {activeProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-2xl bg-slate-950 border border-cyan-500/40 p-7 shadow-2xl overflow-hidden">
            
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center border border-cyan-500/30">
                  <activeProductModal.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{activeProductModal.name}</h3>
                  <span className="text-xs font-mono text-cyan-400">{activeProductModal.version} · {activeProductModal.status}</span>
                </div>
              </div>

              <button
                onClick={() => setActiveProductModal(null)}
                className="p-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {activeProductModal.description}
            </p>

            <div className="mb-6">
              <h5 className="text-xs font-mono text-cyan-400 uppercase font-semibold mb-3">Enterprise Architectural Features:</h5>
              <div className="space-y-2">
                {activeProductModal.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
                    <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-indigo-950/30 border border-cyan-500/20 mb-6">
              <div className="text-xs text-slate-300 leading-relaxed">
                SpiderLap clients receive full licensed access or custom dedicated instance deployment of our internal tooling suites.
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setActiveProductModal(null)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-white/10"
              >
                Close Window
              </button>
              <a
                href="#contact"
                onClick={() => setActiveProductModal(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
              >
                Request Enterprise Sandbox Access
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
