import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SiteFooter } from "@/components/site/SiteFooter";
import smartHome from "@/assets/smart-home.jpg";
import tvStream from "@/assets/tv-streaming.jpg";
import fiber from "@/assets/fiber-optic.jpg";

export const Route = createFileRoute("/residential")({
  head: () => ({
    meta: [
      { title: "Residential Connectivity — Core Connect" },
      { name: "description", content: "Compare residential internet, fiber, TV streaming, and voice plans from nationwide providers. Premium home connectivity, made simple." },
      { property: "og:title", content: "Residential Connectivity — Core Connect" },
      { property: "og:description", content: "Premium home internet, TV, and voice from leading providers." },
    ],
    links: [
      { rel: "canonical", href: "https://core-connect.in/residential" }
    ]
  }),
  component: Res,
});

function Res() {
  const services = [
    { t: "Home Internet", d: "Multi-gig fiber, cable, and fixed wireless plans from every provider serving your address.", img: smartHome, stat: "Up to 5 Gbps" },
    { t: "TV & Streaming", d: "Live TV bundles, cloud DVR, and premium streaming apps curated into one seamless experience.", img: tvStream, stat: "260+ channels" },
    { t: "Home Phone / Voice", d: "Crystal-clear digital voice with nationwide calling and smart-home integrations.", img: fiber, stat: "HD Voice" },
  ];
  return (
    <div>
      <PageHero eyebrow="Residential" title={<>Home connectivity, <span className="text-gradient">upgraded.</span></>} subtitle="From streaming marathons to smart-home ecosystems — get the internet your household actually needs." image={smartHome} />

      <section className="py-20 bg-white text-[#0A1226] border-b border-slate-100 space-y-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 space-y-16">
          {services.map((s, i) => (
            <div key={s.t} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <img src={s.img} alt={s.t} loading="lazy" className="rounded-3xl w-full h-[380px] object-cover shadow-sm" />
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-[#2F80FF] font-semibold">Service</div>
                <h3 className="mt-3 text-3xl md:text-4xl font-bold text-[#0A1226]">{s.t}</h3>
                <p className="mt-4 text-slate-500 leading-relaxed">{s.d}</p>
                <div className="mt-6 bg-[#F5F8FF] border border-slate-100 rounded-2xl inline-flex px-5 py-3 shadow-sm">
                  <span className="text-xs text-slate-500 mr-3">Peak capability</span>
                  <span className="text-[#0A1226] font-semibold">{s.stat}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white text-[#0A1226]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Everything a modern household needs.</h2>
          <p className="mt-4 text-[#4A5568] max-w-2xl mx-auto">Smart-home ready. Streaming optimized. Backed by a concierge team that treats your home network like the priority it is.</p>
          <div className="mt-10 grid md:grid-cols-4 gap-4">
            {["Whole-home Wi-Fi 7","Free professional install","No-contract options","24/7 expert support"].map((f) => (
              <div key={f} className="rounded-2xl border border-black/5 bg-[#F5F7FB] p-6 text-left">
                <div className="h-2 w-8 rounded-full bg-gradient-to-r from-[#2F80FF] to-[#28D7FF] mb-4" />
                <div className="font-semibold">{f}</div>
              </div>
            ))}
          </div>
          <Link to="/" hash="connect" className="mt-10 inline-flex btn-electric btn-electric-hover">Check availability</Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
