import { LuClock9, LuPenTool } from "react-icons/lu";
import { BsPatchCheck } from "react-icons/bs";
import { GoShieldCheck } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { LiaCheckCircle } from "react-icons/lia";
import { FiKey, FiHeart, FiAward, FiUsers } from "react-icons/fi";
import { MdOutlineTransform } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { LiaHandshake } from "react-icons/lia";
import { PiMoneyWavy } from "react-icons/pi";

export const aboutUsData = {
  hero: {
    titleLines: [
      { text: "Driving Trust in Used", accent: false },
      { text: "Vehicle Transactions.", accent: false },
    ],
    subtitleLines: [
      "We help create a more professional and trusted used vehicle transaction ecosystem through technology, operational discipline and industry expertise.",
    ],
  },
  intro: {
    titleLines: [
      "Who We Are",
    ],
    paragraphs: [
      "TVS Certified is a joint venture between TVS Mobility, Mitsubishi Corporation, and Arai Shoji. We are a B2B used vehicle transaction platform built on the trust and market understanding established by the TVS Group, combined with Japanese auction expertise and operational discipline.",
      "Our goal is to provide a more transparent, reliable, and efficient marketplace where businesses can buy and sell used vehicles with confidence."
    ],
    features: [
      {
        icon: VscWorkspaceTrusted,
        title: "Trusted Foundation",
        subtitle: "Built on the trust and strong market foundation established by the TVS Group",
        buttonText: "Tvs Mobility",
        buttonLink: "https://tvsmobility.in"
      },
      {
        icon: LiaHandshake,
        title: "Auction Expertise",
        subtitle: "Strengthened by Japanese auction know-how and operational discipline",
        buttonText: "Mitsubishi Corporation",
          buttonLink: "https://www.mitsubishicorp.com/jp/en/index.html"
        },
       {
        icon: PiMoneyWavy,
        title: "Transparent Transactions",
        subtitle: "Focused on creating a more reliable and efficient B2B marketplace",
        buttonText: "Arai Shoji",
        buttonLink: "https://www.arai-group.co.jp/en/"
      }
    ],
    buttons: [
      { text: "TVS Mobility", link: "https://tvsmobility.in" },
      { text: "Mitsubishi Corporation", link: "https://www.mitsubishicorp.com/jp/en/index.html" },
      { text: "Arai Shoji", link: "https://www.arai-group.co.jp/en/" },
    ],
    image: "/about-hands.webp",
    badge: {
      icon: GoShieldCheck,
      title: "100% Verified",
      subtitle: "Every vehicle comes with a complete history report and quality certification."
    }
  },
  journey: {
    title: "The Certification Journey",
    steps: [
      {
        num: "1",
        icon: IoSearchOutline,
        title: "Rigorous Inspection",
        description: "200+ checkpoints examined by certified engineers.",
      },
      {
        num: "2",
        icon: LuPenTool,
        title: "Expert Refurbishment",
        description: "Genuine parts replacement and fine-tuning.",
      },
      {
        num: "3",
        icon: LiaCheckCircle,
        title: "Quality Certification",
        description: "Final approval stamp only for the best vehicles.",
      },
      {
        num: "4",
        icon: FiKey,
        title: "Ready For Delivery",
        description: "Cleaned, polished, and ready for the road",
      },
    ]
  },
  principles: {
    subtitle: "Our Core Values",
    title: "Built on trust, discipline, and reliability",
    image: "/about-banner-2.webp",
    items: [
      {
        icon: FiHeart,
        title: "Trust",
        description: "We believe every transaction should be built on transparency, credibility, and accountability.",
      },
      {
        icon: FiAward,
        title: "Discipline",
        description: "We bring structured execution and operational rigor to every stage of the process.",
      },
      {
        icon: FiUsers,
        title: "Reliability",
        description: "We are committed to creating a more dependable and efficient marketplace for businesses.",
      },
    ]
  }
};
