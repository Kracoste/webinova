"use client";

import { useState } from "react";
import Image from "next/image";
import { Section, Icon } from "@/components/ui";
import { Tilt } from "@/components/motion";
import { PROJECTS } from "@/data/constants";
import { cn } from "@/lib/utils";

const categories = ["Tous", "Site Vitrine", "E-commerce", "Application Web"];

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects =
    activeCategory === "Tous"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <Section background="white" className="!pt-12">
      {/* Filtres */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Filtrer par catégorie">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
              activeCategory === category
                ? "bg-[var(--color-secondary)] text-white shadow-[var(--shadow-md)]"
                : "border border-[var(--color-gray-200)] text-[var(--color-gray-600)] hover:border-[var(--color-gray-400)]"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grille de projets */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Tilt key={project.id} max={6} innerClassName="rounded-3xl">
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--color-gray-200)] bg-white shadow-[var(--shadow-sm)] transition-shadow duration-500 hover:shadow-[var(--shadow-xl)]">
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-gray-100)]">
                <Image
                  src={project.thumbnail}
                  alt={`Aperçu du site ${project.title}`}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--color-secondary)] backdrop-blur">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h2 className="mb-3 text-2xl">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="after:absolute after:inset-0 after:content-['']"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h2>
                <p className="mb-6 flex-1 leading-relaxed text-[var(--color-gray-500)]">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="rounded-full bg-[var(--color-gray-100)] px-2.5 py-1 text-xs text-[var(--color-gray-600)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.url && (
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary)] text-white transition-transform duration-500 group-hover:rotate-45" aria-hidden="true">
                      <Icon name="arrow-up-right" size={18} />
                    </span>
                  )}
                </div>
              </div>
            </article>
          </Tilt>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="py-12 text-center text-[var(--color-gray-500)]">
          Aucun projet dans cette catégorie pour le moment.
        </p>
      )}
    </Section>
  );
}
