import React, { useState } from 'react';
import { 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  Radio, 
  Network
} from 'lucide-react';

interface TechItem {
  name: string;
  category: 'ai' | 'backend' | 'frontend' | 'cloud' | 'data';
  role: string;
  whyWeUseIt: string;
  level: 'Core Standard' | 'High Performance' | 'Enterprise';
  version: string;
}

export const TechnologySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ai' | 'backend' | 'frontend' | 'cloud' | 'data'>('all');
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null);

  const technologies: TechItem[] = [
    { name: 'Python 3.12+', category: 'ai', role: 'AI & Data Science Backbone', whyWeUseIt: 'Native support for neural network frameworks, async task loops, and mathematical vector processing.', level: 'Core Standard', version: 'v3.12+' },
    { name: 'FastAPI', category: 'backend', role: 'High-Throughput Async APIs', whyWeUseIt: 'Near-Go performance with Pydantic type safety and native OpenAPI generation for agent tool execution.', level: 'High Performance', version: 'v0.115+' },
    { name: 'React 19 & Vite', category: 'frontend', role: 'Client UI & Motion Systems', whyWeUseIt: 'Concurrent rendering, Server Actions, sub-second HMR, and ultra-fluid 60fps micro-animations.', level: 'Core Standard', version: 'v19.0' },
    { name: 'Next.js 15', category: 'frontend', role: 'Fullstack & Edge Rendering', whyWeUseIt: 'Edge runtime execution, server-side caching, dynamic OG generation, and top Core Web Vitals.', level: 'Core Standard', version: 'v15.1' },
    { name: 'Node.js & Bun', category: 'backend', role: 'Real-Time WebSockets & Microservices', whyWeUseIt: 'Ultra-fast event loops for collaborative live cursors, notifications, and real-time streaming.', level: 'High Performance', version: 'v22 LTS' },
    { name: 'PostgreSQL 16', category: 'data', role: 'Relational Core & pgvector', whyWeUseIt: 'ACID compliance, row-level security (RLS) for multi-tenancy, JSONB querying, and native vector storage.', level: 'Enterprise', version: 'v16.4' },
    { name: 'MongoDB', category: 'data', role: 'Unstructured Document Cache', whyWeUseIt: 'Dynamic schema evolution for rapid prototyping and flexible event log storage.', level: 'Core Standard', version: 'v7.0' },
    { name: 'Docker & Kubernetes', category: 'cloud', role: 'Container Orchestration & IaC', whyWeUseIt: 'Immutable deployments, multi-region autoscaling, zero environment drift, and self-healing pods.', level: 'Enterprise', version: 'v1.30+' },
    { name: 'AWS & GCP', category: 'cloud', role: 'Global Enterprise Cloud Planes', whyWeUseIt: 'Global CDN distribution, managed Redis/Postgres clusters, GPU acceleration, and 99.999% SLA.', level: 'Enterprise', version: 'Cloud Native' },
    { name: 'OpenAI GPT-4o', category: 'ai', role: 'Frontier Reasoning Engine', whyWeUseIt: 'High complex reasoning, multi-turn dialogue comprehension, and structured JSON outputs.', level: 'Core Standard', version: 'API v1' },
    { name: 'Gemini 2.0 Flash', category: 'ai', role: 'High-Speed Multimodal Intelligence', whyWeUseIt: 'Sub-second audio/vision reasoning, 1M+ token context windows, and ultra-low cost per token.', level: 'High Performance', version: 'v2.0 Flash' },
    { name: 'Hugging Face', category: 'ai', role: 'Private Open-Source Models', whyWeUseIt: 'Fine-tuning specialized smaller models (Llama 3, Mistral) for self-hosted private deployments.', level: 'Enterprise', version: 'Transformers' },
    { name: 'LangChain & LlamaIndex', category: 'ai', role: 'Orchestration & RAG Pipelines', whyWeUseIt: 'Standardized tool-calling abstraction, document chunking, and memory agent lifecycle control.', level: 'Core Standard', version: 'v0.3+' },
    { name: 'Qdrant & Pinecone', category: 'data', role: 'Dedicated Vector Databases', whyWeUseIt: 'Sub-10ms similarity search over millions of high-dimensional vectors with tenant payload filtering.', level: 'High Performance', version: 'Cloud & Self-Hosted' },
    { name: 'REST & GraphQL & gRPC', category: 'backend', role: 'Universal API Layer', whyWeUseIt: 'Strict contracts, minimal over-fetching, distributed rate limiting, and binary microservice streaming.', level: 'Core Standard', version: 'OpenAPI 3.1' },
    { name: 'TypeScript', category: 'frontend', role: 'Type-Safe Fullstack Foundation', whyWeUseIt: 'Eliminates 90% of runtime bugs through compile-time verification across frontend and backend schemas.', level: 'Core Standard', version: 'v5.6+' },
  ];

  const filtered = activeCategory === 'all' 
    ? technologies 
    : technologies.filter((t) => t.category === activeCategory);

  const ecosystemNodes = [
    { label: 'Python', color: 'border-cyan-400 text-cyan-300' },
    { label: 'React 19', color: 'border-sky-400 text-sky-300' },
    { label: 'FastAPI', color: 'border-teal-400 text-teal-300' },
    { label: 'Postgres', color: 'border-blue-400 text-blue-300' },
    { label: 'OpenAI', color: 'border-purple-400 text-purple-300' },
    { label: 'Gemini 2.0', color: 'border-indigo-400 text-indigo-300' },
    { label: 'HuggingFace', color: 'border-amber-400 text-amber-300' },
    { label: 'Docker', color: 'border-blue-500 text-blue-300' },
    { label: 'Cloud (AWS/GCP)', color: 'border-emerald-400 text-emerald-300' },
    { label: 'REST & gRPC', color: 'border-rose-400 text-rose-300' },
  ];

  return (
    <section id="tech" className="relative py-28 bg-slate-950/70 overflow-hidden border-t border-white/[0.05]">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            THE 2026 STACK
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Built With Modern Technology.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            We avoid outdated legacy frameworks. Our engineering stack is chosen strictly for developer velocity, raw performance, sub-second latency, and long-term maintainability.
          </p>
        </div>

        {/* Visual Technology Ecosystem Map */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-cyan-500/30 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="text-center mb-6">
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-semibold block mb-1">
              CONNECTED ARCHITECTURAL ECOSYSTEM
            </span>
            <div className="text-sm text-slate-300 font-mono">
              SpiderLap Core Platform Engine Integration Matrix
            </div>
          </div>

          {/* Central Hub & Orbiting Floating Nodes */}
          <div className="relative flex flex-col items-center justify-center py-6">
            {/* Center Node */}
            <div className="relative z-10 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-cyan-400/60 shadow-[0_0_35px_rgba(6,182,212,0.4)] backdrop-blur-xl flex items-center gap-3">
              <Cpu className="w-6 h-6 text-cyan-400 animate-spin-slow" />
              <div>
                <span className="text-xs font-mono text-cyan-400 block font-bold">CORE HUB</span>
                <span className="text-base font-extrabold text-white">SpiderLap Engine</span>
              </div>
            </div>

            {/* Orbiting Tech Satellite Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 max-w-4xl">
              {ecosystemNodes.map((node, nIdx) => (
                <div
                  key={nIdx}
                  className={`px-3 py-1.5 rounded-xl bg-slate-900/90 border ${node.color} text-xs font-mono font-medium shadow-md backdrop-blur-md hover:scale-105 transition-all animate-float cursor-default flex items-center gap-1.5`}
                  style={{ animationDelay: `${nIdx * 0.3}s` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <span>{node.label}</span>
                </div>
              ))}
            </div>

            {/* Simulated Data Bus Line */}
            <div className="mt-5 w-full max-w-md h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 w-2/3 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {[
            { key: 'all', label: 'All Technologies' },
            { key: 'ai', label: 'AI & Machine Learning' },
            { key: 'backend', label: 'Backend & APIs' },
            { key: 'frontend', label: 'Frontend & Mobile' },
            { key: 'cloud', label: 'Cloud & Infrastructure' },
            { key: 'data', label: 'Databases & Vector' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveCategory(tab.key as any)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeCategory === tab.key
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                  : 'bg-slate-900/50 text-slate-400 border border-white/5 hover:text-white hover:bg-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Technology Ecosystem Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {filtered.map((tech, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredTech(tech)}
              className="p-5 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-sm hover:shadow-[0_10px_30px_-5px_rgba(6,182,212,0.2)]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold tracking-wider">
                    {tech.category}
                  </span>
                  <span className="px-2 py-0.5 text-[9px] font-mono rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {tech.version}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {tech.name}
                </h4>
                <div className="text-xs font-mono text-slate-400 mb-2">{tech.role}</div>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {tech.whyWeUseIt}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Rigor Tier:</span>
                <span className="text-indigo-300 font-semibold">{tech.level}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Selected / Hovered Technology Inspector Strip */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase">
                {hoveredTech ? `INSPECTING: ${hoveredTech.name}` : 'TECHNOLOGY PHILOSOPHY'}
              </div>
              <div className="text-sm font-medium text-slate-200 mt-0.5">
                {hoveredTech
                  ? hoveredTech.whyWeUseIt
                  : 'Every framework and library in our stack is benchmarked against strict latency, maintainability, and security benchmarks.'}
              </div>
            </div>
          </div>
          <div className="text-xs font-mono text-emerald-400 whitespace-nowrap flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>Zero Vendor Lock-In Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
};
