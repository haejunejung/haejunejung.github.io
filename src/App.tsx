import { Layout, MDXComponents } from "@/components";
import { useNetworkStatus } from "@/hooks";
import { ArticlePage, CategoryPage, NotFoundPage, OfflinePage } from "@/pages";
import { MDXProvider } from "@mdx-js/react";
import { Navigate, Route, Routes } from "react-router";

import "@/styles/global.css";
import "@/styles/normalize.css";
import "@/styles/github-markdown.css";

export function App() {
	const isOnline = useNetworkStatus();

	// TODO: offline일 때 서비스 워커를 사용하면 캐시된 내용을 보여줄 수 있다.
	if (!isOnline) {
		return <OfflinePage />;
	}

	return (
		<MDXProvider components={MDXComponents}>
			<Routes>
				{/* 블로그 포스트 */}
				<Route path="/" element={<Layout />}>
					<Route index={true} element={<CategoryPage />} />
					<Route path=":category" element={<CategoryPage />} />
					<Route path=":category/:articleId" element={<ArticlePage />} />
				</Route>

				{/* Not Found: 404 */}
				<Route path="/not-found" element={<NotFoundPage />} />
				<Route path="*" element={<Navigate to="/not-found" />} />
			</Routes>
		</MDXProvider>
	);
}
