import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Scale } from "lucide-react";
import chamberPhoto from "@/assets/images/court_chamber_1791027291368.jpg";
import { CTA, PageIntro } from "@/components/page";
import { Reveal } from "@/components/reveal";
import { practiceAreas } from "@/lib/hospital-data";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Practice Areas — Hafiz Anwar Zia Advocate" },
      {
        name: "description",
        content:
          "Civil litigation, criminal defense, family disputes, revenue land cases, and High Court writ representation by Hafiz Anwar Zia Advocate.",
      },
      { property: "og:title", content: "Practice Areas — Hafiz Anwar Zia Advocate" },
      {
        property: "og:description",
        content: "Authoritative legal practice and court representation in Narowal & Zafarwal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PracticeAreasPage,
});

function PracticeAreasPage() {
  return (
    <>
      <PageIntro
        eyebrow="Practice Areas"
        title="Comprehensive legal expertise across vital jurisdictions."
        description="Whether you are defending against criminal allegations, protecting your ancestral property rights, or resolving a family matter, Hafiz Anwar Zia Advocate provides experienced, resolute counsel."
      />

      <section className="page-shell grid gap-6 pb-20 md:grid-cols-2">
        {practiceAreas.map(({ name, description, Icon, details }, i) => (
          <Reveal key={name} delay={(i % 2) * 80}>
            <article className="group glass-panel card-lift flex flex-col justify-between p-6 sm:p-8 h-full">
              <div>
                <div className="flex items-center justify-between">
                  <div className="grid size-14 place-items-center rounded-2xl bg-secondary shadow-neumorphic transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-6 text-warm transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">0{i + 1}</span>
                </div>

                <h2 className="mt-6 text-2xl font-semibold transition-colors duration-200 group-hover:text-primary">
                  {name}
                </h2>
                <p className="mt-4 leading-7 text-muted-foreground text-sm">{description}</p>

                {details && details.length > 0 ? (
                  <ul className="mt-6 space-y-2.5 border-t border-border/60 pt-5">
                    {details.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs text-muted-foreground leading-5"
                      >
                        <CheckCircle2 className="size-4 text-warm shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <div className="mt-8 border-t border-border/50 pt-5">
                <Link
                  to="/contact"
                  className="group/link inline-flex items-center gap-2 text-sm font-semibold text-warm transition-colors duration-200 hover:text-warm-foreground"
                >
                  Consult for {name}{" "}
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      {/* Heroic Chamber Banner */}
      <section className="page-shell">
        <Reveal variant="scale">
          <div className="group relative overflow-hidden rounded-[2.5rem]">
            <img
              src={chamberPhoto}
              alt="Advocate office consultation chamber"
              className="h-80 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] sm:h-[30rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-8 left-8 max-w-xl sm:bottom-12 sm:left-12">
              <span className="text-xs font-mono uppercase tracking-widest text-warm block mb-2">
                Confidential Case Review
              </span>
              <p className="text-2xl font-semibold sm:text-4xl text-balance">
                Strategic legal defense. Clear, calculated courtroom roadmap.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <CTA />
    </>
  );
}
