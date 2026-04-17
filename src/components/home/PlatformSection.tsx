import Image from "next/image";
import Link from "next/link";
import { FiArrowRight  } from "react-icons/fi";
import { LuShieldCheck } from "react-icons/lu";


import { homeData } from "@/data/home";
import { Container } from "@/components/layout/Container";

export function PlatformSection() {
  const { platform } = homeData;
  const badgeAlt = `${platform.title} badge`;

  return (
    <section className="bg-white">
      <Container className="grid items-center gap-10 py-16 lg:grid-cols-[0.4fr_1.2fr_0.6fr]">
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/c-tick-2.webp"
            alt={badgeAlt}
            width={140}
            height={140}
          />
        </div>

        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-zinc-900 md:text-4xl">
            Ready to Scale Your Dealership Inventory?
          </h2>
          <p className="mt-3 text-sm text-zinc-600">
            Join India’s fastest-growing dealer-only auction network.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 lg:items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/10 px-4 py-2 text-xs font-semibold text-[#60A5FA]">
            {/* <LuShieldCheck  /> */}
            Verified Dealer-Only Platform
          </span>
          <Link
            href="/dealer"
            className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#72BF44] to-[#64a93f] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.35)] hover:brightness-105 hover:saturate-110 active:translate-y-0"
          >
            Become a Dealer Member
            <FiArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
