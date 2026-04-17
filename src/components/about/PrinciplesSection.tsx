"use client";

import { Container } from "@/components/layout/Container";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { aboutUsData } from "@/data/aboutus";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export function PrinciplesSection() {

  const backgroundAlt = `${aboutUsData.principles.title} background`;

  return (
    <section className="py-20 md:py-32 text-white relative flex items-center justify-center overflow-hidden">
      {/* <div className="absolute inset-0 opacity-10 bg-[url('/about-banner-2.webp')] bg-cover bg-center" /> */}
      <Image
        src={aboutUsData.principles.image}
        alt={backgroundAlt}
        fill
        sizes="100vw"
        className="object-cover"
      />

      <Container className="relative z-10 w-full">
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-[0.2em] text-[#72BF44] uppercase">
            {aboutUsData.principles.subtitle}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            {aboutUsData.principles.title}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {aboutUsData.principles.items.map((principle, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-[#051433] border border-blue-900/50 p-10 rounded-2xl hover:bg-[#06183d] transition-colors h-full"
            >
              <principle.icon className="w-8 h-8 text-[#72BF44] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{principle.title}</h3>
              <p className="text-blue-200/80 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
