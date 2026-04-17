"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import { headerData } from "@/data/header";
import { Container } from "./Container";

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isExternalLink = (href: string) => href.startsWith("http");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm relative">
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link href={headerData.logo.href} className="text-lg font-semibold tracking-tight relative z-50">
          <Image
            src={headerData.logo.src}
            alt={headerData.logo.alt}
            width={headerData.logo.width}
            height={headerData.logo.height}
            className="h-auto w-auto"
          />
        </Link>
        <div className="flex items-center gap-4 md:gap-6 relative z-50">
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {headerData.links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative pb-1 transition-colors duration-200 ${isActive
                      ? "text-[#0a1f44] font-bold"
                      : "text-slate-500 hover:text-[#0a1f44]"
                    }`}
                >
                  {link.label}

                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#72BF44] 
          transform origin-left transition-transform duration-300 ease-out
          ${isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                      }`}
                  />
                </Link>
              );
            })}
          </nav>
          {isExternalLink(headerData.cta.href) ? (
            <a
              href={headerData.cta.href}
              target="_blank"
              rel="noreferrer"
              className="group relative hidden md:inline-flex items-center justify-center gap-2 rounded-md bg-[#354C9E] px-4 py-2 text-sm font-semibold text-white 
  overflow-hidden transition-colors duration-300
  hover:bg-[#2d4090] hover:shadow-md active:shadow-sm"
            >
              <FiUser className="h-4 w-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">{headerData.cta.label}</span>
              <span className="pointer-events-none absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 skew-x-12 
  transition-all duration-500 group-hover:left-[125%]"></span>
            </a>
          ) : (
            <Link
              href={headerData.cta.href}
              className="group relative hidden md:inline-flex items-center justify-center gap-2 rounded-md bg-[#354C9E] px-4 py-2 text-sm font-semibold text-white 
  overflow-hidden transition-colors duration-300
  hover:bg-[#2d4090] hover:shadow-md active:shadow-sm"
            >
              <FiUser className="h-4 w-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">{headerData.cta.label}</span>
              <span className="pointer-events-none absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 skew-x-12 
  transition-all duration-500 group-hover:left-[125%]"></span>
            </Link>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 z-40 md:hidden"
          >
            <div className="flex flex-col p-4 space-y-4 shadow-xl pb-6">
              {headerData.links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-2 text-base font-medium rounded-lg transition-colors ${isActive
                      ? "text-[#0a1f44] font-bold bg-slate-50 border-l-[3px] border-[#72BF44]"
                      : "text-slate-500 hover:text-[#0a1f44] hover:bg-slate-50"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="px-4 pt-2 border-t border-gray-100">
                {isExternalLink(headerData.cta.href) ? (
                  <a
                    href={headerData.cta.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full rounded-md bg-[#354C9E] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2d4090]"
                  >
                    <FiUser className="h-4 w-4" />
                    {headerData.cta.label}
                  </a>
                ) : (
                  <Link
                    href={headerData.cta.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full rounded-md bg-[#354C9E] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2d4090]"
                  >
                    <FiUser className="h-4 w-4" />
                    {headerData.cta.label}
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
