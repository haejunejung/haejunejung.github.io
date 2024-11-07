export type MDXItemProps = {
  title: string;
  summary: string;
  path: string;
  importMdx: () => Promise<typeof import(".mdx")>;
};
