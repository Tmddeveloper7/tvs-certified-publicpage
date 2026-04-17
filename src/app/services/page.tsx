import type { Metadata } from "next";

import { HeroSection } from "@/components/service/HeroSection";
import { PlatformSection } from "@/components/home/PlatformSection";
import { ServiceLimitSection } from "@/components/service/ServiceLimitSection";
import { WorkAssignSection } from "@/components/service/WorkAssignSection";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Services for buyers and sellers",
  description:
    "Auction, inspection, and documentation services that help dealers and sellers trade pre-owned vehicles faster and safer.",
  openGraph: {
    title: "Services | TVS Certified",
    description:
      "Discover how TVS Certified streamlines inspections, auctions, and paperwork for verified pre-owned vehicles.",
    url: "/services",
    type: "website",
  },
};

export default function ServicePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <ScrollReveal>
        <ServiceLimitSection />
      </ScrollReveal>
      <ScrollReveal>
        <PlatformSection />
      </ScrollReveal>
    </main>
  );
}
