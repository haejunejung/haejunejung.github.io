import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/blog",
  plugins: [react()],
  cacheDir: "./.vite",
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});
