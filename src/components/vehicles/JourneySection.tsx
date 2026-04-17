"use client";

import { Container } from "@/components/layout/Container";
import { motion, Variants } from "framer-motion";
import { vehiclesData } from "@/data/vehicles";

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

export function JourneySection() {
    const { journey } = vehiclesData.howItWorks;
    const steps = journey.steps;

    return (
        <section className="py-10 md:py-18" style={{ backgroundColor: "#F5F5F5A1" }}>
            <Container>
                <div className="relative hidden md:block">
                    <div className="absolute left-[5%] right-[5%] top-10 h-[4px] rounded-full bg-[#15355e]" />
                </div>

                <motion.div
                    className="grid grid-cols-2 gap-10 text-center md:flex md:justify-between md:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="relative flex min-w-[140px] flex-col items-center gap-4 md:basis-1/6"
                        >
                            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-[4px] border-[#72BF44] bg-[#0A1F44] text-lg font-bold text-[#72BF44] shadow-[0_10px_25px_-12px_rgba(0,0,0,0.45)]">
                                {step.num}
                            </div>
                            <h4 className="text-base font-bold text-[#0A1F44] leading-tight">
                                {step.title}
                            </h4>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
