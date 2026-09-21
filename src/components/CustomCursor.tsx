import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = !!target.closest(
          'a, button, input, select, textarea, [role="button"], .interactive-card, .interactive-tab'
        );
        setIsHovered(isClickable);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Trailing ring lerp loop
  useEffect(() => {
    if (isTouch) return;

    let frameId: number;
    const lerpSpeed = 0.18;

    const followCursor = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * lerpSpeed,
        y: prev.y + (position.y - prev.y) * lerpSpeed,
      }));
      frameId = requestAnimationFrame(followCursor);
    };

    frameId = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(frameId);
  }, [position, isTouch]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Small sharp inner cursor */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8] transition-opacity duration-150"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
        }}
      />
      {/* Outer trailing aura */}
      <div
        className={`pointer-events-none fixed top-0 left-0 z-50 rounded-full border transition-all duration-300 ease-out ${
          isHovered
            ? 'h-10 w-10 border-cyan-400/80 bg-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
            : 'h-6 w-6 border-white/30 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x - (isHovered ? 20 : 12)}px, ${
            trailingPos.y - (isHovered ? 20 : 12)
          }px, 0)`,
        }}
      />
    </>
  );
};

