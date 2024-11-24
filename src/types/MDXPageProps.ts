import { mdxPostTabList } from "@/mdx";

export type MDXPageProps = {
  type: (typeof mdxPostTabList)[number];
  title: string;
  description: string;
  path: string;
  date: string;
  importMdx: () => Promise<typeof import(".mdx")>;
};
