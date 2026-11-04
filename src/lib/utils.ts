import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

/** Prefix site-relative URLs for GitHub Pages project sites. */
export function withBase(path: string) {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  const url = new URL(path, "https://internal.invalid");
  if (!url.pathname.endsWith("/") && !/\.[^/]+$/.test(url.pathname)) {
    url.pathname += "/";
  }
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}${url.pathname}${url.search}${url.hash}`;
}
