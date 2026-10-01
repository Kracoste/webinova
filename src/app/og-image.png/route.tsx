import { ImageResponse } from "next/og";
import { COMPANY } from "@/data/constants";

export const dynamic = "force-static";

/** Image de partage (Facebook, LinkedIn, WhatsApp…) : 1200×630 */
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#070b18",
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(36,71,224,0.55), transparent 45%), radial-gradient(circle at 90% 90%, rgba(109,93,252,0.45), transparent 45%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #5b7bff, #6d5dfc 55%, #38bdf8)",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 32 32">
              <path d="M8 10.5l3.3 11 4.7-8 4.7 8 3.3-11" fill="none" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.03em" }}>{COMPANY.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.04em", maxWidth: 950 }}>
            {`Création de sites internet à ${COMPANY.city}`}
          </div>
          <div style={{ fontSize: 32, color: "rgba(255,255,255,0.65)" }}>
            Sites vitrines, e-commerce & refontes · Dès 500 € · Devis sous 48h
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "rgba(255,255,255,0.55)" }}>
          <span>webonia.fr</span>
          <span>{COMPANY.phone}</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
