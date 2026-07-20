import { SiteNav } from "./SiteNav";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#080D1E] border-b border-white/5">
      <SiteNav />

      {/* Background image (optional) */}
      {image && (
        <div className="absolute inset-0 z-0">
          <img src={image} alt="" className="h-full w-full object-cover opacity-30" loading="eager" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(8,13,30,0.55) 0%, rgba(8,13,30,0.88) 60%, #080D1E 100%)" }} />
        </div>
      )}
      {!image && <div className="absolute inset-0 bg-[#080D1E]" />}

      <div className="absolute inset-0 mesh-bg-dark pointer-events-none" />
      <div className="absolute inset-0 grid-lines opacity-[0.08] pointer-events-none" style={{ filter: "invert(1)" }} />
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-60" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <span className="eyebrow-chip" style={{ color: "#5CC9FF", background: "rgba(92,201,255,0.08)", borderColor: "rgba(92,201,255,0.25)" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#28D7FF] animate-pulse-dot shadow-[0_0_8px_#28D7FF]" />
          {eyebrow}
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.04] text-white tracking-tight">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-white/60 leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
