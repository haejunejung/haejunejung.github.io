export interface ArticlePageProps {
  title: string;
  description: string;
  slug: string;
  date: string;
  importMdx: () => Promise<typeof import(".mdx")>;
}
