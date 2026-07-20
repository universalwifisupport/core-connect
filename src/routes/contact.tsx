import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { SiteFooter } from "@/components/site/SiteFooter";
import noc from "@/assets/noc.jpg";
import { trackEvent } from "../lib/analytics";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Core Connect — Talk to a Connectivity Strategist" },
      { name: "description", content: "Reach the Core Connect team for residential, business, or enterprise connectivity. Call, email, or send a message and a strategist will follow up within 24 hours." },
      { property: "og:title", content: "Contact Core Connect" },
      { property: "og:description", content: "Talk to a connectivity strategist about internet, fiber, TV, voice, or enterprise networking." },
    ],
    links: [
      { rel: "canonical", href: "https://core-connect.in/contact" }
    ]
  }),
  component: ContactPage,
});

const infoCards = [
  {
    label: "Call us",
    value: "1-888-CORE-NET",
    href: "tel:1-888-CORE-NET",
    hint: "Mon–Sun, 6am–10pm ET",
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: "Email us",
    value: "enterprise@coreconnect.io",
    href: "mailto:enterprise@coreconnect.io",
    hint: "We reply within one business day",
    icon: <path d="M4 4h16v16H4z M22 6l-10 7L2 6" />,
  },
  {
    label: "Visit us",
    value: "1650 Market Street, Suite 3400",
    hint: "Denver, CO 80202",
    icon: (
      <>
        <path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Residential Internet");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("contact_page_form_submit", "Contact", subject);
    setSent(true);
  };

  return (
    <div>
      <PageHero
        eyebrow="Contact Core Connect"
        title={<>Let's design your <span className="text-gradient">connectivity plan.</span></>}
        subtitle="Whether it's a single household or a multi-site enterprise footprint, a real strategist reviews every request personally."
        image={noc}
      />

      {/* Contact info strip */}
      <section className="relative py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid sm:grid-cols-3 gap-5 -mt-24 md:-mt-28 relative z-10">
          {infoCards.map((c) => (
            <div key={c.label} className="card-premium p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2F80FF] to-[#0058C4] shadow-lg mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" className="h-5 w-5">{c.icon}</svg>
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400 font-bold">{c.label}</div>
              {c.href ? (
                <a href={c.href} className="mt-1 block text-lg font-bold text-[#0A1226] hover:text-[#2F80FF] transition-colors break-words">{c.value}</a>
              ) : (
                <div className="mt-1 text-lg font-bold text-[#0A1226]">{c.value}</div>
              )}
              <div className="mt-1 text-sm text-slate-500">{c.hint}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Form + side panel */}
      <section className="relative py-24 md:py-32 bg-[#F5F8FF] overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-50 pointer-events-none" />
        <div className="absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-[#2F80FF]/8 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 card-premium p-6 sm:p-10">
            <span className="eyebrow-chip">Send a message</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight text-[#0A1226]">Tell us what you need connected.</h2>
            <p className="mt-3 text-slate-500 text-sm leading-relaxed">
              Fill out the form and a connectivity strategist will follow up with tailored options within 24 hours.
            </p>

            {sent ? (
              <div className="mt-8 bg-[#F5F8FF] border border-slate-200 rounded-3xl p-8 text-center animate-fade-up">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-8 w-8">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0A1226]">Message received!</h3>
                <p className="mt-2 text-slate-500 text-sm max-w-sm mx-auto">
                  Thank you, {name}. A Core Connect strategist will reach out to {email} shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Full Name</label>
                    <input required type="text" placeholder="Jane Doe" value={name} onChange={(e) => setName(e.target.value)}
                      className="mt-1 w-full rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 text-[#0A1226] placeholder:text-slate-400 focus:outline-none focus:border-[#2F80FF] focus:ring-1 focus:ring-[#2F80FF] text-sm shadow-sm transition" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Email Address</label>
                    <input required type="email" placeholder="jane@company.com" value={email} onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 w-full rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 text-[#0A1226] placeholder:text-slate-400 focus:outline-none focus:border-[#2F80FF] focus:ring-1 focus:ring-[#2F80FF] text-sm shadow-sm transition" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Phone</label>
                    <input type="tel" placeholder="(555) 555-0100" value={phone} onChange={(e) => setPhone(e.target.value)}
                      className="mt-1 w-full rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 text-[#0A1226] placeholder:text-slate-400 focus:outline-none focus:border-[#2F80FF] focus:ring-1 focus:ring-[#2F80FF] text-sm shadow-sm transition" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Subject</label>
                    <select value={subject} onChange={(e) => setSubject(e.target.value)}
                      className="mt-1 w-full rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 text-[#0A1226] focus:outline-none focus:border-[#2F80FF] focus:ring-1 focus:ring-[#2F80FF] text-sm shadow-sm transition">
                      <option>Residential Internet</option>
                      <option>Business/Enterprise Fiber</option>
                      <option>TV & Streaming Bundles</option>
                      <option>Cloud Voice / VoIP</option>
                      <option>General Question</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Message</label>
                  <textarea rows={5} required placeholder="Tell us about your home/business setup…" value={message} onChange={(e) => setMessage(e.target.value)}
                    className="mt-1 w-full rounded-xl bg-white border border-slate-200 p-3.5 text-[#0A1226] placeholder:text-slate-400 focus:outline-none focus:border-[#2F80FF] focus:ring-1 focus:ring-[#2F80FF] text-sm shadow-sm transition resize-none" />
                </div>
                <button type="submit" className="btn-electric btn-electric-hover w-full !py-3.5 mt-2">Send Message</button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl overflow-hidden relative border border-slate-200/80 shadow-xl">
              <img src={noc} alt="Core Connect concierge team" className="h-64 w-full object-cover" loading="lazy" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(10,18,38,0.85) 100%)" }} />
              <div className="absolute left-5 bottom-5">
                <div className="text-[10px] uppercase tracking-wider text-white/70 font-bold">Concierge Online</div>
                <div className="text-white font-extrabold">24/7 Connectivity Strategists</div>
              </div>
            </div>
            <div className="card-premium p-6">
              <h3 className="text-lg font-bold text-[#0A1226]">Prefer to talk it through?</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                Enterprise and multi-site teams can schedule a direct call with a network architect to scope SD-WAN, MPLS, or dedicated fiber builds.
              </p>
              <a href="tel:1-888-CORE-NET" className="mt-4 inline-flex btn-ghost-line">Call 1-888-CORE-NET</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
