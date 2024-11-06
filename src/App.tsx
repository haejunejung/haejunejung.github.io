import { Router, Switch, Route } from "wouter";
import MainPage from "@/pages/MainPage";
import TechBlogPage from "./pages/TechBlogPage";
import ProblemSolverPage from "./pages/ProblemSolverPage";
import NotFound from "./pages/NotFound";
import Container from "./components/Container";
import Header from "./components/Header";

const App = () => {
  // //TODO: Switch ~ Route 패턴이 CSR이라서 PWA에서 동작하지 않는 문제 해결 필요!
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/blog" component={TechBlogPage} />
          <Route path="/tech-blog" component={MainPage} />
          <Route path="/problem-solver" component={ProblemSolverPage} />
          <Route path="/not-found" component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
