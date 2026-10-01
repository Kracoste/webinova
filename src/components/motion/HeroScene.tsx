"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

function BrowserFrame({
  src,
  url,
  alt,
  priority = false,
  className,
}: {
  src: string;
  url: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/10 bg-[#0d1430] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.04)]",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.04] px-3 py-2">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </span>
        <span className="ml-2 flex-1 truncate rounded-md bg-white/[0.06] px-2.5 py-0.5 text-[10px] text-white/50">
          {url}
        </span>
      </div>
      <div className="relative aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 520px, 85vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-[22px] border-[5px] border-[#1a2242] bg-black shadow-[0_40px_70px_-15px_rgba(0,0,0,0.8)]">
      <div className="relative aspect-[9/19]">
        <Image src={src} alt={alt} fill sizes="180px" className="object-cover object-top" />
      </div>
    </div>
  );
}

function Chip({
  icon,
  title,
  text,
  className,
  style,
}: {
  icon: IconName;
  title: string;
  text: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={cn("absolute", className)} style={style}>
      <div className="glass-dark flex items-center gap-3 rounded-2xl px-3.5 py-2.5 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)]">
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--color-primary),var(--color-accent))] text-white">
          <Icon name={icon} size={16} />
        </span>
        <span className="leading-tight">
          <span className="block text-[13px] font-semibold text-white">{title}</span>
          <span className="block text-[11px] text-white/55">{text}</span>
        </span>
      </div>
    </div>
  );
}

function Layer({
  children,
  z,
  className,
  floatDelay = 0,
  floatDuration = 7,
}: {
  children: ReactNode;
  z: number;
  className?: string;
  floatDelay?: number;
  floatDuration?: number;
}) {
  return (
    <div className={cn("absolute", className)} style={{ transform: `translate3d(0, 0, ${z}px)` }}>
      <div
        className="animate-float"
        style={{ animationDelay: `${floatDelay}s`, animationDuration: `${floatDuration}s` }}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * Scène 3D du hero : de vraies réalisations disposées en profondeur,
 * qui pivotent selon la position de la souris (ou se balancent seules au doigt).
 */
export function HeroScene() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduceMotion) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        stage.style.setProperty("--rx", (x * 16).toFixed(2));
        stage.style.setProperty("--ry", (-y * 10).toFixed(2));
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className="relative mx-auto aspect-[10/9] w-full max-w-[600px] [perspective:1800px]"
    >
      {/* Halo lumineux */}
      <div
        className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(91,123,255,0.45),rgba(109,93,252,0.15)_45%,transparent_70%)] blur-2xl"
        aria-hidden="true"
      />

      {/* Orbites 3D */}
      <div className="absolute inset-0 flex items-center justify-center preserve-3d" aria-hidden="true">
        <div
          className="absolute h-[108%] w-[108%] rounded-full border border-white/[0.09]"
          style={{ transform: "rotateX(72deg)", animation: "orbit 28s linear infinite" }}
        >
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-cyan)] shadow-[0_0_18px_4px_rgba(56,189,248,0.7)]" />
        </div>
        <div
          className="absolute h-[86%] w-[86%] rounded-full border border-dashed border-white/[0.07]"
          style={{ transform: "rotateX(64deg) rotateY(18deg)", animation: "orbit-rev 42s linear infinite" }}
        >
          <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-[var(--color-primary-light)] shadow-[0_0_14px_3px_rgba(91,123,255,0.8)]" />
        </div>
      </div>

      {/* Plateau 3D */}
      <div className="hero-rig absolute inset-0 preserve-3d">
        <Layer z={-160} className="right-0 top-[2%] w-[70%]" floatDelay={-2} floatDuration={8}>
          <BrowserFrame
            src="/images/projects/esyloads.webp"
            url="esyloads.com"
            alt="Site EsyLoads réalisé par Webonia"
            className="opacity-80"
          />
        </Layer>

        <Layer z={0} className="left-[2%] top-[22%] w-[80%]" floatDuration={7}>
          <BrowserFrame
            src="/images/projects/lantunes.webp"
            url="lantunes.fr"
            alt="Site du restaurant L'Antunes réalisé par Webonia"
            priority
          />
        </Layer>

        <Layer z={130} className="bottom-[0%] right-[3%] w-[25%]" floatDelay={-4} floatDuration={9}>
          <PhoneFrame
            src="/images/projects/atelier-lbf-mobile.webp"
            alt="Boutique Atelier LBF sur mobile, réalisée par Webonia"
          />
        </Layer>

        <Chip
          icon="check"
          title="Sur-mesure"
          text="Aucun template"
          className="left-[-3%] top-[12%] hidden sm:block"
          style={{ transform: "translate3d(0,0,190px)" }}
        />
        <Chip
          icon="bolt"
          title="Rapide & mobile"
          text="Pensé smartphone d'abord"
          className="bottom-[8%] left-[-2%] hidden sm:block"
          style={{ transform: "translate3d(0,0,220px)" }}
        />
        <Chip
          icon="search"
          title="SEO local"
          text="Visible sur Google"
          className="right-[-3%] top-[20%] hidden sm:block"
          style={{ transform: "translate3d(0,0,170px)" }}
        />
      </div>
    </div>
  );
}
