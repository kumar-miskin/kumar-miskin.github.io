"use client";

import { useEffect, useState } from "react";
import allowlist from "@/lib/building-allowlist.json";
import snapshot from "@/lib/building-snapshot.json";

const USER = "kumar-miskin";
const API = "https://api.github.com";

const UPSTREAM_PRS = allowlist.upstreamPrs;
const FEATURED_REPOS = allowlist.featuredRepos;
// Every rendered item must stay inside this list: shipped tools, published
// analysis, and upstream contribution targets only. Research repos tied to
// unpublished work are excluded even when public.
const EVENT_REPOS = new Set(allowlist.eventRepos);

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
};

type PrState = {
  repo: string;
  number: number;
  title?: string;
  url: string;
  status: "open" | "merged" | "closed";
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

function formatAsOf(iso: string) {
  const d = new Date(iso);
  return `${d.toUTCString().slice(0, 16)}, ${iso.slice(11, 16)} UTC`;
}

export default function BuildingLive() {
  // Baseline: the committed build-time snapshot always renders a complete
  // page. Live API data only ever replaces it on success; failures keep the
  // snapshot and say so. No perpetual loading, no error badges.
  const [events, setEvents] = useState<GhEvent[]>(snapshot.events as GhEvent[]);
  const [repos, setRepos] = useState<GhRepo[]>(snapshot.repos as GhRepo[]);
  const [prs, setPrs] = useState<PrState[]>(snapshot.prs as PrState[]);
  const [live, setLive] = useState(false);
  const [liveFailed, setLiveFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [evRes, ...repoRes] = await Promise.all([
          fetch(`${API}/users/${USER}/events/public?per_page=100`),
          ...FEATURED_REPOS.map((name) => fetch(`${API}/repos/${USER}/${name}`)),
        ]);
        if (!evRes.ok || repoRes.some((r) => !r.ok)) throw new Error("api");
        const ev = ((await evRes.json()) as GhEvent[]).filter((e) =>
          EVENT_REPOS.has(e.repo.name)
        );
        const rp = (await Promise.all(repoRes.map((r) => r.json()))) as GhRepo[];
        if (cancelled) return;
        setEvents(ev);
        setRepos(rp);
        setLive(true);
      } catch {
        if (!cancelled) setLiveFailed(true);
      }
    }

    async function loadPrs() {
      const results = await Promise.allSettled(
        UPSTREAM_PRS.map(async (p) => {
          const res = await fetch(`${API}/repos/${p.repo}/pulls/${p.number}`);
          if (!res.ok) throw new Error("api");
          const data = await res.json();
          return {
            repo: p.repo,
            number: p.number,
            url: `https://github.com/${p.repo}/pull/${p.number}`,
            title: data.title as string,
            status: (data.merged_at
              ? "merged"
              : data.state === "open"
                ? "open"
                : "closed") as PrState["status"],
          };
        })
      );
      if (cancelled) return;
      if (results.some((r) => r.status === "rejected")) {
        setLiveFailed(true);
        return;
      }
      setPrs(results.map((r) => (r as PromiseFulfilledResult<PrState>).value));
    }

    load();
    loadPrs();
    return () => {
      cancelled = true;
    };
  }, []);

  const days: { day: string; count: number }[] = [];
  const counts = new Map<string, number>();
  for (const e of events) {
    counts.set(dayKey(e.created_at), (counts.get(dayKey(e.created_at)) ?? 0) + 1);
  }
  for (let i = 29; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10);
    days.push({ day: d, count: counts.get(d) ?? 0 });
  }
  const maxCount = Math.max(1, ...days.map((d) => d.count));

  return (
    <div className="building">
      <p className="building__note">
        {live
          ? "Live from the GitHub API. Times in UTC."
          : liveFailed
            ? `Live update unavailable from your network right now; showing a snapshot as of ${formatAsOf(snapshot.generatedAt)}. Times in UTC.`
            : `Snapshot as of ${formatAsOf(snapshot.generatedAt)}. Times in UTC.`}
      </p>

      <section>
        <h2 className="building__heading">Last 30 days</h2>
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
      </section>

      <section>
        <h2 className="building__heading">Latest activity</h2>
        <ul className="building__list">
          {events.slice(0, 8).map((e, i) => (
            <li key={i} className="building__row">
              <span className="building__meta">{dayKey(e.created_at)}</span>
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
      </section>
    </div>
  );
}
