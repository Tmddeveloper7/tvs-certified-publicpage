import { title } from "process"

export const vehiclesData = {
  hero: {
    titleLines: [
      { text: "Simple Steps.", accent: false },
      { text: "Trusted Transactions.", accent: false },
    ],
    subtitleLines: [
      "See how TVS Certified helps buyers and sellers move from listing to auction to completion.",
    ],
  },
 howItWorks: {
  badge: "What TVS Certified does?",
  title: "What TVS Certified does?",
  description:
    "TVS Certified is a trusted B2B platform that makes buying and selling pre-owned vehicles simple, transparent, and reliable.",

  timeline: [
    { label: "Overall Process" },
    { label: "How Selling works" },
    { label: "How Buying works" },
    { label: "Why users trust this process?" },
  ],

   journey: {
        steps: [
            {
                num: "01",
                title: "Register",
            },
            {
                num: "02",
                title: "Browse Vehicles",
            },
            {
                num: "03",
                title: "Participate in Auction",
            },
            {
                num: "04",
                title: "Win Confirmation",
            },
            {
                num: "05",
                title:"Payment & Documentation"
            },
            {
                num: "06",
                title:"Vehicle Handover / Delivery"
            }
        ]
    },

  cards: [
    {
      title: "How Selling works",
      variant: "numbered",
      items: [
        "Submit vehicle details / Contact sales",
        "inspection / vehicle assessment",
        "RSV price setting",
        "Approve listing and auction schedule",
        "Receive bids through auction",
        "Receive bids through auction, Get payment as per process",
      ],
    },
    {
      title: "How Buying works",
      variant: "numbered",
      items: [
        "Register as a buyer",
        "Explore available listing vehicle",
        "Review inspection reports and vehicle details",
        "Place bids in auction",
        "Complete payment if successful",
        "Delivery",
      ],
    },
    {
      title: "Why users trust this process?",
      variant: "bulleted",
      items: [
        "Professional vehicle inspection",
        "Transparent bidding process",
        "Verified members",
        "Reliable transaction workflow",
      ],
    },
  ],

  image: {
    src: "/vehicles-bid.webp",
    alt: "Dealers watching the TVS Certified live auction",
  },
},
 
  featureCards: [
    {
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
      title: "Value to Sellers",
      highlight: "Sellers",
      icon: "trend",
      gradientFrom: "#72BF44",
      gradientTo: "#469716",
      highlightColor: "#193187",
      checkColor: "#1E3A8A",
      iconBg: "#E7F7E4",
      bullets: [
        "Faster vehicle liquidation within 24-48 hours",
        "Competitive dealer participation drives better prices",
        "Improved price realization through auction dynamics",
        "Hassle-free documentation and payment processing",
        "Zero inventory holding costs",
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
        inspection: "Verified Dealer Inspection",
        location: "Mumbai, MH",
        watching: "12 Watching",
        currentBid: "\u20b9 11,20,000",
        endsIn: "00:00",
        image: "/car-1.webp",
      },
      {
        model: "2019 Toyota Innova Crysta",
        inspection: "Verified Dealer Inspection",
        location: "Bangalore, KA",
        watching: "12 Watching",
        currentBid: "\u20b9 16,80,000",
        endsIn: "16:28",
        image: "/car-3.webp",
      },
      {
        model: "2020 Honda City ZX",
        inspection: "Verified Dealer Inspection",
        location: "Delhi, NCR",
        watching: "12 Watching",
        currentBid: "\u20b9 9,45,000",
        endsIn: "00:00",
        image: "/car-2.webp",
      },
      {
        model: "2021 Hyundai Creta SX",
        inspection: "Verified Dealer Inspection",
        location: "Mumbai, MH",
        watching: "12 Watching",
        currentBid: "\u20b9 11,20,000",
        endsIn: "00:00",
        image: "/car-1.webp",
      },
      {
        model: "2019 Toyota Innova Crysta",
        inspection: "Verified Dealer Inspection",
        location: "Bangalore, KA",
        watching: "12 Watching",
        currentBid: "\u20b9 16,80,000",
        endsIn: "16:28",
        image: "/car-3.webp",
      },
      {
        model: "2020 Honda City ZX",
        inspection: "Verified Dealer Inspection",
        location: "Delhi, NCR",
        watching: "12 Watching",
        currentBid: "\u20b9 9,45,000",
        endsIn: "00:00",
        image: "/car-2.webp",
      },
      {
        model: "2021 Hyundai Creta SX",
        inspection: "Verified Dealer Inspection",
        location: "Mumbai, MH",
        watching: "12 Watching",
        currentBid: "\u20b9 11,20,000",
        endsIn: "00:00",
        image: "/car-1.webp",
      },
      {
        model: "2019 Toyota Innova Crysta",
        inspection: "Verified Dealer Inspection",
        location: "Bangalore, KA",
        watching: "12 Watching",
        currentBid: "\u20b9 16,80,000",
        endsIn: "16:28",
        image: "/car-3.webp",
      },
      {
        model: "2020 Honda City ZX",
        inspection: "Verified Dealer Inspection",
        location: "Delhi, NCR",
        watching: "12 Watching",
        currentBid: "\u20b9 9,45,000",
        endsIn: "00:00",
        image: "/car-2.webp",
      },
    ],
  },
  promoBanner: {
    title:
      "A game-changer for our dealership. The transparency in pricing and quality of vehicles has helped us grow our inventory by 300% in just 6 months.",
    subtitle: "We will walk you through listing, bidding, and settlement flows.",
    cta: { label: "Join the Dealer Network", href: "/contact" },
  },
  platform: {
    title: "TVS Certified is the leading B2B auction platform",
    subtitle: "Connect with verified buyers, list inventory instantly, and track every bid.",
    points: [
      "Live auction rooms with instant bid updates",
      "Automated documentation and compliance checks",
      "Regional logistics and doorstep delivery support",
    ],
  },
  cta: {
    title: "Ready to Find Your Perfect Vehicle?",
    subtitle: "Join thousands of satisfied customers who have found their dream ride with TVS Certified.",
    stats: [
      { label: "Avg. auction completion time", value: "32 mins" },
      { label: "Certified inspection checks", value: "140+" },
    ],
    cta: { label: "Browse Listings Vehicles", href: "/contact" },
  },
};

export type VehiclesHowItWorks = typeof vehiclesData.howItWorks;
