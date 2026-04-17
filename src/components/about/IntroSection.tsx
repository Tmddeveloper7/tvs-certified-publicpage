"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { motion, Variants } from "framer-motion";
import { aboutUsData } from "@/data/aboutus";
import Link from "next/link";


export function IntroSection() {
  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const rightVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
    }
  };

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={leftVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {aboutUsData.intro.titleLines[0]}
              <br />
              {aboutUsData.intro.titleLines[1]}
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              {aboutUsData.intro.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

           <div className="flex flex-col divide-y divide-gray-200">
  {aboutUsData.intro.features.map((feature, idx) => (
    <div key={idx} className="py-5 flex flex-col gap-4">
      
      {/* TOP CONTENT */}
      <div className="flex items-start gap-3">
        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
          <feature.icon className="w-6 h-6" />
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">
            {feature.title}
          </h4>
          <p className="text-sm text-gray-500">
            {feature.subtitle}
          </p>
        </div>
      </div>

    </div>
  ))}
</div>
<div className="pl-11 flex flex-wrap gap-4">
  {aboutUsData.intro.buttons?.map((btn, i) => (
    <a
      key={i}
      href={btn.link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-md px-5 py-2 text-sm font-semibold 
      text-[#3b4fa3] border border-[#3b4fa3] transition-all duration-300"
    >
      {/* Text */}
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
        {btn.text}
      </span>

      {/* Fill Animation */}
      <span className="absolute inset-0 bg-[#3b4fa3] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
    </a>
  ))}
</div>
          </motion.div>

          <motion.div
            className="relative mt-12 lg:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={rightVariants}
          >
            <div className="relative aspect-[4/3] w-full max-w-[500px] ml-auto rounded-[2rem] overflow-hidden  bg-white">
              <Image
                src={aboutUsData.intro.image}
                alt={`${aboutUsData.intro.titleLines.join(" ")} illustration`}
                fill
                className="object-cover"
              />
            </div>

            {/* <motion.div
              className="absolute -bottom-8 -left-4 sm:-left-8 bg-white p-6 sm:p-8 rounded-2xl shadow-xl max-w-[280px] sm:max-w-[320px] border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <aboutUsData.intro.badge.icon className="w-6 h-6 text-[#72BF44]" />
                <h4 className="font-bold text-gray-900 text-lg">{aboutUsData.intro.badge.title}</h4>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                {aboutUsData.intro.badge.subtitle}
              </p>
            </motion.div> */}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
