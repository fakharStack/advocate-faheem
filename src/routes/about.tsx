import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  FileText,
  Gavel,
  Landmark,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import courtPhoto from "@/assets/images/district_court_1791027304165.jpg";
import { CTA, PageIntro, SectionHeading } from "@/components/page";
import { Reveal } from "@/components/reveal";
import { highlights, hospital as advocate } from "@/lib/hospital-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Advocate Faheem Khokhar — Credentials & Philosophy" },
      {
        name: "description",
        content:
          "Learn about Malik Faheem Khokhar (Advocate Faheem Khokhar), his legal credentials, advocacy philosophy, bail expertise, and High Court representation in Lahore.",
      },
      { property: "og:title", content: "About Advocate Faheem Khokhar" },
      {
        property: "og:description",
        content: "Trusted legal counsel and ethical advocacy at Lahore High Court.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About the Advocate"
        title="Principled legal representation rooted in justice."
        description={`${advocate.name} (Advocate Faheem Khokhar) provides authoritative advocacy, expert bail representation, and strategic courtroom counsel at the Lahore High Court and District Courts, with a special commitment to helping those who cannot afford legal representation.`}
      />

      {/* Profile & Philosophy */}
      <section className="page-shell grid gap-6 lg:grid-cols-2">
        <Reveal variant="scale">
          <div className="group overflow-hidden rounded-[2rem] h-full">
            <img
              src="/og-image.png"
              alt="Hafiz Anwar Zia Advocate legal consultation chamber"
              className="h-full min-h-[26rem] w-full rounded-[2rem] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="glass-panel card-lift p-7 sm:p-10 h-full flex flex-col justify-between">
            <SectionHeading
              eyebrow="Advocacy Philosophy"
              title="Excellence in drafting. Tenacity in court."
              description="A legal dispute directly impacts a client's life, property, and family honor. Our chamber approaches every brief with meticulous study of statutory provisions, judicial precedents, and factual discovery."
            />
            <div className="mt-8 space-y-4">
              <p className="text-sm leading-7 text-muted-foreground">{advocate.bio}</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="group rounded-2xl bg-secondary p-5 transition-all duration-200 hover:-translate-y-0.5">
                <Gavel className="text-warm transition-transform duration-300 group-hover:scale-110 size-6" />
                <p className="mt-4 font-semibold text-foreground">Client-First Diligence</p>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  Complete confidentiality and unwavering allegiance to our client's statutory
                  rights.
                </p>
              </div>
              <div className="group rounded-2xl bg-secondary p-5 transition-all duration-200 hover:-translate-y-0.5">
                <Scale className="text-warm transition-transform duration-300 group-hover:scale-110 size-6" />
                <p className="mt-4 font-semibold text-foreground">Honest Appraisal</p>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  Realistic, fact-based legal opinions without misleading optimism or false
                  guarantees.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Qualifications & Practice Profile */}
      <section className="page-shell py-16 sm:py-24">
        <Reveal>
          <div className="glass-panel card-lift p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-warm">
                  Professional Credentials
                </span>
                <h3 className="mt-3 text-3xl font-semibold">Bar Admissions & Standing</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Practicing actively within Punjab's judicial framework with regular appearances
                  before District & Sessions Judges, Judicial Magistrates, Revenue Courts, and the
                  High Court.
                </p>
              </div>
              <div className="space-y-4 lg:col-span-2">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-secondary/80 p-5">
                    <Landmark className="size-5 text-warm" />
                    <h4 className="mt-3 font-semibold text-foreground">Lahore High Court Member</h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Qualified for appellate representation, writ petitions, and High Court bail
                      proceedings.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-secondary/80 p-5">
                    <BookOpen className="size-5 text-warm" />
                    <h4 className="mt-3 font-semibold text-foreground">University of the Punjab</h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Law graduate of the University of the Punjab; alumnus of DPS Lahore.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-secondary/80 p-5">
                    <FileText className="size-5 text-warm" />
                    <h4 className="mt-3 font-semibold text-foreground">Bail Advocacy Expert</h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Specialist in pre-arrest & post-arrest bail petitions at the Lahore High Court,
                      including urgent emergency hearings.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-secondary/80 p-5">
                    <Users className="size-5 text-warm" />
                    <h4 className="mt-3 font-semibold text-foreground">Public Legal Educator</h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      YouTube legal advice channel & Facebook public figure page active since August
                      2012, with 96% recommendation rating.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Standards & Highlights */}
      <section className="page-shell grid gap-12 pb-20 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal>
          <div>
            <SectionHeading
              eyebrow="Our Benchmarks"
              title="A practice built on discipline and thorough preparation."
            />
            <div className="group mt-9 overflow-hidden rounded-[2rem]">
              <img
                src={courtPhoto}
                alt="District Court Judicial Complex"
                className="aspect-[4/3] w-full rounded-[2rem] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item, i) => (
            <Reveal key={item} delay={(i % 2) * 80}>
              <div className="group glass-panel card-lift p-6 h-full">
                <span className="text-xs text-warm font-mono">0{i + 1}</span>
                {i === 0 ? (
                  <Sparkles className="mt-8 text-warm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 size-6" />
                ) : (
                  <ShieldCheck className="mt-8 text-warm transition-transform duration-300 group-hover:scale-110 size-6" />
                )}
                <h3 className="mt-5 text-lg font-semibold transition-colors duration-200 group-hover:text-primary">
                  {item}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  A foundational pillar guaranteeing that every petition, defense, and hearing is
                  handled with relentless precision.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
