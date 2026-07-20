import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SiteFooter } from "@/components/site/SiteFooter";
import enterprise from "@/assets/enterprise-office.jpg";
import dc from "@/assets/data-center.jpg";
import cloud from "@/assets/cloud-voice.jpg";
import noc from "@/assets/noc.jpg";

export const Route = createFileRoute("/business")({
  head: () => ({
    meta: [
      { title: "Business Solutions — Core Connect" },
      { name: "description", content: "Enterprise networking, dedicated fiber, cloud voice, managed security, and multi-site orchestration built for modern businesses." },
      { property: "og:title", content: "Business Solutions — Core Connect" },
      { property: "og:description", content: "Enterprise connectivity engineered for uptime, security, and scale." },
    ],
    links: [
      { rel: "canonical", href: "https://core-connect.in/business" }
    ]
  }),
  component: Biz,
});

function Biz() {
  const solutions = [
    { t: "Dedicated Fiber", d: "Symmetrical, contended-free fiber with hardened SLAs and rapid diverse-route delivery.", img: dc },
    { t: "SD-WAN & MPLS", d: "Application-aware transport with intelligent failover across every branch and cloud on-ramp.", img: enterprise },
    { t: "Cloud Voice / UCaaS", d: "Unified voice, video, messaging, and contact-center on a resilient carrier fabric.", img: cloud },
    { t: "Managed Security", d: "Firewall, SSE, and 24/7 SOC services integrated tightly with your connectivity plane.", img: noc },
  ];
  return (
    <div>
      <PageHero eyebrow="Business Solutions" title={<>Enterprise networks, <span className="text-gradient">orchestrated.</span></>} subtitle="One partner for every site, every carrier, every workload. Design, delivery, and operations under a single pane of glass." image={enterprise} />

      <section className="py-24 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-2 gap-6">
          {solutions.map((s) => (
            <article key={s.t} className="relative rounded-3xl overflow-hidden h-[380px] group shadow-sm">
              <img src={s.img} alt={s.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/10 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white">{s.t}</h3>
                <p className="mt-3 text-white/80 max-w-md">{s.d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white text-[#0A1226]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#2F80FF]">Business Support</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">A network operations center that never sleeps.</h2>
            <p className="mt-5 text-[#4A5568] max-w-lg">Our NOC monitors every circuit, every site, every second. Anomalies are detected, triaged, and resolved before they become tickets.</p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[["<15m","Mean-time to detect"],["24/7","Live engineers"],["99.99%","Contractual uptime"]].map(([v,l])=>(
                <div key={l as string} className="rounded-2xl bg-[#F5F7FB] p-5">
                  <div className="text-2xl font-bold text-[#0A1226]">{v}</div>
                  <div className="text-xs text-[#4A5568] mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <img src={noc} alt="Network Operations Center" loading="lazy" className="rounded-3xl w-full h-[440px] object-cover" />
        </div>
      </section>

      <section className="relative py-24 bg-[#F5F8FF] text-center border-t border-slate-100">
        <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
        <div className="mx-auto max-w-3xl px-5 sm:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1226]">Ready to design your network?</h2>
          <p className="mt-4 text-slate-500">Talk to a connectivity strategist — no obligation, no pressure.</p>
          <Link to="/" hash="connect" className="mt-8 inline-flex btn-electric btn-electric-hover">Start a conversation</Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
