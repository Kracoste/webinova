import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webiinova.fr"),
  title: {
    default: "Webiinova — Création de sites vitrines professionnels",
    template: "%s | Webiinova",
  },
  description:
    "Agence Webiinova : un forfait unique pour créer un site vitrine professionnel, rapide et optimisé pour votre activité locale.",
  openGraph: {
    title: "Webiinova — Création de sites vitrines professionnels",
    description:
      "Un site vitrine sobre, efficace et livré en moins de 3 semaines. Devis gratuit en 24h.",
    url: "https://webiinova.fr",
    siteName: "Webiinova",
    locale: "fr_FR",
    type: "website",
  },
  keywords: [
    "site vitrine",
    "création site internet",
    "agence web",
    "web design",
    "site professionnel",
  ],
  authors: [{ name: "Webiinova" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${fontSans.variable} min-h-screen bg-white text-zinc-900 antialiased`}>
        <Header />
        <main className="min-h-[calc(100vh-160px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
