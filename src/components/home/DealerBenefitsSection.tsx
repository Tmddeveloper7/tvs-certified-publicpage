"use client";

import Image from "next/image";
import { FiTrendingUp } from "react-icons/fi";
import { TbHammer } from "react-icons/tb";
import { GoShieldCheck } from "react-icons/go";
import { motion, Variants } from "framer-motion";

import { homeData } from "@/data/home";
import { Container } from "@/components/layout/Container";

const benefitIcons = [GoShieldCheck, TbHammer, FiTrendingUp];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function DealerBenefitsSection() {
  const { dealerBenefits } = homeData;
  const badgeAlt = `${dealerBenefits.title} badge`;

  return (
    <section className="bg-white">
      <Container className="py-16">

        {/* Header */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <Image
            src="/c-tick.webp"
            alt={badgeAlt}
            width={64}
            height={64}
            className="mb-4"
          />

          <h2 className="text-3xl font-semibold text-zinc-900">
            {dealerBenefits.title}
          </h2>

          <p className="mt-3 max-w-lg text-sm text-zinc-600 text-center">
            {dealerBenefits.subtitle}
          </p>
        </div>

        {/* Cards */}
        <motion.div 
          className="mt-12 grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {dealerBenefits.items.map((item, index) => {
            const Icon = benefitIcons[index % benefitIcons.length];

            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="flex flex-col items-center text-center rounded-2xl bg-[#EBF3FE] p-8 transition hover:shadow-md"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#72BF44] text-white">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-semibold text-zinc-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 max-w-[320px] text-sm text-zinc-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </Container>
    </section>
  );
}
