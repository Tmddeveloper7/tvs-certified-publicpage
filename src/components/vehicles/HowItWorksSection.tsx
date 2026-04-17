import {
  FiCheckCircle,
  FiShield,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

import type { VehiclesHowItWorks } from "@/data/vehicles";
import { Container } from "@/components/layout/Container";
import { WorkAssignSection } from "../service/WorkAssignSection";
import Image from "next/image";

const timelineIcons = [FiCheckCircle, FiTrendingUp, FiUsers, FiShield];

type Props = {
  data: VehiclesHowItWorks;
};

export function HowItWorksSection({ data }: Props) {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#F8FAFC]">
        <Container className="py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            {/* LEFT TEXT */}
            <div>
              <h2 className="text-5xl font-bold text-[#0A1F44] leading-tight">
                What TVS <br />
                <span className="text-[#72BF44]">Certified does?</span>
              </h2>

              <p className="mt-4 text-lg text-gray-600 max-w-md">
                TVS Certified is a trusted B2B platform for buying and selling
                used vehicles
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              {/* Green Background Accent */}

              <Image
                src={data.image.src}
                alt={data.image.alt}
                className="relative z-10 w-full rounded-3xl shadow-lg object-cover"
                width={500}
                height={300}
              />
            </div>
          </div>
        </Container>
      </section>
            <section className="bg-white">
        <Container className="py-12">
            <WorkAssignSection />
        </Container>
      </section>
      {/* <section className="bg-white">
        <Container className="py-12">
          {(() => {
            const overall = data.cards.find((c) => c.title === "Overall Process");
            if (!overall) return null;
            return (
              <div className="mx-auto max-w-5xl">
                <p className="text-3xl font-semibold text-[#0A1F44]">Overall Process</p>
                <div className="relative mt-8">
                  <div className="absolute left-0 right-0 top-1/2 h-[6px] -translate-y-1/2 rounded-full bg-[#b7bcc4]" />
                  <div className="relative flex justify-between">
                    {overall.items.map((step, idx) => {
                      const placeTop = idx % 2 === 1;
                      return (
                        <div
                          key={step}
                          className="flex w-full flex-col items-center text-center mt-9"
                          style={{ minWidth: `${100 / overall.items.length}%` }}
                        >
                          <span className="h-6 w-6 rounded-full bg-[#72BF44] ring-2 ring-white shadow" />
                          <span
                            className={`w-32 text-sm font-medium text-[#0A1F44] leading-tight ${
                              placeTop ? "-translate-y-12 pb-2" : "translate-y-12"
                            }`}
                          >
                            {step}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })()}
        </Container>
      </section> */}

      {/* ================= HOW IT WORKS ================= */}
        <section className="bg-white">
      <Container className="py-12 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start">

          {/* ===== RIGHT CARDS ===== */}
          <div className="grid flex-1 gap-6 sm:grid-cols-3">
            {data.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-3xl border border-[#d6e1ff] bg-[#e7eeff] p-8 shadow-sm hover:shadow-md transition"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#72BF44] text-white">
                  <FiCheckCircle className="h-5 w-5" />
                </div>
                <h3 className="mb-4 text-lg font-semibold text-[#0A1F44]">
                  {card.title}
                </h3>

                {card.variant === "bulleted" ? (
                  <ul className="space-y-2 text-sm text-[#0A1F44]">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0A1F44]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ol className="space-y-2 text-sm text-[#0A1F44] list-decimal pl-4">
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                )}
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
    </>
  );
}
