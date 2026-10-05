import SubscribeBox from "@/components/SubscribeBox";
import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/content";
import ArticleBody from "@/components/ArticleBody";
import { IconArrowUpRight } from "@/components/icons";

const article = articles.find((a) => a.slug === "macro-receipts-issue-1")!;

export const metadata: Metadata = {
  title: `${article.title} | Kumar Miskin`,
  description: article.description,
};

export default function MacroReceiptsIssue1Article() {
  return (
    <main className="article-page">
      <div className="container container--narrow">
        <Link href="/writing" className="article-page__back">
          &larr; All writing
        </Link>

        <article>
          <header className="article-page__header">
            <p className="article-page__meta">
              {article.date} &middot; {article.readingTime}
            </p>
            <h1 className="article-page__title">{article.title}</h1>
            <p className="article-page__lede">{article.description}</p>
            <div className="pub__badges">
              {article.tags.map((t) => (
                <span className="badge badge--outline" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </header>

          <ArticleBody blocks={article.body} />

          <footer className="article-page__footer">
            <h2>Sources and receipts</h2>
            <ul>
              {article.links.map((l) => (
                <li key={l.url}>
                  <a href={l.url} target="_blank" rel="noopener noreferrer">
                    {l.label} <IconArrowUpRight size={13} />
                  </a>
                </li>
              ))}
            </ul>
          </footer>
        </article>
        <SubscribeBox signupUrl="https://macroreceipts.beehiiv.com/" />
      </div>
    </main>
  );
}
