import type { Metadata } from "next";

import { FaqPage } from "@/components/faq/FaqPage";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers about TVS Certified membership, auctions, payments, inspections, and documentation support.",
  openGraph: {
    title: "FAQs | TVS Certified",
    description:
      "Find answers about who can register, how auctions work, payments, inspections, and documentation support on TVS Certified.",
    url: "/faqs",
    type: "website",
  },
};

export default function Page() {
  return <FaqPage />;
}
