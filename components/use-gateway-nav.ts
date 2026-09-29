"use client";

import { useCallback, useRef, useState } from "react";

export function useGatewayNav() {
  const [toast, setToast] = useState({ visible: false, title: "", subtitle: "" });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigate = useCallback((url: string, serviceName: string, sameTab = true) => {
    const host = url.replace(/^https?:\/\//, "");
    setToast({
      visible: true,
      title: `Connecting to ${serviceName}…`,
      subtitle: `Routing to ${host}`,
    });

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (sameTab) {
        window.location.assign(url);
      } else {
        window.open(url, "_blank", "noopener,noreferrer");
        setTimeout(() => setToast((t) => ({ ...t, visible: false })), 800);
      }
    }, 550);
  }, []);

  return { toast, navigate };
}
