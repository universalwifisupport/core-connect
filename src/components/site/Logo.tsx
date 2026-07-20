import { Link } from "@tanstack/react-router";

export function Logo({ light = true }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <span className="relative flex h-9 w-9 items-center justify-center">
        {/* Outer glowing ring arc */}
        <span className="absolute inset-0 rounded-full border-[3px] border-[#28D7FF] opacity-90 border-r-transparent group-hover:rotate-90 transition-transform duration-700 ease-out" />
        {/* Inner glowing ring arc */}
        <span className="absolute inset-[3px] rounded-full border-[3px] border-[#2F80FF] opacity-95 border-l-transparent group-hover:-rotate-90 transition-transform duration-700 ease-out" />
        {/* Center glowing node */}
        <span className="absolute h-1.5 w-1.5 rounded-full bg-[#28D7FF] shadow-[0_0_8px_#28D7FF] animate-pulse" />
      </span>
      <span className={`text-xl font-bold tracking-tight ${light ? "text-white" : "text-[#0A1226]"}`}>
        Core Connect
      </span>
    </Link>
  );
}
