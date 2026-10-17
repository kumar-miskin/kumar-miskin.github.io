"use client";

import { useEffect, useState } from "react";

const USER = "kumar-miskin";
const API = "https://api.github.com";

// upstream PRs to track live; identifiers are stable, titles load from the API
const UPSTREAM_PRS = [
  { repo: "mir-group/nequip", number: 614 },
  { repo: "mir-group/nequip", number: 616 },
  { repo: "ACEsuit/mace", number: 1753 },
  { repo: "pyro-ppl/pyro", number: 3496 },
  { repo: "petertodd/python-bitcoinlib", number: 329 },
  { repo: "metatensor/featomic", number: 447 },
];

// curated list of public repos shown on this page: shipped tools and
// already-published analysis only. Research code tied to unpublished work
// is deliberately excluded even when its repo is public.
const FEATURED_REPOS = [
  "materials-ml-tools",
  "onchain-research-notebooks",
  "bitcoin-macro-lab",
  "btc-macro-analysis",
  "kumar-miskin.github.io",
];

type GhEvent = {
  type: string;
  created_at: string;
  repo: { name: string };
  payload: { action?: string };
};

type GhRepo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
};

type PrState = {
  repo: string;
  number: number;
  title?: string;
  url: string;
  status: "open" | "merged" | "closed" | "loading" | "error";
};

const EVENT_LABEL: Record<string, string> = {
  PushEvent: "pushed commits",
  PullRequestEvent: "pull request",
  PullRequestReviewEvent: "reviewed a PR",
  IssuesEvent: "issue",
  IssueCommentEvent: "commented",
  CreateEvent: "created",
  ForkEvent: "forked",
};

function dayKey(iso: string) {
  return iso.slice(0, 10);
}

export default function BuildingLive() {
  const [events, setEvents] = useState<GhEvent[] | null>(null);
  const [repos, setRepos] = useState<GhRepo[] | null>(null);
  const [prs, setPrs] = useState<PrState[]>(
    UPSTREAM_PRS.map((p) => ({
      repo: p.repo,
      number: p.number,
      url: `https://github.com/${p.repo}/pull/${p.number}`,
      status: "loading",
    }))
  );
  const [limited, setLimited] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [evRes, ...repoRes] = await Promise.all([
          fetch(`${API}/users/${USER}/events/public?per_page=100`),
          ...FEATURED_REPOS.map((name) => fetch(`${API}/repos/${USER}/${name}`)),
        ]);
        if (evRes.status === 403 || repoRes.some((r) => r.status === 403)) {
          if (!cancelled) setLimited(true);
          return;
        }
        if (!evRes.ok || repoRes.some((r) => !r.ok))
          throw new Error("github api error");
        const ev = (await evRes.json()) as GhEvent[];
        const rp = (await Promise.all(
          repoRes.map((r) => r.json())
        )) as GhRepo[];
        if (cancelled) return;
        setEvents(ev);
        setRepos(rp);
      } catch {
        if (!cancelled) setLimited(true);
      }
    }

    async function loadPrs() {
      await Promise.allSettled(
        UPSTREAM_PRS.map(async (p, i) => {
          try {
            const res = await fetch(`${API}/repos/${p.repo}/pulls/${p.number}`);
            if (!res.ok) throw new Error("pr fetch failed");
            const data = await res.json();
            const status = data.merged_at
              ? "merged"
              : data.state === "open"
                ? "open"
                : "closed";
            if (cancelled) return;
            setPrs((prev) =>
              prev.map((row, j) =>
                j === i ? { ...row, title: data.title, status } : row
              )
            );
          } catch {
            if (cancelled) return;
            setPrs((prev) =>
              prev.map((row, j) => (j === i ? { ...row, status: "error" } : row))
            );
          }
        })
      );
    }

    load();
    loadPrs();
    return () => {
      cancelled = true;
    };
  }, []);

  const days: { day: string; count: number }[] = [];
  if (events) {
    const counts = new Map<string, number>();
    for (const e of events) {
      counts.set(dayKey(e.created_at), (counts.get(dayKey(e.created_at)) ?? 0) + 1);
    }
    for (let i = 29; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10);
      days.push({ day: d, count: counts.get(d) ?? 0 });
    }
  }
  const maxCount = Math.max(1, ...days.map((d) => d.count));

  return (
    <div className="building">
      {limited && (
        <p className="building__note">
          GitHub&apos;s public rate limit kicked in for your IP. Everything here
          is also visible directly on{" "}
          <a href={`https://github.com/${USER}`}>github.com/{USER}</a>.
        </p>
      )}

      <section>
        <h2 className="building__heading">Last 30 days</h2>
        {events ? (
          <>
            <div
              className="building__bars"
              role="img"
              aria-label="Daily public GitHub activity over the last 30 days"
            >
              {days.map((d) => (
                <div
                  key={d.day}
                  className="building__bar"
                  style={{
                    height: `${Math.max(6, (d.count / maxCount) * 100)}%`,
                  }}
                  title={`${d.day}: ${d.count} public event${d.count === 1 ? "" : "s"}`}
                />
              ))}
            </div>
            <p className="building__note">
              Public events per day, UTC. Taller bar, busier day.
            </p>
          </>
        ) : (
          <p className="building__note">Loading activity...</p>
        )}
      </section>

      <section>
        <h2 className="building__heading">Upstream contributions</h2>
        <ul className="building__list">
          {prs.map((p) => (
            <li key={`${p.repo}#${p.number}`} className="building__row">
              <span
                className={`badge building__status building__status--${p.status}`}
              >
                {p.status}
              </span>
              <div className="building__rowbody">
                <a href={p.url}>
                  {p.repo}#{p.number}
                </a>
                {p.title && <span className="building__title">{p.title}</span>}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="building__heading">Recently active repos</h2>
        {repos ? (
          <ul className="building__list">
            {repos.map((r) => (
              <li key={r.name} className="building__row">
                <div className="building__rowbody">
                  <a href={`https://github.com/${USER}/${r.name}`}>{r.name}</a>
                  {r.description && (
                    <span className="building__title">{r.description}</span>
                  )}
                </div>
                <span className="building__meta">
                  {r.language ?? ""}
                  {r.stargazers_count > 0 ? ` · ★ ${r.stargazers_count}` : ""}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="building__note">Loading repos...</p>
        )}
      </section>

      <section>
        <h2 className="building__heading">Latest activity</h2>
        {events ? (
          <ul className="building__list">
            {events.slice(0, 8).map((e, i) => (
              <li key={i} className="building__row">
                <span className="building__meta">
                  {dayKey(e.created_at)}
                </span>
                <div className="building__rowbody">
                  <span className="building__title">
                    {EVENT_LABEL[e.type] ?? e.type}
                    {e.payload.action ? ` (${e.payload.action})` : ""}
                  </span>
                  <a href={`https://github.com/${e.repo.name}`}>{e.repo.name}</a>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="building__note">Loading...</p>
        )}
      </section>
    </div>
  );
}
