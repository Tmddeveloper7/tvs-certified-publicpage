import Image from "next/image";
import Link from "next/link";
import { RiDoubleQuotesR } from "react-icons/ri";

import { homeData } from "@/data/home";
import { Container } from "@/components/layout/Container";

export function PromoBannerSection() {
  const { promoBanner } = homeData;
  const backgroundAlt = `${promoBanner.title} background`;

  return (
    <section className="bg-white">
      <Container className="pb-12">
        <div className="relative overflow-hidden rounded-3xl text-white">
          <Image
            src="/banner-3.avif"
            alt={backgroundAlt}
            fill
            sizes="100vw"
            className="object-cover"
          />

          <div className="relative flex flex-col items-center justify-center gap-6 px-6 py-10 md:px-10 md:py-0 md:h-[300px] text-center">
            <div className="absolute right-4 top-4 md:right-10 md:top-8 text-4xl md:text-5xl text-blue-300">
              <RiDoubleQuotesR />
            </div>

            <p className="max-w-3xl text-base md:text-lg leading-relaxed">
              {promoBanner.title}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/rajesh-img.png"
                  alt="Rajesh"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="text-left text-sm">
                  <p className="font-semibold">Rajesh </p>
                  <p className="text-xs text-white/70">Rajesh Motors, Chennai</p>
                </div>
              </div>

           <Link
  href={promoBanner.cta.href}
  className="relative inline-flex items-center justify-center rounded-full bg-[#72BF44] px-6 py-2 text-sm font-semibold text-white 
  overflow-hidden group transition-all duration-300 ease-out
  hover:bg-[#67b23f] hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
>
  <span className="relative z-10">
    {promoBanner.cta.label}
  </span>

  {/* Shine Sweep Effect */}
  <span className="pointer-events-none absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 skew-x-12 
  transition-all duration-500 group-hover:left-[125%]"></span>
</Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
