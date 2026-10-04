import Link from "next/link";
import { BrandWordmark } from "@/components/brand-wordmark";

type InfoShellProps = {
  eyebrow: string;
  title: string;
  lede: string;
  children: React.ReactNode;
};

export function InfoShell({ eyebrow, title, lede, children }: InfoShellProps) {
  return (
    <div className="info-page">
      <header className="info-nav">
        <BrandWordmark variant="header" />
        <Link href="/" className="info-back">
          Back home
        </Link>
      </header>
      <main className="info-main">
        <p className="info-eyebrow">{eyebrow}</p>
        <h1 className="info-title">
          {title}
        </h1>
        <p className="info-lede">{lede}</p>
        <div className="info-body">{children}</div>
      </main>
      <footer className="info-foot">
        <Link href="/privacy">Privacy</Link>
        <span aria-hidden>·</span>
        <Link href="/terms">Terms</Link>
        <span aria-hidden>·</span>
        <Link href="/contact">Contact</Link>
      </footer>
    </div>
  );
}
