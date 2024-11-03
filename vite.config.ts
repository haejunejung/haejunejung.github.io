import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/blog",
  plugins: [react()],
  cacheDir: "./.vite",
  esbuild: {
    // https://ko.vitejs.dev/config/shared-options#esbuild
    jsxInject: `import React from 'react'`,
  },
  css: {
    // https://ko.vitejs.dev/config/shared-options#css-preprocessoroptions
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  resolve: {
    // https://ko.vitejs.dev/config/shared-options#resolve-alias
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
