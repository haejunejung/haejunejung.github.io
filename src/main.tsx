import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import ArticlePage from "./pages/ArticlePage.tsx";
import "@/styles/main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ArticlePage />
  </StrictMode>
);
