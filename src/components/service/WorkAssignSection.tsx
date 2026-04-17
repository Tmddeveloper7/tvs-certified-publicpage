"use client";

import { Container } from "@/components/layout/Container";
import { motion, Variants } from "framer-motion";
import { serviceData } from "@/data/service";

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
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export function WorkAssignSection() {
    const { journey } = serviceData;
    const steps = journey.steps;

    return (
        <section className="py-20 md:py-28" style={{ backgroundColor: "#F5F5F5A1" }}>
            <Container>
                {/* Header */}
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        {journey.title}
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Horizontal connecting line - desktop */}
                    <motion.div
                        className="hidden md:block absolute top-[28px] left-[10.5%] right-[10.5%] h-[3px] bg-[#1E3A5F] origin-left z-0"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
                    />

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-0 text-center"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {steps.map((step, idx) => {
                            return (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="relative flex flex-col items-center"
                                >
                                    {/* Circle */}
                                    <div
                                        className={`
                                            relative z-10 flex h-14 w-14 items-center justify-center rounded-full
                                            text-sm font-bold bg-[#0A1F44] text-[#72BF44] border-[3px] border-[#72BF44]
                                        `}
                                    >
                                        {step.num}
                                    </div>

                                    {/* Title */}
                                    <h4 className="mt-5 text-base font-bold text-gray-900">
                                        {step.title}
                                    </h4>

                                 
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
