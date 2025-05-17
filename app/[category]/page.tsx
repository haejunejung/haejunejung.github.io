import { Tabs, TabsList, TabsTrigger } from "@/components/Tabs";
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

	if (!route) {
		notFound();
	}

	return (
		<div className="flex flex-col w-full h-full p-4 gap-4">
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
			</Tabs>
		</div>
	);
}
