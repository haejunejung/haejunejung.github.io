import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import vercel from "vite-plugin-vercel";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT as unknown as number,
  },
  base: "/",
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        providerImportSource: "@mdx-js/react",
        remarkPlugins: [remarkGfm],
      }),
    } as PluginOption,
    react({
      include: /\.(jsx|js|mdx|md|tsx|ts)$/,
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    vercel(),
  ],
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
