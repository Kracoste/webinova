import { ImageResponse } from "next/og";

export const dynamic = "force-static";

/** Logo carré utilisé dans les données structurées (Google) */
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 112,
          background: "linear-gradient(135deg, #5b7bff, #6d5dfc 55%, #38bdf8)",
        }}
      >
        <svg width="340" height="340" viewBox="0 0 32 32">
          <path d="M8 10.5l3.3 11 4.7-8 4.7 8 3.3-11" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    { width: 512, height: 512 }
  );
}
