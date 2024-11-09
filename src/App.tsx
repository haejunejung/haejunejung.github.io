import { Router, Switch, Route } from "wouter";
import MainPage from "@/pages/MainPage";
import NotFound from "./pages/NotFound";
import Container from "./components/Layout";
import Header from "./components/Header";
import MDXDetailPage from "./pages/MDXDetailPage";
import TechBlogPage from "./pages/TechBlogPage";

const App = () => {
  // //TODO: Switch ~ Route 패턴이 CSR이라서 PWA에서 동작하지 않는 문제 해결 필요!
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/" component={MainPage} />
          <Route path="/tech-blog" component={TechBlogPage} />
          <Route path="/webapi/:id" component={MDXDetailPage} />
          <Route path="/not-found" component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
