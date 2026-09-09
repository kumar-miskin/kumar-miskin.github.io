"use client";

import { useEffect, useRef, useState } from "react";

const SCHOLAR_URL = "https://scholar.google.com/citations?user=AWJb6VwAAAAJ&hl=en";
const PROXIES = [
  (u: string) => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
  (u: string) => `https://corsproxy.io/?url=${encodeURIComponent(u)}`,
];

function parseCitations(html: string): string | null {
  const match = html.match(/<td class="gsc_rsb_std">(\d+)<\/td>/);
  return match ? match[1] : null;
}

export default function LiveCitations({
  fallback,
}: {
  fallback: string;
}) {
  const [count, setCount] = useState(fallback);
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;

    let active = true;

    async function tryProxy(proxy: (u: string) => string): Promise<string | null> {
      try {
        const res = await fetch(proxy(SCHOLAR_URL));
        if (!res.ok) return null;
        return parseCitations(await res.text());
      } catch {
        return null;
      }
    }

    (async () => {
      for (const proxy of PROXIES) {
        if (!active) return;
        const count = await tryProxy(proxy);
        if (count) {
          if (active) setCount(count);
          return;
        }
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  return <>{count}</>;
}