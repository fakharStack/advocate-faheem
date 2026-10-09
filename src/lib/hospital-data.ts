import {
  Briefcase,
  Building2,
  FileCheck2,
  Gavel,
  Landmark,
  Scale,
  ShieldAlert,
  Users2,
} from "lucide-react";

export const hospital = {
  name: "Malik Faheem Khokhar",
  title: "Advocate High Court, Lahore",
  shortName: "MFK",
  city: "Lahore",
  address: "Lahore High Court, Lahore, Punjab, Pakistan",
  phone: "+92 308 5125111",
  phoneHref: "+923085125111",
  phone2: "+92 320 8007786",
  phone2Href: "+923208007786",
  whatsapp: "923085125111",
  whatsappHref: "https://wa.me/923085125111",
  whatsapp2: "923208007786",
  whatsappHref2: "https://wa.me/923208007786",
  hours: "Monday – Saturday: 9:00 AM – 5:00 PM",
  courtHours: "Court Hours: 9:00 AM – 2:00 PM | Chamber: 2:00 PM – 5:00 PM",
  rating: "96%",
  reviews: "52",
  tagline: "Trusted Legal Representation at the Lahore High Court.",
  intro:
    "A dedicated legal practice committed to justice, bail advocacy, and honest legal counsel for all — especially those who cannot afford representation — at the Lahore High Court.",
  bio: "Malik Faheem Khokhar, also known as Advocate Faheem Khokhar, is an esteemed advocate practicing at the Lahore High Court. A graduate of the University of the Punjab and alumnus of DPS Lahore, he is widely recognised for his tireless advocacy in bail matters, criminal defense, and his unique commitment to helping the underprivileged access justice. His YouTube channel features legal advice videos and real court proceedings — with viewers frequently praising his work in securing bail for poor and unclaimed prisoners produced before courts. He has maintained a 96% recommendation rating from his Facebook page followers.",
  youtube: "https://www.youtube.com/@advocatefaheemkhokhar265",
  facebookPage: "https://www.facebook.com/advocatefaheemkhokhar",
  facebookSince: "August 2012",
} as const;

export const advocate = hospital;

export const highlights = [
  "Lahore High Court representation & bail advocacy",
  "Honest, transparent & ethical legal counsel",
  "Champion for the underprivileged & poor clients",
  "96% recommend rating — 52 verified reviews",
] as const;

export const practiceAreas = [
  {
    id: "criminal-defense",
    name: "Criminal Defense & Bail",
    description:
      "Vigorous defense and expert bail advocacy at every stage of the criminal justice system — from FIR registration and pre-arrest bail to High Court proceedings, cross-examination, and criminal appeals.",
    Icon: Gavel,
    details: [
      "Pre-arrest & post-arrest bail petitions (High Court)",
      "Trial defense before Magistrates & Sessions Judges",
      "Quashment of FIRs (Section 561-A CrPC / Writ)",
      "Criminal appeals against conviction & sentences",
    ],
  },
  {
    id: "civil-litigation",
    name: "Civil Litigation",
    description:
      "Comprehensive representation in property disputes, specific performance, declarations of title, permanent injunctions, recovery of damages, and appellate matters before the High Court.",
    Icon: Scale,
    details: [
      "Property & land title disputes",
      "Stay orders and interlocutory injunctions",
      "Specific performance of contracts",
      "Appeals, revisions & reviews before High Court",
    ],
  },
  {
    id: "family-personal",
    name: "Family & Personal Matters",
    description:
      "Compassionate, discreet, and decisive handling of delicate domestic legal issues in accordance with the Family Courts Act and personal law.",
    Icon: Users2,
    details: [
      "Khula and dissolution of marriage petitions",
      "Child custody, visitation rights & guardianship",
      "Maintenance suits for wife and children",
      "Recovery of dower amount, dowry articles & gifts",
    ],
  },
  {
    id: "court-representation",
    name: "High Court Representation",
    description:
      "Seasoned courtroom advocacy before the Lahore High Court including writ petitions, constitutional matters, bail hearings, and appellate proceedings.",
    Icon: Landmark,
    details: [
      "Regular appearances at Lahore High Court",
      "Constitutional writ petitions under Article 199",
      "Appeals before High Court benches",
      "Representation before Special Tribunals & Banking Courts",
    ],
  },
  {
    id: "unclaimed-prisoners",
    name: "Unclaimed Prisoner Advocacy",
    description:
      "Dedicated representation for unclaimed prisoners produced before courts — ensuring that no individual is left without legal representation regardless of financial circumstances.",
    Icon: ShieldAlert,
    details: [
      "Bail applications for unclaimed prisoners",
      "Court production hearings & representation",
      "Coordination with families & court authorities",
      "Free & subsidised legal help for the underprivileged",
    ],
  },
  {
    id: "legal-documentation",
    name: "Legal Drafting & Documentation",
    description:
      "Flawless drafting of agreements, power of attorney, deeds of settlement, partnership contracts, legal notices, and statutory compliance documentation.",
    Icon: FileCheck2,
    details: [
      "Drafting deeds, wills & gifts (Hiba)",
      "Special & General Power of Attorney drafting and registration",
      "Partnership & commercial agreements",
      "Issuance and reply to statutory legal notices",
    ],
  },
] as const;

// Retain alias for existing component imports
export const departments = practiceAreas;

export const chambers = [
  {
    id: "lahore-high-court",
    name: "Lahore High Court Chamber",
    designation: "High Court of Punjab",
    location: "Lahore High Court, Lahore",
    city: "Lahore, Punjab",
    address: "Lahore High Court, Lahore, Punjab, Pakistan",
    timings: "Monday – Saturday: 9:00 AM – 5:00 PM",
    phone: "+92 308 5125111",
    whatsapp: "923085125111",
    focus: "High Court bail hearings, writ petitions, appeals, constitutional matters",
    badge: "Principal Chamber",
    mapQuery: "Lahore High Court, Lahore, Punjab, Pakistan",
  },
  {
    id: "lahore-district",
    name: "Lahore District Courts",
    designation: "District & Sessions Courts",
    location: "District Courts Complex, Lahore",
    city: "Lahore, Punjab",
    address: "District & Sessions Courts, Lahore, Punjab, Pakistan",
    timings: "Monday – Saturday: 9:00 AM – 4:00 PM",
    phone: "+92 320 8007786",
    whatsapp: "923208007786",
    focus: "Civil & criminal trials, family matters, Sessions cases, District Court hearings",
    badge: "District Chamber",
    mapQuery: "District Courts Lahore, Punjab, Pakistan",
  },
] as const;

export const testimonials = [
  {
    name: "Muhammad Asif",
    role: "Client, Bail Matter — Lahore",
    quote:
      "Advocate Faheem Khokhar got bail for my brother who had no money for a lawyer. He is a true servant of justice. May Allah bless him. We are forever grateful for his help in our most difficult time.",
    rating: 5,
  },
  {
    name: "Tariq Hussain",
    role: "YouTube Viewer & Client",
    quote:
      "I watched his videos on YouTube and learned so much about my legal rights. When I needed help, he was accessible and transparent. He really helps poor people who cannot afford expensive lawyers.",
    rating: 5,
  },
  {
    name: "Chaudhry Naveed",
    role: "Facebook Page Follower",
    quote:
      "His Facebook page has been a source of legal awareness for thousands. He posts about unclaimed prisoners and helps connect families with their loved ones in court. A true advocate for the people.",
    rating: 5,
  },
  {
    name: "Rana Bilal",
    role: "Client, Lahore High Court",
    quote:
      "Professional, punctual, and deeply knowledgeable. Advocate Faheem Khokhar handled our High Court matter with full dedication and kept us informed at every step of the proceedings.",
    rating: 5,
  },
] as const;

export const faqs = [
  {
    question: "What should I bring to an initial legal consultation?",
    answer:
      "Please bring all documents relevant to your matter, including copies of FIRs, court notices, plaints, written statements, registered deeds, revenue records (Fard/Intiqal), previous orders, and your national identity card (CNIC). A complete record enables an accurate legal evaluation.",
  },
  {
    question: "How are advocate fees and litigation expenses structured?",
    answer:
      "We believe in complete financial transparency. Professional fees are discussed and agreed upon upfront based on the complexity of the matter, forum, and expected stages of litigation. Advocate Faheem Khokhar is known for helping those who cannot afford legal representation — reach out to discuss your situation.",
  },
  {
    question: "Can you handle urgent bail matters at the Lahore High Court?",
    answer:
      "Yes. Bail advocacy — including pre-arrest and post-arrest bail at the High Court — is a core specialty. For urgent bail applications or police matters, WhatsApp directly on 0308 5125111 or 0320 8007786 for an immediate response.",
  },
  {
    question: "How long does a civil or criminal case typically take in court?",
    answer:
      "The duration of litigation varies based on the nature of the case, statutory notice requirements, witness testimony, and court rosters. Our chamber is committed to proactive advocacy — minimising unnecessary adjournments and pursuing timely disposal.",
  },
  {
    question: "How do I schedule an urgent consultation?",
    answer:
      "For urgent matters — including bail applications, stay orders, or impending court deadlines — you can call or WhatsApp directly at 0308 5125111 or 0320 8007786. You can also watch legal advice videos on the YouTube channel at youtube.com/@advocatefaheemkhokhar265.",
  },
] as const;

export const timeSlots = [
  "9:00 AM",
  "10:30 AM",
  "12:00 PM",
  "2:30 PM",
  "3:30 PM",
  "4:30 PM",
] as const;

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/departments", label: "Practice Areas" },
  { to: "/chambers", label: "Chambers" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;
