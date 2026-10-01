import Image from "next/image";
import { Section, SectionHeader, LinkButton, Icon } from "@/components/ui";
import { Tilt } from "@/components/motion";
import { PROJECTS } from "@/data/constants";

const TINTS = [
  "from-[#f6ede4] to-[#efe2d4]", // L'Antunes : tons chauds
  "from-[#f1ece6] to-[#e6ddd3]", // Atelier LBF : acier corten
  "from-[#e8ecfb] to-[#dde4fb]", // EsyLoads : bleu
];

/**
 * Réalisations en cartes empilées : sur desktop, chaque projet
 * se colle en haut de l'écran et le suivant vient le recouvrir au scroll.
 */
export function ShowcaseSection() {
  return (
    <Section id="realisations" background="white" className="overflow-clip">
      <SectionHeader
        subtitle="Réalisations"
        title={
          <>
            De vrais sites, pour de <span className="serif-accent gradient-text">vrais clients</span>
          </>
        }
        description="Restaurant, artisan, plateforme SaaS : chaque projet est conçu sur-mesure, en fonction du métier et des clients de chacun."
      />

      <div className="relative">
        {PROJECTS.map((project, i) => (
          <div
            key={project.id}
            className="mb-8 lg:sticky lg:mb-16"
            style={{ top: `${110 + i * 28}px` }}
          >
            <article
              className={`grid items-center gap-8 overflow-hidden rounded-[28px] border border-black/[0.06] bg-gradient-to-br ${TINTS[i % TINTS.length]} p-6 shadow-[0_30px_80px_-40px_rgba(10,16,36,0.45)] md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:p-12`}
            >
              {/* Texte */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="font-mono text-sm text-[var(--color-gray-500)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-8 bg-[var(--color-gray-300)]" aria-hidden="true" />
                  <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[var(--color-secondary)]">
                    {project.category}
                  </span>
                </div>
                <h3 className="mb-4 text-3xl md:text-4xl">{project.title}</h3>
                <p className="mb-6 leading-relaxed text-[var(--color-gray-600)]">{project.description}</p>
                <ul className="mb-8 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-black/[0.07] bg-white/50 px-3 py-1 text-xs font-medium text-[var(--color-gray-600)]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  {project.url && (
                    <LinkButton href={project.url} external variant="secondary" size="sm">
                      Voir le site
                      <Icon name="arrow-up-right" size={16} />
                    </LinkButton>
                  )}
                  <LinkButton href="/contact" variant="outline" size="sm" data-track={`showcase_${project.slug}`}>
                    Un projet similaire ?
                  </LinkButton>
                </div>
              </div>

              {/* Visuel en 3D */}
              <Tilt max={6} innerClassName="rounded-2xl">
                <div className="relative preserve-3d">
                  <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_40px_80px_-30px_rgba(10,16,36,0.5)]">
                    <div className="flex items-center gap-1.5 border-b border-black/5 bg-[var(--color-gray-50)] px-4 py-2.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                      <span className="ml-3 truncate text-xs text-[var(--color-gray-400)]">
                        {project.url?.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                      </span>
                    </div>
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={project.thumbnail}
                        alt={`Site ${project.title} réalisé par Webonia`}
                        fill
                        sizes="(min-width: 1024px) 640px, 90vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  {project.mobileThumbnail && (
                    <div
                      className="absolute -bottom-6 -right-2 hidden w-[24%] sm:block md:-right-6"
                      style={{ transform: "translateZ(60px)" }}
                    >
                      <div className="overflow-hidden rounded-[18px] border-4 border-[var(--color-secondary)] bg-black shadow-[0_30px_50px_-15px_rgba(10,16,36,0.6)]">
                        <div className="relative aspect-[9/19]">
                          <Image
                            src={project.mobileThumbnail}
                            alt={`Version mobile du site ${project.title}`}
                            fill
                            sizes="160px"
                            className="object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Tilt>
            </article>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <LinkButton href="/realisations" variant="outline">
          Voir toutes les réalisations
          <Icon name="arrow-right" size={16} />
        </LinkButton>
      </div>
    </Section>
  );
}
