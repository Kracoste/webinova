"use client";

import { useState } from "react";
import Image from "next/image";
import { Section, Badge } from "@/components/ui";
import type { Project } from "@/types";

const projects: Project[] = [
  {
    id: "1",
    slug: "lantunes-restaurant",
    title: "Restaurant L'Antunes",
    description:
      "Site vitrine élégant pour un restaurant proposant une cuisine de saison et des vins vivants. Menus digitaux, intégration Google Maps et réseaux sociaux.",
    thumbnail: "/images/projects/lantunes.jpg",
    category: "Site Vitrine",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    url: "https://www.lantunes.fr/",
  },
  {
    id: "2",
    slug: "atelier-lbf",
    title: "Atelier LBF",
    description:
      "Boutique e-commerce pour un artisan fabricant de braséros en acier corten. Panier, paiement sécurisé et gestion des stocks intégrés.",
    thumbnail: "/images/projects/atelier-lbf.jpg",
    category: "E-commerce",
    technologies: ["Next.js", "Supabase", "Stripe"],
    url: "https://www.atelier-lbf.fr/",
  },
  {
    id: "3",
    slug: "esyloads",
    title: "EsyLoads",
    description:
      "Plateforme SaaS de gestion du fret routier avec carte interactive, alertes intelligentes, analytics avancés et système d'offres entre transporteurs et chargeurs.",
    thumbnail: "/images/projects/esyloads.jpg",
    category: "Application Web",
    technologies: ["Next.js", "PostgreSQL", "Vercel", "Stripe"],
    url: "https://www.esyloads.com/fr",
  },
];

const categories = ["Tous", "Site Vitrine", "E-commerce", "Application Web"];

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects =
    activeCategory === "Tous"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      {/* Filtres */}
      <Section background="white" className="!pt-0 !pb-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-[var(--color-gray-100)] text-[var(--color-gray-600)] hover:bg-[var(--color-gray-200)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Section>

      {/* Grille de projets */}
      <Section background="white" className="!pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden border border-[var(--color-gray-200)] hover:shadow-xl transition-all duration-300"
            >
              {/* Capture d'écran du site */}
              <div className="relative aspect-[16/10] bg-[var(--color-gray-100)] overflow-hidden">
                {project.url && (
                  <Image
                    src={`https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url`}
                    alt={`Aperçu de ${project.title}`}
                    fill
                    className="object-cover object-top"
                    unoptimized
                  />
                )}
                {/* Bouton au hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white text-[var(--color-primary)] font-semibold rounded-lg shadow-lg hover:bg-[var(--color-gray-100)] transition-colors flex items-center gap-2"
                    >
                      Voir le projet
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <Badge variant="secondary" size="sm" className="mb-3">
                  {project.category}
                </Badge>
                <h2 className="text-xl font-bold text-[var(--color-secondary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h2>
                <p className="text-[var(--color-gray-500)] mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-[var(--color-gray-100)] text-[var(--color-gray-600)] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <p className="text-center text-[var(--color-gray-500)] py-12">
            Aucun projet dans cette catégorie pour le moment.
          </p>
        )}
      </Section>
    </>
  );
}
