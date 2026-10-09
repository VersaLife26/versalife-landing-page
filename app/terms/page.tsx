import type { Metadata } from "next";
import Link from "next/link";
import { InfoShell } from "@/components/info-shell";
import { sitePageMetadata } from "@/lib/seo";

export const metadata: Metadata = sitePageMetadata("/terms", {
  title: "Terms · VersaLife Health",
  description: "The terms for using VersaLife Health, the wellness shop, and telemedicine visits.",
});

export default function TermsPage() {
  return (
    <InfoShell
      eyebrow="VersaLife Health"
      title="Terms"
      lede="The rules for using this site, shopping wellness products, and booking a telemedicine visit."
    >
      <p>Last updated 4 October 2026.</p>
      <p>
        By using versalifehealth.com, the wellness shop, or VersaLife telemedicine, you agree to these terms. If you
        do not agree, please do not use the services.
      </p>

      <h2>The services</h2>
      <p>
        This site is the front door to two services. The shop sells wellness products and arranges delivery. Telemedicine
        lets you book a video visit with a doctor who is registered to practise. VersaLife provides the platform. The
        consulting doctor is responsible for the clinical care.
      </p>

      <h2>Accounts and orders</h2>
      <ul>
        <li>Give accurate contact and delivery details, and keep your sign-in private.</li>
        <li>Product prices, availability, and delivery times are confirmed at checkout on the shop.</li>
        <li>A consultation fee is shown before you pay. A visit starts only after payment succeeds, unless the doctor’s listing says otherwise.</li>
      </ul>

      <h2>Care</h2>
      <p>
        Telemedicine is not for emergencies. If you need urgent help, contact local emergency services. A doctor may
        decline a visit that cannot be handled safely by video and may ask you to be seen in person.
      </p>

      <h2>Acceptable use</h2>
      <p>
        Do not misuse the site, attempt to access another person’s account, or upload anything unlawful. We may suspend
        access that breaks these terms or puts patients or staff at risk.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms as the services change. The date at the top of this page shows the latest version.
        Continued use after an update means you accept the revised terms.
      </p>

      <p>
        Questions about an order, a visit, or these terms can go through the <Link href="/contact">contact page</Link>.
      </p>
    </InfoShell>
  );
}
