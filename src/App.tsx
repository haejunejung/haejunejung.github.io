import { Route, Navigate, Routes } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import {
  ArticlePage,
  CategoryPage,
  NotFoundPage,
  OfflinePage,
  PortfolioPage,
  ResumePage,
  UsefulArticlesPage,
} from "@/pages";
import { Layout, MDXComponents } from "@/components";
import { useNetworkStatus } from "@/hooks";

import "@/styles/global.css";
import "@/styles/normalize.css";
import "@/styles/github-markdown.css";

function App() {
  const isOnline = useNetworkStatus();

  // TODO: offline일 때 서비스 워커를 사용하면 캐시된 내용을 보여줄 수 있다.
  if (!isOnline) return <OfflinePage />;

  return (
    <MDXProvider components={MDXComponents}>
      <Routes>
        {/* 블로그 포스트 */}
        <Route path="/" element={<Layout />}>
          <Route index element={<CategoryPage />} />
          <Route path=":category" element={<CategoryPage />} />
          <Route path=":category/:articleId" element={<ArticlePage />} />

          {/* 이력서 */}
          <Route path="/resume" element={<ResumePage />} />

          {/* 포트폴리오 */}
          <Route path="/portfolio" element={<PortfolioPage />} />

          {/* 유용한 블로그 포스트 */}
          <Route path="/useful-articles" element={<UsefulArticlesPage />} />
        </Route>

        {/* Not Found: 404 */}
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </MDXProvider>
  );
}

export default App;
