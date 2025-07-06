import { useMdxAttributes, useMdxComponent } from "react-router-mdx/client";
import { loadMdx } from "react-router-mdx/server";
import { AppHeader } from "~/components/AppLayout";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
} from "~/components/ui/breadcrumb";
import { Separator } from "~/components/ui/separator";
import { postSchema } from "~/schema";
import type { Route } from "./+types/post";

export function loader({ request }: Route.LoaderArgs) {
	return loadMdx(request);
}

export default function Post() {
	const Component = useMdxComponent();
	const attrs = useMdxAttributes();
	const result = postSchema.safeParse(attrs);

	if (!result.success) {
		return (
			<>
				<p>Invalid post payload:</p>
				<pre>{JSON.stringify(result.error, null, 2)}</pre>
			</>
		);
	}

	return (
		<div className="flex flex-col max-w-[880px]">
			<AppHeader>
				{result.data.title && (
					<Separator
						orientation="vertical"
						className="mr-2 data-[orientation=vertical]:h-4"
					/>
				)}
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbPage>{result.data.title}</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</AppHeader>
			<article className="markdown-body prose lg:prose-xl article-content p-6">
				<Component />
			</article>
		</div>
	);
}
