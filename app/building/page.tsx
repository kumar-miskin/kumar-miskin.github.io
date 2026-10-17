import type { Metadata } from "next";
import Link from "next/link";
import BuildingLive from "@/components/BuildingLive";

export const metadata: Metadata = {
  alternates: { canonical: "/building" },
  title: "Building | Kumar Miskin",
  description:
    "Live view of what Kumar Miskin is shipping: recent commits, pull requests, and upstream open-source contributions, pulled from the GitHub API.",
};

export default function BuildingPage() {
  return (
    <main className="article-page">
      <div className="container container--narrow">
        <Link href="/" className="article-page__back">
          &larr; Back to home
        </Link>
        <header className="article-page__header">
          <h1 className="article-page__title">Building</h1>
          <p className="article-page__lede">
            What I&apos;m shipping: recent activity, my repos, and the state
            of my upstream contributions. Live from the GitHub API when
            available, with a timestamped snapshot as fallback.
          </p>
        </header>
        <BuildingLive />
      </div>
    </main>
  );
}
