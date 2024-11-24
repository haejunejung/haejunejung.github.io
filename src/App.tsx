import { Router, Switch, Route } from "wouter";
import HomePage from "@/pages/HomePage";
import MDXPage from "./pages/MDXPage";
import { totalMdxPageList } from "./mdx";
import { useEffect } from "react";
import { Layout } from "@/packages/components";
import NotFound from "./components/NotFound";

const App = () => {
  // //TODO: Switch ~ Route 패턴이 CSR이라서 PWA에서 동작하지 않는 문제 해결 필요!

  useEffect(() => {
    const userAgent = navigator.userAgent;

    if (/Android/i.test(userAgent)) {
      document.body.classList.add("android");
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
      document.body.classList.add("ios");
    } else {
      document.body.classList.add("web");
    }
  }, []);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={HomePage} />
          {totalMdxPageList.map((mdxPage) => (
            <Route key={mdxPage.path} path={mdxPage.path} component={MDXPage} />
          ))}
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
