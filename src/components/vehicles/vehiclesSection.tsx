"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiEye, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";
import { vehiclesData } from "@/data/vehicles";
import { Container } from "@/components/layout/Container";

type ApiVehicle = {
  MakeModel?: string;
  year_of_mfg?: number;
  fuel_type?: string;
  transmission?: string;
  offered_price?: number;
  image_url?: string;
  color_id?: string;
};

type CardVehicle = {
  id: string;
  model: string;
  inspection: string;
  location: string;
  watching: string;
  currentBid: string;
  endsIn: string;
  image: string;
  year?: number;
};

const FALLBACK_LIST: CardVehicle[] = vehiclesData.latestVehicles.vehicles.map((vehicle, idx) => ({
  id: `fallback-${idx}`,
  model: vehicle.model,
  inspection: vehicle.inspection,
  location: vehicle.location,
  watching: vehicle.watching,
  currentBid: vehicle.currentBid ?? "₹ —",
  endsIn: vehicle.endsIn ?? "—",
  image: vehicle.image,
}));

function formatCurrency(value?: number) {
  if (!value || Number.isNaN(value)) return "₹ —";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function extractImage(url?: string) {
  if (!url) return "/car-1.webp";
  try {
    const parsed = JSON.parse(url);
    const first =
      parsed?.frontview?.[0] ??
      parsed?.rightsideview?.[0] ??
      parsed?.leftsideview?.[0] ??
      parsed?.topview?.[0];
    return typeof first === "string" ? first : "/car-1.webp";
  } catch {
    return "/car-1.webp";
  }
}

export function VehiclesSection() {
  const { latestVehicles } = vehiclesData;
  const [cards, setCards] = useState<CardVehicle[]>(FALLBACK_LIST);
  const [isLive, setIsLive] = useState(false);

  const API_URL =
    process.env.NEXT_PUBLIC_AUCTION_API_URL ?? "https://tvscertified.in:8036/GetAuctionDetails";
  const API_TOKEN = process.env.NEXT_PUBLIC_AUCTION_API_TOKEN ?? "41da6c055ad936209311a4ce868aa5f7848a8bf24131bee92315c96636b7078671649e82eabf5832a26ed9954922c725c341e3bbd15151a06785ecf0a3b72641a979088fd8f3e45174ab2a6842df34ddbaae29ba25ba44a4600173c94a54233f232c2bae6ad25082a089576ae680aa1825302c27baa91eb31359c3d27ed563f3ed93066040c53e03018f726d2b5f5ee2371b367381d01cea58afae85d5eef15fc288f7f91f6e5b12496e3c79e4ac3ef8";

  useEffect(() => {
    let cancelled = false;

    async function loadLiveAuctions() {
      try {
        const res = await fetch(API_URL, {
          cache: "no-store",
          headers: API_TOKEN ? { Authorization: API_TOKEN } : undefined,
        });
        if (!res.ok) return;
        const payload = await res.json();
        const data: ApiVehicle[] = Array.isArray(payload?.data) ? payload.data : [];

        if (!cancelled && data.length > 1) {
          const mapped: CardVehicle[] = data.map((item, idx) => ({
            id: `${item.MakeModel ?? "vehicle"}-${idx}`,
            model: item.MakeModel ?? "TVS Certified Vehicle",
            inspection: `${item.year_of_mfg ?? ""} • ${item.fuel_type ?? "Fuel"} • ${
              item.transmission ?? "Transmission"
            }`,
            location: "Across India",
            watching: "Live auction",
            currentBid: formatCurrency(item.offered_price),
            endsIn: "Live",
            image: extractImage(item.image_url),
            year: item.year_of_mfg,
          }));
          setCards(mapped.slice(0, 9));
          setIsLive(true);
        }
      } catch (error) {
        // keep fallback data
        console.error("Live auctions fetch failed", error);
      }
    }

    loadLiveAuctions();
    return () => {
      cancelled = true;
    };
  }, [API_URL, API_TOKEN]);

  const title = useMemo(
    () => (isLive ? latestVehicles.title : "Featured Auctions"),
    [isLive, latestVehicles.title],
  );

  return (
    <section className="bg-white">
      <Container className="py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-[#0A1F44]">{title}</h2>
          <p className="mt-2 text-sm text-zinc-600">{latestVehicles.subtitle}</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {cards.map((vehicle) => (
            <article
              key={vehicle.id ?? vehicle.model}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-md"
            >
              <div className="relative h-48">
                <Image
                  src={vehicle.image}
                  alt={vehicle.model}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                  priority={false}
                />
                <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
                  <FiEye className="h-3.5 w-3.5" />
                  {vehicle.watching}
                </span>
                {/* <div className="absolute inset-x-0 bottom-0 bg-black/80 px-4 py-3 text-xs font-medium text-white">
                  <span className="inline-flex items-center gap-2">
                    <FiMapPin className="h-3.5 w-3.5" />
                    {vehicle.location}
                  </span>
                </div> */}
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold text-zinc-900">{vehicle.model}</h3>
                <p className="mt-1 text-sm text-zinc-500">{vehicle.inspection}</p>
        <motion.div
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.97 }}
  className="mt-5 w-full"
>
  <a
    href="https://tvscertified.in/apps/login"
    target="_blank"
    rel="noreferrer noopener"
    className="relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-4 py-3 text-sm font-semibold text-white overflow-hidden group"
  >
    {/* Text + Icon */}
    <span className="relative z-10 flex items-center gap-2">
      {isLive ? "Unlock full details by signing in" : "Unlock full details by signing in"}
      <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </span>

    {/* Smooth Hover Background */}
    <span className="absolute inset-0 bg-[#1d4ed8] opacity-0 group-hover:opacity-100 transition duration-300"></span>

    {/* Shine Effect */}
    <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 skew-x-12 transition-all duration-500 group-hover:left-[125%]"></span>
  </a>
</motion.div>
              </div>
            </article>
          ))}
        </div>
<div className="mt-10 flex justify-center">
  <motion.div
    whileHover="hover"
    initial="rest"
    animate="rest"
  >
    <Link
      href={latestVehicles.viewAll.href}
      className="group inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB]"
    >
      <span className="relative">
        {latestVehicles.viewAll.label}
        {/* Underline animation */}
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#2563EB] transition-all duration-300 group-hover:w-full"></span>
      </span>

      {/* Arrow animation */}
      <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  </motion.div>
</div>
      </Container>
    </section>
  );
}
