"use client";

import { useCallback, useRef } from "react";

const MAX_TILT = 10;

export function useCardTilt() {
  const ref = useRef<HTMLElement>(null);

  const onMove = useCallback((event: React.PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el || event.pointerType === "touch") return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--tilt-x", `${(-y * MAX_TILT).toFixed(2)}deg`);
    el.style.setProperty("--tilt-y", `${(x * MAX_TILT).toFixed(2)}deg`);
    el.style.setProperty("--lift", "8px");
  }, []);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
    el.style.setProperty("--lift", "0px");
  }, []);

  return { ref, onMove, onLeave };
}
