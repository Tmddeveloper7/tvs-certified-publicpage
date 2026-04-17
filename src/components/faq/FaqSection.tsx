"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { faqItems } from "@/data/faq";

const categories = [
  "All",
  "Registration & Eligibility",
  "Auction Process",
  "Payments & Services",
] as const;

type Props = { query?: string };

export function FaqSection({ query = "" }: Props) {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    const base =
      activeCategory === "All"
        ? faqItems
        : faqItems.filter((item) => item.category === activeCategory);
    if (!query.trim()) return base;
    const q = query.toLowerCase();
    return base.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
    );
  }, [activeCategory, query]);

  return (
    <section className="bg-white">
      <Container className="py-16">
        {/* Category pills */}
        <div className="mx-auto mt-8 flex w-full flex-wrap justify-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
          {categories.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-[#72BF44] text-white shadow-sm"
                    : "bg-white text-zinc-700 ring-1 ring-zinc-200 hover:ring-zinc-300"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* FAQ list */}
        <div className="mx-auto mt-10 max-w-4xl space-y-4">
          {filtered.map((item, index) => (
            <details
              key={`${item.category}-${item.question}`}
              className="group rounded-2xl border border-zinc-200 bg-white shadow-sm"
              open={index === 0}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-zinc-900">
                <span>{item.question}</span>
                <span className="text-lg text-amber-400 group-open:hidden">
                  ▾
                </span>
                <span className="hidden text-lg text-zinc-400 group-open:inline">
                  ▴
                </span>
              </summary>
              <div className="border-t border-zinc-100 px-5 py-4 text-sm text-zinc-600">
                <p className="leading-relaxed">{item.answer}</p>
                {item.link && (
                  <Link
                    href={item.link.href}
                    className="mt-3 inline-flex text-sm font-semibold text-[#2563EB] transition-colors hover:text-[#1d4ed8]"
                  >
                    {item.link.label}
                  </Link>
                )}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
