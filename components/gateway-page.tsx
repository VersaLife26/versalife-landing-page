"use client";

import { BrandWordmark } from "@/components/brand-wordmark";
import { MaterialIcon } from "@/components/material-icon";
import { CareScroll } from "@/components/care-scroll";
import { TestimonialMarquee } from "@/components/testimonial-marquee";
import { useGatewayNav } from "@/components/use-gateway-nav";
import { HeroVideo } from "@/components/hero-video";
import { SERVICES } from "@/lib/services";
import { useEffect, useState } from "react";

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

export function GatewayPage() {
  const { navigate } = useGatewayNav();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

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

  const shop = SERVICES.find((s) => s.id === "shop");
  const telemed = SERVICES.find((s) => s.id === "telemedicine");

  return (
    <>
      <div className="hero-shell">
        <HeroVideo />

        <header className="hero-nav">
          <BrandWordmark variant="header" />
          <nav className="hero-nav-pill" aria-label="Primary">
            <a href="#" aria-current="page">
              Home
            </a>
            <a href="#services">Wellness</a>
            <a href="#services">Telemedicine</a>
            <a href="#about">About</a>
            <a href="/contact">Contact</a>
          </nav>
          <a href="#services" className="hero-nav-cta">
            Explore care
            <MaterialIcon name="arrow_forward" />
          </a>
          <button
            type="button"
            className={`hero-menu${menuOpen ? " is-open" : ""}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </header>
        <div className={`hero-drawer${menuOpen ? " is-open" : ""}`} hidden={!menuOpen}>
          <button type="button" className="hero-drawer-backdrop" aria-label="Close menu" onClick={() => setMenuOpen(false)} />
          <div id="mobile-nav" className="hero-drawer-panel" role="dialog" aria-modal="true" aria-label="Menu">
            <div className="hero-drawer-head">
              <BrandWordmark variant="header" />
              <button type="button" className="hero-drawer-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                ×
              </button>
            </div>
            <nav className="hero-drawer-nav">
              <a href="#" onClick={() => setMenuOpen(false)}>
                Home
              </a>
              <a href="#services" onClick={() => setMenuOpen(false)}>
                Wellness
              </a>
              <a href="#services" onClick={() => setMenuOpen(false)}>
                Telemedicine
              </a>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </nav>
            <div className="hero-drawer-actions">
              {shop ? (
                <button type="button" className="hero-drawer-primary" onClick={() => { setMenuOpen(false); navigate(shop.url, shop.name); }}>
                  Shop wellness
                  <MaterialIcon name="arrow_forward" />
                </button>
              ) : null}
              {telemed ? (
                <button type="button" className="hero-drawer-secondary" onClick={() => { setMenuOpen(false); navigate(telemed.url, telemed.name); }}>
                  Book a visit
                </button>
              ) : null}
            </div>
          </div>
        </div>

        <section className="hero-stage" aria-label="Introduction">
          <p className="hero-badge">
            <span>Care</span>
            Wellness and telemedicine, together
          </p>
          <h1 className="hero-title">
            Care, without
            <span>the waiting room.</span>
          </h1>
          <p className="hero-lead">
            Shop genuine wellness products, or see a licensed doctor by video. Both live under one VersaLife Health
            brand.
          </p>
          <div className="hero-actions">
            {shop ? (
              <button type="button" className="hero-btn hero-btn--line" onClick={() => navigate(shop.url, shop.name)}>
                Shop wellness
                <MaterialIcon name="arrow_forward" />
              </button>
            ) : null}
            {telemed ? (
              <button type="button" className="hero-btn hero-btn--quiet" onClick={() => navigate(telemed.url, telemed.name)}>
                Book a visit
                <MaterialIcon name="play_arrow" />
              </button>
            ) : null}
          </div>
        </section>
      </div>

      <section className="care-bridge" aria-label="What people say about VersaLife">
        <TestimonialMarquee />
      </section>

      <main className="gateway-main gateway-main--below-hero">
        <CareScroll services={SERVICES} onNavigate={navigate} />

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
      </main>

      <footer className="site-footer">
        <div className="site-footer-media" aria-hidden>
          <video className="site-footer-video site-footer-video--desktop" autoPlay muted loop playsInline preload="metadata">
            <source src="/video/footer-desktop.mp4" type="video/mp4" />
          </video>
          <video className="site-footer-video site-footer-video--mobile" autoPlay muted loop playsInline preload="metadata">
            <source src="/video/footer-mobile.mp4" type="video/mp4" />
          </video>
          <div className="site-footer-scrim" />
        </div>
        <div className="site-footer-inner">
          <div className="site-footer-logo">
            <BrandWordmark variant="footer" />
          </div>
          <p className="site-footer-blurb">
            Care, without
            <span>the waiting room.</span>
          </p>
          <nav className="site-footer-links" aria-label="Footer" id="about">
            {SERVICES.map((s) => (
              <a key={s.id} href={s.url} onClick={(e) => { e.preventDefault(); navigate(s.url, s.name); }}>
                {s.id === "shop" ? "Shop" : "Telemedicine"}
              </a>
            ))}
            <a href="#services">Services</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
        <div className="site-footer-bottom">
          <span>© {new Date().getFullYear()} VersaLife Health</span>
          <span aria-hidden>·</span>
          <a href="/privacy">Privacy</a>
          <span aria-hidden>·</span>
          <a href="/terms">Terms</a>
        </div>
      </footer>
    </>
  );
}
