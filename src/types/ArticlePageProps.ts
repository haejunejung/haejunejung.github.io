export interface ArticlePageProps {
	src: string;
	title: string;
	description: string;
	slug: string;
	date: string;
	importMdx: () => Promise<typeof import(".mdx")>;
}
