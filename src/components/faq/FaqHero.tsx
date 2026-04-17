"use client";

import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { useMemo, useState } from "react";

import { faqItems } from "@/data/faq";

type Props = {
  onQueryChange?: (value: string) => void;
};

export function FaqHero({ onQueryChange }: Props) {
  const [query, setQuery] = useState("");

  const matchesCount = useMemo(() => {
    if (!query.trim()) return faqItems.length;
    const q = query.toLowerCase();
    return faqItems.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
    ).length;
  }, [query]);

  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#050b19] text-white">
        <Image
          src="/faq-banner.webp"
          alt="FAQ background with question marks"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
        <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 px-6 py-8 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.75)] backdrop-blur-md">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
            Support Center
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base text-white/80 md:text-lg">
            Everything you need to know about India&rsquo;s trusted B2B vehicle
            auction platform. Can&rsquo;t find the answer you&rsquo;re looking
            for? Feel free to contact our support team.
          </p>
        </div>

        {/* <div className="w-full max-w-4xl">
          <div className="flex w-full items-center gap-3 rounded-2xl border border-white/15 bg-white/8 px-4 py-3 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.6)] backdrop-blur">
            <FiSearch className="h-5 w-5 text-white/70" />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                onQueryChange?.(e.target.value);
              }}
              placeholder="Search for questions..."
              className="w-full bg-transparent text-sm text-white placeholder:text-white/55 focus:outline-none md:text-base"
            />
            <span className="text-xs font-semibold text-white/60">
              {matchesCount} results
            </span>
          </div>
          <p className="mt-2 text-xs text-white/60">
            Tip: Try “payment”, “documents”, or “auction”.
          </p>
        </div> */}
      </div>
    </section>
  );
}
