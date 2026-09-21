import React, { useState } from 'react';
import { 
  Bot, 
  Cloud, 
  Globe, 
  Smartphone, 
  Workflow, 
  Cpu, 
  ArrowUpRight,
  Sparkles,
  CheckCircle,
  Layers,
  Activity,
  Zap,
  TrendingUp,
  ShieldCheck,
  Database,
  Lock,
  Server
} from 'lucide-react';

interface BuildCard {
  id: string;
  title: string;
  category: string;
  icon: React.ElementType;
  description: string;
  highlights: string[];
  specs: string[];
  gradient: string;
  glowColor: string;
  previewType: 'ai' | 'saas' | 'web' | 'mobile' | 'automation' | 'custom';
}

interface WhatWeBuildProps {
  onSelectCategory?: (category: string) => void;
}

export const WhatWeBuild: React.FC<WhatWeBuildProps> = ({ onSelectCategory }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const cards: BuildCard[] = [
    {
      id: 'ai-products',
      title: 'AI Products',
      category: 'Autonomous Intelligence',
      icon: Bot,
      description: 'AI assistants, intelligent automation, RAG systems, voice AI, autonomous agents, and domain-tuned AI solutions.',
      highlights: ['Multi-Agent Swarms', 'RAG & Vector Pipelines', 'Voice & Multimodal AI', 'Custom LLM Fine-Tuning'],
      specs: ['Sub-20ms Latency', 'Qdrant & Pinecone', 'LangChain & LlamaIndex'],
      gradient: 'from-cyan-500/20 via-sky-500/10 to-transparent',
      glowColor: 'rgba(6, 182, 212, 0.25)',
      previewType: 'ai'
    },
    {
      id: 'saas-platforms',
      title: 'SaaS Platforms',
      category: 'Cloud Software',
      icon: Cloud,
      description: 'Multi-tenant SaaS platforms, high-throughput dashboards, subscription billing engines, and robust business management systems.',
      highlights: ['Multi-Tenant Isolated DBs', 'Stripe & Paddle Billing', 'Role-Based Access (RBAC)', 'Telemetry & Audit Logs'],
      specs: ['Auto-Scaling Kubernetes', 'PostgreSQL & Redis', '99.99% SLA'],
      gradient: 'from-indigo-500/20 via-purple-500/10 to-transparent',
      glowColor: 'rgba(99, 102, 241, 0.25)',
      previewType: 'saas'
    },
    {
      id: 'web-applications',
      title: 'Web Applications',
      category: 'Modern Web',
      icon: Globe,
      description: 'Ultra-fast, scalable, and responsive web applications built with cutting-edge frontends, edge rendering, and rock-solid state management.',
      highlights: ['Edge SSR & SSG', 'Real-Time WebSocket Sync', 'Fluid 60fps Micro-interactions', 'SEO & Core Web Vitals'],
      specs: ['React & Next.js 15', 'TypeScript Strict', 'Tailwind CSS Modern'],
      gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
      glowColor: 'rgba(168, 85, 247, 0.25)',
      previewType: 'web'
    },
    {
      id: 'mobile-applications',
      title: 'Mobile Applications',
      category: 'iOS & Android',
      icon: Smartphone,
      description: 'Customer-facing and business-critical mobile experiences engineered with native performance, offline resilience, and fluid motion.',
      highlights: ['Native Gesture Controls', 'Biometric Security & Passkeys', 'Offline-First Sync Engine', 'Push Notification Pipelines'],
      specs: ['React Native & Flutter', 'Swift & Kotlin Interop', 'App Store Compliance'],
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      glowColor: 'rgba(16, 185, 129, 0.25)',
      previewType: 'mobile'
    },
    {
      id: 'business-automation',
      title: 'Business Automation',
      category: 'Workflow Systems',
      icon: Workflow,
      description: 'Automate repetitive operations, customer communication, multi-platform lead ingestion, and mission-critical back-office flows.',
      highlights: ['Event-Driven Microservices', 'Webhook & ERP Ingestion', 'Self-Healing Workflows', 'Audit & Exception Routing'],
      specs: ['FastAPI & Celery', 'Kafka & RabbitMQ', 'Zero Human Bottlenecks'],
      gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
      glowColor: 'rgba(245, 158, 11, 0.25)',
      previewType: 'automation'
    },
    {
      id: 'custom-software',
      title: 'Custom Software',
      category: 'Enterprise Engineering',
      icon: Cpu,
      description: 'Mission-critical software engineered from first principles around your exact proprietary business models and complex constraints.',
      highlights: ['Custom Edge APIs & Gateways', 'Legacy System Modernization', 'Zero-Trust Security Models', 'High-Frequency Processing'],
      specs: ['Distributed Architecture', 'Docker & Helm', 'Complete IP Ownership'],
      gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
      glowColor: 'rgba(59, 130, 246, 0.25)',
      previewType: 'custom'
    },
  ];

  /* ---------------- MOCKUP VISUAL RENDERS ---------------- */

  // 1. AI Visual Mockup: AI -> Data -> Intelligence -> Automation
  const renderAiVisual = () => (
    <div className="my-4 p-3 rounded-xl bg-slate-950/80 border border-cyan-500/30 overflow-hidden font-mono text-[10px]">
      <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/5 text-slate-400">
        <span className="flex items-center gap-1 text-cyan-400 font-semibold">
          <Bot className="w-3 h-3" />
          AI Neural Pipeline
        </span>
        <span className="text-emerald-400">● Live Inference</span>
      </div>
      
      {/* 4-Step Flow: AI -> Data -> Intelligence -> Automation */}
      <div className="grid grid-cols-4 gap-1 items-center text-center">
        <div className="p-1.5 rounded-lg bg-cyan-950/50 border border-cyan-500/30">
          <div className="text-cyan-300 font-bold">AI</div>
          <div className="text-[9px] text-slate-400">LLM Core</div>
        </div>
        <div className="p-1.5 rounded-lg bg-indigo-950/50 border border-indigo-500/30">
          <div className="text-indigo-300 font-bold">Data</div>
          <div className="text-[9px] text-slate-400">Vectors</div>
        </div>
        <div className="p-1.5 rounded-lg bg-purple-950/50 border border-purple-500/30">
          <div className="text-purple-300 font-bold">Intel</div>
          <div className="text-[9px] text-slate-400">Reasoning</div>
        </div>
        <div className="p-1.5 rounded-lg bg-emerald-950/50 border border-emerald-500/30">
          <div className="text-emerald-300 font-bold">Auto</div>
          <div className="text-[9px] text-slate-400">Execution</div>
        </div>
      </div>

      {/* Dynamic pulse wave line */}
      <div className="mt-2.5 h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400 w-3/4 animate-pulse" />
      </div>
    </div>
  );

  // 2. SaaS Visual Mockup: Dashboard with Analytics, Users, Revenue
  const renderSaasVisual = () => (
    <div className="my-4 p-3 rounded-xl bg-slate-950/80 border border-indigo-500/30 overflow-hidden font-mono text-[10px]">
      <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/5 text-slate-400">
        <span className="flex items-center gap-1 text-indigo-400 font-semibold">
          <Cloud className="w-3 h-3" />
          Multi-Tenant Cloud Console
        </span>
        <span className="text-cyan-300 font-bold">$124.5k MRR</span>
      </div>

      {/* Mini metric bar */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div className="p-1.5 rounded bg-slate-900/70 border border-white/5">
          <div className="text-[9px] text-slate-400 uppercase">Active Users</div>
          <div className="text-white font-bold">14,280 <span className="text-emerald-400 text-[9px]">+18%</span></div>
        </div>
        <div className="p-1.5 rounded bg-slate-900/70 border border-white/5">
          <div className="text-[9px] text-slate-400 uppercase">Tenant SLA</div>
          <div className="text-emerald-400 font-bold">99.995% Uptime</div>
        </div>
      </div>

      {/* Mini SVG area chart */}
      <svg className="w-full h-8 overflow-visible" viewBox="0 0 100 25" preserveAspectRatio="none">
        <defs>
          <linearGradient id="saasGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,20 Q20,10 40,15 T80,5 T100,8 L100,25 L0,25 Z" fill="url(#saasGrad)" />
        <path d="M0,20 Q20,10 40,15 T80,5 T100,8" fill="none" stroke="#818cf8" strokeWidth="1.5" />
      </svg>
    </div>
  );

  // 3. Web App Visual Mockup: Browser Window with Modern Dashboard
  const renderWebVisual = () => (
    <div className="my-4 rounded-xl bg-slate-950/80 border border-purple-500/30 overflow-hidden font-mono text-[10px]">
      {/* Browser Bar */}
      <div className="px-3 py-1.5 bg-slate-900/90 border-b border-white/5 flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400/80" />
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
        </div>
        <div className="px-2 py-0.5 rounded bg-slate-950 text-[9px] text-slate-400 flex-1 truncate">
          https://app.spiderlap.io/dashboard
        </div>
      </div>

      {/* Browser Window Body */}
      <div className="p-2.5 space-y-2">
        <div className="flex items-center justify-between text-[9px]">
          <span className="text-purple-300 font-semibold">Reactive Edge UI</span>
          <span className="text-slate-400">60 FPS Micro-Motion</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          <div className="h-6 rounded bg-purple-950/40 border border-purple-500/20 flex items-center justify-center text-purple-300 text-[9px]">
            SSR View
          </div>
          <div className="h-6 rounded bg-purple-950/40 border border-purple-500/20 flex items-center justify-center text-purple-300 text-[9px]">
            Edge Cache
          </div>
          <div className="h-6 rounded bg-purple-950/40 border border-purple-500/20 flex items-center justify-center text-purple-300 text-[9px]">
            Zero-CLS
          </div>
        </div>
      </div>
    </div>
  );

  // 4. Mobile Visual Mockup: Smartphone Frame with Application Screens
  const renderMobileVisual = () => (
    <div className="my-4 p-3 rounded-xl bg-slate-950/80 border border-emerald-500/30 overflow-hidden font-mono text-[10px]">
      <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/5 text-slate-400">
        <span className="flex items-center gap-1 text-emerald-400 font-semibold">
          <Smartphone className="w-3 h-3" />
          Native Mobile Experience
        </span>
        <span className="text-slate-400">iOS & Android</span>
      </div>

      <div className="flex items-center gap-2">
        {/* Phone screen preview */}
        <div className="flex-1 p-2 rounded-lg bg-slate-900 border border-emerald-500/20">
          <div className="w-6 h-1 bg-slate-700 rounded-full mx-auto mb-1.5" />
          <div className="text-[9px] text-emerald-300 font-bold mb-1">FaceID Biometrics</div>
          <div className="flex items-center gap-1 text-[8px] text-slate-400">
            <ShieldCheck className="w-2.5 h-2.5 text-emerald-400" />
            <span>Encrypted Keychain</span>
          </div>
        </div>

        <div className="flex-1 p-2 rounded-lg bg-slate-900 border border-emerald-500/20">
          <div className="w-6 h-1 bg-slate-700 rounded-full mx-auto mb-1.5" />
          <div className="text-[9px] text-teal-300 font-bold mb-1">Offline-First</div>
          <div className="flex items-center gap-1 text-[8px] text-slate-400">
            <Zap className="w-2.5 h-2.5 text-teal-400" />
            <span>SQLite Sync Engine</span>
          </div>
        </div>
      </div>
    </div>
  );

  // 5. Automation Visual Mockup: Customer -> Lead -> AI -> Automation -> CRM -> Notification
  const renderAutomationVisual = () => (
    <div className="my-4 p-3 rounded-xl bg-slate-950/80 border border-amber-500/30 overflow-hidden font-mono text-[10px]">
      <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/5 text-slate-400">
        <span className="flex items-center gap-1 text-amber-400 font-semibold">
          <Workflow className="w-3 h-3" />
          Event Automation DAG
        </span>
        <span className="text-amber-300">0 Human Bottlenecks</span>
      </div>

      {/* Visual Pipeline with animated connection */}
      <div className="flex items-center justify-between gap-1 text-[9px] text-center">
        <div className="px-1.5 py-1 rounded bg-slate-900 border border-amber-500/20 text-slate-300">
          Lead
        </div>
        <span className="text-amber-400 font-bold">→</span>
        <div className="px-1.5 py-1 rounded bg-amber-950/50 border border-amber-500/30 text-amber-300 font-bold">
          AI Rule
        </div>
        <span className="text-amber-400 font-bold">→</span>
        <div className="px-1.5 py-1 rounded bg-slate-900 border border-amber-500/20 text-slate-300">
          CRM Sync
        </div>
        <span className="text-amber-400 font-bold">→</span>
        <div className="px-1.5 py-1 rounded bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 font-bold">
          Notify
        </div>
      </div>

      <div className="mt-2 text-[9px] text-slate-400 flex items-center justify-between">
        <span>Webhook execution latency:</span>
        <span className="text-amber-300 font-semibold">18ms total</span>
      </div>
    </div>
  );

  // 6. Custom Software Visual Mockup: Frontend -> Backend -> API -> DB -> Cloud -> AI
  const renderCustomVisual = () => (
    <div className="my-4 p-3 rounded-xl bg-slate-950/80 border border-blue-500/30 overflow-hidden font-mono text-[10px]">
      <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/5 text-slate-400">
        <span className="flex items-center gap-1 text-blue-400 font-semibold">
          <Cpu className="w-3 h-3" />
          Enterprise Topology
        </span>
        <span className="text-cyan-300">Zero-Trust Grid</span>
      </div>

      <div className="grid grid-cols-3 gap-1.5 text-[9px] text-center mb-1.5">
        <div className="p-1 rounded bg-blue-950/40 border border-blue-500/20 text-blue-300">
          Client Frontend
        </div>
        <div className="p-1 rounded bg-indigo-950/40 border border-indigo-500/20 text-indigo-300">
          API Gateway
        </div>
        <div className="p-1 rounded bg-cyan-950/40 border border-cyan-500/20 text-cyan-300">
          AI & Cloud
        </div>
      </div>

      <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1 border-t border-white/5">
        <span className="flex items-center gap-1">
          <Server className="w-2.5 h-2.5 text-blue-400" /> Distributed Postgres Cluster
        </span>
        <span className="text-emerald-400">Active</span>
      </div>
    </div>
  );

  return (
    <section id="solutions" className="relative py-28 bg-slate-950/60 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            CORE PRODUCT DIVISIONS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            We Build More Than Websites.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            From intelligent automation to complete SaaS platforms, we design and engineer digital products around real business needs and measurable ROI.
          </p>
        </div>

        {/* 6 High-Impact Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            const isHovered = hoveredCard === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative rounded-2xl p-6 sm:p-7 transition-all duration-300 border flex flex-col justify-between overflow-hidden cursor-pointer ${
                  isHovered
                    ? 'bg-slate-900/90 border-cyan-500/50 -translate-y-1.5 shadow-[0_15px_40px_-10px_rgba(6,182,212,0.25)]'
                    : 'bg-slate-900/40 border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Dynamic Gradient glow behind card */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none`}
                />

                {/* Card Content */}
                <div className="relative z-10">
                  
                  {/* Top Bar: Category and Minimal Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
                      {card.category}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-400/40 group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2 group-hover:text-cyan-300 transition-colors">
                    <span>{card.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-cyan-400" />
                  </h3>

                  <p className="text-sm text-slate-300 font-normal leading-relaxed mb-4">
                    {card.description}
                  </p>

                  {/* High-Quality Visual Mockup per Card */}
                  {card.previewType === 'ai' && renderAiVisual()}
                  {card.previewType === 'saas' && renderSaasVisual()}
                  {card.previewType === 'web' && renderWebVisual()}
                  {card.previewType === 'mobile' && renderMobileVisual()}
                  {card.previewType === 'automation' && renderAutomationVisual()}
                  {card.previewType === 'custom' && renderCustomVisual()}

                  {/* Dynamic Interactive Features Pills */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-mono font-medium text-slate-400 uppercase">Capabilities:</div>
                    <div className="grid grid-cols-1 gap-1.5">
                      {card.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400/80 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom Architectural Specs Strip */}
                <div className="relative z-10 pt-4 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                  {card.specs.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-[10px] font-mono rounded-md bg-slate-800/80 text-slate-300 border border-white/5 group-hover:border-cyan-500/20 group-hover:text-cyan-200 transition-colors"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Section Bottom Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-indigo-950/30 to-slate-900/40 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Need a multi-faceted system combining AI, SaaS & Mobile?</div>
              <div className="text-xs text-slate-400">We architect cohesive ecosystems where all layers communicate in real-time.</div>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800/90 hover:bg-slate-700 border border-white/10 hover:border-cyan-400/50 transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <span>Consult With Our Architects</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
