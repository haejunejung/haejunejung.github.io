import { useMemo } from "react";
import { Link } from "react-router";
import { useMdxFiles } from "react-router-mdx/client";
import { loadAllMdx } from "react-router-mdx/server";
import { Category, ListWithDivider } from "~/components";
import { AppHeader } from "~/components/AppLayout";
import { Separator } from "~/components/ui/separator";
import { arrayify, isNotNil } from "~/lib";
import { postSchema } from "~/schema";

export const loader = () => {
	return loadAllMdx();
};

export default function Home() {
	const files = useMdxFiles();
	const posts = useMemo(
		() =>
			files
				.map((file) => {
					const result = postSchema.safeParse(file);
					if (!result.success) {
						return null;
					}
					return result.data;
				})
				.filter(isNotNil),
		[files],
	);

	return (
		<>
			<AppHeader />
			<div className="p-6">
				<section className="flex flex-col gap-4">
					<ListWithDivider divider={<Separator />}>
						{posts.map((post) => {
							return (
								<article key={post.title} className="flex flex-col gap-2">
									<h1 className="text-2xl font-bold hover:underline hover:text-blue-500">
										<Link to={`/posts/${post.slug}`}>{post.title}</Link>
									</h1>
									<p className="text-sm text-gray-500">
										{post.date.toISOString().split("T")[0].replaceAll("-", ".")}
									</p>
									<p className="text-base text-gray-500">{post.description}</p>
									<div className="flex gap-2">
										{arrayify(post.categories).map((category) => (
											<Category key={category} category={category} />
										))}
									</div>
								</article>
							);
						})}
					</ListWithDivider>
				</section>
			</div>
		</>
	);
}
