"use client";

import { Container } from "@/components/layout/Container";
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
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function JourneySection() {

  return (
    <section className="py-20 md:py-32 bg-white">
      <Container>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {aboutUsData.journey.title}
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            className="hidden md:block absolute top-[31px] left-[12.5%] right-[12.5%] h-[2px] bg-[#72BF44] origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {aboutUsData.journey.steps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative flex flex-col items-center"
              >
                <div className="relative w-16 h-16 rounded-full bg-white border-2 border-[#72BF44] flex items-center justify-center text-gray-800 mb-6 z-10 shadow-sm">
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#72BF44] text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                    {step.num}
                  </div>
                  <step.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
