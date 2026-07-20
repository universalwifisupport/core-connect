import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { to: "/residential", label: "Solutions" },
  { to: "/business", label: "Technology" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !transparent || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "backdrop-blur-xl bg-white/95 border-b border-slate-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between gap-6">
          <Logo light={!solid} />

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-3.5 py-2 text-sm font-medium transition-colors rounded-full ${
                  solid
                    ? "text-slate-600 hover:text-[#0A1226] hover:bg-slate-100"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                }`}
                activeProps={{ className: solid ? "text-[#0A1226] bg-slate-100 font-semibold" : "text-white font-semibold bg-white/10" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Check Availability Capsule Button */}
            <Link
              to="/"
              hash="connect"
              className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2F80FF] to-[#0066CC] hover:from-[#1A6FEE] hover:to-[#0055BB] px-5 py-2.5 text-sm font-semibold text-white transition-all shadow-[0_4px_15px_rgba(47,128,255,0.35)]"
            >
              Check Availability
              <span className="flex items-center justify-center h-5 w-5 rounded-full border border-white/35">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3"><path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>
              </span>
            </Link>

            {/* Circular call button */}
            <a
              href="tel:1-888-CORE-NET"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                solid
                  ? "border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-sm"
                  : "border border-white/20 bg-white/10 hover:bg-white/20 text-white"
              }`}
              aria-label="Call support"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>

            {/* Hamburger menu for mobile */}
            <button
              className={`lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                solid
                  ? "border-slate-200 text-slate-700 bg-white shadow-sm"
                  : "border-white/20 text-white bg-white/10"
              }`}
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {open && (
          <div className="lg:hidden pb-5 pt-2 flex flex-col gap-1 animate-fade-up bg-white rounded-2xl shadow-xl border border-slate-100 mb-3 px-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 font-medium"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/"
              hash="connect"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2F80FF] to-[#0066CC] px-5 py-3 text-sm font-semibold text-white transition-all mt-2 w-full"
            >
              Check Availability
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4"><path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
