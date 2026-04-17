import type { IconType } from "react-icons";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";

type FooterSocial = {
  label: string;
  href: string;
  icon: IconType;
};

type FooterColumnBrand = {
  type: "brand";
  logoSrc: string;
  logoAlt: string;
  description: string;
  socials: FooterSocial[];
};

type FooterColumnLinks = {
  type: "links";
  title: string;
  links: Array<{ label: string; href: string }>;
};

type FooterColumnContact = {
  type: "contact";
  title: string;
  lines: string[];
};

export type FooterColumn = FooterColumnBrand | FooterColumnLinks | FooterColumnContact;

export const footerData = {
  columns: [
    {
      type: "brand",
      logoSrc: "/footer-logo.webp",
      logoAlt: "TVS Certified",
      description:
        "A trusted B2B used vehicle transaction platform focused on transparency, operational discipline, and reliable transaction support.",
      socials: [
        { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61569926314940", icon: FiFacebook },
        // { label: "X", href: "https://x.com", icon: FaXTwitter },
        { label: "Instagram", href: "https://www.instagram.com/tvscertified", icon: BsInstagram },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/tvs-certified/", icon: LuLinkedin },
      ],
    },
    {
      type: "links",
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "How It Works", href: "/vehicles" },
        { label: "Our Services", href: "/services" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      type: "links",
      title: "Members",
      links: [
        { label: "Sign in", href: "https://tvscertified.in/apps/login" },
        { label: "Register as a member", href: "/dealer" },
            ],
    },
    {
      type: "links",
      title: "Support",
      links: [
        { label: "Contact Us", href: "/contact" },
        { label: "FAQs", href: "/faqs" },
            ],
    },
    {
      type: "contact",
      title: "Contact Us",
      lines: [
        "No.13, Bypass Road, Poonamallee,",
        "Chennai - 600056.",
        "+91 8925900478",
        "support@tvscertified.in",
      ],
    },
  ] as FooterColumn[],
  bottomLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    // { label: "Terms of Service", href: "/terms" },
  ],
};
