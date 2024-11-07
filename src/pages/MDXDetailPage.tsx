// import ServiceWorkerMDX from "@/mdx/webapi/service-worker/service-worker.mdx";
import Fallback from "@/components/Fallback";
import { totalMdxList } from "@/mdx";
import { lazy, Suspense } from "react";
import { useLocation } from "wouter";

const MDXDetailPage = () => {
  const [location] = useLocation();

  const MDXComponent = totalMdxList.find(
    (mdxItem) => mdxItem.path === location
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

export default MDXDetailPage;
