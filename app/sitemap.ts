import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://kumar-miskin.github.io";

// keep in sync with the routes under app/ when adding posts or pages
const ROUTES = [
  "",
  "/writing",
  "/writing/bitcoin-etf-flows",
  "/writing/macro-receipts-issue-1",
  "/writing/macro-receipts-issue-2",
  "/writing/macro-receipts-issue-3",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route === "/writing" ? 0.8 : 0.6,
  }));
}
