export type FaqItem = {
  question: string;
  answer: string;
  link?: { label: string; href: string };
  category: "Registration & Eligibility" | "Auction Process" | "Payments & Services";
};


export const faqItems: FaqItem[] = [
  {
    question: "Who can register on TVS Certified?",
    answer:
      "Automobile dealers, corporate entities, and other eligible business customers can register on TVS Certified. Individual consumers are not eligible to register.",
    category: "Registration & Eligibility",
  },
  {
    question: "Is TVS Certified open to individuals or businesses only?",
    answer:
      "TVS Certified is a B2B platform and is open to businesses only. Individual customers cannot register or participate.",
    category: "Registration & Eligibility",
  },
  {
    question: "How do I become a member of TVS Certified?",
    answer:
      "Submit an enquiry through our website and wait for a TVS Certified representative to contact you, or reach out directly to our staff for membership assistance.",
    link: { label: "Become a dealer", href: "/dealer" },
    category: "Registration & Eligibility",
  },
  {
    question: "What documents are required for registration?",
    answer:
      "The required documents may include PAN, GST Certificate, Udyog Aadhaar, and other relevant business registration documents, depending on the type of entity.",
    category: "Registration & Eligibility",
  },
  {
    question: "How does the auction process work on TVS Certified?",
    answer:
      "You can review the end-to-end auction flow, including onboarding, bidding, and settlement steps, on our How It Works overview.",
    link: { label: "See the process", href: "/services" },
    category: "Auction Process",
  },
  {
    question: "Are auctions conducted online, offline, or both?",
    answer:
      "The auction process is conducted fully online. However, listed vehicles can be physically inspected at our offline yards.",
    category: "Auction Process",
  },
  {
    question: "Can I view vehicle details before placing a bid?",
    answer:
      "Yes. Once you become a member, you can review vehicle details and inspection highlights before placing a bid.",
    link: { label: "Browse vehicles", href: "/vehicles" },
    category: "Auction Process",
  },
  {
    question: "Are vehicles inspected before being listed?",
    answer:
      "Yes. Vehicles are evaluated by TVS Certified staff, and detailed inspection reports are provided.",
    category: "Auction Process",
  },
  {
    question: "How is payment handled after a successful bid?",
    answer:
      "After winning a vehicle, the buyer pays the vehicle amount together with the applicable Facilitation Fee to TVS Certified.",
    category: "Payments & Services",
  },
  {
    question: "When does the seller receive payment?",
    answer:
      "Once the buyer has completed payment, TVS Certified makes payment to the seller as soon as possible.",
    category: "Payments & Services",
  },
  {
    question: "Does TVS Certified support documentation coordination and RC follow-up?",
    answer:
      "Yes. TVS Certified provides support for documentation coordination and RC follow-up.",
    category: "Payments & Services",
  },
  {
    question: "What services does TVS Certified provide beyond auctions?",
    answer:
      "We support inspections, logistics, documentation, and other value-added services beyond auctions.",
    link: { label: "Our services", href: "/services" },
    category: "Payments & Services",
  },
];
