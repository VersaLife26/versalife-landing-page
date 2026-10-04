"use client";

import type { Service } from "@/lib/services";
import { useEffect, useRef, useState } from "react";

const MOBILE_MQ = "(max-width: 767px)";

const SCENES: {
  id: "shop" | "telemedicine";
  video: string;
  videoMobile: string;
  display: string;
  script: string;
  body: string;
  note: string;
  cta: string;
}[] = [
  {
    id: "shop",
    video: "/video/shop.mp4",
    videoMobile: "/video/shop-mobile.mp4",
    display: "Wellness",
    script: "with care.",
    body: "Genuine formulas, chosen with care and sent across the island.",
    note: "Secure checkout. Packed for the journey. At your door.",
    cta: "Shop wellness",
  },
  {
    id: "telemedicine",
    video: "/video/telemedicine.mp4",
    videoMobile: "/video/telemedicine-mobile.mp4",
    display: "A doctor",
    script: "from home.",
    body: "A licensed visit by video, quiet enough to happen between the rest of your day.",
    note: "Notes and a prescription, kept in one place.",
    cta: "Book a visit",
  },
];

type Props = {
  services: Service[];
  onNavigate: (url: string, name: string) => void;
};

export function CareScroll({ services, onNavigate }: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const mq = window.matchMedia(MOBILE_MQ);
    const sync = () => {
      const useMobile = mq.matches;
      root.querySelectorAll<HTMLVideoElement>(".care-video--desktop").forEach((video) => {
        if (useMobile) video.pause();
        else void video.play().catch(() => {});
      });
      root.querySelectorAll<HTMLVideoElement>(".care-video--mobile").forEach((video) => {
        if (useMobile) void video.play().catch(() => {});
        else video.pause();
      });
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;

    const update = () => {
      const rect = root.getBoundingClientRect();
      const span = root.offsetHeight - window.innerHeight;
      if (span <= 0) {
        setProgress(0);
        return;
      }
      setProgress(Math.min(1, Math.max(0, -rect.top / span)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [reduced]);

  const shopOpacity = progress < 0.42 ? 1 : progress > 0.58 ? 0 : 1 - (progress - 0.42) / 0.16;
  const teleOpacity = 1 - shopOpacity;
  const active = progress < 0.5 ? 0 : 1;

  return (
    <section
      ref={rootRef}
      className={`care-scroll${reduced ? " is-reduced" : ""}`}
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="care-pin">
        <h2 id="services-heading" className="sr-only">
          VersaLife Shop and VersaLife Telemedicine
        </h2>

        {SCENES.map((scene, index) => {
          const service = services.find((item) => item.id === scene.id);
          if (!service) return null;
          const opacity = index === 0 ? shopOpacity : teleOpacity;

          return (
            <article
              key={scene.id}
              className={`care-scene care-scene--${scene.id}`}
              style={
                reduced
                  ? undefined
                  : { opacity, visibility: opacity < 0.02 ? "hidden" : "visible" }
              }
              aria-hidden={!reduced && opacity < 0.4}
            >
              <video className="care-video care-video--desktop" autoPlay muted loop playsInline preload="metadata">
                <source src={scene.video} type="video/mp4" />
              </video>
              <video className="care-video care-video--mobile" autoPlay muted loop playsInline preload="metadata">
                <source src={scene.videoMobile} type="video/mp4" />
              </video>
              <div className="care-veil" />
              <div className="care-copy">
                <h3>
                  <span className="care-display">{scene.display}</span>
                  <span className="care-script">{scene.script}</span>
                </h3>
                <p className="care-body">{scene.body}</p>
                <p className="care-note">{scene.note}</p>
                <button type="button" className="care-glass" onClick={() => onNavigate(service.url, service.name)}>
                  {scene.cta}
                </button>
              </div>
            </article>
          );
        })}

        <div className="care-rail" aria-hidden>
          <span style={{ transform: `scaleY(${0.08 + progress * 0.92})` }} />
          <i className={active === 0 ? "is-on" : ""} style={{ top: "0%" }} />
          <i className={active === 1 ? "is-on" : ""} style={{ top: "100%" }} />
        </div>
        <p className="care-hint" style={{ opacity: progress < 0.08 ? 1 : 0 }}>
          Scroll
        </p>
      </div>
    </section>
  );
}
