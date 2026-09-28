import React, { useEffect, useRef, useState } from 'react';

export const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  // Mouse spotlight tracker
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating canvas particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle pool
    const particleCount = 42;
    const colors = [
      'rgba(59, 130, 246, 0.6)',  // Electric Blue
      'rgba(139, 92, 246, 0.6)', // Neon Purple
      'rgba(6, 182, 212, 0.6)',  // Cyan
      'rgba(16, 185, 129, 0.5)', // Emerald
      'rgba(245, 158, 11, 0.5)', // Orange
    ];

    interface Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      baseAlpha: number;
      pulseSpeed: number;
      pulseAngle: number;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35 - 0.1,
        baseAlpha: Math.random() * 0.5 + 0.25,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseAngle: Math.random() * Math.PI * 2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw each particle with subtle glow
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.pulseAngle += p.pulseSpeed;

        // Wrap around bounds
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        const currentAlpha = p.baseAlpha + Math.sin(p.pulseAngle) * 0.18;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(/[\d.]+\)$/g, `${Math.max(0.1, currentAlpha)})`);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Pure Black Base Background */}
      <div className="absolute inset-0 bg-[#000000]" />

      {/* 2. Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-dark-grid opacity-60" />

      {/* 3. Radial Vignette (soft darkening at corners) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.75)_100%)]" />

      {/* 4. Animated Aurora Glow Clouds */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-600/10 via-purple-600/15 to-transparent blur-[140px] animate-aurora" />
      <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-purple-600/15 via-cyan-500/10 to-transparent blur-[140px] animate-aurora" style={{ animationDelay: '-11s' }} />
      <div className="absolute -bottom-40 left-1/4 w-[700px] h-[500px] rounded-full bg-gradient-to-t from-blue-600/10 via-emerald-500/10 to-transparent blur-[160px] animate-aurora" style={{ animationDelay: '-6s' }} />

      {/* 5. Moving Light Streaks */}
      <div className="absolute top-1/4 -left-1/2 w-[200%] h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent animate-streak-1" />
      <div className="absolute top-2/3 -left-1/2 w-[200%] h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-streak-2" />

      {/* 6. Floating Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80" />

      {/* 7. Interactive Mouse Glow Spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.08), rgba(139, 92, 246, 0.04), transparent 70%)`,
        }}
      />
    </div>
  );
};
