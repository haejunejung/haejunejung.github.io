import { ArticlePageProps } from "@/types";
import { ArticleCard } from "./ArticleCard";

interface ArticleListView {
  articles: ArticlePageProps[];
}

export function ArticleListView({ articles }: ArticleListView) {
  return (
    <ol
      role="list"
      css={{
        display: "flex",
        flexDirection: "column",
        margin: 0,
        padding: 0,
        gap: "var(--spacing7)",
      }}
    >
      {articles.map((post) => (
        <ArticleCard key={post.slug} {...post} />
      ))}
    </ol>
  );
}
