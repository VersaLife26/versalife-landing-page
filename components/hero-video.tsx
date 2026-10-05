"use client";

import { useEffect, useRef } from "react";

const DESKTOP_SRC = "/video/hero-desktop.mp4";
const MOBILE_SRC = "/video/hero-mobile.mp4";
const MOBILE_MQ = "(max-width: 767px)";

export function HeroVideo() {
  const desktopRef = useRef<HTMLVideoElement>(null);
  const mobileRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const desktop = desktopRef.current;
    const mobile = mobileRef.current;
    if (!desktop || !mobile) return;

    const mq = window.matchMedia(MOBILE_MQ);

    const sync = () => {
      const useMobile = mq.matches;
      const active = useMobile ? mobile : desktop;
      const idle = useMobile ? desktop : mobile;
      idle.pause();
      void active.play().catch(() => {});
    };

    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <div className="hero-video-wrap" aria-hidden>
      <video
        ref={desktopRef}
        className="hero-video hero-video--desktop"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={DESKTOP_SRC} type="video/mp4" />
      </video>
      <video
        ref={mobileRef}
        className="hero-video hero-video--mobile"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={MOBILE_SRC} type="video/mp4" />
      </video>
      <div className="hero-video-scrim" />
    </div>
  );
}
