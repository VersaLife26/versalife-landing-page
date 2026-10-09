import type { Metadata } from "next";

/** Shared indexability + canonical defaults for the marketing site. */
export function sitePageMetadata(path: string, partial: Metadata): Metadata {
  return {
    ...partial,
    alternates: { canonical: path },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    openGraph: {
      ...partial.openGraph,
      url: path === "/" ? "https://versalifehealth.com/" : `https://versalifehealth.com${path}`,
    },
  };
}
