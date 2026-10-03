import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-warm">
      <span className="size-1.5 rounded-full bg-warm/80 animate-pulse-dot" />
      {children}
    </p>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-shell pt-16 pb-12 sm:pt-24 sm:pb-16">
      <div className="max-w-3xl animate-fade-up">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-4xl font-semibold leading-[1.05] sm:text-6xl text-balance">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl animate-fade-up", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl font-semibold leading-tight sm:text-5xl text-balance">{title}</h2>
      {description ? <p className="mt-5 leading-7 text-muted-foreground">{description}</p> : null}
    </div>
  );
}

export function CTA() {
  return (
    <section className="page-shell py-16 sm:py-24">
      <Reveal variant="scale">
        <div className="glass-panel card-lift relative overflow-hidden px-6 py-12 text-center sm:px-12 sm:py-16">
          <Eyebrow>Legal Representation</Eyebrow>
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold sm:text-5xl text-balance">
            Protect your rights with decisive legal counsel.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Schedule a confidential consultation at Chamber 40, District Court Narowal or Chambers
            19 & 20, Zafarwal Court Building.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group h-12 rounded-full px-6 active:scale-[0.98] transition-transform"
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
              className="h-12 rounded-full px-6 active:scale-[0.98] transition-transform"
            >
              <Link to="/chambers">View Chambers & Maps</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full px-6 active:scale-[0.98] transition-transform border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
            >
              <a href="https://wa.me/923017672378" target="_blank" rel="noreferrer">
                WhatsApp Directly
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
