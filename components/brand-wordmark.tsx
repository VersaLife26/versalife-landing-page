type BrandWordmarkProps = {
  className?: string;
  variant?: "header" | "footer";
};

export function BrandWordmark({ className = "", variant = "header" }: BrandWordmarkProps) {
  return (
    <a href="/" className={`brand-wordmark brand-wordmark--${variant} ${className}`.trim()} aria-label="VersaLife Health">
      {/* Transparent lockup. A plain img keeps the wide aspect ratio. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/versalife-health-logo.png" alt="" className="brand-wordmark-logo" />
    </a>
  );
}
