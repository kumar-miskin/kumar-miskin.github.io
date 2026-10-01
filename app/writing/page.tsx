import SubscribeBox from "@/components/SubscribeBox";
import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/content";
import { IconArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Writing | Kumar Miskin",
  description:
    "Notes and receipts: longer writeups behind the charts and analysis I post, with the data and code linked so every number can be checked.",
};

export default function WritingIndex() {
  return (
    <main className="article-page">
      <div className="container container--narrow">
        <Link href="/" className="article-page__back">
          &larr; Back to home
        </Link>
        <header className="article-page__header">
          <h1 className="article-page__title">Writing</h1>
          <p className="article-page__lede">
            Longer writeups behind the charts and analysis I post. Every number
            links back to data and code.
          </p>
        </header>

        <SubscribeBox signupUrl="https://macroreceipts.beehiiv.com/" />

        <div className="writing__list">
          {articles.map((a) => (
            <article className="writing-card" key={a.slug}>
              <span className="pub__index">
                {String(articles.indexOf(a) + 1).padStart(2, "0")}
              </span>
              <div className="pub__body">
              <p className="writing-card__meta">
                {a.date} &middot; {a.readingTime}
              </p>
              <h2 className="writing-card__title">
                <Link href={`/writing/${a.slug}`}>{a.title}</Link>
              </h2>
              <p className="writing-card__desc">{a.description}</p>
              <div className="pub__badges">
                {a.tags.map((t) => (
                  <span className="badge badge--outline" key={t}>
                    {t}
                  </span>
                ))}
                <Link className="pub__link" href={`/writing/${a.slug}`}>
                  Read article <IconArrowUpRight size={13} />
                </Link>
              </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
