import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { MDXProvider } from "@mdx-js/react";
import { MDXComponents } from "./components/[mdx]/index.ts";
import App from "./App.tsx";
import "@/styles/main.scss";
import "highlight.js/styles/github.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MDXProvider components={MDXComponents}>
      <App />
    </MDXProvider>
  </StrictMode>
);
