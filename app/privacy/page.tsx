import type { Metadata } from "next";
import Link from "next/link";
import { InfoShell } from "@/components/info-shell";

export const metadata: Metadata = {
  title: "Privacy · VersaLife Health",
  description: "How VersaLife Health collects, uses, and protects information across the wellness shop and telemedicine.",
};

export default function PrivacyPage() {
  return (
    <InfoShell
      eyebrow="VersaLife Health"
      title="Privacy"
      lede="How we look after the details you share when you shop wellness products or see a doctor through VersaLife."
    >
      <p>Last updated 4 October 2026.</p>
      <p>
        VersaLife Health runs this site and the services it opens: the wellness shop and telemedicine visits. This
        notice covers both. It does not replace a doctor’s own duty of confidentiality.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>Name, email, phone, and delivery details you give us when you order or create an account.</li>
        <li>Appointment details, symptoms you describe, and clinical notes created during a telemedicine visit.</li>
        <li>Payment references from our payment provider. Card numbers are handled by that provider, not stored on this site.</li>
        <li>Basic technical data such as browser type, device, and pages visited, so the site can load and stay secure.</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To take orders, arrange delivery, and book or run a consultation.</li>
        <li>To send confirmations, receipts, and replies when you write to us.</li>
        <li>To keep accounts secure and to investigate misuse.</li>
        <li>To meet record-keeping duties that apply to health and commerce in Sri Lanka.</li>
      </ul>

      <h2>Who else sees it</h2>
      <p>
        We share what is needed to provide the service: the doctor you consult, the courier delivering an order, and
        the payment provider processing a charge. We do not sell personal or health information.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Order and account records are kept for as long as the law and our accounting duties require. Clinical records
        from a visit are kept for the period required for medical records, then deleted or de-identified.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask what we hold, ask us to correct it, or ask us to delete information we are not required to keep.
        Write to us from the <Link href="/contact">contact page</Link>.
      </p>
    </InfoShell>
  );
}
