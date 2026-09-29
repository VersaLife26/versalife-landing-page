"use client";

import { MaterialIcon } from "@/components/material-icon";
import type { Service } from "@/lib/services";

type Props = {
  service: Service;
  onNavigate: (url: string, name: string) => void;
  index: number;
};

function CardVisual({ service }: { service: Service }) {
  if (service.id === "shop") {
    return (
      <>
        <div className="card-visual-row">
          <span className="card-chip card-chip-mint">
            <MaterialIcon name="verified" className="card-chip-icon" />
            Verified Genuine
          </span>
          <span className="card-chip card-chip-mono">COLD-CHAIN</span>
        </div>
        <div className="card-visual-foot">
          <span>
            <span className="card-dot" /> 100% Guaranteed
          </span>
          <span className="card-visual-accent">1,400+ Formulations</span>
        </div>
      </>
    );
  }

  if (service.id === "telemedicine") {
    return (
      <>
        <div className="card-visual-row">
          <span className="card-chip card-chip-mint">
            <span className="live-dot" aria-hidden />
            Available Now
          </span>
          <span className="card-chip card-chip-mono">12 MINS AVG WAIT</span>
        </div>
        <div className="card-visual-foot">
          <span>
            <MaterialIcon name="lock" className="card-lock-icon" />
            Encrypted HD Room
          </span>
          <span className="card-visual-accent">Digital Rx Instant</span>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="card-visual-row">
        <span className="card-chip card-chip-navy">
          <MaterialIcon name="domain" className="card-chip-icon" />
          42+ Partner Hospitals
        </span>
        <span className="card-chip card-chip-mono">LIVE SYNC</span>
      </div>
      <div className="card-queue-ticket">
        <div className="card-queue-num">
          <span className="card-queue-label">Queue</span>
          <span className="card-queue-value">#07</span>
        </div>
        <div className="card-queue-divider" aria-hidden />
        <div className="card-queue-meta">
          <span className="card-queue-doctor">Dr. A. Fernando</span>
          <span className="card-queue-place">Cardiologist · Asiri Central</span>
        </div>
      </div>
      <div className="card-visual-foot">
        <span>
          <span className="card-dot" /> Confirmed
        </span>
        <span className="card-visual-accent">SMS Alert Enabled</span>
      </div>
    </>
  );
}

export function ServiceCard({ service, onNavigate, index }: Props) {
  const accentClass =
    service.accent === "mint" ? "accent-mint" : service.accent === "navy" ? "accent-navy" : "accent-slate";

  const handleActivate = () => onNavigate(service.url, service.name);

  return (
    <article
      className={`service-card ${accentClass} reveal-on-scroll`}
      style={{ ["--reveal-delay" as string]: `${120 + index * 80}ms` }}
      aria-label={`Navigate to ${service.name}`}
      tabIndex={0}
      role="link"
      onClick={handleActivate}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleActivate();
        }
      }}
    >
      <div className="service-card-glow" aria-hidden />
      <div className="service-card-body">
        <div className="service-card-head">
          <div className="service-card-icon">
            <MaterialIcon name={service.icon} />
          </div>
          <span className="service-card-badge">{service.badge}</span>
        </div>
        <h2 className="service-card-title">{service.name}</h2>
        <p className="service-card-tagline">{service.tagline}</p>

        <div className="card-visual">
          <img src={service.image} alt={service.imageAlt} className="card-visual-img" />
          <div className="card-visual-shade" aria-hidden />
          <div className="card-visual-content">
            <CardVisual service={service} />
          </div>
        </div>

        <ul className="service-card-list">
          {service.bullets.map((item) => (
            <li key={item}>
              <span className="service-card-check">
                <MaterialIcon name="check" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="service-card-foot">
        <span className="service-card-cta">
          Go to {service.name} <MaterialIcon name="arrow_forward" />
        </span>
        <span className="service-card-host">{service.host}</span>
      </div>
    </article>
  );
}
