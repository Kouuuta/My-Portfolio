import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const {
    theme
  } = useTheme();
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    class Particle {
      x: number;
      y: number;
      size: number;
      baseSize: number;
      speedX: number;
      speedY: number;
      color: string;
      shape: 'circle' | 'square' | 'triangle';
      opacity: number;
      growFactor: number;
      maxSize: number;
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseSize = Math.random() * 4 + 1;
        this.size = this.baseSize;
        this.maxSize = this.baseSize * 3;
        this.speedX = Math.random() * 1.5 - 0.75;
        this.speedY = Math.random() * 1.5 - 0.75;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.growFactor = 0;
        const shapes: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle'];
        this.shape = shapes[Math.floor(Math.random() * shapes.length)];
        if (theme === 'dark') {
          const colors = [`rgba(16, 185, 129, ${this.opacity})`, `rgba(5, 150, 105, ${this.opacity})`, `rgba(4, 120, 87, ${this.opacity})`, `rgba(52, 211, 153, ${this.opacity})`, `rgba(110, 231, 183, ${this.opacity})`];
          this.color = colors[Math.floor(Math.random() * colors.length)];
        } else {
          const colors = [`rgba(16, 185, 129, ${this.opacity * 0.7})`, `rgba(5, 150, 105, ${this.opacity * 0.7})`, `rgba(52, 211, 153, ${this.opacity * 0.7})`, `rgba(110, 231, 183, ${this.opacity * 0.7})`, `rgba(167, 243, 208, ${this.opacity * 0.7})`];
          this.color = colors[Math.floor(Math.random() * colors.length)];
        }
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width + 50) this.x = -50;else if (this.x < -50) this.x = canvas.width + 50;
        if (this.y > canvas.height + 50) this.y = -50;else if (this.y < -50) this.y = canvas.height + 50;
        if (isMouseMoving) {
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 200;
          if (distance < maxDistance) {
            this.growFactor = (1 - distance / maxDistance) * 2;
            this.size = this.baseSize + this.growFactor * (this.maxSize - this.baseSize);
            const angle = Math.atan2(dy, dx);
            const pushFactor = (1 - distance / maxDistance) * 0.5;
            this.x -= Math.cos(angle) * pushFactor;
            this.y -= Math.sin(angle) * pushFactor;
          } else {
            this.growFactor = Math.max(0, this.growFactor - 0.02);
            this.size = this.baseSize + this.growFactor * (this.maxSize - this.baseSize);
          }
        } else {
          this.growFactor = Math.max(0, this.growFactor - 0.01);
          this.size = this.baseSize + this.growFactor * (this.maxSize - this.baseSize);
        }
      }
      draw() {
        if (!ctx) return;
        ctx.globalAlpha = this.opacity + this.growFactor * 0.3;
        ctx.fillStyle = this.color;
        if (this.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.shape === 'square') {
          ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
        } else if (this.shape === 'triangle') {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y - this.size);
          ctx.lineTo(this.x + this.size, this.y + this.size);
          ctx.lineTo(this.x - this.size, this.y + this.size);
          ctx.closePath();
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      }
    }
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(canvas.width * canvas.height / 10000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    const connectParticles = () => {
      if (!ctx) return;
      const maxDistance = 200;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < maxDistance) {
            const baseOpacity = 1 - distance / maxDistance;
            const mouseInfluence = (particles[i].growFactor + particles[j].growFactor) * 0.5;
            const opacity = baseOpacity * (0.15 + mouseInfluence * 0.3);
            const gradient = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
            if (theme === 'dark') {
              gradient.addColorStop(0, `rgba(16, 185, 129, ${opacity})`);
              gradient.addColorStop(1, `rgba(52, 211, 153, ${opacity})`);
            } else {
              gradient.addColorStop(0, `rgba(5, 150, 105, ${opacity})`);
              gradient.addColorStop(1, `rgba(16, 185, 129, ${opacity})`);
            }
            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1 + (particles[i].growFactor + particles[j].growFactor) * 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      connectParticles();
      if (isMouseMoving) {
        setTimeout(() => {
          isMouseMoving = false;
        }, 100);
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
        isMouseMoving = true;
      }
    };
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    resizeCanvas();
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);
  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" />;
}