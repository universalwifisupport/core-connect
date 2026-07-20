import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SiteFooter } from "@/components/site/SiteFooter";
import noc from "@/assets/noc.jpg";
import fiber from "@/assets/fiber-optic.jpg";
import tower from "@/assets/comm-tower.jpg";
import dc from "@/assets/data-center.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Core Connect — Our Mission & Story" },
      { name: "description", content: "Core Connect helps millions of clients navigate the telecom market with clarity, technology, and premium service. Learn about our mission, values, and nationwide approach." },
      { property: "og:title", content: "About Core Connect" },
      { property: "og:description", content: "Our mission, story, and vision for enterprise and home connectivity." },
    ],
    links: [
      { rel: "canonical", href: "https://core-connect.in/about" }
    ]
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About Core Connect"
        title={<>Building the connective tissue of <span className="text-gradient">modern connectivity.</span></>}
        subtitle="We're a technology company on a mission to make telecom feel effortless — for every home, every business, and every network on the map."
        image={noc}
      />

      <section className="py-24 bg-[#F5F8FF] text-[#0A1226] border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#2F80FF] font-semibold">Our Mission</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-[#0A1226]">Telecom, without the friction.</h2>
            <p className="mt-5 text-slate-500 leading-relaxed">
              For decades, buying internet or business connectivity meant navigating a maze of confusing plans,
              opaque pricing, and dead-end phone trees. We built Core Connect to change that. Our platform
              aggregates real-time offers from every major telecom provider and pairs that data with human
              expertise so people can make truly informed choices — in minutes, not months.
            </p>
          </div>
          <img src={fiber} alt="Fiber optic cables" className="rounded-3xl h-[420px] w-full object-cover" loading="lazy" />
        </div>
      </section>

      <section className="py-24 bg-white text-[#0A1226]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center leading-tight">The values that route every decision.</h2>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { t: "Transparency", d: "No hidden pricing. No pressure. Every recommendation is grounded in real availability data." },
              { t: "Engineering rigor", d: "We treat networks like software — measurable, observable, and continuously improved." },
              { t: "Human expertise", d: "Every account is paired with a certified connectivity strategist. Real people, real accountability." },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl border border-black/5 bg-[#F5F7FB] p-8 hover:shadow-xl transition">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#2F80FF] to-[#28D7FF] mb-5" />
                <div className="text-xl font-semibold">{v.t}</div>
                <p className="mt-2 text-sm text-[#4A5568]">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F8FF] text-[#0A1226] border-t border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#2F80FF] font-semibold">Timeline</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0A1226]">A short history of a big idea.</h2>
          <div className="mt-12 space-y-8">
            {[
              ["2018", "Founded", "Core Connect launches with a small team of network engineers and product designers in Denver."],
              ["2020", "Nationwide expansion", "Coverage extends with real-time availability across major carriers."],
              ["2022", "Enterprise platform", "SD-WAN orchestration, multi-site management, and 24/7 NOC come online."],
              ["2024", "250,000 households", "Our residential platform crosses a quarter-million connected homes."],
              ["2026", "Live network fabric", "We launch the Live Network Dashboard — full real-time visibility for every customer."],
            ].map(([y, t, d]) => (
              <div key={y} className="grid grid-cols-[80px_1fr] gap-6 border-l border-slate-200 pl-6 relative">
                <div className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-[#2F80FF] shadow-[0_0_12px_rgba(47,128,255,0.4)]" />
                <div className="text-2xl font-bold text-gradient">{y}</div>
                <div>
                  <div className="text-lg font-semibold text-[#0A1226]">{t}</div>
                  <div className="text-sm text-slate-500 mt-1">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-[#0A1226]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-4 gap-6 text-center">
          {[["250K+","Households connected"],["12.4K","Metros served"],["40+","Carrier partners"],["99.99%","Uptime SLA"]].map(([v,l])=>(
            <div key={l as string} className="rounded-2xl bg-[#F5F7FB] p-8">
              <div className="text-5xl font-bold text-[#2F80FF]">{v}</div>
              <div className="mt-2 text-sm text-[#4A5568]">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-24 overflow-hidden bg-white">
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#0066CC]/5 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="text-4xl md:text-5xl font-bold max-w-2xl text-[#0A1226]">Our technology philosophy: networks should feel invisible.</h2>
          <p className="mt-5 text-slate-500 max-w-xl">When connectivity works, people forget it exists. That's our benchmark — every home and business we touch should experience the network as pure presence, never as a problem.</p>
          <Link to="/" hash="connect" className="mt-8 inline-flex btn-electric btn-electric-hover">Get in touch</Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
