"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import { LuShieldCheck } from "react-icons/lu";
import { motion } from "framer-motion";


import { serviceData } from "@/data/service";
import { Container } from "@/components/layout/Container";

export function HeroSection() {
    const { hero } = serviceData;
    const heroAlt = hero.titleLines.map((line) => line.text).join(" ");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
            },
        },
    };

    return (
        <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0A1F44] text-white">
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1.05, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0"
            >
                <Image
                    src="/service-banner.webp"
                    alt={heroAlt}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
            </motion.div>

            <Container className="relative py-20 lg:py-24">
                <motion.div
                    className="max-w-2xl space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
                    >
                        {hero.titleLines.map((line, i) => (
                            <span
                                key={i}
                                className={`${line.accent ? "text-[#60A5FA]" : "text-white"
                                    }`}
                            >
                                {line.text}{" "}
                            </span>
                        ))}
                    </motion.h1>
                                            <motion.div
                        variants={itemVariants}
                        className="space-y-2 text-sm leading-relaxed text-white/75 md:text-base"
                    >
                        {hero.subtitleLines.map((line) => (
                            <p key={line}>{line}</p>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap gap-4"
                    >

                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
}
