import type { Metadata } from "next";

import { HeroSection } from "@/components/vehicles/HeroSection";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { PlatformSection } from "@/components/home/PlatformSection";
import { HowItWorksSection } from "@/components/vehicles/HowItWorksSection";
import { VehiclesSection } from "@/components/vehicles/vehiclesSection";
import { vehiclesData } from "@/data/vehicles";

export const metadata: Metadata = {
  title: "Vehicles in live auctions",
  description:
    "Browse verified pre-owned vehicles with inspection highlights, bidding windows, and transparent condition details.",
  openGraph: {
    title: "Vehicles | TVS Certified",
    description:
      "Explore current TVS Certified auction listings, each backed by inspections and dealer verification.",
    url: "/vehicles",
    type: "website",
  },
};

export default function HomePage() {
  const { howItWorks } = vehiclesData;

  return (
    <main className="bg-white">
      <HeroSection />
      <ScrollReveal>
        <HowItWorksSection data={howItWorks} />
      </ScrollReveal>
      {/* <ScrollReveal>
        <VehiclesSection />
      </ScrollReveal> */}
      <ScrollReveal>
        <PlatformSection />
      </ScrollReveal>
    </main>
  );
}
