import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ChevronDown,
  Gavel,
  Landmark,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  Scale,
  ShieldCheck,
  Star,
} from "lucide-react";
import advocateHeroPhoto from "@/assets/images/advocate_hero_1791027276332.jpg";
import courtExteriorPhoto from "@/assets/images/district_court_1791027304165.jpg";
import { Button } from "@/components/ui/button";
import { CTA, Eyebrow, SectionHeading } from "@/components/page";
import { Reveal } from "@/components/reveal";
import {
  chambers,
  faqs,
  highlights,
  hospital as advocate,
  practiceAreas,
  testimonials,
} from "@/lib/hospital-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hafiz Anwar Zia Advocate — Trusted Legal Representation in Narowal" },
      {
        name: "description",
        content:
          "Advocate High Court & District Courts. Civil litigation, criminal defense, family disputes, and courtroom advocacy in Narowal and Zafarwal.",
      },
      { property: "og:title", content: "Hafiz Anwar Zia Advocate — Narowal Legal Services" },
      { property: "og:description", content: advocate.tagline },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-shell grid min-h-[calc(100vh-5rem)] items-center gap-10 py-10 lg:grid-cols-[1.08fr_.92fr] lg:py-16">
        <div className="animate-fade-up">
          <Eyebrow>High Court & District Courts Practice</Eyebrow>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[.98] sm:text-7xl lg:text-[5.2rem] text-balance">
            Hafiz Anwar Zia <span className="text-warm">Advocate.</span>
          </h1>
          <p className="mt-4 text-xs font-mono tracking-widest text-warm uppercase">
            Advocate High Court & District & Sessions Courts
          </p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            {advocate.tagline} Zealous courtroom representation, authoritative civil and criminal
            advocacy, and ethical legal counsel tailored to your dispute.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group h-13 rounded-full px-7 active:scale-[0.98] transition-transform"
            >
              <Link to="/contact">
                Book Consultation{" "}
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-13 rounded-full px-7 active:scale-[0.98] transition-transform"
            >
              <Link to="/chambers">Chamber Locations</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 rounded-full px-6 active:scale-[0.98] transition-transform border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
            >
              <a href={advocate.whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4 mr-2" /> WhatsApp
              </a>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-3 border-t border-border pt-7">
            <div className="group cursor-default">
              <p className="text-2xl font-semibold tabular-nums transition-transform duration-200 group-hover:-translate-y-0.5">
                {advocate.rating}
                <Star className="ml-1 inline size-4 fill-current text-warm transition-transform duration-300 group-hover:rotate-12" />
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Google rating</p>
            </div>
            <div className="group cursor-default">
              <p className="text-2xl font-semibold tabular-nums transition-transform duration-200 group-hover:-translate-y-0.5">
                {advocate.reviews}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Client reviews</p>
            </div>
            <div className="group cursor-default">
              <p className="text-xl font-semibold transition-transform duration-200 group-hover:-translate-y-0.5 sm:text-2xl">
                2 Chambers
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Narowal & Zafarwal</p>
            </div>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-[2.5rem] animate-fade-up [animation-delay:150ms]">
          <img
            src={advocateHeroPhoto}
            alt="Law chamber and legal consultation office of Hafiz Anwar Zia Advocate"
            className="h-[32rem] w-full rounded-[2.5rem] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] sm:h-[42rem]"
          />
          <div className="glass-panel absolute inset-x-4 bottom-4 grid grid-cols-[auto_1fr] items-center gap-4 p-4 transition-transform duration-300 group-hover:translate-y-[-2px] sm:inset-x-6 sm:bottom-6 sm:p-5">
            <span className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-neumorphic transition-transform duration-300 group-hover:scale-105">
              <Scale className="size-5" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <p className="font-semibold text-sm sm:text-base">Active Court Practice</p>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                District Courts Narowal & Zafarwal • High Court
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="page-shell py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Practice Areas"
            title="Authoritative legal representation across major disciplines."
            description="From complex civil property disputes and criminal defense to family settlements and court representation, each case receives rigorous legal preparation."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map(({ name, description, Icon }, i) => (
            <Reveal key={name} delay={(i % 3) * 80}>
              <Link to="/departments" className="group glass-panel card-lift block p-6 h-full">
                <div className="grid size-12 place-items-center rounded-2xl bg-secondary shadow-neumorphic transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-6 text-warm transition-transform duration-300 group-hover:-translate-y-0.5" />
                </div>
                <h3 className="mt-7 text-xl font-semibold transition-colors duration-200 group-hover:text-warm">
                  {name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-warm group-hover:translate-x-1 transition-transform">
                  View Practice Scope <ArrowRight className="size-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Highlights / Why Choose */}
      <section className="border-y border-border/60 bg-secondary/30">
        <div className="page-shell grid gap-12 py-16 lg:grid-cols-[.85fr_1.15fr] lg:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Legal Standards"
              title="Integrity in counsel. Fearless in court."
              description="A legal dispute demands seasoned strategic thinking, sound understanding of statutory procedural law, and an advocate who defends your cause with dedication."
            />
            <div className="mt-8">
              <Button asChild className="rounded-full px-6">
                <Link to="/about">
                  Learn more about the Advocate <ArrowRight className="size-4 ml-1.5" />
                </Link>
              </Button>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <Reveal key={item} delay={(i % 2) * 80}>
                <div className="group flex items-start gap-4 rounded-2xl bg-card/60 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-card/90 h-full">
                  <ShieldCheck className="size-5 shrink-0 text-warm transition-transform duration-300 group-hover:scale-110 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold block text-foreground">{item}</span>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      Upholding statutory diligence, client privilege, and rigorous courtroom
                      ethics.
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Chamber Locations Preview */}
      <section className="page-shell py-16 sm:py-24">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Chambers & Locations"
              title="Accessible chambers in Narowal and Zafarwal."
              description="Hafiz Anwar Zia maintains working chambers at both judicial centers for client convenience."
            />
            <Link
              to="/chambers"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-warm transition-colors duration-200 hover:text-foreground shrink-0"
            >
              Full chamber details & directions{" "}
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {chambers.map((chamber, i) => (
            <Reveal key={chamber.id} delay={i * 100}>
              <div className="glass-panel card-lift p-7 sm:p-9 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-warm/15 px-3 py-1 text-xs font-semibold text-warm">
                      {chamber.badge}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">{chamber.city}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold">{chamber.name}</h3>
                  <p className="mt-1 text-sm font-mono text-warm">{chamber.location}</p>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{chamber.focus}</p>
                  <div className="mt-6 space-y-2 border-t border-border/50 pt-5 text-sm">
                    <div className="flex items-center gap-2.5 text-muted-foreground">
                      <MapPin className="size-4 text-warm shrink-0" />
                      <span>{chamber.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-muted-foreground">
                      <Landmark className="size-4 text-warm shrink-0" />
                      <span>{chamber.timings}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex gap-3">
                  <Button asChild size="sm" className="rounded-full flex-1">
                    <Link to="/contact">Consult Here</Link>
                  </Button>
                  <Button asChild size="sm" variant="secondary" className="rounded-full flex-1">
                    <a href={`tel:${advocate.phoneHref}`}>
                      <Phone className="size-3.5 mr-1" /> Call Chamber
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border/60 bg-secondary/20 py-16 sm:py-24">
        <div className="page-shell">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Client Testimonials"
                title="Reputation forged on results and integrity."
                description="What clients say about Hafiz Anwar Zia's legal counsel, court preparedness, and professionalism."
              />
              <Link
                to="/testimonials"
                className="group hidden items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground sm:flex shrink-0"
              >
                All reviews ({advocate.reviews}){" "}
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {testimonials.slice(0, 3).map((item, i) => (
              <Reveal key={item.name} delay={(i % 3) * 80} variant="scale">
                <article className="group glass-panel card-lift p-6 h-full flex flex-col justify-between">
                  <div>
                    <Quote className="size-7 text-warm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
                    <p className="mt-6 text-sm leading-7 text-muted-foreground">“{item.quote}”</p>
                  </div>
                  <div className="mt-8 border-t border-border pt-5">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                    <p className="mt-1 text-xs text-warm tracking-wider">★★★★★</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Legal FAQs */}
      <section className="page-shell py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Legal FAQs"
            title="Common questions on representation and procedures."
            description="Clear guidance on how legal matters are initiated, assessed, and conducted at our chambers."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 max-w-4xl mx-auto">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 60}>
              <div className="glass-panel p-6 sm:p-7">
                <h3 className="text-lg font-semibold text-foreground flex items-start gap-3">
                  <span className="text-xs font-mono text-warm px-2 py-0.5 rounded bg-secondary shrink-0 mt-1">
                    0{i + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground pl-8">{faq.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
