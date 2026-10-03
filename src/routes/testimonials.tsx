import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageSquare, Quote, Scale, Star } from "lucide-react";
import { CTA, PageIntro } from "@/components/page";
import { Reveal } from "@/components/reveal";
import { hospital as advocate, testimonials } from "@/lib/hospital-data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Reviews — Hafiz Anwar Zia Advocate Narowal" },
      {
        name: "description",
        content: `Read client feedback and testimonials for Hafiz Anwar Zia Advocate. Rated ${advocate.rating}★ from ${advocate.reviews} Google reviews.`,
      },
      { property: "og:title", content: "Client Reviews — Hafiz Anwar Zia Advocate" },
      {
        property: "og:description",
        content: "Real client testimonials regarding legal representation in Narowal & Zafarwal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Client Testimonials"
        title="Reputation built on legal integrity and client trust."
        description={`Rated ${advocate.rating}★ based on ${advocate.reviews} public Google reviews. These testimonials reflect genuine experiences of individuals and families who placed their legal matters in our care.`}
      />

      <section className="page-shell pb-20">
        <Reveal variant="scale">
          <div className="glass-panel card-lift mb-10 grid gap-6 p-7 sm:grid-cols-[auto_1fr] sm:items-center sm:p-10">
            <div>
              <span className="text-6xl font-semibold tabular-nums">{advocate.rating}</span>
              <span className="text-muted-foreground text-xl"> / 5.0</span>
            </div>
            <div>
              <div className="flex gap-1 text-warm">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="size-6 fill-current transition-transform duration-300 hover:scale-125 hover:rotate-6"
                  />
                ))}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Verified rating based on {advocate.reviews} Google reviews across Narowal and
                Zafarwal
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-secondary px-3 py-1 text-foreground">
                  ✓ Civil Litigation
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-foreground">
                  ✓ Criminal Defense
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-foreground">
                  ✓ Property Disputes
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-foreground">
                  ✓ Family Matters
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item, i) => (
            <Reveal key={`${item.name}-${i}`} delay={(i % 2) * 80}>
              <article className="group glass-panel card-lift flex min-h-72 flex-col justify-between p-7 sm:p-8 h-full">
                <div>
                  <div className="flex items-center justify-between">
                    <Quote className="text-warm size-8 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
                    <div className="flex gap-0.5 text-warm text-xs">
                      {"★"
                        .repeat(item.rating)
                        .split("")
                        .map((s, idx) => (
                          <span key={idx}>★</span>
                        ))}
                    </div>
                  </div>
                  <p className="mt-6 text-base leading-8 text-foreground/90">“{item.quote}”</p>
                </div>
                <div className="mt-8 border-t border-border/60 pt-5 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground transition-colors duration-200 group-hover:text-primary">
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{item.role}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[0.7rem] font-mono uppercase tracking-wider text-warm/80">
                    <CheckCircle2 className="size-3.5 text-emerald-400" /> Verified
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
