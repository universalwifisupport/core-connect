import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ProviderChip, providers } from "@/components/site/ProviderLogos";
import heroBg from "@/assets/hero-bg.png";
import fiberImg from "@/assets/fiber-optic.jpg";
import dataCenter from "@/assets/data-center.jpg";
import smartHome from "@/assets/smart-home.jpg";
import enterprise from "@/assets/enterprise-office.jpg";
import commTower from "@/assets/comm-tower.jpg";
import noc from "@/assets/noc.jpg";
import cityNight from "@/assets/city-night.jpg";
import tvStream from "@/assets/tv-streaming.jpg";
import cloudVoice from "@/assets/cloud-voice.jpg";
import { useEffect, useState, useRef } from "react";
import { trackEvent } from "../lib/analytics";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Core Connect — Nationwide Telecom Connectivity" },
      { name: "description", content: "Compare premium internet, fiber, TV, voice, and enterprise networking from leading providers in one place." },
    ],
    links: [
      { rel: "canonical", href: "https://core-connect.in" }
    ]
  }),
  component: Index,
});

function Index() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Core Connect",
      "url": "https://core-connect.in",
      "logo": "https://core-connect.in/logo.png",
      "sameAs": [
        "https://twitter.com/CoreConnect"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Core Connect",
      "url": "https://core-connect.in",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://core-connect.in/?zip={zip}",
        "query-input": "required name=zip"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Core Connect Denver",
      "image": "https://core-connect.in/logo.png",
      "telephone": "1-888-CORE-NET",
      "email": "enterprise@coreconnect.io",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1650 Market Street, Suite 3400",
        "addressLocality": "Denver",
        "addressRegion": "CO",
        "postalCode": "80202",
        "addressCountry": "US"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Core Connect a telecom provider?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Core Connect is an independent connectivity broker that aggregates services from many nationwide carriers so you can compare and choose."
          }
        },
        {
          "@type": "Question",
          "name": "How is availability determined?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We query real-time carrier serviceability APIs against your address to determine which technologies and speeds are actually available."
          }
        },
        {
          "@type": "Question",
          "name": "Do I pay more by ordering through Core Connect?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Pricing matches what the carrier offers directly. Our concierge is included at no extra cost."
          }
        },
        {
          "@type": "Question",
          "name": "Can you support multi-site businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — from a handful of locations to thousands. Our platform is purpose-built for orchestrating multi-site connectivity."
          }
        },
        {
          "@type": "Question",
          "name": "How long does activation take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residential installs typically activate within 3-7 business days. Enterprise fiber varies by build; we manage the timeline end to end."
          }
        }
      ]
    }
  ];

  return (
    <div className="bg-white text-[#0A1226] overflow-hidden">
      {schemas.map((s, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
      <SiteNav transparent />
      <Hero />
      <PartnerLogos />
      <HowItWorks />
      <ConnectivitySolutions />
      <WhyCoreConnect />
      <BusinessSection />
      <LiveDashboard />
      <SuccessStories />
      <Faq />
      <FinalCta />
      <SiteFooter />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const [zip, setZip] = useState("");

  const StatCard = ({
    icon,
    iconBg,
    eyebrow,
    value,
    sub,
    valueColor = "text-white",
    bar,
  }: {
    icon: React.ReactNode;
    iconBg: string;
    eyebrow: string;
    value: string;
    sub: string;
    valueColor?: string;
    bar?: { pct: string; color: string };
  }) => (
    <div className="pointer-events-auto w-[190px] rounded-2xl p-4" style={{
      background: "rgba(6,14,35,0.82)",
      border: "1px solid rgba(255,255,255,0.09)",
      backdropFilter: "blur(18px)",
      boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
    }}>
      <div className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${iconBg} shadow-lg mb-3`}>
        {icon}
      </div>
      <div className="text-[9px] uppercase tracking-[0.14em] text-white/40 font-bold leading-tight">{eyebrow}</div>
      <div className={`mt-1 text-xl font-extrabold leading-none ${valueColor}`}>{value}</div>
      <div className="mt-1 text-[11px] text-white/50">{sub}</div>
      {bar && (
        <div className="mt-3 h-1 w-full rounded-full bg-white/10 overflow-hidden">
          <div className={`h-full rounded-full ${bar.pct}`} style={{ background: bar.color }} />
        </div>
      )}
    </div>
  );

  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden" style={{ paddingTop: "88px" }}>

      {/* ── Background: satellite night map ── */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Live nationwide network map" width={1920} height={1088}
          className="h-full w-full object-cover object-center scale-[1.04]" />
        {/* Lighter top-down fade so the glowing map itself reads through, like mission-control glass */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(3,7,22,0.92) 0%, rgba(4,9,28,0.55) 32%, rgba(4,9,28,0.18) 55%, rgba(4,9,28,0.55) 78%, rgba(3,7,22,0.96) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(60% 45% at 50% 8%, rgba(47,128,255,0.18) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 grid-lines opacity-[0.08]" />
        <div className="absolute inset-0 noise-overlay opacity-60" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {Array.from({ length: 22 }).map((_, i) => (
          <span key={i} className="absolute rounded-full bg-[#28D7FF]/50 animate-pulse-dot" style={{
            height: i % 3 === 0 ? "2px" : "1px", width: i % 3 === 0 ? "2px" : "1px",
            top: `${(i * 41) % 100}%`, left: `${(i * 57) % 100}%`,
            animationDelay: `${(i % 6) * 0.4}s`,
            boxShadow: "0 0 8px #28D7FF",
          }} />
        ))}
      </div>

      {/* ── Content: centered ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center mx-auto max-w-5xl px-5 sm:px-8 w-full pt-10 pb-6 text-center animate-fade-up">

        {/* Pill badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold text-white/80 backdrop-blur-sm tracking-[0.12em] uppercase mb-7">
          <span className="h-1.5 w-1.5 rounded-full bg-[#28D7FF] animate-pulse-dot shadow-[0_0_8px_#28D7FF]" />
          NATIONWIDE <span className="text-[#28D7FF] ml-0.5">CONNECTIVITY</span>. ENDLESS POSSIBILITIES.
        </span>

        {/* Headline */}
        <h1 className="text-[2.5rem] sm:text-[3.4rem] md:text-[4.25rem] xl:text-[5rem] font-extrabold leading-[1.04] tracking-tight text-white">
          Powering Connections.
          <br />
          Across the{" "}
          <span className="relative inline-block">
            <span className="relative z-10" style={{
              backgroundImage: "linear-gradient(90deg, #60C8FF 0%, #38B4FF 40%, #28D7FF 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Network.</span>
            <span className="absolute left-0 -bottom-1 h-[6px] w-full rounded-full opacity-70" style={{ background: "linear-gradient(90deg, #28D7FF, transparent)" }} />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-xl text-[1rem] text-white/65 leading-relaxed">
          Compare top providers, find the best plans, and get connected with
          lightning-fast internet, TV, phone &amp; business services.
        </p>

        {/* ZIP search */}
        <div className="mt-8 w-full max-w-[560px]">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 rounded-2xl sm:rounded-full p-2 sm:px-3 sm:py-2" style={{
            background: "rgba(6,14,40,0.75)",
            border: "1px solid rgba(40,215,255,0.25)",
            boxShadow: "0 0 0 1px rgba(40,215,255,0.06), 0 8px 40px rgba(0,0,0,0.55)",
            backdropFilter: "blur(18px)",
          }}>
            <div className="flex items-center flex-1 min-w-0">
              <span className="pl-2 pr-1 text-[#28D7FF] shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>
                </svg>
              </span>
              <input
                id="hero-zip-input"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                inputMode="numeric"
                maxLength={5}
                placeholder="Enter your ZIP code"
                className="flex-1 bg-transparent py-3 text-white placeholder:text-white/35 text-sm sm:text-base focus:outline-none min-w-0 text-center sm:text-left"
                aria-label="Enter your ZIP code to check availability"
              />
            </div>
            <button
              id="hero-check-availability"
              onClick={() => trackEvent("hero_zip_search", "Availability", zip)}
              className="flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs sm:text-sm font-semibold text-white transition-all hover:brightness-115 shrink-0"
              style={{ background: "linear-gradient(90deg,#0060F0 0%,#00A3FF 100%)", boxShadow: "0 4px 20px rgba(0,96,240,0.5)" }}
            >
              Check Availability
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Desktop: four stat cards floating over the map corners ── */}
      <div className="hidden lg:block relative z-10 mx-auto max-w-7xl px-8 w-full h-0">
        <div className="absolute -top-[210px] left-8">
          <StatCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="h-4 w-4"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg>}
            iconBg="from-[#3B82F6] to-[#1D4ED8]"
            eyebrow="Live Network Status" value="99.99%" sub="Uptime"
          />
        </div>
        <div className="absolute -top-[160px] right-8">
          <StatCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="h-4 w-4"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>}
            iconBg="from-[#10B981] to-[#047857]"
            eyebrow="Happy Customers" value="250K+" sub="Nationwide"
          />
        </div>
        <div className="absolute top-[70px] left-8">
          <StatCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="h-4 w-4"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>}
            iconBg="from-[#06B6D4] to-[#0891B2]"
            eyebrow="Fastest Speeds" value="10 Gbps" sub="Fiber Network"
            bar={{ pct: "w-4/5", color: "linear-gradient(90deg,#06B6D4,#0891B2)" }}
          />
        </div>
        <div className="absolute top-[120px] right-8">
          <StatCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="h-4 w-4"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>}
            iconBg="from-[#8B5CF6] to-[#6D28D9]"
            eyebrow="Nationwide Coverage" value="50" sub="States Covered"
            bar={{ pct: "w-full", color: "linear-gradient(90deg,#8B5CF6,#6D28D9)" }}
          />
        </div>
      </div>

      {/* ── Mobile / tablet stat grid ── */}
      <div className="lg:hidden relative z-10 grid grid-cols-2 gap-3 mx-auto max-w-lg w-full px-5 pb-8">
        {[
          { label: "Uptime", value: "99.99%", color: "#3B82F6" },
          { label: "Customers", value: "250K+", color: "#10B981" },
          { label: "Max Speed", value: "10 Gbps", color: "#06B6D4" },
          { label: "States", value: "50", color: "#8B5CF6" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl px-4 py-3 text-left" style={{ background: "rgba(6,14,35,0.80)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(16px)" }}>
            <div className="text-[10px] text-white/40 uppercase tracking-wider">{s.label}</div>
            <div className="text-lg font-extrabold text-white mt-0.5" style={{ color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* ── Trusted-by strip fading into the map ── */}
      <div className="relative z-10 pb-10 pt-2 text-center">
        <p className="text-[11px] uppercase tracking-[0.25em] text-white/35 font-semibold">Trusted Nationwide</p>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 z-[5] pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, rgba(4,9,28,0.95))" }} />
    </section>
  );
}

/* ---------------- PARTNER LOGOS (Infinite Loop) ---------------- */
function PartnerLogos() {
  return (
    <section className="bg-white py-14 border-b border-slate-100 overflow-hidden">
      {/* Heading block matching reference image */}
      <div className="text-center mb-10 px-5">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A1226] tracking-tight leading-tight">
          Trusted by Leading Companies
        </h2>
        <p className="mt-3 text-sm text-[#5B7FA6] max-w-md mx-auto leading-relaxed">
          Join hundreds of leading companies who trust us with their business processes
        </p>
      </div>

      {/* Infinite marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10" style={{ background: "linear-gradient(to right, white, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10" style={{ background: "linear-gradient(to left, white, transparent)" }} />

        <div className="flex items-center gap-16 min-w-max animate-logo-loop">
          {[...providers, ...providers].map((p, index) => (
            <ProviderChip key={`${p.name}-${index}`} label={p.label} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes logoLoop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-logo-loop {
          display: flex;
          animation: logoLoop 28s linear infinite;
        }
      `}</style>
    </section>
  );
}

/* Reusable stat panel matching the visual layout of the reference image */
function StatPanel({
  className = "",
  icon,
  iconBg,
  eyebrow,
  value,
  sub,
  badge,
}: {
  className?: string;
  icon: React.ReactNode;
  iconBg: string;
  eyebrow: string;
  value: string;
  sub: string;
  badge?: React.ReactNode;
}) {
  return (
    <div
      className={`pointer-events-auto w-full lg:w-[195px] rounded-2xl p-5 ${className}`}
      style={{
        background: "rgba(6,14,35,0.85)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(18px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
      }}
    >
      <div className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${iconBg} shadow-lg mb-4`}>
        {icon}
      </div>
      <div className="text-[9px] uppercase tracking-[0.15em] text-white/40 font-bold leading-tight">{eyebrow}</div>
      <div className="mt-1.5 text-2xl font-extrabold text-white tracking-tight leading-none">{value}</div>
      <div className="mt-1 text-[11px] text-[#9BAFC5] leading-normal">{sub}</div>
      {badge && <div className="mt-3">{badge}</div>}
    </div>
  );
}

/** Legacy FloatPanel kept for compatibility */
function FloatPanel({ className = "", title, value, hint, accent = false }: { className?: string; title: string; value: string; hint: string; accent?: boolean }) {
  return (
    <div className={`pointer-events-auto absolute glass-panel px-5 py-4 min-w-[180px] ${className}`}>
      <div className="flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${accent ? "bg-[#28D7FF]" : "bg-[#2F80FF]"} animate-pulse-dot`} />
        <span className="text-[11px] uppercase tracking-wider text-white/60">{title}</span>
      </div>
      <div className="mt-1.5 text-2xl font-semibold text-white">{value}</div>
      <div className="text-xs text-white/50">{hint}</div>
    </div>
  );
}




/* ---------------- CONNECTIVITY SOLUTIONS ---------------- */
function ConnectivitySolutions() {
  const items = [
    { tag: "01 · Residential", title: "Home internet, reimagined.", body: "Multi-gig fiber and wireless plans that keep every device in your household on the fast lane.", img: smartHome, stat: "Up to 5 Gbps symmetrical", accent: "cyan" },
    { tag: "02 · Fiber", title: "The backbone of a modern nation.", body: "Enterprise-grade fiber routes with dedicated capacity and hardened SLAs across every metro.", img: fiberImg, stat: "10 Gbps XGS-PON", accent: "electric" },
    { tag: "03 · TV & Streaming", title: "Cinema in every room.", body: "4K live TV, cloud DVR, and streaming bundles curated with the nation's leading platforms.", img: tvStream, stat: "260+ HD/4K channels", accent: "cyan" },
    { tag: "04 · Business Internet", title: "Fuel every workflow.", body: "Symmetrical business circuits, static IPs, and 24/7 concierge support built for uptime.", img: enterprise, stat: "99.99% uptime SLA", accent: "electric" },
    { tag: "05 · Cloud Voice", title: "Unified communications, native to the cloud.", body: "HD voice, video meetings, and contact-center flows delivered on a resilient carrier fabric.", img: cloudVoice, stat: "50ms end-to-end latency", accent: "cyan" },
    { tag: "06 · Enterprise Networking", title: "SD-WAN, MPLS, and beyond.", body: "Global connectivity meshes engineered for multi-site operations and secure workloads.", img: dataCenter, stat: "Zero-trust ready", accent: "electric" },
  ];
  return (
    <section className="relative py-14 md:py-20 bg-[#F5F8FF]">
      <div className="absolute inset-0 grid-lines opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow-chip"><span className="section-kicker-line" />Connectivity Solutions</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.05] text-[#0A1226]">
            Six pillars. <span className="text-gradient">One resilient fabric.</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[280px]">
          {items.map((it, i) => {
            const big = i === 0 || i === 3;
            return (
              <article
                key={i}
                className={`group relative rounded-3xl overflow-hidden ${big ? "lg:col-span-4" : "lg:col-span-2"}`}
              >
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-[#050A18]/55 to-transparent" />
                <div className={`absolute right-5 top-5 h-20 w-20 rounded-full blur-3xl opacity-70 ${it.accent === "cyan" ? "bg-[#28D7FF]/50" : "bg-[#2F80FF]/60"}`} />
                <div className="relative flex h-full min-h-[240px] flex-col justify-end p-6">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-semibold">{it.tag}</div>
                  <h3 className={`mt-2 font-bold leading-tight text-white ${big ? "text-2xl md:text-3xl" : "text-xl"}`}>{it.title}</h3>
                  <p className={`mt-2 text-white/70 leading-relaxed ${big ? "text-sm md:text-[15px] max-w-md" : "text-sm line-clamp-2"}`}>{it.body}</p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold text-white" style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.15)",backdropFilter:"blur(8px)"}}>
                      {it.stat}
                    </span>
                    <Link to="/residential" className="inline-flex items-center gap-1.5 text-white hover:text-[#28D7FF] transition-colors font-medium text-sm shrink-0">
                      Explore
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}



/* ---------------- WHY CORE CONNECT ---------------- */
function WhyCoreConnect() {
  return (
    <section className="relative bg-white text-[#0A1226] py-14 md:py-20 overflow-hidden border-t border-slate-100">
      <div className="absolute inset-0 grid-lines opacity-50 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            <span className="eyebrow-chip"><span className="section-kicker-line" />Why Core Connect</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[#0A1226]">A telecom experience built for the digital age.</h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              We design, orchestrate, and maintain your network connectivity so you can focus entirely on growth.
            </p>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {/* SLA Ring Card */}
            <div className="glass-panel p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <span className="h-10 w-10 rounded-xl bg-[#28D7FF]/10 border border-[#28D7FF]/20 grid place-items-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#28D7FF" strokeWidth="2.5" className="h-5 w-5">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                </span>
                <span className="text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">Active SLA</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A1226] mb-2">99.99% Contractual Uptime</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Redundant transit paths backed by proactive monitoring and automated carrier failover systems.
              </p>
              {/* Visual uptime indicator */}
              <div className="flex items-center gap-1 mt-4 pt-3 border-t border-slate-100">
                {Array.from({ length: 15 }).map((_, i) => (
                  <span key={i} className={`h-4 flex-1 rounded-sm ${i === 12 ? "bg-amber-400/80" : "bg-emerald-500/80"}`} title={i === 12 ? "Minor latency spike resolved" : "Operational"} />
                ))}
              </div>
            </div>

            {/* Unified Console Card */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <span className="h-10 w-10 rounded-xl bg-[#2F80FF]/10 border border-[#2F80FF]/20 grid place-items-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#2F80FF" strokeWidth="2.5" className="h-5 w-5">
                    <path d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h12c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v18l-5-4-5 4-5-4-5 4z"/>
                  </svg>
                </span>
                <span className="text-[10px] text-[#2F80FF] font-semibold px-2 py-0.5 rounded-full bg-[#2F80FF]/10 border border-[#2F80FF]/20">Unified Billing</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A1226] mb-2">One Console, Every Endpoint</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Manage, invoice, and configure fifty separate carrier circuits under a single administrative panel.
              </p>
              {/* Visual list */}
              <div className="space-y-1.5 mt-4 pt-3 border-t border-slate-100 text-[10px]">
                <div className="flex justify-between text-slate-500"><span className="font-medium">Primary Fiber line</span><span>$1,450.00</span></div>
                <div className="flex justify-between text-slate-500"><span className="font-medium">Backup Broadband</span><span>$120.00</span></div>
              </div>
            </div>

            {/* Multi-carrier Redundancy */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <span className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 grid place-items-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2.5" className="h-5 w-5">
                    <path d="M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1"/><polygon points="12 7 17 12 12 17 12 7"/>
                  </svg>
                </span>
                <span className="text-[10px] text-purple-400 font-semibold px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20">Mesh Ready</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A1226] mb-2">Adaptive SD-WAN</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Deploy application-aware traffic routing that instantly shifts packets during packet loss conditions.
              </p>
              {/* Redundant connection paths */}
              <div className="flex flex-col gap-1.5 mt-4 pt-3 border-t border-slate-100 text-[9px]">
                <div className="flex items-center justify-between"><span className="text-emerald-600">● Path A (Fiber)</span><span className="text-slate-400">Active · 9ms</span></div>
                <div className="flex items-center justify-between"><span className="text-[#2F80FF]">● Path B (Wireless)</span><span className="text-slate-400">Standby · 18ms</span></div>
              </div>
            </div>

            {/* Engineer Support */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <span className="h-10 w-10 rounded-xl bg-[#28D7FF]/10 border border-[#28D7FF]/20 grid place-items-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#28D7FF" strokeWidth="2.5" className="h-5 w-5">
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  </svg>
                </span>
                <span className="text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">24/7 Support</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A1226] mb-2">Dedicated Strategists</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Work directly with network engineers who design your topology and handle troubleshooting end-to-end.
              </p>
              {/* Active Engineer box */}
              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-100">
                <div className="h-6 w-6 rounded-full bg-[#2F80FF] border border-blue-200 grid place-items-center text-[10px] font-bold text-white">N</div>
                <div className="flex-1">
                  <div className="text-[9px] font-bold text-[#0A1226] leading-none">NOC Engineer Online</div>
                  <div className="text-[8px] text-slate-400 mt-0.5">Average response time: 4m</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- BUSINESS ---------------- */
function BusinessSection() {
  return (
    <section className="relative py-14 md:py-20 bg-[#F5F8FF]">
      <div className="absolute inset-0 grid-lines opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <img src={enterprise} alt="Enterprise office at night" loading="lazy" className="rounded-3xl w-full h-[520px] object-cover" />
            <div className="absolute -bottom-6 -left-6 glass-panel p-5 w-64 animate-float">
              <div className="text-xs uppercase text-slate-400">Latency</div>
              <div className="text-3xl font-bold mt-1 text-[#0A1226]">14<span className="text-lg text-slate-400">ms</span></div>
              <div className="mt-2 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-[#2F80FF] to-[#0066CC]" />
              </div>
            </div>
            <div className="absolute -top-6 -right-6 glass-panel p-5 w-60 animate-float-slow">
              <div className="text-xs uppercase text-slate-400">Sites online</div>
              <div className="text-3xl font-bold mt-1 text-[#0A1226]">1,284</div>
              <div className="text-xs text-[#2F80FF] mt-1">+12 in last 24h</div>
            </div>
          </div>
          <div>
            <span className="eyebrow-chip"><span className="section-kicker-line" />Business Solutions</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-[#0A1226]">Enterprise connectivity, orchestrated end to end.</h2>
            <p className="mt-5 text-slate-500 leading-relaxed">
              From single storefronts to multinational campuses, Core Connect designs, delivers, and manages the
              connective tissue of modern business — dedicated fiber, SD-WAN, cloud voice, security services and
              always-on network operations.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {["Dedicated Fiber", "SD-WAN & MPLS", "Cloud Voice / UCaaS", "Managed Security", "Multi-site Orchestration", "24/7 NOC Support"].map((s) => (
                <div key={s} className="glass-panel px-4 py-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2F80FF]" />
                  <span className="text-sm text-slate-700">{s}</span>
                </div>
              ))}
            </div>
            <Link to="/business" className="mt-8 inline-flex btn-electric btn-electric-hover">Explore business solutions</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    { n: "01", title: "Enter your ZIP", body: "We instantly poll every carrier serving your address in real time." },
    { n: "02", title: "Compare intelligently", body: "See technology, speed, contract terms, and honest recommendations side by side." },
    { n: "03", title: "Order in minutes", body: "Concierge activation with white-glove scheduling — no phone-tree marathons." },
    { n: "04", title: "Stay optimized", body: "We monitor performance and re-shop your plan as the market evolves." },
  ];
  return (
    <section className="relative py-14 md:py-20 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow-chip"><span className="section-kicker-line" />How it works</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-[#0A1226]">Four steps. Zero friction.</h2>
        </div>
        <div className="relative mt-20">
          <svg className="absolute inset-0 w-full h-full hidden md:block" viewBox="0 0 1200 300" fill="none" preserveAspectRatio="none">
            <path d="M50 200 Q300 40 600 180 T1150 100" stroke="url(#pathGrad)" strokeWidth="2" strokeDasharray="6 6" />
            <defs>
              <linearGradient id="pathGrad" x1="0" x2="1">
                <stop offset="0" stopColor="#2F80FF" />
                <stop offset="1" stopColor="#28D7FF" />
              </linearGradient>
            </defs>
          </svg>
          <div className="relative grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.n} className={`glass-panel p-6 ${i % 2 ? "md:translate-y-16" : ""}`}>
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full bg-gradient-to-br from-[#2F80FF] to-[#0066CC] grid place-items-center text-sm font-bold text-white shadow-[0_4px_20px_rgba(47,128,255,0.35)]">
                    {s.n}
                  </span>
                  <div className="text-lg font-semibold text-[#0A1226]">{s.title}</div>
                </div>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- LIVE DASHBOARD ---------------- */
function LiveDashboard() {
  return (
    <section className="relative py-14 md:py-20 bg-[#F5F8FF] overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <span className="eyebrow-chip"><span className="section-kicker-line" />Live Network Dashboard</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight max-w-xl text-[#0A1226]">Real-time visibility into every packet.</h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-dot" /> Streaming live · 250ms refresh
          </div>
        </div>

        <div className="mt-10 grid lg:grid-cols-12 gap-4">
          <div className="lg:col-span-8 glass-panel p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase text-slate-400">Nationwide throughput</div>
                <div className="text-3xl font-bold mt-1 text-[#0A1226]">4.82 <span className="text-base text-slate-400">Tbps</span></div>
              </div>
              <div className="text-xs text-emerald-600">▲ 3.4%</div>
            </div>
            <svg viewBox="0 0 600 160" className="mt-6 w-full h-40">
              <defs>
                <linearGradient id="chart" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#28D7FF" stopOpacity="0.5" />
                  <stop offset="1" stopColor="#28D7FF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 120 L40 100 L80 110 L120 80 L160 90 L200 60 L240 70 L280 40 L320 55 L360 30 L400 50 L440 25 L480 45 L520 20 L560 40 L600 15 L600 160 L0 160 Z" fill="url(#chart)" />
              <path d="M0 120 L40 100 L80 110 L120 80 L160 90 L200 60 L240 70 L280 40 L320 55 L360 30 L400 50 L440 25 L480 45 L520 20 L560 40 L600 15" stroke="#28D7FF" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {[
              ["Uptime", "99.994%", "30d"],
              ["Latency", "14 ms", "Median"],
              ["Packet loss", "0.002%", "24h"],
              ["Sites", "12,412", "Online"],
            ].map(([l, v, s]) => (
              <div key={l} className="glass-panel p-5">
                <div className="text-[11px] uppercase tracking-wider text-slate-400">{l}</div>
                <div className="text-2xl font-bold mt-1 text-[#0A1226]">{v}</div>
                <div className="text-xs text-slate-400">{s}</div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-12 glass-panel p-6">
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase text-slate-400">Regional status</div>
              <div className="text-xs text-slate-400">All systems nominal</div>
            </div>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-6 gap-3">
              {["West", "Mountain", "Central", "Great Lakes", "South", "Northeast"].map((r) => (
                <div key={r} className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-sm text-slate-600">{r}</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SUCCESS STORIES (Auto-slide carousel) ---------------- */
function SuccessStories() {
  const stories = [
    { img: enterprise, tag: "Multi-site Retail", quote: "Core Connect unified 148 stores onto one SD-WAN fabric in under 90 days.", author: "VP of IT, National Retail Brand", stat: ["148", "Stores unified"], accent: "#2F80FF" },
    { img: smartHome, tag: "Residential", quote: "Doubled our home speeds and cut the bill — the concierge handled absolutely everything.", author: "Homeowner, Pacific Northwest", stat: ["2×", "Faster household"], accent: "#28D7FF" },
    { img: dataCenter, tag: "Enterprise Cloud", quote: "Dedicated 100G fiber to two hyperscalers, provisioned in a single ticket.", author: "Head of Infrastructure, Fintech Platform", stat: ["100G", "Direct to cloud"], accent: "#9B6BFF" },
    { img: commTower, tag: "Wireless Backhaul", quote: "Seamless failover across three carriers — zero downtime during peak traffic events.", author: "Network Director, Media Company", stat: ["99.99%", "Availability SLA"], accent: "#1EC99C" },
  ];

  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % stories.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (idx: number) => {
    setCurrent(idx);
    if (timerRef.current) clearInterval(timerRef.current);
    startTimer();
  };

  const s = stories[current];

  return (
    <section className="relative py-14 md:py-20 bg-white overflow-hidden border-t border-slate-100">
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="eyebrow-chip"><span className="section-kicker-line" />Success Stories</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight max-w-xl text-[#0A1226]">Networks that reshaped businesses and homes.</h2>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {stories.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} aria-label={`Go to story ${i + 1}`}
                className="transition-all duration-300 rounded-full"
                style={{ height: "8px", width: i === current ? "28px" : "8px", background: i === current ? s.accent : "rgba(255,255,255,0.2)" }}
              />
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden" style={{ minHeight: "420px" }}>
            <img key={current} src={s.img} alt={s.tag} className="absolute inset-0 h-full w-full object-cover transition-all duration-700" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(6,14,30,0.7) 0%, rgba(6,14,30,0.2) 60%, transparent 100%)" }} />
            <div className="absolute top-6 right-6 rounded-2xl px-5 py-4"
              style={{ background: "rgba(6,14,35,0.85)", border: `1px solid ${s.accent}30`, backdropFilter: "blur(16px)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
            >
              <div className="text-3xl font-extrabold" style={{ backgroundImage: `linear-gradient(90deg, ${s.accent}, #fff)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.stat[0]}</div>
              <div className="text-xs text-white/60 mt-0.5">{s.stat[1]}</div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
              <div key={`progress-${current}`} className="h-full rounded-full" style={{ background: s.accent, animation: "storiesProgress 5s linear forwards" }} />
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl p-8 flex flex-col justify-between"
            style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 4px 24px -8px rgba(10,18,38,0.1)" }}
          >
            <div>
              <span className="inline-block text-xs uppercase tracking-[0.2em] font-semibold px-3 py-1.5 rounded-full mb-6"
                style={{ background: `${s.accent}20`, color: s.accent, border: `1px solid ${s.accent}30` }}
              >{s.tag}</span>
              <blockquote key={`quote-${current}`} className="text-xl md:text-2xl font-semibold leading-snug text-[#0A1226] animate-fade-up">
                "{s.quote}"
              </blockquote>
              <p className="mt-5 text-sm text-slate-400">— {s.author}</p>
            </div>

            <div className="mt-8 grid grid-cols-4 gap-2">
              {stories.map((st, i) => (
                <button key={i} onClick={() => goTo(i)} className="relative rounded-xl overflow-hidden transition-all duration-300"
                  style={{ height: "56px", border: i === current ? `2px solid ${s.accent}` : "2px solid transparent", opacity: i === current ? 1 : 0.4 }}
                >
                  <img src={st.img} alt={st.tag} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button onClick={() => goTo((current - 1 + stories.length) % stories.length)}
                className="h-10 w-10 rounded-full grid place-items-center transition-all hover:shadow-md"
                style={{ background: "#F1F5F9", border: "1px solid #E2E8F0" }}
                aria-label="Previous story"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>
              </button>
              <button onClick={() => goTo((current + 1) % stories.length)}
                className="h-10 w-10 rounded-full grid place-items-center transition-all hover:brightness-125"
                style={{ background: `${s.accent}25`, border: `1px solid ${s.accent}40` }}
                aria-label="Next story"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </button>
              <span className="ml-auto text-[11px] text-slate-300 font-mono">{String(current + 1).padStart(2, "0")} / {String(stories.length).padStart(2, "0")}</span>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes storiesProgress { from { width: 0% } to { width: 100% } }`}</style>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function Faq() {
  const items = [
    { q: "Is Core Connect a telecom provider?", a: "No. Core Connect is an independent connectivity broker that aggregates services from many nationwide carriers so you can compare and choose." },
    { q: "How is availability determined?", a: "We query real-time carrier serviceability APIs against your address to determine which technologies and speeds are actually available." },
    { q: "Do I pay more by ordering through Core Connect?", a: "No. Pricing matches what the carrier offers directly. Our concierge is included at no extra cost." },
    { q: "Can you support multi-site businesses?", a: "Yes — from a handful of locations to thousands. Our platform is purpose-built for orchestrating multi-site connectivity." },
    { q: "How long does activation take?", a: "Residential installs typically activate within 3-7 business days. Enterprise fiber varies by build; we manage the timeline end to end." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-14 md:py-20 bg-white text-[#0A1226]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow-chip"><span className="section-kicker-line" />Frequently Asked</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">Answers, upfront.</h2>
        </div>
        <div className="mt-12 space-y-4">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`rounded-2xl border transition-all ${isOpen ? "border-[#2F80FF]/30 bg-[#F5F8FF] shadow-[0_20px_50px_-30px_rgba(47,128,255,0.5)]" : "border-black/5 bg-[#F7F9FC]"}`}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between text-left px-6 py-5">
                  <span className="font-semibold text-lg">{it.q}</span>
                  <span className={`h-8 w-8 grid place-items-center rounded-full transition-all ${isOpen ? "bg-[#2F80FF] text-white rotate-45" : "bg-white text-[#0A1226] border border-black/10"}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M12 5v14M5 12h14"/></svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 -mt-1 text-[#4A5568] leading-relaxed animate-fade-up">{it.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA & CONTACT FORM ---------------- */
function FinalCta() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("homepage_contact_form_submit", "Contact", zip);
    setSent(true);
  };

  return (
    <section id="connect" className="relative py-14 md:py-20 overflow-hidden bg-[#F5F8FF] border-t border-slate-100">
      {/* Decorative background blobs */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#2F80FF]/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 h-[350px] w-[350px] rounded-full bg-[#0066CC]/6 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 grid-lines opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <span className="eyebrow-chip mb-4"><span className="section-kicker-line" />Get Connected</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.1] text-[#0A1226] tracking-tight">
              Check availability and <span className="text-gradient">find the best plan.</span>
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl">
              Enter your details below to query availability. Our concierge team will review options across every provider on the block and contact you directly.
            </p>

            {sent ? (
              <div className="mt-8 bg-white border border-slate-200 rounded-3xl p-8 text-center shadow-md animate-fade-up">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-8 w-8">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0A1226]">Request received!</h3>
                <p className="mt-2 text-slate-500 text-sm max-w-sm mx-auto">
                  Thank you, {name}. Our connectivity specialist has received your request and will contact you at {email} within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4 max-w-xl">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 w-full rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 text-[#0A1226] placeholder:text-slate-400 focus:outline-none focus:border-[#2F80FF] focus:ring-1 focus:ring-[#2F80FF] text-sm shadow-sm transition"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 w-full rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 text-[#0A1226] placeholder:text-slate-400 focus:outline-none focus:border-[#2F80FF] focus:ring-1 focus:ring-[#2F80FF] text-sm shadow-sm transition"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold">ZIP Code</label>
                    <input
                      required
                      type="text"
                      maxLength={5}
                      pattern="[0-9]{5}"
                      placeholder="94103"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      className="mt-1 w-full rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 text-[#0A1226] placeholder:text-slate-400 focus:outline-none focus:border-[#2F80FF] focus:ring-1 focus:ring-[#2F80FF] text-sm shadow-sm transition"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Requirement Type</label>
                    <select
                      className="mt-1 w-full rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 text-[#0A1226] focus:outline-none focus:border-[#2F80FF] focus:ring-1 focus:ring-[#2F80FF] text-sm shadow-sm transition"
                    >
                      <option>Residential Internet</option>
                      <option>Business/Enterprise Fiber</option>
                      <option>TV & Streaming Bundles</option>
                      <option>Cloud Voice / VoIP</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Message / Details</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your home/business setup or any specific providers you prefer…"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1 w-full rounded-xl bg-white border border-slate-200 p-3.5 text-[#0A1226] placeholder:text-slate-400 focus:outline-none focus:border-[#2F80FF] focus:ring-1 focus:ring-[#2F80FF] text-sm shadow-sm transition resize-none"
                  />
                </div>

                <button type="submit" className="btn-electric btn-electric-hover w-full !py-3.5 mt-2">
                  Request Free Availability Check
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Premium Image showcase */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2F80FF]/15 to-[#0066CC]/5 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000" />
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl bg-white p-2">
              <img
                src={noc}
                alt="Connectivity Concierge Control Center"
                loading="lazy"
                className="rounded-2xl w-full h-[400px] object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute left-6 bottom-6 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.92)", border: "1px solid rgba(0,0,0,0.08)", backdropFilter: "blur(12px)" }}>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">CONCIERGE ONLINE</div>
                <div className="text-[#0A1226] font-extrabold text-sm">24/7 Connectivity Strategists</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

