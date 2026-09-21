import React, { useState, useRef } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Activity, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2,
  Zap,
  TrendingUp,
  Database,
  Play,
  Bot,
  Network
} from 'lucide-react';

interface HeroSectionProps {
  onOpenProjectModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenProjectModal }) => {
  const [activeHeroTab, setActiveHeroTab] = useState<'neural' | 'telemetry' | 'code'>('neural');
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 14, y: -y * 14 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-purple-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* 2026 Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)] group">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-xs font-mono font-medium text-cyan-300 tracking-wide">
                NEXT-GEN 2026 TECHNOLOGY STUDIO
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-xs font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                From Idea to AI-Powered Product
              </span>
            </div>

            {/* Dominant Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              We Build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 drop-shadow-[0_0_35px_rgba(6,182,212,0.3)]">
                Digital Products
              </span>{' '}
              That Move Businesses Forward.
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
              SpiderLap creates <span className="text-white font-medium">AI-powered products</span>,{' '}
              <span className="text-white font-medium">SaaS platforms</span>, scalable web applications, and digital systems designed to turn ambitious ideas into market-dominating technology.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenProjectModal}
                className="relative group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_45px_rgba(6,182,212,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-cyan-300/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-md"
              >
                <span>Explore Solutions</span>
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </a>
            </div>

            {/* Trust Indicators / Highlights */}
            <div className="mt-12 pt-8 border-t border-white/[0.08] w-full grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">100%</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Production-Ready Code</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 tracking-tight">&lt; 14ms</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Edge AI Latency</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-indigo-400 tracking-tight">Zero-Debt</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Cloud Architecture</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Digital Product Visualization */}
          <div
            className="lg:col-span-5 perspective-1000 flex justify-center items-center relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Animated Floating Satellite Card 1: Top Right (AI Agent Swarm) */}
            <div className="absolute -top-7 -right-4 z-20 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 shadow-[0_10px_30px_rgba(6,182,212,0.3)] backdrop-blur-xl animate-float">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-cyan-300 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  COGNITA SWARM
                </div>
                <div className="text-[11px] text-white font-medium">32 Autonomous Agents Active</div>
              </div>
            </div>

            {/* Animated Floating Satellite Card 2: Bottom Right (Real-time Growth) */}
            <div className="absolute -bottom-6 -right-5 z-20 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-indigo-500/40 shadow-[0_10px_30px_rgba(99,102,241,0.3)] backdrop-blur-xl animate-float-slow">
              <div className="w-7 h-7 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-300">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-indigo-300 font-bold">SAAS TELEMETRY</div>
                <div className="text-[11px] text-white font-medium">+34.8% MoM MRR Growth</div>
              </div>
            </div>

            {/* Central 3D Interactive Card */}
            <div
              ref={cardRef}
              style={{
                transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="relative w-full max-w-lg rounded-2xl p-1 bg-gradient-to-b from-cyan-500/30 via-indigo-500/20 to-transparent border border-white/15 shadow-[0_20px_60px_-15px_rgba(6,182,212,0.3)] backdrop-blur-2xl z-10"
            >
              {/* Inner Dashboard Card */}
              <div className="bg-slate-950/90 rounded-xl p-5 border border-white/10 overflow-hidden relative">
                
                {/* Window Top Controls */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                      spiderlap.core.sys
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded-full border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono text-emerald-400">ENGINE ACTIVE</span>
                  </div>
                </div>

                {/* Switchable Interactive Tabs */}
                <div className="grid grid-cols-3 gap-1 p-1 bg-slate-900/80 rounded-lg border border-white/5 mb-4">
                  <button
                    onClick={() => setActiveHeroTab('neural')}
                    className={`text-xs py-1.5 px-2 rounded-md font-medium transition-all ${
                      activeHeroTab === 'neural'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Neural Engine
                  </button>
                  <button
                    onClick={() => setActiveHeroTab('telemetry')}
                    className={`text-xs py-1.5 px-2 rounded-md font-medium transition-all ${
                      activeHeroTab === 'telemetry'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    SaaS Metrics
                  </button>
                  <button
                    onClick={() => setActiveHeroTab('code')}
                    className={`text-xs py-1.5 px-2 rounded-md font-medium transition-all ${
                      activeHeroTab === 'code'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    API Stream
                  </button>
                </div>

                {/* Tab 1: Neural Nodes */}
                {activeHeroTab === 'neural' && (
                  <div className="space-y-3">
                    {/* Visual Neural Network Flow Wave */}
                    <div className="p-3.5 rounded-lg bg-slate-900/70 border border-cyan-500/20 relative overflow-hidden">
                      <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
                        <span className="flex items-center gap-1.5 text-cyan-400">
                          <Activity className="w-3.5 h-3.5 animate-pulse" />
                          RAG Pipeline & Inference
                        </span>
                        <span className="text-emerald-400">99.98% Accuracy</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[11px] font-mono">
                          <span className="text-slate-300">Semantic Vector Query</span>
                          <span className="text-cyan-400 font-semibold">2,048 dims</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-full w-[88%] animate-pulse" />
                        </div>
                      </div>

                      {/* Mini Neural Nodes Visual Grid */}
                      <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <Network className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Vector Cluster: Qdrant-Edge-01</span>
                        </div>
                        <span className="text-cyan-300">&lt;12ms Response</span>
                      </div>
                    </div>

                    {/* Active Nodes Matrix */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-3 rounded-lg bg-slate-900/50 border border-white/5">
                        <span className="text-[10px] uppercase font-mono text-slate-400">Autonomous Agents</span>
                        <div className="text-lg font-bold text-white font-mono flex items-center justify-between mt-1">
                          <span>32 Active</span>
                          <Zap className="w-4 h-4 text-amber-400" />
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900/50 border border-white/5">
                        <span className="text-[10px] uppercase font-mono text-slate-400">Inference Throughput</span>
                        <div className="text-lg font-bold text-cyan-300 font-mono flex items-center justify-between mt-1">
                          <span>18.4k req/s</span>
                          <TrendingUp className="w-4 h-4 text-cyan-400" />
                        </div>
                      </div>
                    </div>

                    {/* Agent Live Message Simulation */}
                    <div className="p-3 rounded-lg bg-slate-950/80 border border-white/10 font-mono text-[11px] text-slate-300">
                      <div className="text-cyan-400 font-semibold flex items-center gap-1 mb-1">
                        <Play className="w-3 h-3 fill-cyan-400" /> Agent Task Execution:
                      </div>
                      <p className="text-slate-400 leading-relaxed">
                        &gt; Synthesizing multi-tenant billing schema... <br />
                        &gt; Embedding vectors synced to Qdrant cluster... <br />
                        &gt; Deploying container cluster to AWS us-east-1 <span className="text-emerald-400">[READY]</span>
                      </p>
                    </div>
                  </div>
                )}

                {/* Tab 2: SaaS Telemetry */}
                {activeHeroTab === 'telemetry' && (
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-lg bg-slate-900/60 border border-white/5">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-slate-400 font-mono">Monthly Recurring Revenue</span>
                        <span className="text-xs font-semibold text-emerald-400">+34.8% MoM</span>
                      </div>
                      <div className="text-2xl font-bold font-mono text-white">$148,920</div>
                      <div className="mt-3 flex items-end gap-1.5 h-12 pt-2">
                        {[40, 55, 48, 65, 78, 70, 85, 92, 88, 100].map((val, idx) => (
                          <div
                            key={idx}
                            style={{ height: `${val}%` }}
                            className="flex-1 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-sm hover:brightness-125 transition-all"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-lg bg-slate-900/50 border border-white/5">
                        <span className="text-[10px] font-mono text-slate-400">Total Active Tenants</span>
                        <div className="text-base font-bold text-white font-mono mt-0.5">1,240 Org</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/50 border border-white/5">
                        <span className="text-[10px] font-mono text-slate-400">Global Uptime SLA</span>
                        <div className="text-base font-bold text-emerald-400 font-mono mt-0.5">99.995%</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Code / API Stream */}
                {activeHeroTab === 'code' && (
                  <div className="p-3.5 rounded-lg bg-slate-950 font-mono text-[11px] leading-relaxed border border-white/10 text-slate-300">
                    <div className="text-slate-500 mb-2">// SpiderLap Autonomous Pipeline Hook</div>
                    <div>
                      <span className="text-purple-400">import</span> &#123; <span className="text-cyan-400">SpiderEngine</span>, <span className="text-cyan-400">RAGAgent</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-400">'@spiderlap/sdk'</span>;
                    </div>
                    <div className="mt-1">
                      <span className="text-purple-400">const</span> client = <span className="text-indigo-400">new</span> <span className="text-cyan-300">SpiderEngine</span>(&#123;
                    </div>
                    <div className="pl-3">
                      model: <span className="text-emerald-400">'gemini-2.0-flash'</span>,
                    </div>
                    <div className="pl-3">
                      cluster: <span className="text-emerald-400">'global-edge-2026'</span>,
                    </div>
                    <div className="pl-3">
                      telemetry: <span className="text-amber-400">true</span>
                    </div>
                    <div>&#125;);</div>
                    <div className="mt-2 text-cyan-400">
                      <span className="text-purple-400">await</span> client.<span className="text-indigo-300">deployAutonomousSystem</span>();
                    </div>
                    <div className="mt-2 flex items-center gap-1.5 text-[10px] text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Cluster connected with zero error rate</span>
                    </div>
                  </div>
                )}

                {/* Floating Micro Badge */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Database className="w-3.5 h-3.5 text-cyan-400" /> Multi-Tenant DB: Connected
                  </span>
                  <span className="text-slate-500">Node: us-east-2.spiderlap.net</span>
                </div>

              </div>

              {/* Floating Exterior Accent Card: Bottom Left */}
              <div className="absolute -bottom-5 -left-5 bg-slate-900/90 border border-cyan-500/30 rounded-xl p-3 shadow-xl backdrop-blur-xl hidden sm:flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Enterprise Grade</div>
                  <div className="text-[10px] text-slate-400">SOC2 & HIPAA Ready Architecture</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
