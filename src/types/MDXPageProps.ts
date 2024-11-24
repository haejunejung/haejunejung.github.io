export type MDXPageProps = {
  thumnailSrc: string;
  title: string;
  description: string;
  path: string;
  date: `${number}년 ${number}월 ${number}일`;
  importMdx: () => Promise<typeof import(".mdx")>;
};
