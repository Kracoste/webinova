"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface WaveFieldProps {
  className?: string;
}

/**
 * Champ de particules en perspective 3D (canvas 2D, sans librairie).
 * Une grille de points posée sur un plan, animée par une onde,
 * projetée avec une caméra simple. Se met en pause hors écran,
 * et reste statique si l'utilisateur préfère réduire les animations.
 */
export function WaveField({ className }: WaveFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let raf = 0;
    let running = false;
    let time = 0;
    let last = 0;
    // Légère influence de la souris sur la phase de l'onde
    let pointerX = 0;
    let pointerTarget = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const small = width < 768;
      cols = small ? 36 : 72;
      rows = small ? 20 : 30;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const fov = 380;
      const cx = width / 2;
      const horizon = height * 0.05;
      const planeY = height * 0.95;
      const spanX = width * 2.2;
      const depth = 1500;

      pointerX += (pointerTarget - pointerX) * 0.04;

      for (let j = rows - 1; j >= 0; j--) {
        const z = (j / (rows - 1)) * depth;
        const scale = fov / (fov + z);
        const depthFade = 1 - j / rows;

        for (let i = 0; i < cols; i++) {
          const u = i / (cols - 1) - 0.5;
          const x = u * spanX;
          const wave =
            Math.sin(i * 0.19 + time * 1.1 + pointerX * 1.5) * 26 +
            Math.cos(j * 0.28 + time * 0.8) * 22 +
            Math.sin((i + j) * 0.09 + time * 0.6) * 14;

          const sx = cx + x * scale;
          const sy = horizon + (planeY - wave) * scale;
          if (sx < -10 || sx > width + 10) continue;

          const crest = (wave + 62) / 124; // 0..1
          const alpha = (0.12 + crest * 0.75) * depthFade;
          const r = Math.max(0.5, 1.9 * scale + crest * 0.8 * scale);

          // Dégradé indigo -> cyan selon la hauteur de la vague
          const red = Math.round(110 - crest * 60);
          const green = Math.round(125 + crest * 90);
          const blue = 255;

          ctx.fillStyle = `rgba(${red},${green},${blue},${alpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(sx, sy, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const loop = (now: number) => {
      const delta = last ? Math.min(now - last, 50) : 16;
      last = now;
      time += delta * 0.00055;
      draw();
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduceMotion) return;
      running = true;
      last = 0;
      raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    draw();

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !document.hidden) start();
      else stop();
    });
    observer.observe(canvas);

    const onVisibility = () => (document.hidden ? stop() : start());
    const onPointer = (e: PointerEvent) => {
      pointerTarget = e.clientX / window.innerWidth - 0.5;
    };
    const onResize = () => {
      resize();
      if (!running) draw();
    };

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none block h-full w-full", className)}
      aria-hidden="true"
    />
  );
}
