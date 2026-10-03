import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, MessageCircle, Phone, Scale, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { hospital, navItems } from "@/lib/hospital-data";
import { cn } from "@/lib/utils";

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="page-shell grid min-h-20 grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2">
          <Link
            to="/"
            className="group flex min-w-0 items-center gap-3"
            aria-label="Hafiz Anwar Zia Advocate home"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-neumorphic transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
              <Scale className="size-5 transition-transform duration-300 group-hover:scale-110" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold transition-colors duration-200 group-hover:text-primary sm:text-base">
                Hafiz Anwar Zia
              </span>
              <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                Advocate • Narowal
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
            className="page-shell animate-reveal border-t border-border/60 py-4 lg:hidden"
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
              <div className="mt-2 flex gap-2 pt-2 border-t border-border/40">
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
      <main>{children}</main>
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
              Committed to integrity, legal excellence, and zealous representation across District
              Courts Narowal, Zafarwal, and the High Court.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Chambers</p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              <strong className="text-foreground block">Narowal:</strong> Chamber 40, District &
              Sessions Court
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              <strong className="text-foreground block">Zafarwal:</strong> Chambers 19 & 20, Court
              Building
            </p>
            <p className="mt-3 text-xs text-muted-foreground font-mono">{hospital.courtHours}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Contact & Advisory</p>
            <a
              href={`tel:${hospital.phoneHref}`}
              className="mt-3 flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
            >
              <Phone className="size-4 text-warm" />
              {hospital.phone}
            </a>
            <a
              href={hospital.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
            >
              <MessageCircle className="size-4 text-emerald-400" />
              WhatsApp: +92 301 7672378
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
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
          © 2026 Hafiz Anwar Zia Advocate. High Court & District Court, Narowal. Professional Legal
          Representation.
        </div>
      </footer>
    </div>
  );
}
