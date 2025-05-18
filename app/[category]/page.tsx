import { Article } from "@/components/Article";
import { Tabs, TabsList, TabsTrigger } from "@/components/Tabs";
import { getMdxArticles } from "@/lib/mdx";
import Link from "next/link";
import { notFound } from "next/navigation";

type Category = "home" | "series";

const categoryMap = {
	home: { route: "/", ko: "전체" },
	series: { route: "/series", ko: "시리즈" },
} as const;

export default async function Page({
	params,
}: { params: Promise<{ category: Category }> }) {
	const { category } = await params;
	const route = categoryMap[category]?.route;

	const mdxArticles = getMdxArticles();
	const totalArticles = mdxArticles;

	if (!route) {
		notFound();
	}

	return (
		<section className="flex flex-col w-full h-full p-4 gap-4">
			<Tabs value={route}>
				<TabsList>
					{Object.entries(categoryMap).map(([key, { route, ko }]) => (
						<TabsTrigger asChild={true} key={key} value={route}>
							<Link href={route} prefetch={false}>
								{ko}
							</Link>
						</TabsTrigger>
					))}
				</TabsList>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-full">
					{totalArticles.map((article) => (
						<Article key={article.slug}>
							<Link href={`/article/${article.slug}`} prefetch={false}>
								<Article.Image
									src={article.openGraph.image}
									alt={article.openGraph.title}
								/>
							</Link>
							<Article.Content>
								<Link href={`/article/${article.slug}`} prefetch={false}>
									<Article.Title title={article.openGraph.title} />
								</Link>
								<Article.Description
									description={article.openGraph.description}
								/>
								<Article.Date date={article.openGraph.publishedAt} />
							</Article.Content>
						</Article>
					))}
				</div>
			</Tabs>
		</section>
	);
}
