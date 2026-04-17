import Image from "next/image";
import Link from "next/link";

import { footerData } from "@/data/footer";
import { CTASection } from "@/components/home/CTASection";
import { Container } from "./Container";

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <>
      <CTASection />
      <footer className="border-t-[3px] border-[#72BF44] bg-[#0A1F44] text-white">
        <Container className="grid gap-x-8 gap-y-10 py-12 text-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-12">
          {footerData.columns.map((column) => {
            if (column.type === "brand") {
              return (
                <div key={column.type} className="w-full max-w-sm space-y-4 text-left sm:col-span-2 md:col-span-3 lg:col-span-4">
                  <Link href="/" className="inline-flex items-center">
                    <Image
                      src={column.logoSrc}
                      alt={column.logoAlt}
                      width={140}
                      height={40}
                      className="h-auto w-auto"
                    />
                  </Link>
                  <p className="max-w-xs leading-relaxed text-white/70">{column.description}</p>
                  <div className="flex items-center gap-3 text-white/70">
                    {column.socials.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          aria-label={social.label}
                          className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0A1F44] text-white/80 ring-1 ring-white/10 overflow-hidden"
                          rel="noreferrer"
                          target="_blank"
                        >
                          {/* Fill Layer */}
                          <span className="absolute inset-0 -translate-x-full bg-[#354c9e] transition-transform duration-300 group-hover:translate-x-0"></span>

                          {/* Icon */}
                          <Icon className="relative z-10 h-4 w-4 transition-colors duration-300 group-hover:text-white" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            }

            if (column.type === "links") {
              return (
                <div key={column.title} className="space-y-3 text-left lg:col-span-2">
                  <p className="text-base font-semibold text-white">{column.title}</p>
                  <ul className="space-y-2 text-white/70">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        {link.href.startsWith("http") ? (
                          <a href={link.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
                            {link.label}
                          </a>
                        ) : (
                          <Link href={link.href} className="transition-colors hover:text-white">
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            return (
              <div key={column.title} className="space-y-3 text-left lg:col-span-2">
                <p className="text-base font-semibold text-white">{column.title}</p>
                <div className="space-y-2 text-white/70">
                  {column.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </Container>

        <Container className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <span>
            {"\u00A9"} {year} TVS Certified. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-4">
            {footerData.bottomLinks.map((link) =>
              link.href.startsWith("http") ? (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              )
            )}
          </div>
        </Container>
      </footer>
    </>
  );
}
