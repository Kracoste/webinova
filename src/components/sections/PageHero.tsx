import { type ReactNode } from "react";
import { Eyebrow } from "@/components/ui";

interface PageHeroProps {
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

/** En-tête sombre commun aux pages intérieures */
export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="grain relative isolate overflow-hidden bg-[var(--night-900)] pb-20 pt-36 text-white md:pb-24 md:pt-44">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="animate-aurora absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(closest-side,rgba(36,71,224,0.5),transparent)] blur-2xl" />
        <div
          className="animate-aurora absolute -right-40 bottom-0 h-[360px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(109,93,252,0.3),transparent)] blur-2xl"
          style={{ animationDelay: "-8s" }}
        />
        <div className="bg-grid-dark mask-radial absolute inset-0" />
      </div>

      <div className="container relative text-center">
        <Eyebrow dark className="animate-fade-in mb-6">
          {eyebrow}
        </Eyebrow>
        <h1 className="animate-fade-in stagger-1 mx-auto mb-6 max-w-4xl text-white">{title}</h1>
        {description && (
          <p className="animate-fade-in stagger-2 mx-auto max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
            {description}
          </p>
        )}
        {children && <div className="animate-fade-in stagger-3 mt-10">{children}</div>}
      </div>
    </section>
  );
}
