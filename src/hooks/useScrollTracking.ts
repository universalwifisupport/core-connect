import { useEffect } from "react";
import { trackEvent } from "../lib/analytics";

export function useScrollTracking() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const milestones = [25, 50, 75, 100];
    const tracked = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const percentage = Math.round((scrollTop / scrollHeight) * 100);

      for (const milestone of milestones) {
        if (percentage >= milestone && !tracked.has(milestone)) {
          tracked.add(milestone);
          trackEvent("scroll_depth", "Engagement", `Scroll Depth ${milestone}%`, milestone);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
