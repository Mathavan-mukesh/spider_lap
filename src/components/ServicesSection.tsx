import React, { useState } from 'react';
import { 
  Bot, 
  Cloud, 
  Code2, 
  Smartphone, 
  Terminal, 
  Palette, 
  Server, 
  CloudUpload, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Sparkles,
  Network
} from 'lucide-react';

interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  architecturalBenefit: string;
  slaMetric: string;
  icon: React.ElementType;
}

export const ServicesSection: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>('ai-dev');

  const services: ServiceDetail[] = [
    {
      id: 'ai-dev',
      number: '01',
      title: 'AI Development',
      tagline: 'Production-Grade Autonomous Systems & LLMs',
      description: 'We develop custom AI agents, multi-modal LLM applications, enterprise RAG knowledge engines, and specialized fine-tuned models that perform complex cognitive tasks with sub-second latency.',
      deliverables: ['Custom AI Agents & Orchestration', 'Vector Embeddings & Semantic Search', 'Voice AI & Audio Streaming Pipelines', 'Local & Private LLM Deployments'],
      technologies: ['OpenAI', 'Gemini 2.0', 'LangChain', 'Qdrant', 'Hugging Face', 'PyTorch'],
      architecturalBenefit: 'Zero data leakage with private tenant vector isolation and deterministic tool execution.',
      slaMetric: '99.98% Tool Execution Precision',
      icon: Bot,
    },
    {
      id: 'saas-dev',
      number: '02',
      title: 'SaaS Development',
      tagline: 'Scalable Multi-Tenant Platforms from Day 1',
      description: 'End-to-end architecture and engineering for subscription software. We build scalable database schemas, role-based access management, global payment gateways, and self-serve user dashboards.',
      deliverables: ['Multi-Tenant Isolated DB Architecture', 'Stripe / Paddle Custom Checkout Engines', 'Team Workspaces & RBAC Permissioning', 'Real-Time Telemetry & Churn Analytics'],
      technologies: ['React 19', 'Next.js', 'PostgreSQL', 'Redis', 'Tailwind', 'Stripe API'],
      architecturalBenefit: 'Dynamic horizontal autoscaling capable of absorbing viral traffic spikes with zero downtime.',
      slaMetric: '< 15ms Database Query Latency',
      icon: Cloud,
    },
    {
      id: 'web-dev',
      number: '03',
      title: 'Web Development',
      tagline: 'High-Performance, Visually Stunning Web Applications',
      description: 'From ambitious high-conversion portals to complex single-page apps, our engineering team constructs blisteringly fast web experiences optimized for modern Core Web Vitals and 60fps animations.',
      deliverables: ['Server-Side Rendered (SSR) Web Apps', 'Dynamic Micro-Frontend Architectures', 'Interactive 3D WebGL / Canvas Elements', 'Comprehensive WCAG 2.1 AA Accessibility'],
      technologies: ['TypeScript', 'React', 'Vite', 'Node.js', 'Tailwind CSS', 'GraphQL'],
      architecturalBenefit: 'Sub-second First Contentful Paint (FCP) and near-perfect 100/100 Lighthouse performance metrics.',
      slaMetric: '100% Core Web Vitals Pass Rate',
      icon: Code2,
    },
    {
      id: 'mobile-dev',
      number: '04',
      title: 'Mobile App Development',
      tagline: 'Native iOS & Android Experiences',
      description: 'Cross-platform and native mobile software designed with obsessive care for gestures, offline-first synchronization, secure biometric authentications, and battery-optimized background tasks.',
      deliverables: ['iOS & Android App Store Shipments', 'Offline-First SQLite / WatermelonDB Sync', 'Biometric FaceID & Secure Keyring Sync', 'Interactive Push Notification Engines'],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo EAS'],
      architecturalBenefit: '60fps butter-smooth rendering with native bridging and low memory consumption.',
      slaMetric: 'Zero Crash Free Sessions > 99.9%',
      icon: Smartphone,
    },
    {
      id: 'software-dev',
      number: '05',
      title: 'Software Development',
      tagline: 'Bespoke Enterprise Systems & Core Algorithms',
      description: 'We construct tailored software systems for complex enterprise problems—distributed transaction processors, real-time logistics engines, data processing backbones, and custom business logic.',
      deliverables: ['Custom High-Throughput Microservices', 'Legacy Monolith Modernization', 'Data Pipeline Aggregators', 'Deterministic Business Logic Engines'],
      technologies: ['Go', 'Python', 'Rust', 'Docker', 'Kubernetes', 'Apache Kafka'],
      architecturalBenefit: 'Modular domain-driven design ensuring decoupling, automated test coverage, and easy maintenance.',
      slaMetric: '10,000+ Distributed Transactions/sec',
      icon: Terminal,
    },
    {
      id: 'automation',
      number: '06',
      title: 'Automation Systems',
      tagline: 'Eliminate Operational Bottlenecks',
      description: 'We connect your disjointed SaaS tools, CRMs, internal databases, and communication channels with intelligent event-driven workflows that eliminate hundreds of hours of manual labor.',
      deliverables: ['Event-Driven Webhook Pipelines', 'Automated Lead Enrichment & Scoring', 'ERP & Accounting Reconciliation', 'Self-Healing Automated Bot Monitors'],
      technologies: ['FastAPI', 'Celery', 'RabbitMQ', 'Temporal.io', 'Make/n8n Custom Nodes'],
      architecturalBenefit: 'Fault-tolerant message queues with automatic retries, dead-letter queues, and Slack alerts.',
      slaMetric: 'Zero Lost Events / Transactions',
      icon: Zap,
    },
    {
      id: 'ui-ux',
      number: '07',
      title: 'UI/UX & Product Design',
      tagline: '2026-Era High-End Design Language',
      description: 'Design that looks like the future and functions intuitively. We craft complete design systems, interaction patterns, fluid micro-animations, and high-fidelity clickable interactive prototypes.',
      deliverables: ['Comprehensive Figma Design Tokens', 'Clickable Hi-Fi User Journey Prototypes', 'Interactive Micro-Motion Specifications', 'Component UI Kits for Developers'],
      technologies: ['Figma', 'Framer', 'Design Tokens', 'Radix Primitives', 'Storybook'],
      architecturalBenefit: 'Direct parity between Figma design tokens and Tailwind CSS code variables.',
      slaMetric: '2x Higher User Conversion Rates',
      icon: Palette,
    },
    {
      id: 'api-backend',
      number: '08',
      title: 'API & Backend Development',
      tagline: 'Bulletproof Distributed Infrastructure',
      description: 'RESTful, gRPC, and GraphQL APIs engineered for strict schema validation, distributed rate-limiting, edge caching, and seamless third-party developer integrations.',
      deliverables: ['Production OpenAPI / Swagger Specs', 'Distributed Redis Caching Layers', 'OAuth 2.1 & JWT Security Protocols', 'High-Concurreny WebSocket Clusters'],
      technologies: ['FastAPI', 'Node.js / Express', 'Go', 'PostgreSQL', 'Redis', 'gRPC'],
      architecturalBenefit: 'Stateless horizontally autoscaled microservices behind Cloudflare Edge and API gateways.',
      slaMetric: '< 10ms P99 API Response Times',
      icon: Server,
    },
    {
      id: 'cloud-deploy',
      number: '09',
      title: 'Cloud & Deployment',
      tagline: 'Automated CI/CD & Zero-Downtime Releases',
      description: 'Infrastructure as Code (IaC), automated testing gates, canary deployments, and container orchestration across AWS, Google Cloud, and global edge CDNs.',
      deliverables: ['Terraform / OpenTofu Infrastructure Specs', 'Dockerized Microservice Pipelines', 'GitHub Actions CI/CD with Test Gates', 'Multi-Region Failover Topologies'],
      technologies: ['AWS ECS / EKS', 'Google Cloud Run', 'Terraform', 'Docker', 'Cloudflare Workers'],
      architecturalBenefit: 'Immutable infrastructure that eliminates environment drift and enables 1-click rollbacks.',
      slaMetric: '100% Immutable Deployments',
      icon: CloudUpload,
    },
    {
      id: 'digital-transform',
      number: '10',
      title: 'Digital Transformation',
      tagline: 'Upgrade Legacy Operations to Intelligent Tech',
      description: 'We transition slow, manual, paper-reliant, or legacy software companies into nimble digital-first enterprises powered by centralized data, modern interfaces, and AI copilots.',
      deliverables: ['Architecture Modernization Roadmaps', 'Legacy Database Migrations with Zero Downtime', 'Staff Copilot Training & Tooling', 'Unified Executive Business Cockpits'],
      technologies: ['Cloud Migration', 'Data Warehousing', 'BigQuery', 'Security Auditing'],
      architecturalBenefit: 'De-risk legacy migration through strangler-fig architectures and dual-write synchronizations.',
      slaMetric: 'Zero Business Disruption',
      icon: TrendingUp,
    },
  ];

  const activeService = services.find((s) => s.id === activeServiceId) || services[0];
  const ActiveIcon = activeService.icon;

  // Visual diagram helper per active service
  const renderArchitectureVisual = () => {
    return (
      <div className="mb-5 p-3 rounded-xl bg-slate-950/90 border border-cyan-500/20 overflow-hidden font-mono text-[10px]">
        <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/5 text-slate-400">
          <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
            <Network className="w-3.5 h-3.5" />
            Live Architectural Diagram · {activeService.title}
          </span>
          <span className="text-emerald-400 text-[9px]">Verified Topology</span>
        </div>

        {/* Dynamic Topology Node Stream */}
        <div className="flex items-center justify-between gap-2 text-center text-[9px]">
          <div className="flex-1 p-2 rounded-lg bg-slate-900 border border-white/5 text-slate-300">
            <span className="text-slate-500 block text-[8px] uppercase">Input</span>
            <span className="font-bold text-white">Client Protocol</span>
          </div>
          <span className="text-cyan-400 font-bold">→</span>
          <div className="flex-1 p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-300">
            <span className="text-cyan-500 block text-[8px] uppercase">Core Layer</span>
            <span className="font-bold">{activeService.title}</span>
          </div>
          <span className="text-cyan-400 font-bold">→</span>
          <div className="flex-1 p-2 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-indigo-300">
            <span className="text-indigo-400 block text-[8px] uppercase">Target State</span>
            <span className="font-bold">{activeService.slaMetric}</span>
          </div>
        </div>

        <div className="mt-2 pt-1.5 border-t border-white/5 flex items-center justify-between text-[9px] text-slate-400">
          <span>Failover Strategy: Automatic Multi-AZ</span>
          <span className="text-cyan-400 font-semibold">Audit Passed</span>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="relative py-28 bg-cyber-bg overflow-hidden border-t border-white/[0.05]">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            ENGINEERING CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Technology Built Around Your Business.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Ten specialized engineering disciplines unified under one rigorous standard. Hover over any discipline to inspect our architectural approach.
          </p>
        </div>

        {/* Interactive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Service List */}
          <div className="lg:col-span-6 flex flex-col gap-2">
            {services.map((service) => {
              const isActive = service.id === activeServiceId;
              const Icon = service.icon;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`group relative p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-slate-900/90 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.2)] translate-x-2'
                      : 'bg-slate-950/40 border-white/[0.06] hover:bg-slate-900/50 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-mono font-semibold transition-colors ${
                      isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-400'
                    }`}>
                      {service.number}
                    </span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                      isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-900 text-slate-400 group-hover:text-slate-200'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className={`text-base font-semibold transition-colors ${
                        isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}>
                        {service.title}
                      </h4>
                      <p className="text-xs text-slate-400 font-normal line-clamp-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <ArrowRight className={`w-4 h-4 transition-all duration-300 ${
                      isActive ? 'text-cyan-400 translate-x-1 opacity-100' : 'text-slate-600 opacity-0 group-hover:opacity-100'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Architectural Inspection Panel */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="rounded-2xl p-7 bg-slate-900/90 border border-cyan-500/30 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(6,182,212,0.2)] relative overflow-hidden">
              
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider">
                      SPECIFICATION ARCHIVE · {activeService.number}
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Target SLA</div>
                  <div className="text-xs font-mono font-bold text-emerald-400">{activeService.slaMetric}</div>
                </div>
              </div>

              {/* Dynamic Architecture Visual Diagram */}
              {renderArchitectureVisual()}

              {/* Description */}
              <p className="text-sm text-slate-300 font-normal leading-relaxed mb-6">
                {activeService.description}
              </p>

              {/* Core Deliverables List */}
              <div className="mb-6 p-4 rounded-xl bg-slate-950/70 border border-white/5">
                <div className="text-xs font-mono text-cyan-300 uppercase font-medium mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Core Engineering Deliverables:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="mb-6">
                <div className="text-xs font-mono text-slate-400 uppercase font-medium mb-2.5">
                  Core Technologies & Frameworks:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeService.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-800/80 text-cyan-200 border border-cyan-500/20 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architectural Benefit Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-indigo-950/30 border border-cyan-500/20">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Architectural Guarantee:</div>
                <div className="text-xs font-medium text-slate-200 mt-1 leading-relaxed">
                  {activeService.architecturalBenefit}
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Ready to build your solution?</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 hover:text-cyan-200 group"
                >
                  <span>Request Scope & Estimate</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
