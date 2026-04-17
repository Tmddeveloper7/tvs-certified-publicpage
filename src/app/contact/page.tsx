import type { Metadata } from "next";
import type { ReactNode } from "react";

import Image from "next/image";
import { FiClock, FiMail, FiPhone } from "react-icons/fi";

import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact TVS Certified",
  description:
    "Reach TVS Certified to plan a certified vehicle visit, request inspections, or get auction support.",
  openGraph: {
    title: "Contact TVS Certified",
    description:
      "Talk with our advisors about vehicle availability, inspections, and auction support.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-[#07162b] text-white">
      <div className="absolute inset-0">
        <Image
          src="/contact-us.webp"
          alt="Contact background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
   
      <Container className="relative grid min-h-screen items-center gap-12 py-16 lg:grid-cols-[1.05fr_1fr]">
        {/* Left info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center ">
              <Image
                src="/c-tick-3.webp"
                alt="TVS Certified checkmark"
                width={90}
                height={90}
              />
            </div>
            <div>
              <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
                Get in touch
                <br />
                with us today.
              </h1>
            </div>
          </div>
          <p className="max-w-md text-sm text-white/75">
            Share your details or inquiry, and our team will get back to you
            promptly to assist you.
          </p>

          <div className="space-y-4 text-sm">
            <ContactRow
              icon={<FiPhone className="h-4 w-4" />}
              label="Phone"
              value="+91 8925900478"
            />
            <ContactRow
              icon={<FiMail className="h-4 w-4" />}
              label="Email"
              value="support@tvscertified.in"
            />
            <ContactRow
              icon={<FiClock className="h-4 w-4" />}
              label="Hours"
              value="Mon-Sat, 9:30 AM - 6:00 PM"
            />
          </div>
        </div>

        {/* Right form */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_60px_-28px_rgba(0,0,0,0.7)] backdrop-blur-md">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#72bf44]">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.12em] text-white/60">{label}</p>
        <p className="text-sm font-semibold text-white">{value}</p>
      </div>
    </div>
  );
}
