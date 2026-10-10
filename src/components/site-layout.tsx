import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, MessageCircle, Phone, Scale, X, Youtube, Facebook } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { hospital, navItems } from "@/lib/hospital-data";
import { cn } from "@/lib/utils";

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground flex flex-col">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
        <div className="page-shell grid min-h-20 grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2">
          <Link
            to="/"
            className="group flex min-w-0 items-center gap-3"
            aria-label="Advocate Faheem Khokhar home"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-neumorphic transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
              <Scale className="size-5 transition-transform duration-300 group-hover:scale-110" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold transition-colors duration-200 group-hover:text-primary sm:text-base">
                Faheem Khokhar
              </span>
              <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                Advocate • Lahore High Court
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-all duration-200 hover:bg-secondary hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              className="hidden rounded-full transition-transform duration-200 active:scale-95 sm:inline-flex"
            >
              <Link to="/contact">
                <Scale className="size-4" /> Consultation
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              variant="outline"
              className="hidden rounded-full transition-transform duration-200 active:scale-95 md:inline-flex border-warm/40 text-warm hover:bg-warm/10"
            >
              <a href={hospital.whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full lg:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {open ? (
          <nav
            className="page-shell animate-reveal border-t border-border/60 py-4 lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
            aria-label="Mobile navigation"
          >
            <div className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="rounded-xl px-4 py-3 text-sm text-muted-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 flex gap-2 pt-2 border-t border-border/40 pb-4">
                <Button asChild size="sm" className="flex-1 rounded-xl">
                  <Link to="/contact">Book Consultation</Link>
                </Button>
                <Button asChild size="sm" variant="secondary" className="flex-1 rounded-xl">
                  <a href={`tel:${hospital.phoneHref}`}>
                    <Phone className="size-4 mr-1" /> Call Now
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        ) : null}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border/60">
        <div className="page-shell grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Scale className="text-warm size-5" />
              <span className="font-semibold">{hospital.name}</span>
            </div>
            <p className="mt-2 text-xs font-mono text-warm uppercase tracking-wider">
              {hospital.title}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              Committed to justice, ethical advocacy, and helping the underprivileged access legal
              representation at the Lahore High Court.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={hospital.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube Channel"
                className="grid size-8 place-items-center rounded-full bg-secondary text-muted-foreground transition hover:bg-red-600/20 hover:text-red-500"
              >
                <Youtube className="size-4" />
              </a>
              <a
                href={hospital.facebookPage}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Page"
                className="grid size-8 place-items-center rounded-full bg-secondary text-muted-foreground transition hover:bg-blue-600/20 hover:text-blue-400"
              >
                <Facebook className="size-4" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold">Chambers</p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              <strong className="text-foreground block">High Court:</strong> Lahore High Court,
              Lahore, Punjab
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              <strong className="text-foreground block">District:</strong> District & Sessions
              Courts, Lahore
            </p>
            <p className="mt-3 text-xs text-muted-foreground font-mono">{hospital.courtHours}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Contact & Legal Help</p>
            <a
              href={`tel:${hospital.phoneHref}`}
              className="mt-3 flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
            >
              <Phone className="size-4 text-warm" />
              {hospital.phone}
            </a>
            <a
              href={`tel:${hospital.phone2Href}`}
              className="mt-2 flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
            >
              <Phone className="size-4 text-warm" />
              {hospital.phone2}
            </a>
            <a
              href={hospital.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
            >
              <MessageCircle className="size-4 text-emerald-400" />
              WhatsApp: 0308 5125111
            </a>
            <a
              href={hospital.whatsappHref2}
              target="_blank"
              rel="noreferrer"
              className="mt-1 flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
            >
              <MessageCircle className="size-4 text-emerald-400" />
              WhatsApp: 0320 8007786
            </a>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/chambers" className="text-sm text-muted-foreground hover:text-foreground">
                Chamber Locations
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Book Consultation
              </Link>
              <Link
                to="/departments"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Practice Areas
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
          © 2026 Advocate Faheem Khokhar (Malik Faheem Khokhar). Lahore High Court, Lahore. Professional Legal
          Representation.
        </div>
      </footer>
    </div>
  );
}
