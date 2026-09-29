"use client";

import { BrandWordmark } from "@/components/brand-wordmark";
import { GatewayToast } from "@/components/gateway-toast";
import { MaterialIcon } from "@/components/material-icon";
import { ServiceCard } from "@/components/service-card";
import { useGatewayNav } from "@/components/use-gateway-nav";
import { AMBIENT_IMAGE, SERVICES } from "@/lib/services";
import { useEffect } from "react";

const TRUST = [
  {
    icon: "medical_services",
    title: "Licensed Medical Care",
    body: "Verified SLMC-registered doctors and accredited facilities.",
    tone: "mint" as const,
  },
  {
    icon: "enhanced_encryption",
    title: "Bank-Grade Encryption",
    body: "256-bit secure checkout & certified digital health privacy.",
    tone: "navy" as const,
  },
  {
    icon: "support_agent",
    title: "Dedicated Concierge",
    body: "Round-the-clock patient navigation by phone and live chat.",
    tone: "neutral" as const,
  },
  {
    icon: "local_shipping",
    title: "Express Islandwide Transit",
    body: "Temperature-controlled prescription & wellness delivery.",
    tone: "mint" as const,
  },
];

const CITIES = ["Colombo", "Kandy", "Galle", "Jaffna", "Negombo"];

export function GatewayPage() {
  const { toast, navigate } = useGatewayNav();

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal-on-scroll");
    if (!nodes.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      nodes.forEach((n) => n.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="ambient-backdrop" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={AMBIENT_IMAGE} alt="" className="ambient-backdrop-img" />
        <div className="ambient-backdrop-veil" />
      </div>
      <div className="ambient-glow ambient-glow-mint" aria-hidden />
      <div className="ambient-glow ambient-glow-navy" aria-hidden />

      <GatewayToast visible={toast.visible} title={toast.title} subtitle={toast.subtitle} />

      <header className="site-header">
        <div className="site-header-inner">
          <BrandWordmark />
          <nav className="site-nav" aria-label="Primary">
            <a href="#" className="site-nav-link is-active" aria-current="page">
              Hub
            </a>
            <a href="#about" className="site-nav-link">
              About
            </a>
            <a href="#contact" className="site-nav-link">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="gateway-main">
        <section className="gateway-hero reveal-on-load">
          <div className="gateway-eyebrow">
            <span className="live-dot live-dot-sm" aria-hidden />
            <span>VersaLife Health · Sri Lanka&apos;s Unified Care Gateway</span>
          </div>
          <h1 className="gateway-headline">
            One platform. <em>Three ways to care.</em>
          </h1>
          <p className="gateway-lead">
            Shop wellness products, book telemedicine visits, or schedule hospital appointments — all under one
            trusted clinical brand.
          </p>
          <p className="gateway-cue">
            Select a destination below
            <MaterialIcon name="arrow_downward" />
          </p>
        </section>

        <section className="gateway-services" aria-labelledby="services-heading">
          <h2 id="services-heading" className="sr-only">
            Choose a VersaLife service
          </h2>
          <div className="gateway-services-grid">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} onNavigate={navigate} />
            ))}
          </div>
        </section>

        <section className="trust-strip" aria-label="Trust and safety">
          <div className="trust-strip-inner">
            {TRUST.map((item) => (
              <div key={item.title} className={`trust-item tone-${item.tone}`}>
                <div className="trust-icon">
                  <MaterialIcon name={item.icon} />
                </div>
                <div>
                  <span className="trust-title">{item.title}</span>
                  <p className="trust-body">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="partnership-strip">
          <div className="partnership-strip-inner">
            <p className="partnership-label">
              <MaterialIcon name="verified_user" />
              Synchronized with leading healthcare networks across Sri Lanka
            </p>
            <p className="partnership-cities">
              {CITIES.map((city, i) => (
                <span key={city}>
                  {i > 0 && <span className="partnership-dot">·</span>}
                  {city}
                </span>
              ))}
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="site-footer-inner">
          <div className="site-footer-col">
            <BrandWordmark />
            <p className="site-footer-blurb">
              Unified personal wellness, diagnostic precision, and integrated clinical ecosystems designed for calm
              and health longevity.
            </p>
          </div>
          <div className="site-footer-col">
            <span className="site-footer-label">Ecosystem Services</span>
            <ul className="site-footer-links">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <span className="footer-dot" aria-hidden />
                  <a href={s.url} onClick={(e) => { e.preventDefault(); navigate(s.url, s.name); }}>
                    {s.name} <span className="footer-host">({s.host})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="site-footer-col" id="about">
            <span className="site-footer-label">Information &amp; Care</span>
            <div className="site-footer-links">
              <a href="#about">About VersaLife</a>
              <a href="#contact">Clinical Concierge &amp; Contact</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="site-footer-bottom">
          <span>© {new Date().getFullYear()} VersaLife Health Inc. All rights reserved.</span>
          <div className="site-footer-legal">
            <a href="#">Privacy</a>
            <span>·</span>
            <a href="#">Terms</a>
            <span>·</span>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
