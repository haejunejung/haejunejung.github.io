import { getMdxArticles } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export async function generateMetadata({
	params,
}: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const mdxArticles = getMdxArticles();
	const article = mdxArticles.find((article) => article.slug === slug);

	if (!article) {
		return {
			title: "404 Not Found",
		};
	}

	return {
		title: article.openGraph.title,
		description: article.openGraph.description,
		openGraph: {
			title: article.openGraph.title,
			description: article.openGraph.description,
			url: `https://haejunejung.com/article/${slug}`,
			type: "article",
			images: [
				{
					url: article.openGraph.image,
					width: 1200,
					height: 630,
				},
			],
		},
	};
}

export default async function ArticlePage({
	params,
}: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const mdxArticles = getMdxArticles();
	const article = mdxArticles.find((article) => article.slug === slug);

	if (!article) {
		notFound();
	}

	return (
		<section className="flex flex-col w-full h-full p-4 gap-4">
			<article className="prose">
				<MDXRemote source={article.content} components={{}} />
			</article>
		</section>
	);
}
