import type { ReactNode } from "react";
import Image from "next/image";
import type { ArticleBlock } from "@/lib/content";

/** Renders **bold** and *italic* spans inside a plain string. */
function inline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

export default function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="article-body">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return <h2 key={i}>{block.text}</h2>;
          case "paragraph":
            return <p key={i}>{inline(block.text)}</p>;
          case "list":
            return (
              <ul key={i}>
                {block.items.map((li) => (
                  <li key={li}>{inline(li)}</li>
                ))}
              </ul>
            );
          case "image":
            return (
              <figure key={i} className="article-body__figure">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={block.width ?? 1356}
                  height={block.height ?? 847}
                />
                <figcaption>{block.caption}</figcaption>
              </figure>
            );
          case "table":
            return (
              <div key={i} className="article-body__table-wrap">
                <table className="article-body__table">
                  <thead>
                    <tr>
                      {block.head.map((h, j) => (
                        <th key={j}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td key={c}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
  );
}
