import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: `Création de Site Internet à Bressuire (79) – ${COMPANY.name} | Dès 500€`,
  description: `Création de sites internet à Bressuire, Niort, La Rochelle, Thouars, Cerizay. Sites vitrines dès 700€, refonte dès 500€, e-commerce. Devis gratuit en 48h.`,
  keywords: [
    "création site internet Bressuire",
    "création site web Bressuire",
    "créateur site internet Bressuire",
    "concepteur site web Bressuire",
    "agence web Bressuire",
    "création site internet Niort",
    "création site internet La Rochelle",
    "création site internet Thouars",
    "création site internet Cerizay",
    "création site internet Cholet",
    "création site internet Deux-Sèvres",
    "agence web Deux-Sèvres",
    "site vitrine Bressuire",
    "site e-commerce Bressuire",
    "refonte site internet Bressuire",
    "référencement SEO Bressuire",
    "développeur web Bressuire",
    "création site artisan Deux-Sèvres",
    "création site TPE Bressuire",
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TZ9XLMPL');`,
          }}
        />
        {/* End Google Tag Manager */}
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TZ9XLMPL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
