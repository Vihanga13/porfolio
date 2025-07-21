import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  glowIntensity: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars
    const initStars = () => {
      starsRef.current = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 15000); // Reduced density
      
      for (let i = 0; i < numStars; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5, // Smaller stars
          opacity: Math.random() * 0.6 + 0.3, // Less variation
          twinkleSpeed: Math.random() * 0.01 + 0.005, // Slower twinkle
          glowIntensity: Math.random() * 0.3 + 0.2, // Reduced glow
        });
      }
    };

    initStars();

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.016; // ~60fps
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      starsRef.current.forEach((star, index) => {
        // Update twinkle
        star.opacity = 0.3 + Math.sin(time * star.twinkleSpeed + index) * 0.7;
        
        // Draw glow effect
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 3
        );
        
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity * star.glowIntensity})`);
        gradient.addColorStop(0.4, `rgba(173, 216, 230, ${star.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(
          star.x - star.size * 3,
          star.y - star.size * 3,
          star.size * 6,
          star.size * 6
        );
        
        // Draw star core
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Add some floating particles
      const numParticles = 8; // Reduced particles
      for (let i = 0; i < numParticles; i++) {
        const x = (Math.sin(time * 0.3 + i) * 80) + (canvas.width / 2); // Slower movement
        const y = (Math.cos(time * 0.2 + i) * 40) + (canvas.height / 2); // Slower movement
        const opacity = 0.05 + Math.sin(time * 1.5 + i) * 0.05; // More subtle
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 15); // Smaller radius
        gradient.addColorStop(0, `rgba(99, 102, 241, ${opacity})`); // Softer color
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x - 15, y - 15, 30, 30);
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%)',
      }}
    />
  );
}
