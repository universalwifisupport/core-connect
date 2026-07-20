import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Core Connect" },
      { name: "description", content: "The terms and conditions governing your use of the Core Connect website and services." },
      { property: "og:title", content: "Terms of Service — Core Connect" },
      { property: "og:description", content: "Our terms and conditions for using the Core Connect platform." },
    ],
    links: [
      { rel: "canonical", href: "https://core-connect.in/terms" }
    ]
  }),
  component: Tos,
});

function Tos() {
  return (
    <div>
      <PageHero eyebrow="Legal" title={<>Terms of <span className="text-gradient">Service</span></>} subtitle="Last updated: January 2026" />
      <section className="py-16 bg-white text-[#0A1226]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-6 text-[#334155] leading-relaxed">
          <p>These Terms of Service ("Terms") govern your use of the Core Connect website and services ("Services"). By accessing the Services, you agree to be bound by these Terms.</p>
          <h3 className="text-xl font-semibold text-[#0A1226] pt-4">Use of the service</h3>
          <p>You agree to use the Services only for lawful purposes and in accordance with these Terms. Availability information is provided for informational purposes and is subject to confirmation by the underlying telecom provider.</p>
          <h3 className="text-xl font-semibold text-[#0A1226] pt-4">No provider relationship</h3>
          <p>Core Connect is an independent broker and is not affiliated with, endorsed by, or acting as an agent of any specific telecommunications provider. All contracts for service are ultimately between you and the provider you choose.</p>
          <h3 className="text-xl font-semibold text-[#0A1226] pt-4">Intellectual property</h3>
          <p>All content on this website — other than third-party marks displayed for reference — is the property of Core Connect and protected by applicable intellectual property laws.</p>
          <h3 className="text-xl font-semibold text-[#0A1226] pt-4">Disclaimer of warranties</h3>
          <p>The Services are provided "as is" without warranties of any kind. Core Connect does not warrant uninterrupted availability or the accuracy of provider-supplied data.</p>
          <h3 className="text-xl font-semibold text-[#0A1226] pt-4">Limitation of liability</h3>
          <p>To the fullest extent permitted by law, Core Connect shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Services.</p>
          <h3 className="text-xl font-semibold text-[#0A1226] pt-4">Contact</h3>
          <p>Questions? Email legal@coreconnect.io.</p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
