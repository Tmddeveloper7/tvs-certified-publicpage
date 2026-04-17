import type { Metadata } from "next";

import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { DealerBenefitsSection } from "@/components/home/DealerBenefitsSection";
import { FeatureCardsSection } from "@/components/home/FeatureCardsSection";
import { LatestVehiclesSection } from "@/components/home/LatestVehiclesSection";
import { PromoBannerSection } from "@/components/home/PromoBannerSection";
import { PlatformSection } from "@/components/home/PlatformSection";
import { LeadSection } from "@/components/home/LeadSection";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { AuctionDataFetcher } from "@/components/home/AuctionDataFetcher";
import { VehiclesSection } from "@/components/vehicles/vehiclesSection";

export const metadata: Metadata = {
  title: "Certified used vehicle auctions",
  description:
    "Bid on inspected pre-owned vehicles with transparent reports, fair prices, and secure paperwork via TVS Certified.",
  openGraph: {
    title: "Certified used vehicle auctions | TVS Certified",
    description:
      "Browse and bid on verified pre-owned vehicles. Transparent inspections, real-time bidding, and secure documentation.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="bg-white">
      <AuctionDataFetcher />
      <HeroSection />

      <StatsSection />

      <ScrollReveal delay={0.1}>
        <DealerBenefitsSection />
      </ScrollReveal>

      <ScrollReveal>
        <FeatureCardsSection />
      </ScrollReveal>

      <ScrollReveal>
               <VehiclesSection />
        {/* <LatestVehiclesSection /> */}
      </ScrollReveal>

      <ScrollReveal>
        <PromoBannerSection />
      </ScrollReveal>

      <ScrollReveal>
        <LeadSection />
      </ScrollReveal>

      <ScrollReveal>
        <PlatformSection />
      </ScrollReveal>


    </main>
  );
}
