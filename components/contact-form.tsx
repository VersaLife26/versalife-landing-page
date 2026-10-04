"use client";

import { FormEvent, useState } from "react";

const INBOX = "versalifehealth.co@gmail.com";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const topic = String(data.get("topic") ?? "General").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const href = `mailto:${INBOX}?subject=${encodeURIComponent(`VersaLife · ${topic}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <form className="info-form" onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" type="text" autoComplete="name" required placeholder="Your name" />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required placeholder="you@email.com" />
      </label>
      <label>
        Topic
        <select name="topic" defaultValue="General">
          <option>General</option>
          <option>Wellness shop</option>
          <option>Telemedicine</option>
          <option>Privacy</option>
        </select>
      </label>
      <label>
        Message
        <textarea name="message" required rows={5} placeholder="How can we help?" />
      </label>
      <button type="submit" className="info-submit">
        Send message
      </button>
      {sent ? <p className="info-form-note">Your email app should open with this message ready to send.</p> : null}
    </form>
  );
}
