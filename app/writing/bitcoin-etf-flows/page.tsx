import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/content";
import { IconArrowUpRight } from "@/components/icons";

const article = articles.find((a) => a.slug === "bitcoin-etf-flows")!;

export const metadata: Metadata = {
  title: `${article.title} | Kumar Miskin`,
  description: article.description,
};

export default function BitcoinEtfFlowsArticle() {
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

          <div className="article-body">
            {article.body.map((block, i) => {
              switch (block.type) {
                case "heading":
                  return <h2 key={i}>{block.text}</h2>;
                case "paragraph":
                  return <p key={i}>{block.text}</p>;
                case "list":
                  return (
                    <ul key={i}>
                      {block.items.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  );
                case "image":
                  return (
                    <figure key={i} className="article-body__figure">
                      <Image
                        src={block.src}
                        alt={block.alt}
                        width={1356}
                        height={847}
                      />
                      <figcaption>{block.caption}</figcaption>
                    </figure>
                  );
                case "statgrid":
                  return (
                    <div key={i} className="article-body__stats">
                      {block.stats.map((s) => (
                        <div className="stat" key={s.label}>
                          <div className="stat__value">{s.value}</div>
                          <div className="stat__label">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  );
              }
            })}
          </div>

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
      </div>
    </main>
  );
}
