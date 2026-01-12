import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import { generatePageMetadata, generateLocalBusinessSchema } from "@/lib/seo";
import { COMPANY } from "@/data/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = generatePageMetadata({
  title: `${COMPANY.name} | Agence de Création de Sites Web à Bréssuire`,
  description: `${COMPANY.name} - Agence web spécialisée dans la création de sites internet professionnels, modernes et optimisés SEO. Sites vitrines, e-commerce et applications web sur-mesure.`,
  keywords: [
    "création site web",
    "agence web bréssuire",
    "création site internet",
    "site vitrine",
    "site e-commerce",
    "développement web",
    "refonte site internet",
    "SEO",
  ],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema()),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
