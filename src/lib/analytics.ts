// Utility for GA4 and GTM event tracking
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window !== "undefined") {
    const win = window as any;
    
    // Track via GA4 gtag
    if (win.gtag) {
      win.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }

    // Push to GTM dataLayer
    if (win.dataLayer) {
      win.dataLayer.push({
        event: action,
        eventCategory: category,
        eventLabel: label,
        eventValue: value,
      });
    }
  }
}
