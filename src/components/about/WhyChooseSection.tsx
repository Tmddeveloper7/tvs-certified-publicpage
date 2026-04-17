"use client";

import { Container } from "@/components/layout/Container";
import { FiShield, FiFileText } from "react-icons/fi";
import { motion, Variants } from "framer-motion";
import { TbClipboardCheck } from "react-icons/tb";
import { LuWallet } from "react-icons/lu";
import { BiRecycle } from "react-icons/bi";
import { VscGlobe } from "react-icons/vsc";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const features = [
  {
    icon: TbClipboardCheck,
    title: "Trusted Foundation",
    description: "Backed by strong joint venture partners, TVS Certified is built to deliver more transparent, disciplined, and reliable B2B vehicle transactions.",
  },
  {
    icon: FiFileText,
    title: "On-Ground Execution",
    description: "Beyond the digital platform, our yard operations, documentation coordination, and follow-up support help transactions move forward smoothly.",
  },
  {
    icon: BiRecycle,
    title: "Ecosystem Support",
    description: "Through group synergies and partner-enabled services, we support customers with value-added solutions beyond the transaction itself.",
  },
  {
    icon: VscGlobe,
    title: "Strong Network",
    description: "Supported by a growing network of buyers and vehicle supply, helping create stronger transaction opportunities.",
  },
];

export function WhyChooseSection() {


  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <Container>
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose TVS Certified?
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full"
            >
              <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center text-green-600 mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
