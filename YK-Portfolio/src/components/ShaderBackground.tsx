import { useRef, useEffect } from "react";

export default function SmokeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas size
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resizeCanvas();

    // Noise function for organic movement
    const noise = (x: number, y: number, t: number) => {
      return (
        Math.sin(x * 0.01 + t) * Math.cos(y * 0.01 + t * 0.5) +
        Math.sin(x * 0.005 + t * 0.7) * Math.cos(y * 0.008 + t * 0.3)
      );
    };

    // Enhanced noise for more complexity
    const complexNoise = (x: number, y: number, t: number) => {
      return (
        noise(x, y, t) +
        noise(x * 2, y * 2, t * 1.5) * 0.5 +
        noise(x * 4, y * 4, t * 2) * 0.25
      );
    };

    // Create flowing smoke effect
    const drawSmoke = () => {
      // Clear with black background
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      const time = timeRef.current * 0.001;

      // Create multiple layers of smoke
      for (let layer = 0; layer < 4; layer++) {
        ctx.save();

        // Set blend mode for additive effect
        ctx.globalCompositeOperation = layer === 0 ? "source-over" : "screen";

        const layerScale = 1 + layer * 0.3;
        const layerSpeed = 1 + layer * 0.2;
        const layerAlpha = (4 - layer) / 8;

        // Create flowing paths
        for (let i = 0; i < 8; i++) {
          const pathOffset = (i / 8) * Math.PI * 2;
          const pathX =
            width * 0.5 +
            Math.cos(pathOffset + time * layerSpeed) * width * 0.3;
          const pathY =
            height * 0.5 +
            Math.sin(pathOffset + time * layerSpeed * 0.7) * height * 0.2;

          ctx.beginPath();

          // Create flowing curve
          for (let t = 0; t < 1; t += 0.01) {
            const angle = pathOffset + time * layerSpeed + t * Math.PI * 4;
            const radius = 100 + Math.sin(t * Math.PI * 6 + time * 2) * 50;

            const noiseValue = complexNoise(
              pathX + Math.cos(angle) * radius * layerScale,
              pathY + Math.sin(angle) * radius * layerScale,
              time + layer
            );

            const x =
              pathX + (Math.cos(angle) * radius + noiseValue * 20) * layerScale;
            const y =
              pathY + (Math.sin(angle) * radius + noiseValue * 15) * layerScale;

            if (t === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }

          // Create gradient for smoke effect
          const gradient = ctx.createRadialGradient(
            pathX,
            pathY,
            0,
            pathX,
            pathY,
            200 * layerScale
          );

          const intensity = 0.6 + Math.sin(time + pathOffset) * 0.2;
          gradient.addColorStop(
            0,
            `rgba(255, 255, 255, ${layerAlpha * intensity})`
          );
          gradient.addColorStop(
            0.3,
            `rgba(200, 200, 200, ${layerAlpha * intensity * 0.7})`
          );
          gradient.addColorStop(
            0.6,
            `rgba(100, 100, 100, ${layerAlpha * intensity * 0.4})`
          );
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 15 + layer * 5;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.stroke();
        }

        ctx.restore();
      }

      // Add flowing tendrils
      ctx.save();
      ctx.globalCompositeOperation = "screen";

      for (let i = 0; i < 12; i++) {
        const tendrilOffset = (i / 12) * Math.PI * 2;
        const centerX =
          width * 0.5 + Math.cos(time + tendrilOffset) * width * 0.2;
        const centerY =
          height * 0.5 + Math.sin(time + tendrilOffset * 0.7) * height * 0.15;

        ctx.beginPath();

        for (let t = 0; t < 1; t += 0.02) {
          const noiseX =
            complexNoise(centerX + t * 200, centerY, time + i) * 30;
          const noiseY =
            complexNoise(centerX, centerY + t * 200, time + i) * 30;

          const x =
            centerX + t * (Math.cos(tendrilOffset + time) * 150) + noiseX;
          const y =
            centerY + t * (Math.sin(tendrilOffset + time) * 150) + noiseY;

          if (t === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        const alpha = (1 - i / 12) * 0.3;
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = 3;
        ctx.stroke();
      }

      ctx.restore();

      // Add subtle particles
      for (let i = 0; i < 50; i++) {
        const particleX = width * 0.5 + Math.cos(time * 0.5 + i) * width * 0.4;
        const particleY =
          height * 0.5 + Math.sin(time * 0.3 + i) * height * 0.3;

        const noiseOffset = complexNoise(particleX, particleY, time) * 20;
        const finalX = particleX + noiseOffset;
        const finalY = particleY + noiseOffset;

        const alpha = (Math.sin(time + i) + 1) * 0.1;
        const size = 2 + Math.sin(time * 2 + i) * 1;

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(finalX, finalY, size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Animation loop
    const animate = () => {
      timeRef.current += 4; // ~60fps
      drawSmoke();
      animationRef.current = requestAnimationFrame(animate);
    };

    // Event listeners
    window.addEventListener("resize", resizeCanvas);

    // Start animation
    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "150vw",
        height: "150vh",
        background: "#000000",
        pointerEvents: "none",
      }}
    />
  );
}
