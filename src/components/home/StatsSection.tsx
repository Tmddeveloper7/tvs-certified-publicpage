"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import { homeData } from "@/data/home";
import { Container } from "@/components/layout/Container";
import { useInView, useMotionValue, useSpring } from "framer-motion";

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
  const prefix = match ? match[1] : "";
  const number = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : "";

  useEffect(() => {
    if (isInView) {
      motionValue.set(number);
    }
  }, [isInView, motionValue, number]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest.toFixed(0)}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix]);

  if (!match) return <span>{value}</span>;

  return (
    <span className="relative inline-block tabular-nums">
      {/* Invisible placeholder to establish maximum width reliably */}
      <span className="invisible">{value}</span>
      {/* Absolutely positioned animating element */}
      <span ref={ref} className="absolute inset-0 text-right">
        {prefix}0{suffix}
      </span>
    </span>
  );
}

export function StatsSection() {
  const { statsSection } = homeData;
  const backgroundAlt = `${statsSection.title_1} ${statsSection.title_2} background`;

  return (
    <section className="relative overflow-hidden text-white">
      <Image
        src="/banner-2.avif"
        alt={backgroundAlt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <Container className="relative grid gap-10 py-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <div className="flex justify-center lg:justify-start  ">

        </div>
        <div className="space-y-6 text-center md:text-right">
          <p className="text-sm font-semibold text-white/90">
            <span className="mr-2 text-base">★</span>
            {statsSection.badge}
          </p>

          <h2 className="text-3xl font-bold md:text-4xl mb-1 p-0">
            {statsSection.title_1}
          </h2>
          <h2 className="text-3xl font-bold md:text-4xl">
            {statsSection.title_2}
          </h2>

         <div className="mt-10 mx-auto flex flex-col items-center text-center gap-6 w-full md:w-fit md:ml-auto md:mr-0 md:flex-row md:items-center md:justify-end md:divide-x md:divide-white/40 md:text-right">
  {statsSection.stats.map((stat, idx) => (
    <div
      key={stat.label.join(" ")}
      className={`w-full md:w-auto px-4 md:px-6 text-center md:text-right ${
        idx === 0 ? "md:pl-0" : ""
      } ${idx === statsSection.stats.length - 1 ? "md:pr-0" : ""}`}
    >
      <p className="text-4xl font-semibold">
        <AnimatedNumber value={stat.value} />
      </p>

      <p className="mt-2 text-sm font-semibold text-white/90">
        {stat.label.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </p>
    </div>
  ))}
</div>
        </div>
      </Container>
    </section>
  );
}
