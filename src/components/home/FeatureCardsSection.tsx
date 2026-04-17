"use client";

import { FiTrendingUp, FiUsers } from "react-icons/fi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { motion } from "framer-motion";
import { homeData } from "@/data/home";
import { Container } from "@/components/layout/Container";

const featureIcons = {
  users: FiUsers,
  trend: FiTrendingUp,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export function FeatureCardsSection() {
  return (
    <section className="bg-white">
      <Container className="py-14">
        <motion.div 
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {homeData.featureCards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              className="rounded-[32px] p-8 text-white shadow-lg"
              style={{
                backgroundImage: `linear-gradient(135deg, ${card.gradientFrom}, ${card.gradientTo})`,
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: card.iconBg }}
                >
                  {(() => {
                    const Icon = featureIcons[card.icon as keyof typeof featureIcons];
                    return (
                      <Icon
                        className="h-5 w-5"
                        style={{ color: card.gradientFrom }}
                      />
                    );
                  })()}
                </span>
                <h3 className="text-xl font-semibold">
                  <span style={{ color: card.highlightColor }}>{card.highlight}{" "}</span>
                  <span className="text-white">{card.title} </span>
                </h3>
              </div>
              <div className="mt-6 rounded-2xl  p-5">
                <ul className="space-y-3 text-sm text-white/95">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <FaRegCircleCheck
                        className="mt-0.5 h-5 w-5"
                        style={{ color: card.checkColor }}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
