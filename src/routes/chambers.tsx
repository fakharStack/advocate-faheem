import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Clock3,
  Compass,
  Landmark,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
} from "lucide-react";
import courtPhoto from "@/assets/images/district_court_1791027304165.jpg";
import { Button } from "@/components/ui/button";
import { CTA, Eyebrow, PageIntro, SectionHeading } from "@/components/page";
import { Reveal } from "@/components/reveal";
import { chambers, hospital as advocate } from "@/lib/hospital-data";

export const Route = createFileRoute("/chambers")({
  head: () => ({
    meta: [
      { title: "Chamber Locations — Advocate Faheem Khokhar, Lahore High Court" },
      {
        name: "description",
        content:
          "Visit Advocate Faheem Khokhar at Lahore High Court or District & Sessions Courts Lahore.",
      },
      { property: "og:title", content: "Chamber Locations — Advocate Faheem Khokhar" },
      {
        property: "og:description",
        content:
          "Lahore High Court and District Courts Lahore — chamber locations for Advocate Faheem Khokhar.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: ChambersPage,
});

function ChambersPage() {
  return (
    <>
      <PageIntro
        eyebrow="Chambers & Locations"
        title="Dedicated chambers at Lahore High Court."
        description="To provide seamless legal support, Advocate Faheem Khokhar (Malik Faheem Khokhar) maintains active working chambers at the Lahore High Court and District Courts, Lahore."
      />

      <section className="page-shell pb-20 space-y-16">
        {chambers.map((chamber, index) => {
          const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(chamber.mapQuery)}&output=embed`;
          return (
            <Reveal key={chamber.id} delay={index * 100}>
              <div className="glass-panel card-lift overflow-hidden p-6 sm:p-10">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-warm/20 px-3.5 py-1 text-xs font-semibold text-warm">
                        <span className="size-1.5 rounded-full bg-warm animate-pulse-dot" />
                        {chamber.badge}
                      </span>
                      <span className="text-xs font-mono uppercase text-muted-foreground">
                        {chamber.designation}
                      </span>
                    </div>

                    <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{chamber.name}</h2>
                    <p className="mt-2 text-base text-warm font-mono">{chamber.location}</p>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{chamber.focus}</p>

                    <dl className="mt-8 space-y-4 border-y border-border/60 py-6 text-sm">
                      <div className="flex items-start gap-3">
                        <MapPin className="size-4 text-warm shrink-0 mt-1" />
                        <div>
                          <dt className="text-xs font-medium text-muted-foreground">Address</dt>
                          <dd className="mt-0.5 font-medium text-foreground">{chamber.address}</dd>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock3 className="size-4 text-warm shrink-0 mt-1" />
                        <div>
                          <dt className="text-xs font-medium text-muted-foreground">Timings</dt>
                          <dd className="mt-0.5 text-foreground">{chamber.timings}</dd>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Phone className="size-4 text-warm shrink-0 mt-1" />
                        <div>
                          <dt className="text-xs font-medium text-muted-foreground">Direct Line</dt>
                          <dd className="mt-0.5 text-foreground">
                            <a
                              href={`tel:${advocate.phoneHref}`}
                              className="hover:text-warm transition-colors font-mono"
                            >
                              {chamber.phone}
                            </a>
                          </dd>
                        </div>
                      </div>
                    </dl>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button asChild size="lg" className="rounded-full px-6 flex-1 sm:flex-none">
                        <Link to="/contact">Book Consultation</Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="secondary"
                        className="rounded-full px-6 flex-1 sm:flex-none"
                      >
                        <a href={`tel:${advocate.phoneHref}`}>
                          <Phone className="size-4 mr-2" /> Call Chamber
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="rounded-full px-6 flex-1 sm:flex-none border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
                      >
                        <a
                          href={`https://wa.me/${chamber.whatsapp}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <MessageCircle className="size-4 mr-2" /> WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Interactive Map Embed */}
                  <div className="glass-panel overflow-hidden p-2 rounded-3xl border border-border/50">
                    <iframe
                      title={`${chamber.name} Location`}
                      src={mapUrl}
                      className="h-[22rem] sm:h-[26rem] w-full rounded-2xl border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="p-3 text-center">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(chamber.mapQuery)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-warm hover:underline"
                      >
                        <Compass className="size-3.5" /> Open in Google Maps Navigation
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </section>

      {/* Routine Guide */}
      <section className="border-t border-border/60 bg-secondary/30 py-16">
        <div className="page-shell grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="glass-panel p-6">
            <Scale className="size-6 text-warm" />
            <h3 className="mt-4 text-lg font-semibold">Morning Court Hours</h3>
            <p className="mt-2 text-xs leading-6 text-muted-foreground">
              8:30 AM – 2:00 PM: Dedicated to courtroom appearances, argument of bail applications,
              cross-examination, and hearing before learned Judges.
            </p>
          </div>
          <div className="glass-panel p-6">
            <Clock3 className="size-6 text-warm" />
            <h3 className="mt-4 text-lg font-semibold">Afternoon Chamber Hours</h3>
            <p className="mt-2 text-xs leading-6 text-muted-foreground">
              2:30 PM – 5:00 PM: Dedicated to in-depth client conferences, case study, drafting
              pleadings, and document vetting in the chamber.
            </p>
          </div>
          <div className="glass-panel p-6">
            <ShieldCheck className="size-6 text-warm" />
            <h3 className="mt-4 text-lg font-semibold">Urgent Criminal Matters</h3>
            <p className="mt-2 text-xs leading-6 text-muted-foreground">
              For emergency pre-arrest bails, habeas corpus, or police custody matters, contact
              directly via phone or WhatsApp for prompt legal intervention.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
