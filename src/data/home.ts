export const homeData = {
  hero: {
    badge: "Verified Dealer-Only Platform",
    titleLines: [
      { text: "India's Trusted", accent: false, inline: true },
      { text: "B2B", accent: true, inline: true },
      { text: "Vehicle Auction", accent: true },
      { text: "Platform.", accent: false },
    ],
    subtitleLines: [
      "Bid on verified pre-owned vehicles from top sellers across India.",
      "Real-time auctions. Transparent pricing. Better margins.",
    ],
    primaryCta: { label: "Become a Dealer Member", href: "/dealer" },
    secondaryCta: { label: "Check listing vehicles", href: "https://tvscertified.in/apps/login" },
  },
  statsSection: {
    badge: "India's #1 Trusted Auto Marketplace",
    title_1: "Vehicle Auctions",
    title_2: "Driven By Trust & Value",
    stats: [
      // { label: ["Vehicles", "Sold"], value: "50k+" },
      { label: ["Active", "Auctions"], value: "200+" },
      { label: ["Happy", "Customers"], value: "95%" },
    ],
  },
  dealerBenefits: {
    title: "Unlock Exclusive Dealer Benefits",
    subtitle:
      "Join India's fastest growing network of verified automotive dealers and transform how you source inventory.",
    items: [
      {
        title: "Verified Listing Vehicles",
        description:
          "Every vehicle undergoes a rigorous 200+ point inspection by well-trained evaluators.",
      },
      {
        title: "Transparent Bidding",
        description:
          "Real-time bidding system ensures fair market value and complete transparency.",
      },
      {
        title: "Better Margins",
        description:
          "Lower your acquisition costs and protect your margins.",
      },
    ],
  },
  featureCards: [
    {
      title: "Buyers",
      highlight: "Value to",
      icon: "users",
      gradientFrom: "#354C9E",
      gradientTo: "#193187",
      highlightColor: "#72BF44",
      checkColor: "#72BF44",
      iconBg: "#E5EDFF",
      bullets: [
        "Access verified dealer inventory from across India",
        "Transparent, real-time bidding process",
        "Fair market-driven pricing with no hidden costs",
        "Comprehensive inspection reports for every vehicle",
        "Secure payment and documentation handling",
      ],
    },
    {
      title: "Sellers",
      highlight: "Value to",
      icon: "trend",
      gradientFrom: "#72BF44",
      gradientTo: "#469716",
      highlightColor: "#193187",
      checkColor: "#1E3A8A",
      iconBg: "#E7F7E4",
      bullets: [
        "Faster vehicle liquidation",
        "Competitive dealer participation drives better prices",
        "Improved price realization through auction dynamics",
        "Hassle-free documentation and payment processing",
        "Enhanced RC Falloww-up ",
      ],
    },
  ],
  latestVehicles: {
    title: "Live Featured Auctions",
    subtitle:
      "Bid on verified pre-owned vehicles from top sources. Real-time auctions ending soon.",
    viewAll: { label: "View All Auctions", href: "https://tvscertified.in/apps/login" },
    vehicles: [
      {
        model: "2021 Hyundai Creta SX",
        inspection: "If you want to check the detail please login or become a member!",
        location: "Mumbai, MH",
        watching: "12 Watching",
        currentBid: "₹11,20,000",
        endsIn: "00:00",
        image: "/car-1.webp",
      },
      {
        model: "2020 Honda City ZX",
        inspection: "If you want to check the detail please login or become a member!",
        // inspection: "Verified Dealer Inspection",
        location: "Delhi, NCR",
        watching: "12 Watching",
        currentBid: "₹9,45,000",
        endsIn: "00:00",
        image: "/car-2.webp",
      },
      {
        model: "2019 Toyota Innova Crysta",
        inspection: "If you want to check the detail please login or become a member!",
        // inspection: "Verified Dealer Inspection",
        location: "Bangalore, KA",
        watching: "12 Watching",
        currentBid: "₹16,80,000",
        endsIn: "16:28",
        image: "/car-3.webp",
      },
    ],
  },
  promoBanner: {
    title: "A game-changer for our dealership. The transparency in pricing and quality of vehicles has helped us grow our inventory by 300% in just 6 months.",
    subtitle: "We will walk you through listing, bidding, and settlement flows.",
    cta: { label: "Join the Dealer Network", href: "https://tvscertified.in/apps/login" },
  },
  platform: {
    title: "TVS Certified is the leading B2B auction platform",
    subtitle:
      "Connect with verified buyers, list inventory instantly, and track every bid.",
    points: [
      "Live auction rooms with instant bid updates",
      "Automated documentation and compliance checks",
      "Regional logistics and doorstep delivery support",
    ],
  },
  cta: {
    title: "Ready to Find Your Perfect Vehicle?",
    subtitle:
      "Join thousands of satisfied customers who have found their dream ride with TVS Certified.",
    stats: [
      { label: "Avg. auction completion time", value: "32 mins" },
      { label: "Certified inspection checks", value: "140+" },
    ],
    cta: { label: "Browse Listings Vehicles", href: "https://tvscertified.in/apps/login" },
  },
};

