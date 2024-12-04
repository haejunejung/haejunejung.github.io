import { totalMdxPageList } from "@/__articles__";
import { Fallback } from "@/components";
import { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";

export function ArticlePage() {
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);

  const MdxComponent = totalMdxPageList.find(
    (mdxPage) => mdxPage.slug === pathname
  )?.importMdx;

  if (MdxComponent) {
    const LazyMdxComponent = lazy(MdxComponent);

    return (
      <Suspense fallback={<Fallback />}>
        <LazyMdxComponent />
      </Suspense>
    );
  }

  return <Fallback />;
}
