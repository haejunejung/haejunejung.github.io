import {
	totalBlogMdxPageList,
	totalMdxPageList,
	totalTechMdxPageList,
} from "@/__articles__";
import { ArticleListView, Banner, Tabs, VStack } from "@/components";
import { useLocation, useNavigate } from "react-router";

export function CategoryPage() {
	const location = useLocation();
	const navigate = useNavigate();
	const pathname = location.pathname;
	const articles = getCurrentArticles(pathname);

	const currentTab =
		articleConfig.find((articleInfo) => articleInfo.slug === pathname)?.tab ||
		articleConfig[0].tab;

	return (
		<VStack>
			<Banner src={"/images/banner.png"} alt="Home Banner Image" />
			<Tabs.Root
				tab={currentTab}
				onTabChange={(newTab) => navigate(`/${newTab}`)}
			>
				<Tabs.Header>
					{articleConfig.map(({ slug, tab, tabName }) => (
						<Tabs.Trigger key={`slugId-${slug}`} tab={tab}>
							{tabName}
						</Tabs.Trigger>
					))}
					<Tabs.Indicator />
				</Tabs.Header>
				<Tabs.Content>
					{articles ? <ArticleListView articles={articles} /> : <></>}
				</Tabs.Content>
			</Tabs.Root>
		</VStack>
	);
}

function getCurrentArticles(pathname: string) {
	if (pathname === "/") return totalMdxPageList;
	else if (pathname === "/tech") return totalTechMdxPageList;
	else if (pathname === "/blog") return totalBlogMdxPageList;
}

const articleConfig = [
	{ slug: "/", tab: "", tabName: "전체" },
	{ slug: "/tech", tab: "tech", tabName: "개발" },
	{ slug: "/blog", tab: "blog", tabName: "블로그" },
];
