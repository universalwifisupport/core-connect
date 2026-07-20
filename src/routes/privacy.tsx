import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Core Connect" },
      { name: "description", content: "How Core Connect collects, uses, and protects your personal information." },
      { property: "og:title", content: "Privacy Policy — Core Connect" },
      { property: "og:description", content: "Your data, how we use it, and your rights as a Core Connect customer." },
    ],
    links: [
      { rel: "canonical", href: "https://core-connect.in/privacy" }
    ]
  }),
  component: Pri,
});

function Pri() {
  return (
    <div>
      <PageHero eyebrow="Legal" title={<>Privacy <span className="text-gradient">Policy</span></>} subtitle="Last updated: January 2026" />
      <section className="py-16 bg-white text-[#0A1226]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-6 text-[#334155] leading-relaxed">
          <p>Core Connect ("we", "our", "us") respects your privacy. This policy explains what information we collect when you use our website and services, how we use it, and the choices available to you.</p>
          <h3 className="text-xl font-semibold text-[#0A1226] pt-4">Information we collect</h3>
          <p>We collect information you provide directly (such as your name, address, ZIP code, email and phone number) when you check availability, request a consultation, or subscribe to our newsletter. We also collect basic analytics data through cookies and similar technologies to improve the experience.</p>
          <h3 className="text-xl font-semibold text-[#0A1226] pt-4">How we use information</h3>
          <p>We use your information to determine service availability at your address, to connect you with appropriate providers, to respond to inquiries, to deliver support, and to improve our platform.</p>
          <h3 className="text-xl font-semibold text-[#0A1226] pt-4">Sharing</h3>
          <p>We share limited information with telecom providers you explicitly ask us to contact on your behalf. We do not sell your personal information to third parties.</p>
          <h3 className="text-xl font-semibold text-[#0A1226] pt-4">Your choices</h3>
          <p>You may request access to, correction of, or deletion of your personal information at any time by contacting privacy@coreconnect.io. You may also opt out of marketing communications via the unsubscribe link.</p>
          <h3 className="text-xl font-semibold text-[#0A1226] pt-4">Security</h3>
          <p>We use industry-standard technical and organizational measures to safeguard the information you entrust to us.</p>
          <h3 className="text-xl font-semibold text-[#0A1226] pt-4">Contact</h3>
          <p>Questions about this policy? Email privacy@coreconnect.io.</p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
