import { Router, Switch, Route } from "wouter";
import MainPage from "@/pages/MainPage";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Header from "./components/Header";
import MDXDetailPage from "./pages/MDXDetailPage";
import TechBlogPage from "./pages/TechBlogPage";

const App = () => {
  // //TODO: Switch ~ Route 패턴이 CSR이라서 PWA에서 동작하지 않는 문제 해결 필요!
  return (
    <Router>
      <Layout>
        <Header />
        <Switch>
          <Route path="/" component={MainPage} />
          <Route path="/tech-blog" component={TechBlogPage} />
          <Route path="/webapi/:id" component={MDXDetailPage} />
          <Route path="/performance/:id" component={MDXDetailPage} />
          <Route path="/react/:id" component={MDXDetailPage} />
          <Route path="/js/:id" component={MDXDetailPage} />
          <Route path="/not-found" component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
