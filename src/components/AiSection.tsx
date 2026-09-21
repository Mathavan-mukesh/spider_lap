import React, { useState } from 'react';
import { 
  Bot, 
  Cpu, 
  Database, 
  Workflow, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Network, 
  Play, 
  Activity,
  Layers,
  Zap,
  Radio
} from 'lucide-react';

interface AiDemoWorkflow {
  id: string;
  name: string;
  category: string;
  inputPrompt: string;
  steps: {
    node: string;
    action: string;
    latency: string;
  }[];
  output: string;
}

export const AiSection: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<string>('lead-agent');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simStep, setSimStep] = useState<number>(3);

  const workflows: AiDemoWorkflow[] = [
    {
      id: 'lead-agent',
      name: 'Autonomous Revenue Agent',
      category: 'Multi-Agent Workflow',
      inputPrompt: 'Incoming enterprise lead: FinTech Series-B company with 450 employees asking for multi-tenant billing automation.',
      steps: [
        { node: 'User Gateway', action: 'Webhook parsed & validated via schema gatekeeper', latency: '4ms' },
        { node: 'Cognita LLM Core', action: 'Intent recognized: High-Value Enterprise FinTech Billing', latency: '18ms' },
        { node: 'Qdrant RAG Vector DB', action: 'Retrieved matching case studies & PCI-DSS compliance requirements', latency: '9ms' },
        { node: 'Automation Dispatch', action: 'Generated CRM deal in HubSpot, created Slack channel #deal-enterprise', latency: '22ms' },
        { node: 'Business Result', action: 'Sent hyper-personalized executive proposal to CEO with pricing estimate', latency: '12ms' },
      ],
      output: 'Deal qualified ($120k ARR target). Custom architecture roadmap generated with zero human intervention in 65ms.',
    },
    {
      id: 'rag-legal',
      name: 'Contract & Compliance Intelligence',
      category: 'Enterprise RAG System',
      inputPrompt: 'Analyze 180-page Master Services Agreement (MSA) against GDPR & HIPAA regulatory rules.',
      steps: [
        { node: 'Document Ingestion', action: 'OCR tokenization & chunking into semantic paragraphs', latency: '15ms' },
        { node: 'RAG Knowledge Graph', action: 'Vector cosine similarity search across EU regulatory corpora', latency: '12ms' },
        { node: 'Cognitive Reasoning', action: 'Flagged Section 14.2: Data transfer clause non-compliant with EU-US DPF', latency: '35ms' },
        { node: 'Automated Redlining', action: 'Generated compliant fallback clause with legal justification markdown', latency: '24ms' },
        { node: 'Business Result', action: 'Executive compliance summary delivered to General Counsel', latency: '8ms' },
      ],
      output: 'Identified 3 liabilities, generated legal-approved redlines, reduced contract review cycle by 94%.',
    },
    {
      id: 'devops-agent',
      name: 'Self-Healing Cloud DevOps Agent',
      category: 'Autonomous Monitoring Agent',
      inputPrompt: 'Kubernetes Pod crash loop detected on service: payment-gateway-v2 in us-east-1.',
      steps: [
        { node: 'Telemetry Trigger', action: 'Prometheus alert ingested via Webhook API', latency: '3ms' },
        { node: 'Root Cause Diagnosis', action: 'AI parsed last 5,000 log lines: Redis connection pool exhaustion', latency: '28ms' },
        { node: 'Tool Invocation', action: 'AI agent scaled Redis read replicas and patched max_connections pool in Helm', latency: '40ms' },
        { node: 'Automated Healthcheck', action: 'Executed synthetic HTTP transaction test across all 4 regions', latency: '30ms' },
        { node: 'Business Result', action: 'Incident resolved automatically; incident postmortem published to Jira', latency: '10ms' },
      ],
      output: 'P0 outage averted in 111ms total duration. System health restored with zero engineering escalation.',
    },
  ];

  const activeFlow = workflows.find((w) => w.id === selectedDemo) || workflows[0];

  const handleTriggerSim = () => {
    setIsSimulating(true);
    setSimStep(0);
    const interval = setInterval(() => {
      setSimStep((prev) => {
        if (prev >= 4) {
          clearInterval(interval);
          setIsSimulating(false);
          return 4;
        }
        return prev + 1;
      });
    }, 450);
  };

  const aiPillars = [
    { title: 'AI Agents', desc: 'Autonomous goal-seeking systems executing complex multi-step workflows.' },
    { title: 'RAG Systems', desc: 'Grounding LLMs in your proprietary databases with sub-second vector search.' },
    { title: 'AI Chatbots & Copilots', desc: 'Context-aware conversational interfaces trained on enterprise knowledge.' },
    { title: 'Voice AI & Audio', desc: 'Ultra-low latency bidirectional voice streaming and native real-time conversation.' },
    { title: 'Document Intelligence', desc: 'Extracting structured data from PDFs, scanned contracts, and complex schemas.' },
    { title: 'AI Automation', desc: 'Connecting intelligence directly to your CRMs, ERPs, and operational databases.' },
    { title: 'Custom LLM Applications', desc: 'Domain-adapted models fine-tuned for high precision and zero hallucinations.' },
    { title: 'AI-Powered SaaS', desc: 'Complete software products built natively around AI at their core architecture.' },
  ];

  return (
    <section id="ai-architecture" className="relative py-28 bg-slate-950 overflow-hidden border-t border-white/[0.05]">
      
      {/* Background radial glowing light */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            THE PRODUCT LAYER
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            AI Isn't the Future.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-indigo-400">
              It's the Product Layer.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            We don't do gimmicky wrapper apps. SpiderLap builds practical, deterministic, autonomous AI systems embedded directly into core business operations.
          </p>
        </div>

        {/* Premium AI Digital Brain / Neural Matrix Visual */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-slate-900/90 border border-cyan-500/40 shadow-[0_0_40px_rgba(6,182,212,0.15)] relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-md">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase font-semibold mb-2">
                <Radio className="w-4 h-4 animate-pulse text-cyan-400" />
                <span>Autonomous Cognition Architecture</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                AI → Data → Intelligence → Automation
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                SpiderLap maps raw multi-modal inputs into semantic vector clusters, applies domain-tuned agent reasoning, and executes deterministic tool actions across your corporate ecosystem with sub-50ms latency.
              </p>
            </div>

            {/* Visual Animated Neural Network Matrix SVG */}
            <div className="w-full md:w-auto flex-1 max-w-lg p-3 rounded-xl bg-slate-950/80 border border-white/10 relative">
              <svg className="w-full h-24 sm:h-28" viewBox="0 0 400 100">
                <defs>
                  <linearGradient id="aiPulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>

                {/* Connecting Lines */}
                <line x1="50" y1="50" x2="150" y2="30" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="50" y1="50" x2="150" y2="70" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="150" y1="30" x2="250" y2="50" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="2" />
                <line x1="150" y1="70" x2="250" y2="50" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="2" />
                <line x1="250" y1="50" x2="350" y2="50" stroke="rgba(16, 185, 129, 0.6)" strokeWidth="2" />

                {/* Node 1: AI */}
                <circle cx="50" cy="50" r="16" fill="#0c1829" stroke="#06b6d4" strokeWidth="2" />
                <circle cx="50" cy="50" r="6" fill="#06b6d4" className="animate-pulse" />
                <text x="50" y="80" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="monospace">AI Input</text>

                {/* Node 2A & 2B: Data Vectors */}
                <circle cx="150" cy="30" r="12" fill="#0c1829" stroke="#6366f1" strokeWidth="2" />
                <circle cx="150" cy="30" r="4" fill="#6366f1" />
                <text x="150" y="16" textAnchor="middle" fill="#818cf8" fontSize="9" fontFamily="monospace">Vectors</text>

                <circle cx="150" cy="70" r="12" fill="#0c1829" stroke="#6366f1" strokeWidth="2" />
                <circle cx="150" cy="70" r="4" fill="#6366f1" />
                <text x="150" y="94" textAnchor="middle" fill="#818cf8" fontSize="9" fontFamily="monospace">RAG Graph</text>

                {/* Node 3: Intelligence Reasoning */}
                <circle cx="250" cy="50" r="16" fill="#0c1829" stroke="#8b5cf6" strokeWidth="2" />
                <circle cx="250" cy="50" r="7" fill="#8b5cf6" className="animate-pulse" />
                <text x="250" y="80" textAnchor="middle" fill="#c084fc" fontSize="10" fontFamily="monospace">Intelligence</text>

                {/* Node 4: Automation Result */}
                <circle cx="350" cy="50" r="16" fill="#0c1829" stroke="#10b981" strokeWidth="2" />
                <circle cx="350" cy="50" r="7" fill="#10b981" />
                <text x="350" y="80" textAnchor="middle" fill="#34d399" fontSize="10" fontFamily="monospace">Automation</text>
              </svg>

              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 px-2 pt-1 border-t border-white/5">
                <span>Signal Propagation: 12ms</span>
                <span className="text-emerald-400">Zero Hallucination Gate Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Stage Visual Architecture Flow Diagram */}
        <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-xl relative overflow-hidden">
          
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-6 flex items-center gap-2">
            <Network className="w-4 h-4" />
            <span>SpiderLap Neural Architecture Flow (2026 Production Standard)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            
            {/* Step 1: User */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 flex flex-col justify-between relative group hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-slate-500 font-semibold">STAGE 01</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">User & Event</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Natural language query, webhook event, or batch trigger.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-cyan-400">
                Input Ingestion
              </div>
            </div>

            {/* Step 2: AI Core */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30 flex flex-col justify-between relative group hover:border-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-cyan-400 font-semibold">STAGE 02</span>
                <Bot className="w-4 h-4 text-cyan-400 animate-pulse" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">AI Agent Core</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Reasoning, planning, context window routing, and intent classification.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-cyan-400">
                Cognitive Engine
              </div>
            </div>

            {/* Step 3: Knowledge / RAG */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 flex flex-col justify-between relative group hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-slate-500 font-semibold">STAGE 03</span>
                <Database className="w-4 h-4 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Knowledge & RAG</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Vector database retrieval, semantic indexing, and private data isolation.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-indigo-400">
                Zero Hallucination
              </div>
            </div>

            {/* Step 4: Automation */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 flex flex-col justify-between relative group hover:border-purple-500/40 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-slate-500 font-semibold">STAGE 04</span>
                <Workflow className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Automation Engine</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tool execution, API mutations, database writes, and notification dispatches.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-purple-400">
                Deterministic Execution
              </div>
            </div>

            {/* Step 5: Business Result */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/30 flex flex-col justify-between relative group hover:border-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-emerald-400 font-semibold">STAGE 05</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Business Result</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Measurable revenue increase, hours saved, and real-time execution.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-emerald-400">
                Target Impact
              </div>
            </div>

          </div>
        </div>

        {/* Live Interactive Agent Simulation Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          <div className="lg:col-span-5">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
              INTERACTIVE AGENT DEMO
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Watch Autonomous Agents Execute Enterprise Tasks
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Select an enterprise scenario below to simulate how SpiderLap's autonomous architecture processes unstructured natural queries into production outcomes.
            </p>

            {/* Scenario Selector Pills */}
            <div className="space-y-2 mb-6">
              {workflows.map((flow) => (
                <button
                  key={flow.id}
                  onClick={() => {
                    setSelectedDemo(flow.id);
                    setSimStep(flow.steps.length - 1);
                  }}
                  className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                    selectedDemo === flow.id
                      ? 'bg-cyan-500/15 border-cyan-500/40 text-white shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                      : 'bg-slate-900/40 border-white/5 text-slate-400 hover:bg-slate-900/80 hover:text-slate-200'
                  }`}
                >
                  <div>
                    <div className="text-sm font-semibold text-white">{flow.name}</div>
                    <div className="text-[11px] font-mono text-cyan-400">{flow.category}</div>
                  </div>
                  <ArrowRight className={`w-4 h-4 ${selectedDemo === flow.id ? 'text-cyan-300' : 'text-slate-600'}`} />
                </button>
              ))}
            </div>

            <button
              onClick={handleTriggerSim}
              disabled={isSimulating}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] disabled:opacity-50 transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>{isSimulating ? 'Simulating Neural Pipeline...' : 'Run Live Simulation'}</span>
            </button>
          </div>

          {/* Terminal / Live Execution Console */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-950 border border-white/10 p-5 font-mono text-xs shadow-2xl overflow-hidden relative">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] ml-1 text-slate-300">spiderlap-agent-runner://{activeFlow.id}</span>
                </div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <Activity className="w-3 h-3" />
                  <span>ONLINE (LATENCY &lt; 45MS)</span>
                </div>
              </div>

              {/* Input Prompt */}
              <div className="p-3 rounded-lg bg-slate-900/70 border border-white/5 mb-4">
                <span className="text-slate-500 uppercase text-[10px] font-bold block mb-1">PROMPT / PAYLOAD</span>
                <p className="text-slate-200">{activeFlow.inputPrompt}</p>
              </div>

              {/* Execution Steps */}
              <div className="space-y-2 mb-4">
                {activeFlow.steps.map((step, idx) => {
                  const isVisible = idx <= simStep;
                  return (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-lg border transition-all duration-300 flex items-center justify-between ${
                        isVisible
                          ? 'bg-slate-900/50 border-cyan-500/30 opacity-100'
                          : 'bg-transparent border-transparent opacity-20'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-cyan-400 font-bold">&gt;</span>
                        <span className="font-semibold text-slate-200">[{step.node}]</span>
                        <span className="text-slate-400">{step.action}</span>
                      </div>
                      <span className="text-slate-500 text-[10px] flex-shrink-0 ml-2">{step.latency}</span>
                    </div>
                  );
                })}
              </div>

              {/* Outcome Output */}
              <div className="p-3.5 rounded-lg bg-emerald-950/20 border border-emerald-500/30">
                <span className="text-emerald-400 uppercase text-[10px] font-bold block mb-1">
                  EXECUTION OUTCOME:
                </span>
                <p className="text-emerald-200 font-sans text-xs leading-relaxed">
                  {activeFlow.output}
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* 8 AI Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {aiPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/40 border border-white/5 hover:border-cyan-500/30 transition-all hover:bg-slate-900/70"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">{pillar.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
