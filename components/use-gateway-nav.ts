"use client";

import { useCallback } from "react";

export function useGatewayNav() {
  const navigate = useCallback((url: string, _serviceName?: string, sameTab = true) => {
    if (sameTab) {
      window.location.assign(url);
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  return { navigate };
}
