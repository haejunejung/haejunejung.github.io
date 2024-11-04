import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { MDXProvider } from "@mdx-js/react";
import App from "./App.tsx";
import "@/styles/main.scss";
import { components } from "@/mdx/components/components.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MDXProvider components={components}>
      <App />
    </MDXProvider>
  </StrictMode>
);
