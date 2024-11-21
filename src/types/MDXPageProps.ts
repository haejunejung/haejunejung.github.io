export type MDXPageProps = {
  title: string;
  summary: string;
  path: string;
  importMdx: () => Promise<typeof import(".mdx")>;
};
