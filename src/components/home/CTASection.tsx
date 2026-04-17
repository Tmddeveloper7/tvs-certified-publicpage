import Image from "next/image";
import Link from "next/link";

import { homeData } from "@/data/home";
import { Container } from "@/components/layout/Container";

export function CTASection() {
  const { cta } = homeData;
  const backgroundAlt = `${cta.title} background`;

  return (
    <section className="relative overflow-hidden">
      <Image
        src="/banner-4.avif"
        alt={backgroundAlt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <Container className="relative grid gap-8 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-4 text-white">
          <h2 className="text-3xl font-semibold md:text-4xl">{cta.title}</h2>
          <p className="text-sm text-white/80">{cta.subtitle}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 lg:justify-end">

  {/* Primary Button */}
  <Link
    href={cta.cta.href}
    className="inline-flex items-center justify-center rounded-xl bg-[#72BF44] px-6 py-3 text-sm font-semibold text-white 
    transition-all duration-300 hover:bg-[#67b23f] hover:scale-105 hover:shadow-lg"
  >
    {cta.cta.label}
  </Link>

  {/* Secondary Button */}
  <Link
    href="/contact"
    className="inline-flex items-center justify-center rounded-xl border border-white/70 px-6 py-3 text-sm font-semibold text-white 
    transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:border-white"
  >
    Contact
  </Link>

</div>
      </Container>
    </section>
  );
}
