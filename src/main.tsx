import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { MDXProvider } from "@mdx-js/react";
import { MDXComponents } from "./components/[mdx]/index.ts";
import App from "./App.tsx";
import { ThemeProvider } from "./contexts/theme/ThemeProvider.tsx";
import "highlight.js/styles/github.css";
import "./global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MDXProvider components={MDXComponents}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MDXProvider>
  </StrictMode>
);
