"use client";

import { useState } from "react";

import { FaqHero } from "./FaqHero";
import { FaqSection } from "./FaqSection";

export function FaqPage() {
  const [query, setQuery] = useState("");

  return (
    <main className="bg-white">
      <FaqHero onQueryChange={setQuery} />
      <FaqSection query={query} />
    </main>
  );
}
