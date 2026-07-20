import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SiteFooter } from "@/components/site/SiteFooter";
import { providers } from "@/components/site/ProviderLogos";

export const Route = createFileRoute("/providers")({
  head: () => ({
    meta: [
      { title: "Provider Ecosystem — Core Connect" },
      { name: "description", content: "Core Connect partners with the nation's leading telecom providers to bring you real-time availability across fiber, cable, wireless, and enterprise networks." },
      { property: "og:title", content: "Provider Ecosystem — Core Connect" },
      { property: "og:description", content: "Discover the nationwide network of carriers powering Core Connect." },
    ],
    links: [
      { rel: "canonical", href: "https://core-connect.in/providers" }
    ]
  }),
  component: Prov,
});

function Prov() {
  return (
    <div>
      <PageHero eyebrow="Provider Ecosystem" title={<>The carriers that <span className="text-gradient">power the nation.</span></>} subtitle="Core Connect maintains real-time integrations with the country's most trusted telecom providers." />
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {providers.concat(providers).map((p, i) => (
              <div key={i} className="bg-[#F5F8FF] border border-slate-100 rounded-2xl p-6 flex items-center gap-3 hover:-translate-y-1 transition shadow-sm">
                <div className="h-12 w-12 rounded-xl bg-white border border-slate-200 grid place-items-center">
                  <span className="text-[#2F80FF] font-bold uppercase text-xs">{p.name[0]}</span>
                </div>
                <div className="text-[#0A1226] font-semibold">{p.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white text-[#0A1226]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 prose prose-lg">
          <h2 className="text-3xl md:text-4xl font-bold">What our partnerships mean for you</h2>
          <p className="mt-4 text-[#4A5568] leading-relaxed">
            Our carrier integrations power live availability lookups, real-time serviceability checks, and
            streamlined activation. Instead of contacting each provider individually, one query on Core Connect
            surfaces every option available at your address — fiber, cable, fixed wireless, and dedicated
            business circuits — with honest technical guidance to help you choose.
          </p>
          <p className="mt-4 text-[#4A5568] leading-relaxed">
            Core Connect does not represent any single provider. We're an independent connectivity broker,
            which means our recommendations are always aligned with what actually works best for you.
          </p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
