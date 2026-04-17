"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import { LuShieldCheck } from "react-icons/lu";
import { motion } from "framer-motion";


import { homeData } from "@/data/home";
import { Container } from "@/components/layout/Container";

export function HeroSection() {
  const { hero } = homeData;
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
          src="/banner.webp"
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
          <motion.span 
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-[#8ec3ff]"
          >
            <LuShieldCheck className="h-4 w-4" />
            {hero.badge}
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            {hero.titleLines.map((line, i) => (
              <span
                key={i}
               className={`${
                 line.accent ? "text-[#60A5FA]" : "text-white"
               } ${line.inline ? "inline" : "block"}`}
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
  {/* Primary Button */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
  >
    <Link
      href={hero.primaryCta.href}
      className="relative inline-flex items-center justify-center gap-3 rounded-xl bg-[#72BF44] px-6 py-3 text-sm font-semibold text-white overflow-hidden group"
    >
      <span className="relative z-10 flex items-center gap-2">
        {hero.primaryCta.label}
        <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>

      {/* Hover Background Effect */}
      <span className="absolute inset-0 bg-[#67b23f] opacity-0 group-hover:opacity-100 transition duration-300"></span>
    </Link>
  </motion.div>

  {/* Secondary Button */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
  >
    <Link
      href={hero.secondaryCta.href}
      className="relative inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white overflow-hidden group"
    >
      <span className="relative z-10 flex items-center gap-2">
        <FiPlay className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
        {hero.secondaryCta.label}
      </span>

      {/* Hover Border Glow */}
      <span className="absolute inset-0 border border-white/60 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl"></span>
    </Link>
  </motion.div>
</motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
