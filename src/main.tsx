import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { MDXProvider } from "@mdx-js/react";
import App from "./App.tsx";
import MDXComponents from "@/packages/components/mdx/index.ts";
import "@/styles/reset.css";
import "@/styles/global.css";
import "highlight.js/styles/github.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MDXProvider components={MDXComponents}>
      <App />
    </MDXProvider>
  </StrictMode>
);
