import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  color: string;
}

export const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 180,
    };

    const colors = ['#06b6d4', '#6366f1', '#8b5cf6', '#38bdf8'];
    const particleCount = Math.min(Math.floor((width * height) / 14000), 95);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.8,
        baseAlpha: Math.random() * 0.5 + 0.25,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle ambient glow near mouse
      if (mouse.x > 0 && mouse.y > 0) {
        const mouseGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius * 1.2
        );
        mouseGlow.addColorStop(0, 'rgba(6, 182, 212, 0.07)');
        mouseGlow.addColorStop(0.5, 'rgba(99, 102, 241, 0.03)');
        mouseGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = mouseGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius * 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update & Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off bounds
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse attraction / interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distToMouse < mouse.radius) {
          const force = (1 - distToMouse / mouse.radius) * 0.02;
          p.x += dx * force;
          p.y += dy * force;

          // Connect to mouse
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - distToMouse / mouse.radius) * 0.25})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        // Connect with nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distNodes = Math.hypot(p.x - p2.x, p.y - p2.y);
          const maxDistance = 120;

          if (distNodes < maxDistance) {
            const alpha = (1 - distNodes / maxDistance) * 0.2;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-60 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
};

