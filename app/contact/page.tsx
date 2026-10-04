import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { InfoShell } from "@/components/info-shell";

export const metadata: Metadata = {
  title: "Contact · VersaLife Health",
  description: "Reach VersaLife Health about a wellness order, a telemedicine visit, or a general question.",
};

export default function ContactPage() {
  return (
    <InfoShell
      eyebrow="VersaLife Health"
      title="Contact"
      lede="Write, call, or send a note. We reply on shop orders, telemedicine visits, and anything else about VersaLife."
    >
      <div className="info-contact">
        <ul className="info-facts">
          <li>
            <span>Phone</span>
            <a href="tel:+94704244448">+94 70 424 4448</a>
          </li>
          <li>
            <span>Email</span>
            <a href="mailto:versalifehealth.co@gmail.com">versalifehealth.co@gmail.com</a>
          </li>
          <li>
            <span>Hours</span>
            <p>Monday to Friday, 9:00 to 18:00. Saturday, 9:00 to 14:00. Closed Sunday.</p>
          </li>
        </ul>
        <ContactForm />
      </div>
    </InfoShell>
  );
}
