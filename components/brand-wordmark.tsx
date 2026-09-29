import Image from "next/image";

export function BrandWordmark({ className = "" }: { className?: string }) {
  return (
    <div className={`brand-wordmark ${className}`.trim()}>
      <Image src="/logo.svg" alt="" width={93} height={98} className="brand-wordmark-logo" priority />
      <span className="brand-wordmark-text">
        <span className="is-navy">Versa</span>
        <span className="is-mint">Life</span>{" "}
        <span className="brand-wordmark-health">Health</span>
      </span>
    </div>
  );
}
