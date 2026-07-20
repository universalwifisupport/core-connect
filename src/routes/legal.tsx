import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Legal — Core Connect" },
      { name: "description", content: "Core Connect legal hub — privacy policy, terms of service, and disclaimer in one place." },
      { property: "og:title", content: "Legal — Core Connect" },
      { property: "og:description", content: "Read our privacy policy, terms of service, and disclaimer." },
    ],
    links: [
      { rel: "canonical", href: "https://core-connect.in/legal" }
    ]
  }),
  component: LegalPage,
});

const docs = [
  {
    to: "/privacy",
    title: "Privacy Policy",
    summary: "What information we collect when you use Core Connect, how it's used, and the choices you have over your data.",
    icon: (
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
    ),
  },
  {
    to: "/terms",
    title: "Terms of Service",
    summary: "The rules and conditions that govern your use of the Core Connect website, concierge, and ordering platform.",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
      </>
    ),
  },
  {
    to: "/disclaimer",
    title: "Disclaimer",
    summary: "Important context on Core Connect's role as an independent connectivity broker, not a carrier.",
    icon: (
      <>
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </>
    ),
  },
];

function LegalPage() {
  return (
    <div>
      <PageHero
        eyebrow="Legal Hub"
        title={<>Clarity, in <span className="text-gradient">plain language.</span></>}
        subtitle="Every legal document that governs your relationship with Core Connect, gathered in one place."
      />

      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {docs.map((d) => (
              <Link key={d.to} to={d.to} className="card-premium p-8 flex flex-col group">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2F80FF] to-[#0058C4] shadow-lg mb-5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="h-6 w-6">{d.icon}</svg>
                </div>
                <h2 className="text-xl font-bold text-[#0A1226]">{d.title}</h2>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed flex-1">{d.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[#2F80FF] font-medium text-sm group-hover:gap-3 transition-all">
                  Read document
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-3xl p-8 md:p-10 bg-[#F5F8FF] border border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#0A1226]">Have a legal question we haven't answered?</h3>
              <p className="mt-2 text-sm text-slate-500 max-w-lg">Reach our team directly and we'll get back to you within one business day.</p>
            </div>
            <Link to="/contact" className="btn-electric btn-electric-hover shrink-0">Contact Legal Team</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
