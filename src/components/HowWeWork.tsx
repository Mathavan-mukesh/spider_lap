import React, { useState } from 'react';
import { 
  Compass, 
  Target, 
  Palette, 
  Code2, 
  Bot, 
  ShieldCheck, 
  Rocket, 
  TrendingUp, 
  Sparkles, 
  ArrowRight,
  Clock,
  FileCheck
} from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  tagline: string;
  description: string;
  deliverables: string[];
  toolsUsed: string[];
  icon: React.ElementType;
}

export const HowWeWork: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Discover',
      duration: 'Week 1',
      tagline: 'Deep Commercial & Architectural Discovery',
      description: 'We dissect your business model, customer pain points, competitors, and technical constraints. We define clear product boundaries and unit economics before writing a single line of code.',
      deliverables: ['Commercial Feasibility Audit', 'User Persona Maps', 'High-Level Architecture Blueprint', 'Scope & Milestone Roadmap'],
      toolsUsed: ['Notion', 'Miro', 'Architecture Spikes'],
      icon: Compass,
    },
    {
      number: '02',
      title: 'Define',
      duration: 'Week 1–2',
      tagline: 'Technical Specifications & System Contracts',
      description: 'We lock in data models, API schemas, security postures, cloud topologies, and third-party integrations. Nothing is left to guesswork.',
      deliverables: ['Database Schema (Postgres ERDs)', 'OpenAPI Specifications', 'Cloud Topology Plan', 'Compliance & Security Checklist'],
      toolsUsed: ['PostgreSQL', 'Prisma Schema', 'Swagger/OpenAPI'],
      icon: Target,
    },
    {
      number: '03',
      title: 'Design',
      duration: 'Week 2–3',
      tagline: '2026-Era High-Fidelity UI & Motion Design',
      description: 'We design complete design systems, interaction tokens, and responsive user flows in Figma. Every micro-interaction is prototyped for 60fps responsiveness.',
      deliverables: ['Design Token System', 'Hi-Fi Clickable Prototypes', 'Mobile & Tablet Variations', 'Micro-Animation Storyboards'],
      toolsUsed: ['Figma', 'Framer', 'Radix Primitives'],
      icon: Palette,
    },
    {
      number: '04',
      title: 'Build',
      duration: 'Week 3–6',
      tagline: 'Clean, Tested, Scalable Production Code',
      description: 'Full-stack engineering with modern frameworks, strict TypeScript, modular components, and atomic microservices. Automated CI/CD runs unit and integration tests on every commit.',
      deliverables: ['Production Frontend & Backend', 'Isolated Tenant Middleware', 'Distributed Database Migrations', 'Automated Test Suites'],
      toolsUsed: ['React', 'Next.js', 'FastAPI', 'Docker', 'TypeScript'],
      icon: Code2,
    },
    {
      number: '05',
      title: 'Integrate AI',
      duration: 'Week 5–7',
      tagline: 'Autonomous Agents & Vector Intelligence',
      description: 'We weave intelligent agents, RAG vector pipelines, and domain-tuned models directly into the product core. Private data is safely isolated with zero leakage.',
      deliverables: ['Vector Embeddings Pipeline', 'Autonomous Agent Tool Handlers', 'Streaming Token Response Gateways', 'Hallucination Defense Checks'],
      toolsUsed: ['OpenAI', 'Gemini 2.0', 'LangChain', 'Qdrant'],
      icon: Bot,
    },
    {
      number: '06',
      title: 'Test',
      duration: 'Week 7–8',
      tagline: 'Battle-Testing & Security Hardening',
      description: 'Rigorous end-to-end user journey tests, synthetic traffic load simulations, penetration assessments, and SOC2/HIPAA compliance validation.',
      deliverables: ['High-Concurrency Load Test Report', 'Security Penetration Audit', 'WCAG Accessibility Pass', 'Disaster Recovery Drill'],
      toolsUsed: ['Playwright', 'k6 Load Testing', 'Sentry'],
      icon: ShieldCheck,
    },
    {
      number: '07',
      title: 'Launch',
      duration: 'Week 8',
      tagline: 'Zero-Downtime Global Production Release',
      description: 'Production infrastructure provisioning, domain & DNS setup, SSL certification, CDN caching rules, and seamless public rollout with real-time error telemetry.',
      deliverables: ['Multi-Region Edge Deployment', 'Real-Time Alert Pager Setup', 'Executive Analytics Cockpit', 'Complete Code Ownership Handover'],
      toolsUsed: ['AWS', 'Cloudflare', 'Kubernetes', 'Datadog'],
      icon: Rocket,
    },
    {
      number: '08',
      title: 'Scale',
      duration: 'Ongoing',
      tagline: 'Continuous Performance & Feature Expansion',
      description: 'We partner with you post-launch to monitor latency, optimize compute costs, analyze user retention cohorts, and iterate on high-leverage product features.',
      deliverables: ['Monthly Telemetry Audits', 'Database Query Optimization', 'Feature Sprint Execution', 'Compute Cost Reductions'],
      toolsUsed: ['ClickHouse', 'PostHog', 'Stripe Billing'],
      icon: TrendingUp,
    },
  ];

  const activeStep = steps[activeStepIndex];
  const ActiveIcon = activeStep.icon;

  return (
    <section id="process" className="relative py-28 bg-cyber-bg overflow-hidden border-t border-white/[0.05]">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-cyan-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            ENGINEERING RIGOR
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            From Idea to Impact.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            A battle-tested 8-stage methodology refined across dozens of product launches. No fluff, no endless meetings—just structured engineering velocity.
          </p>
        </div>

        {/* Horizontal Process Steps Bar */}
        <div className="mb-12 overflow-x-auto pb-4 pt-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-[760px] sm:min-w-full">
            {steps.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              const Icon = step.icon;

              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex-1 p-3 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? 'bg-slate-900/90 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.25)] translate-y-[-2px]'
                      : 'bg-slate-950/40 border-white/5 hover:bg-slate-900/50 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                      {step.number}
                    </span>
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-300' : 'text-slate-500'}`} />
                  </div>
                  <div className={`text-xs font-bold truncate ${isActive ? 'text-white' : 'text-slate-400'}`}>
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Active Step Presentation Card */}
        <div className="rounded-2xl p-7 sm:p-9 bg-slate-900/70 border border-cyan-500/30 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Stage Info */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-cyan-400 font-bold">STAGE {activeStep.number}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {activeStep.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {activeStep.title}
                  </h3>
                </div>
              </div>

              <div className="text-sm font-mono text-cyan-300 mb-4">{activeStep.tagline}</div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {activeStep.description}
              </p>

              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs font-mono text-slate-400">Tooling:</span>
                {activeStep.toolsUsed.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800 text-slate-200 border border-white/10"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Tangible Deliverables */}
            <div className="lg:col-span-5 p-5 rounded-xl bg-slate-950/80 border border-white/10">
              <div className="text-xs font-mono text-cyan-400 uppercase font-semibold mb-3 flex items-center gap-2">
                <FileCheck className="w-4 h-4" />
                <span>Verified Deliverables:</span>
              </div>

              <div className="space-y-2.5 mb-5">
                {activeStep.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Phase Handover Gate: Strict</span>
                <span className="text-emerald-400">100% Client Alignment</span>
              </div>
            </div>

          </div>

          {/* Navigation between steps */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
              disabled={activeStepIndex === 0}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none transition-all"
            >
              ← Previous Stage
            </button>

            <span className="text-xs font-mono text-slate-400">
              {activeStepIndex + 1} of {steps.length}
            </span>

            <button
              onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
              disabled={activeStepIndex === steps.length - 1}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-cyan-600/80 hover:bg-cyan-500 disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1.5"
            >
              <span>Next Stage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

