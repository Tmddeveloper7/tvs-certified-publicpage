import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiEye, FiMapPin } from "react-icons/fi";

import { homeData } from "@/data/home";
import { Container } from "@/components/layout/Container";

export function LatestVehiclesSection() {
  const { latestVehicles } = homeData;
  const loginHref = latestVehicles.viewAll.href;

  return (
    <section className="bg-white">
      <Container className="py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-[#0A1F44]">
            {latestVehicles.title}
          </h2>
          <p className="mt-2 text-sm text-zinc-600">{latestVehicles.subtitle}</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {latestVehicles.vehicles.map((vehicle) => (
            <article
              key={vehicle.model}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-md"
            >
              <div className="relative h-48">
                <Image
                  src={vehicle.image}
                  alt={vehicle.model}
                  fill
                  className="object-cover"
                />
                <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
                  <FiEye className="h-3.5 w-3.5" />
                  {vehicle.watching}
                </span>
                <div className="absolute inset-x-0 bottom-0 bg-black/80 px-4 py-3 text-xs font-medium text-white">
                  <span className="inline-flex items-center gap-2">
                    <FiMapPin className="h-3.5 w-3.5" />
                    {vehicle.location}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold text-zinc-900">
                  {vehicle.model}
                </h3>
                <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm">
                  {vehicle.inspection}
                </div>
                <a
                  href={loginHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]"
                >
                  View Details
                  <FiArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href={loginHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] transition-colors hover:text-[#1d4ed8]"
          >
            {latestVehicles.viewAll.label}
            <FiArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
