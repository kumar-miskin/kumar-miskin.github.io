// Regenerates lib/building-snapshot.json: a timestamped, allowlist-filtered
// snapshot of public GitHub data used as the /building page baseline.
// Run: GITHUB_TOKEN=<token> node scripts/update-building-snapshot.mjs
// The allowlist (lib/building-allowlist.json) deliberately excludes research
// repos tied to unpublished work, even when those repos are public.
import { readFileSync, writeFileSync } from "node:fs";

const USER = "kumar-miskin";
const API = "https://api.github.com";
const allow = JSON.parse(readFileSync("lib/building-allowlist.json", "utf8"));

const headers = {
  "User-Agent": "building-snapshot",
  Accept: "application/vnd.github+json",
};
if (process.env.GITHUB_TOKEN)
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function getJson(url) {
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`${res.status} for ${url}`);
  return res.json();
}

const eventsRaw = await getJson(
  `${API}/users/${USER}/events/public?per_page=100`
);
const events = eventsRaw
  .filter((e) => allow.eventRepos.includes(e.repo.name))
  .map((e) => ({
    type: e.type,
    created_at: e.created_at,
    repo: { name: e.repo.name },
    payload: { action: e.payload?.action },
  }));

const prs = [];
for (const p of allow.upstreamPrs) {
  const d = await getJson(`${API}/repos/${p.repo}/pulls/${p.number}`);
  prs.push({
    repo: p.repo,
    number: p.number,
    url: `https://github.com/${p.repo}/pull/${p.number}`,
    title: d.title,
    status: d.merged_at ? "merged" : d.state === "open" ? "open" : "closed",
  });
}

const repos = [];
for (const name of allow.featuredRepos) {
  const d = await getJson(`${API}/repos/${USER}/${name}`);
  repos.push({
    name: d.name,
    description: d.description,
    language: d.language,
    stargazers_count: d.stargazers_count,
    pushed_at: d.pushed_at,
  });
}

const snapshot = {
  generatedAt: new Date().toISOString(),
  events,
  prs,
  repos,
};
writeFileSync(
  "lib/building-snapshot.json",
  JSON.stringify(snapshot, null, 2) + "\n"
);
console.log(
  `snapshot: ${events.length} events, ${prs.length} PRs, ${repos.length} repos, at ${snapshot.generatedAt}`
);
