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
  metadataBase: new URL("https://webinova.fr"),
  title: {
    default: "Webinova — Création de sites vitrines professionnels",
    template: "%s | Webinova",
  },
  description:
    "Agence Webinova : un forfait unique pour créer un site vitrine professionnel, rapide et optimisé pour votre activité locale.",
  openGraph: {
    title: "Webinova — Création de sites vitrines professionnels",
    description:
      "Un site vitrine sobre, efficace et livré en moins de 3 semaines. Devis gratuit en 24h.",
    url: "https://webinova.fr",
    siteName: "Webinova",
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
  authors: [{ name: "Webinova" }],
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
