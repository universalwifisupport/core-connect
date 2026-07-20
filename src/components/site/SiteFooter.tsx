import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const cols = [
  {
    title: "Solutions",
    links: [
      { to: "/residential", label: "Residential Internet" },
      { to: "/residential", label: "TV & Streaming" },
      { to: "/business", label: "Business Internet" },
      { to: "/business", label: "Fiber Connectivity" },
      { to: "/business", label: "Cloud Voice" },
      { to: "/business", label: "Enterprise Networking" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/providers", label: "Providers" },
      { to: "/contact", label: "Contact Us" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/legal", label: "Legal Hub" },
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms of Service" },
      { to: "/disclaimer", label: "Disclaimer" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#0A1226] border-t border-white/5">
      <div className="absolute inset-0 mesh-bg-dark pointer-events-none opacity-70" />
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-50" />
      <div className="absolute inset-x-0 -top-40 h-80 pointer-events-none" style={{ background: "radial-gradient(60% 60% at 50% 40%, rgba(47,128,255,0.15) 0%, transparent 70%)" }} />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-6">
            <Logo />
            <p className="text-sm leading-relaxed text-white/60 max-w-sm">
              Core Connect helps homes and businesses nationwide discover and
              compare premium telecom connectivity from trusted providers.
            </p>
            <form className="flex items-center gap-2 max-w-sm rounded-full border border-white/10 bg-white/5 p-1.5">
              <input
                type="email"
                placeholder="Newsletter — your email"
                className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button type="button" className="btn-electric btn-electric-hover !py-2 !px-4 text-xs">Subscribe</button>
            </form>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase">{c.title}</h4>
                <ul className="space-y-2.5">
                  {c.links.map((l, i) => (
                    <li key={i}>
                      <Link
                        to={l.to}
                        hash={"hash" in l ? l.hash : undefined}
                        className="text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="divider-glow mt-16 mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Core Connect. All rights reserved.</p>
          <p>Core Connect is an independent broker. All provider names and logos are property of their respective owners.</p>
        </div>
      </div>
    </footer>
  );
}
