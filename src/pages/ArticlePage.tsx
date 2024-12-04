import { totalMdxPageList } from "@/__articles__";
import { Banner, Fallback } from "@/components";
import { css } from "@emotion/css";
import { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";

export function ArticlePage() {
  const location = useLocation();
  const pathname = location.pathname;

  const mdxPage = totalMdxPageList.find((mdxPage) => mdxPage.slug === pathname);

  // ?? mdxPage를 찾지 못하면 `Fallback`만으로 적합한가에 대해 고민해볼 필요가 있음
  if (!mdxPage) {
    return <Fallback />;
  }

  const { src, title, importMdx: Component } = mdxPage;
  const LazyMdxComponent = lazy(Component);

  return (
    <>
      {/* // TODO: SSR 전환 이후에 OpenGraph */}
      <Banner src={src} alt={title} />
      <main
        className={css({
          width: "100%",
          height: "100%",
          padding: "var(--spacing7)",
          boxSizing: "border-box",
        })}
      >
        <Suspense fallback={<Fallback />}>
          <LazyMdxComponent />
        </Suspense>
      </main>
    </>
  );
}
