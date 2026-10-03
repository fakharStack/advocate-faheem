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
  name: "Hafiz Anwar Zia Advocate",
  title: "Advocate High Court & District Courts",
  shortName: "HAZ",
  city: "Narowal",
  address: "Chamber 40, District & Sessions Court, Narowal, Punjab, Pakistan",
  phone: "+92 301 7672378",
  phoneHref: "+923017672378",
  whatsapp: "923017672378",
  whatsappHref: "https://wa.me/923017672378",
  hours: "Monday – Saturday: 8:30 AM – 4:30 PM",
  courtHours: "Court Hours: 8:30 AM – 2:30 PM | Chamber: 2:30 PM – 5:00 PM",
  rating: "4.7",
  reviews: "16",
  tagline: "Trusted Legal Representation in Narowal.",
  intro:
    "Distinguished legal practice committed to constitutional justice, zealous advocacy, and honest counsel across District Courts and High Court.",
  bio: "Hafiz Anwar Zia is an esteemed advocate with years of dedicated practice across District and Sessions Courts and High Courts. Known for meticulous legal drafting, commanding courtroom argument, and uncompromising professional ethics, he delivers strategic legal solutions in civil litigation, criminal defense, family disputes, and property matters.",
} as const;

export const advocate = hospital;

export const highlights = [
  "High Court & District Court representation",
  "Honest, transparent & ethical legal counsel",
  "Thorough case drafting & evidence preparation",
  "Dual chambers in Narowal & Zafarwal",
] as const;

export const practiceAreas = [
  {
    id: "civil-litigation",
    name: "Civil Litigation",
    description:
      "Comprehensive representation in property disputes, specific performance, declarations of title, permanent injunctions, recovery of damages, and appellate matters.",
    Icon: Scale,
    details: [
      "Property & land title disputes",
      "Stay orders and interlocutory injunctions",
      "Specific performance of contracts",
      "Appeals, revisions & reviews before Sessions & High Court",
    ],
  },
  {
    id: "criminal-defense",
    name: "Criminal Defense",
    description:
      "Vigorous defense at every stage of the criminal justice system—from registration of FIR and pre-arrest bail to trial proceedings, cross-examination, and criminal appeals.",
    Icon: Gavel,
    details: [
      "Pre-arrest & post-arrest bail petitions",
      "Trial defense before Magistrates & Sessions Judges",
      "Quashment of FIRs (Section 561-A CrPC / Writ)",
      "Criminal appeals against conviction & sentences",
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
    name: "Court Representation",
    description:
      "Seasoned courtroom advocacy before District & Sessions Courts Narowal, Judicial Magistrates, Special Tribunals, Banking Courts, and the Lahore High Court.",
    Icon: Landmark,
    details: [
      "Regular appearances in Narowal & Zafarwal Courts",
      "Constitutional writ petitions under Article 199",
      "Appeals before High Court benches",
      "Representation before Revenue & Administrative Authorities",
    ],
  },
  {
    id: "land-revenue",
    name: "Revenue & Land Disputes",
    description:
      "Expert counsel on Punjab land revenue matters, challenges to fraudulent mutations (Intiqal), partition of joint agricultural holdings, and demarcation proceedings.",
    Icon: Building2,
    details: [
      "Challenging fraudulent & disputed mutations",
      "Partition of joint agricultural & residential property",
      "Demarcation and possession suits",
      "Revenue appeals before Tehsildar, AC & Commissioner",
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
    id: "narowal",
    name: "Narowal Chamber",
    designation: "District & Sessions Courts",
    location: "Chamber 40, District Court Complex",
    city: "Narowal, Punjab",
    address: "Chamber 40, District Court, Narowal, Punjab, Pakistan",
    timings: "Monday – Saturday: 8:30 AM – 4:30 PM",
    phone: "+92 301 7672378",
    whatsapp: "923017672378",
    focus: "Civil & Criminal trials, Sessions cases, District Court hearings",
    badge: "Principal Chamber",
    mapQuery: "District Court Narowal, Punjab, Pakistan",
  },
  {
    id: "zafarwal",
    name: "Zafarwal Chambers",
    designation: "Tehsil Court Building",
    location: "Chambers 19 & 20, Court Building",
    city: "Zafarwal, Narowal",
    address: "Chambers 19 & 20, Court Building, Zafarwal, District Narowal, Punjab, Pakistan",
    timings: "Monday – Saturday: 9:00 AM – 3:30 PM",
    phone: "+92 301 7672378",
    whatsapp: "923017672378",
    focus: "Magisterial trials, civil suits, family litigation, local client advisory",
    badge: "Sub-Divisional Chamber",
    mapQuery: "Tehsil Courts Zafarwal, Narowal, Pakistan",
  },
] as const;

export const testimonials = [
  {
    name: "Muhammad Imran",
    role: "Property Owner, Narowal",
    quote:
      "Hafiz Anwar Zia is one of the most competent and honest advocates in Narowal. He handled our contested agricultural land case with supreme dedication, providing clear counsel at every hearing until our title was fully protected.",
    rating: 5,
  },
  {
    name: "Tariq Mahmood",
    role: "Business Client, Zafarwal",
    quote:
      "Outstanding legal guidance on family settlement and civil disputes. A patient listener who delivers realistic, ethical legal advice without false promises or unnecessary delays. Highly respected in both Narowal and Zafarwal bars.",
    rating: 5,
  },
  {
    name: "Chaudhry Bilal",
    role: "Client, District Court",
    quote:
      "Exceptional advocacy and commanding presence in court. Obtained urgent pre-arrest bail for my family member with sharp legal grounds. Always accessible and completely transparent about court procedures.",
    rating: 5,
  },
  {
    name: "Rana Waqas",
    role: "Litigant, Civil Suit",
    quote:
      "Professional handling of our civil suit and documentation. Always punctual and well-prepared for court hearings. Truly dedicated to his clients' cause.",
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
      "We believe in complete financial transparency. Professional fees are discussed and agreed upon upfront based on the complexity of the matter, forum, and expected stages of litigation. There are never any unexpected costs or hidden fees.",
  },
  {
    question: "Do you represent clients in both Narowal and Zafarwal?",
    answer:
      "Yes. Hafiz Anwar Zia maintains permanent working chambers in both locations: Chamber 40 at the District & Sessions Courts in Narowal, and Chambers 19 & 20 at the Court Building in Zafarwal.",
  },
  {
    question: "How long does a civil or criminal case typically take in court?",
    answer:
      "The duration of litigation varies based on the nature of the case, statutory notice requirements, witness testimony, and court rosters. Our chamber is committed to proactive advocacy—minimizing unnecessary adjournments and pursuing timely disposal.",
  },
  {
    question: "How do I schedule an urgent consultation?",
    answer:
      "For urgent matters—including bail applications, stay orders, or impending court deadlines—you can call directly at +92 301 7672378 or send an instant WhatsApp message. Consultations are arranged during chamber hours or by appointment.",
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
