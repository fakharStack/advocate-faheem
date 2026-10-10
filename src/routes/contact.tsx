import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  Check,
  Clock3,
  Landmark,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  Send,
  ShieldCheck,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Eyebrow, PageIntro } from "@/components/page";
import { Reveal } from "@/components/reveal";
import { chambers, hospital as advocate, practiceAreas } from "@/lib/hospital-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Consultation — Advocate Faheem Khokhar Lahore" },
      {
        name: "description",
        content: `Contact Advocate Faheem Khokhar (Malik Faheem Khokhar) at Lahore High Court. Phone: ${advocate.phone}, WhatsApp: ${advocate.whatsapp} or ${advocate.whatsapp2}.`,
      },
      { property: "og:title", content: "Contact Advocate Faheem Khokhar" },
      { property: "og:description", content: "Book a legal consultation or reach chambers." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<{
    name: string;
    phone: string;
    category: string;
    chamber: string;
    details: string;
  } | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const formVals = {
      name: String(data.get("name")),
      phone: String(data.get("phone")),
      category: String(data.get("category")),
      chamber: String(data.get("chamber")),
      details: String(data.get("details")),
    };
    setFormData(formVals);
    setSubmitted(true);
  }

  const narowalMap = `https://www.google.com/maps?q=${encodeURIComponent("Lahore High Court, Lahore, Punjab, Pakistan")}&output=embed`;

  return (
    <>
      <PageIntro
        eyebrow="Consultation & Inquiries"
        title="We are here to protect your legal rights."
        description="Reach out directly by phone, WhatsApp, or through the consultation form below. You are also welcome to visit our chambers at the District Courts in Narowal or Zafarwal during court hours."
      />

      <section className="page-shell pb-20 grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
        {/* Contact Form / Confirmation */}
        <div>
          {submitted && formData ? (
            <div className="glass-panel card-lift animate-fade-up p-8 sm:p-10">
              <div className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-neumorphic">
                <Check className="size-6 text-primary-foreground" />
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[.2em] text-warm inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-warm animate-pulse-dot" />
                Consultation Request Received
              </p>
              <h2 className="mt-3 text-3xl font-semibold">Thank you, {formData.name}.</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Your consultation inquiry regarding <strong>{formData.category}</strong> at{" "}
                <strong>{formData.chamber}</strong> has been recorded. For expedited response, you
                can send the summary directly to our WhatsApp with one click below.
              </p>

              <div className="mt-6 rounded-2xl bg-secondary/70 p-5 text-sm space-y-2">
                <p>
                  <strong className="text-muted-foreground">Contact Phone:</strong> {formData.phone}
                </p>
                <p>
                  <strong className="text-muted-foreground">Selected Chamber:</strong>{" "}
                  {formData.chamber}
                </p>
                {formData.details ? (
                  <p>
                    <strong className="text-muted-foreground">Matter Note:</strong>{" "}
                    {formData.details}
                  </p>
                ) : null}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-emerald-600 hover:bg-emerald-500 text-white"
                >
                  <a
                    href={`https://wa.me/${advocate.whatsapp}?text=${encodeURIComponent(
                      `Assalam-o-Alaikum Advocate Faheem Khokhar, my name is ${formData.name}. I would like to schedule a consultation regarding ${formData.category} at ${formData.chamber}. My phone is ${formData.phone}. Brief note: ${formData.details}`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="size-4 mr-2" /> Continue on WhatsApp
                  </a>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="rounded-full"
                  onClick={() => setSubmitted(false)}
                >
                  Send another inquiry
                </Button>
              </div>
            </div>
          ) : (
            <div className="glass-panel card-lift p-6 sm:p-10">
              <div className="flex items-center justify-between">
                <div>
                  <Eyebrow>Schedule an Appointment</Eyebrow>
                  <h2 className="text-2xl font-semibold sm:text-3xl">Book a Legal Consultation</h2>
                </div>
                <Scale className="size-8 text-warm shrink-0 hidden sm:block" />
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Please provide your contact information and a brief outline of the matter. Your
                information is held in strict professional confidence.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Your Full Name *
                  </label>
                  <input
                    required
                    name="name"
                    placeholder="e.g. Muhammad Aslam"
                    className="w-full rounded-2xl border border-border/80 bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-warm focus:outline-none focus:ring-1 focus:ring-warm"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="0301 XXXXXXX"
                      className="w-full rounded-2xl border border-border/80 bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-warm focus:outline-none focus:ring-1 focus:ring-warm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Legal Category *
                    </label>
                    <select
                      required
                      name="category"
                      defaultValue=""
                      className="w-full rounded-2xl border border-border/80 bg-secondary/50 px-4 py-3 text-sm text-foreground focus:border-warm focus:outline-none focus:ring-1 focus:ring-warm"
                    >
                      <option value="" disabled>
                        Select matter type
                      </option>
                      {practiceAreas.map((p) => (
                        <option key={p.name} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                      <option value="Urgent Bail / Police Matter">
                        Urgent Bail / Police Matter
                      </option>
                      <option value="General Legal Advisory">General Legal Advisory</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Preferred Chamber *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className="flex items-center gap-3 rounded-2xl border border-border/80 bg-secondary/40 p-3.5 cursor-pointer hover:border-warm/60">
                      <input
                        type="radio"
                        name="chamber"
                        value="Lahore High Court Chamber"
                        defaultChecked
                        className="accent-warm"
                      />
                      <div>
                        <span className="text-xs font-semibold block text-foreground">
                          Lahore High Court
                        </span>
                        <span className="text-[0.7rem] text-muted-foreground">
                          High Court of Punjab, Lahore
                        </span>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 rounded-2xl border border-border/80 bg-secondary/40 p-3.5 cursor-pointer hover:border-warm/60">
                      <input
                        type="radio"
                        name="chamber"
                        value="Lahore District Courts"
                        className="accent-warm"
                      />
                      <div>
                        <span className="text-xs font-semibold block text-foreground">
                          District Courts Lahore
                        </span>
                        <span className="text-[0.7rem] text-muted-foreground">
                          District & Sessions Courts, Lahore
                        </span>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Brief Summary of Dispute / Case
                  </label>
                  <textarea
                    name="details"
                    rows={3}
                    placeholder="Briefly describe the matter, status of court case, FIR number (if criminal), or property details..."
                    className="w-full rounded-2xl border border-border/80 bg-secondary/50 p-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-warm focus:outline-none focus:ring-1 focus:ring-warm resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full h-13 text-sm font-semibold"
                >
                  <Send className="size-4 mr-2" /> Request Consultation
                </Button>
              </form>
            </div>
          )}
        </div>

        {/* Chambers Info & Fast Actions */}
        <div className="space-y-6">
          <div className="glass-panel p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-semibold">Direct Chamber Lines</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/60">
                <Phone className="size-5 text-warm mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground font-mono">Mobile & Chamber Phone</p>
                  <a
                    href={`tel:${advocate.phoneHref}`}
                    className="text-lg font-semibold text-foreground hover:text-warm transition-colors"
                  >
                    {advocate.phone}
                  </a>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Available during court and chamber hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20">
                <MessageCircle className="size-5 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-emerald-400/80 font-mono">WhatsApp for Legal Help</p>
                  <a
                    href={advocate.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-semibold text-emerald-400 hover:underline block"
                  >
                    0308 5125111
                  </a>
                  <a
                    href={advocate.whatsappHref2}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-semibold text-emerald-400 hover:underline block mt-0.5"
                  >
                    0320 8007786
                  </a>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Send case copies, FIRs or request immediate timings
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button
                asChild
                size="lg"
                className="w-full rounded-full h-12 bg-emerald-600 hover:bg-emerald-500 text-white"
              >
                <a href={advocate.whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4 mr-2" /> Message on WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Chamber Locations Card */}
          <div className="glass-panel p-6 space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Building2 className="size-4 text-warm" /> Chamber Addresses
            </h3>
            {chambers.map((c) => (
              <div key={c.id} className="p-3.5 rounded-2xl bg-secondary/40 text-xs space-y-1">
                <span className="font-semibold text-warm block text-sm">{c.name}</span>
                <p className="text-foreground">{c.address}</p>
                <p className="text-muted-foreground">{c.timings}</p>
              </div>
            ))}
            <Button asChild variant="outline" size="sm" className="w-full rounded-full mt-2">
              <Link to="/chambers">View Full Map & Chamber Details</Link>
            </Button>
          </div>

          {/* Map Preview */}
          <div className="glass-panel overflow-hidden p-2 rounded-3xl">
            <iframe
              title="District Court Narowal Map"
              src={narowalMap}
              className="h-64 w-full rounded-2xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
