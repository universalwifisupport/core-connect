import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Core Connect" },
      { name: "description", content: "Important disclosures about Core Connect's role as an independent telecom broker and the use of third-party trademarks." },
      { property: "og:title", content: "Disclaimer — Core Connect" },
      { property: "og:description", content: "Core Connect's legal disclaimers on services, trademarks, and pricing." },
    ],
    links: [
      { rel: "canonical", href: "https://core-connect.in/disclaimer" }
    ]
  }),
  component: Dis,
});

function Dis() {
  return (
    <div>
      <PageHero eyebrow="Legal" title={<><span className="text-gradient">Disclaimer</span></>} subtitle="Please read the following important information carefully." />
      <section className="py-16 bg-white text-[#0A1226]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-6 text-[#334155] leading-relaxed">
          <h3 className="text-xl font-semibold text-[#0A1226]">Our role</h3>
          <p>
            Core Connect is an independent telecommunications broker. We help customers discover and
            compare telecom services offered by third-party providers. We are not a telecommunications
            carrier and do not operate the underlying networks, provide direct telecommunications
            services, or own any of the network infrastructure used to deliver those services.
          </p>
          <h3 className="text-xl font-semibold text-[#0A1226] pt-4">Third-party trademarks</h3>
          <p>
            All provider names, brand names, trademarks, service marks, and logos referenced on this
            website are the property of their respective owners. Their use on Core Connect is strictly for
            identification purposes and does not imply any affiliation, sponsorship, endorsement, or
            partnership beyond what is explicitly disclosed.
          </p>
          <h3 className="text-xl font-semibold text-[#0A1226] pt-4">Availability & pricing</h3>
          <p>
            Service availability, technology tiers, and pricing information are provided for reference and
            are subject to change without notice. Final availability and pricing are governed by the
            underlying provider's terms and conditions and are confirmed at the time of activation.
          </p>
          <h3 className="text-xl font-semibold text-[#0A1226] pt-4">No warranty</h3>
          <p>
            While we strive for accuracy, Core Connect makes no representations or warranties regarding
            the completeness, accuracy, or timeliness of the information presented on this website.
          </p>
          <h3 className="text-xl font-semibold text-[#0A1226] pt-4">Contact</h3>
          <p>Questions about this disclaimer may be sent to legal@coreconnect.io.</p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
