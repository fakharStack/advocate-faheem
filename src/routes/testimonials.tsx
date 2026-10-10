import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageSquare, Quote, Scale, Star } from "lucide-react";
import { CTA, PageIntro } from "@/components/page";
import { Reveal } from "@/components/reveal";
import { hospital as advocate, testimonials } from "@/lib/hospital-data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Reviews — Advocate Faheem Khokhar Lahore" },
      {
        name: "description",
        content: `Read client feedback for Advocate Faheem Khokhar. ${advocate.rating} recommendation rate from ${advocate.reviews} verified Facebook reviews.`,
      },
      { property: "og:title", content: "Client Reviews — Advocate Faheem Khokhar" },
      {
        property: "og:description",
        content: "Real client testimonials for Advocate Faheem Khokhar at Lahore High Court.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
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
        description={`${advocate.rating} recommendation rate from ${advocate.reviews} verified Facebook page reviews. These testimonials reflect genuine experiences of individuals and families Advocate Faheem Khokhar has helped.`}
      />

      <section className="page-shell pb-20">
        <Reveal variant="scale">
          <div className="glass-panel card-lift mb-10 grid gap-6 p-7 sm:grid-cols-[auto_1fr] sm:items-center sm:p-10">
            <div>
              <span className="text-6xl font-semibold tabular-nums">{advocate.rating}</span>
              <p className="mt-1 text-xs text-muted-foreground font-mono">Recommend</p>
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
                {advocate.reviews} verified Facebook page reviews — 96% recommendation rate
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-secondary px-3 py-1 text-foreground">
                  ✓ Bail Advocacy
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-foreground">
                  ✓ Criminal Defense
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-foreground">
                  ✓ Unclaimed Prisoners
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
