import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, TrendingUp, ShieldCheck, Activity, Users, Globe } from 'lucide-react';

interface StatCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
}

const StatCounter: React.FC<StatCounterProps> = ({
  end,
  prefix = '',
  suffix = '',
  duration = 2000,
  decimals = 0,
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Smooth easeOutQuad
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      const currentVal = easedProgress * end;

      setCount(currentVal);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return (
    <div ref={elementRef} className="font-mono font-extrabold tracking-tight">
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </div>
  );
};

export const StatisticsSection: React.FC = () => {
  const stats = [
    {
      value: 20,
      prefix: '',
      suffix: '+',
      label: 'Digital Solutions Engineered',
      subtext: 'From AI tools to high-throughput platforms',
      icon: Activity,
      color: 'text-cyan-400',
    },
    {
      value: 3,
      prefix: '',
      suffix: '+',
      label: 'SaaS Platforms Launched',
      subtext: 'Multi-tenant systems with subscription monetization',
      icon: Globe,
      color: 'text-indigo-400',
    },
    {
      value: 15,
      prefix: '',
      suffix: '+',
      label: 'AI & Agent Integrations',
      subtext: 'RAG, custom models, and autonomous swarms',
      icon: TrendingUp,
      color: 'text-sky-400',
    },
    {
      value: 99.99,
      prefix: '',
      suffix: '%',
      decimals: 2,
      label: 'Production Uptime SLA',
      subtext: 'Zero-downtime rolling deploys & 24/7 telemetry',
      icon: ShieldCheck,
      color: 'text-emerald-400',
    },
  ];

  return (
    <section className="relative py-20 bg-slate-950/90 border-y border-white/[0.08] overflow-hidden">
      
      {/* Background glow strip */}
      <div className="absolute inset-0 bg-radial-gradient-hero opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            PROVEN TRACK RECORD
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Precision by the Numbers.
          </h2>
        </div>

        {/* 5 Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col justify-between group hover:bg-slate-900/80"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-cyan-300 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="w-2 h-2 rounded-full bg-cyan-400/40 group-hover:bg-cyan-400 transition-colors" />
                  </div>

                  <div className={`text-3xl sm:text-4xl ${stat.color} mb-1.5`}>
                    <StatCounter
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      decimals={stat.decimals || 0}
                    />
                  </div>

                  <div className="text-xs sm:text-sm font-bold text-white mb-1">
                    {stat.label}
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-snug mt-2 pt-2 border-t border-white/5">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

