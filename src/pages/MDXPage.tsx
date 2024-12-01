import Fallback from "@/components/Fallback";
import { totalMdxPageList } from "@/mdx";
import styled from "@emotion/styled";
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
        <Container>
          <LazyMDXComponent />
        </Container>
      </Suspense>
    );
  }

  return <Fallback />;
};

export default MDXPage;

const Container = styled.main`
  font-family: "SF Pro Text", "Apple SD Gothic Neo", sans-serif;
  padding: var(--spacing7);

  body,
  h1,
  h2,
  h3,
  h4,
  figure,
  blockquote,
  p,
  figure,
  dl,
  dd {
    margin: var(--spacing8) 0;
  }

  p,
  li {
    color: var(--color-gray3);
    line-height: 1.5;

    font-size: 14px;

    @media (min-width: 769px) {
      font-size: 16px;
    }
  }
`;
