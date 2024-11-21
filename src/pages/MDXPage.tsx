// import ServiceWorkerMDX from "@/mdx/webapi/service-worker/service-worker.mdx";
import Fallback from "@/components/Fallback";
import { totalMdxPageList } from "@/mdx";
import { lazy, Suspense } from "react";
import { useLocation } from "wouter";

const MDXPage = () => {
  const [location] = useLocation();

  const MDXComponent = totalMdxPageList.find(
    (mdxPage) => mdxPage.path === location
  )?.importMdx;

  if (MDXComponent) {
    const LazyMDXComponent = lazy(MDXComponent);

    return (
      <Suspense fallback={<Fallback />}>
        <LazyMDXComponent />
      </Suspense>
    );
  }

  return <Fallback />;
};

export default MDXPage;
