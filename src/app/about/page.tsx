import type { Metadata } from "next";

import { HeroSection } from "@/components/about/HeroSection";
import { IntroSection } from "@/components/about/IntroSection";
import { WhyChooseSection } from "@/components/about/WhyChooseSection";
import { JourneySection } from "@/components/about/JourneySection";
import { PrinciplesSection } from "@/components/about/PrinciplesSection";

export const metadata: Metadata = {
  title: "About TVS Certified",
  description:
    "Learn how TVS Certified combines rigorous inspections, transparent pricing, and customer-first support for pre-owned vehicles.",
  openGraph: {
    title: "About TVS Certified",
    description:
      "Get to know our inspection-led marketplace, trust-focused processes, and the team behind TVS Certified.",
    url: "/about",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <IntroSection />
      <WhyChooseSection />
      <PrinciplesSection />
      {/* <JourneySection /> */}
    </main>
  );
}
