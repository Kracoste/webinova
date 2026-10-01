import { Marquee } from "@/components/motion";

const AUDIENCES = [
  "Artisans",
  "Restaurants",
  "Commerçants",
  "Professions libérales",
  "Associations",
  "TPE & PME",
  "Boutiques en ligne",
  "Indépendants",
];

/** Bandeau défilant : les métiers accompagnés */
export function MarqueeBand() {
  return (
    <div className="relative border-y border-[var(--color-gray-200)] bg-white py-6">
      <Marquee duration={45}>
        {AUDIENCES.map((label) => (
          <span key={label} className="flex items-center">
            <span className="px-8 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-secondary)] md:text-3xl">
              {label}
            </span>
            <svg className="h-5 w-5 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z" />
            </svg>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
