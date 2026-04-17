"use client";

import Image from "next/image";
import { FiTrendingUp } from "react-icons/fi";
import { TbHammer } from "react-icons/tb";
import { GoShieldCheck } from "react-icons/go";
import { motion, Variants } from "framer-motion";
import { FiShield } from "react-icons/fi";
import { TbClipboardCheck } from "react-icons/tb";

import { serviceData } from "@/data/service";
import { Container } from "@/components/layout/Container";
import { LiaCarSideSolid } from "react-icons/lia";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuBuilding2 } from "react-icons/lu";
import { FiArrowRight } from "react-icons/fi";
import { MdOutlineMiscellaneousServices,MdOutlineDomainVerification } from "react-icons/md";
import { MdCarCrash } from "react-icons/md";
import { TbParkingCircle } from "react-icons/tb";
import { FaCarCrash } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { FaHandshake } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import { PiMoneyWavy } from "react-icons/pi";
import { TbClockShield } from "react-icons/tb";
import { RiRoadsterLine } from "react-icons/ri";




const benefitIcons = [MdOutlineMiscellaneousServices , MdCarCrash, TbParkingCircle];

const trutedIcons = [RiRoadsterLine , TbClockShield, MdOutlineDomainVerification, GiAutoRepair, TbClipboardCheck, PiMoneyWavy];


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

export function ServiceLimitSection() {
    const { serviceLimits ,trustedPartners } = serviceData;
    const badgeAlt = `${serviceLimits.title} badge`;

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

                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 leading-snug max-w-2xl mx-auto">
                        {serviceLimits.title}
                    </h2>

                    <p className="mt-3 max-w-xl text-sm text-zinc-600 text-center leading-relaxed">
                        {serviceLimits.subtitle}
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
                    {serviceLimits.items.map((item, index) => {
                        const Icon = benefitIcons[index % benefitIcons.length];

                        return (
                            <motion.div
                                key={item.title}
                                variants={itemVariants}
                                className="flex flex-col items-start text-left rounded-2xl bg-[#EBF3FE] p-8 transition hover:shadow-md"
                            >
                                {/* Icon */}
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#72BF44] text-white">
                                    <Icon className="h-6 w-6" />
                                </div>

                                {/* Title */}
                                <h3 className="mt-5 text-lg font-bold text-zinc-900">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                                    {item.description}
                                </p>

                                {/* Learn More */}
                                {/* <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#0A1F44] hover:text-[#72BF44]   transition-colors">
                                    Learn More
                                    <span className="text-base"><FiArrowRight /></span>
                                </a> */}
                            </motion.div>
                        );
                    })}
                </motion.div>

            </Container>

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

                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 leading-snug max-w-2xl mx-auto">
                        {trustedPartners.title}
                    </h2>

                    <p className="mt-3 max-w-xl text-sm text-zinc-600 text-center leading-relaxed">
                        {trustedPartners.subtitle}
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
                    {trustedPartners.items.map((item, index) => {
                        const Icon = trutedIcons[index];
                        
                        return (
                            <motion.div
                                key={item.title}
                                variants={itemVariants}
                                className="flex flex-col items-start text-left rounded-2xl bg-[#EBF3FE] p-8 transition hover:shadow-md"
                            >
                                {/* Icon */}
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#72BF44] text-white">
                                    <Icon className="h-6 w-6" />
                                </div>

                                {/* Title */}
                                <h3 className="mt-5 text-lg font-bold text-zinc-900">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                                    {item.description}
                                </p>

                                {/* Learn More */}
                                {/* <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#0A1F44] hover:text-[#72BF44]   transition-colors">
                                    Learn More
                                    <span className="text-base"><FiArrowRight /></span>
                                </a> */}
                            </motion.div>
                        );
                    })}
                </motion.div>

            </Container>
        </section>
    );
}
