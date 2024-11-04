import { Router, Switch, Route } from "wouter";
import MainPage from "@/pages/MainPage";
import TechBlogPage from "./pages/TechBlogPage";
import ProblemSolverPage from "./pages/ProblemSolverPage";
import NotFound from "./pages/NotFound";
import Container from "./components/Container";

const App = () => {
  return (
    <Router>
      <Container>
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
