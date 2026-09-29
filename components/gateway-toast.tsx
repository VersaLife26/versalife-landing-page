"use client";

import { MaterialIcon } from "@/components/material-icon";

type Props = {
  visible: boolean;
  title: string;
  subtitle: string;
};

export function GatewayToast({ visible, title, subtitle }: Props) {
  return (
    <div
      className={`gateway-toast ${visible ? "is-visible" : ""}`}
      role="status"
      aria-live="polite"
      aria-hidden={!visible}
    >
      <div className="gateway-toast-icon">
        <MaterialIcon name="lock_open" />
      </div>
      <div className="gateway-toast-copy">
        <span className="gateway-toast-title">{title}</span>
        <span className="gateway-toast-sub">{subtitle}</span>
      </div>
      <div className="gateway-toast-spinner" aria-hidden />
    </div>
  );
}
