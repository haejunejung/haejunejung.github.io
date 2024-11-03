import { Router, Switch, Route } from "wouter";
import MainPage from "@/pages/MainPage";
import TechBlogPage from "./pages/TechBlogPage";
import ProblemSolverPage from "./pages/ProblemSolverPage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/blog" component={MainPage} />
        <Route path="/tech-blog" component={TechBlogPage} />
        <Route path="/problem-solver" component={ProblemSolverPage} />
        <Route path="/not-found" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
