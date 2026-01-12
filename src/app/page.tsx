import {
  HeroSection,
  SocialProofSection,
  PricingSection,
  ProcessSection,
  FAQSection,
  CTASection,
  ContactFormSection,
} from "@/components/sections";
import { generateFAQSchema } from "@/lib/seo";
import { FAQ_ITEMS } from "@/data/constants";

export default function HomePage() {
  return (
    <>
      {/* JSON-LD pour FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(FAQ_ITEMS)),
        }}
      />

      <HeroSection />
      <SocialProofSection />
      <PricingSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
      <ContactFormSection />
    </>
  );
}
