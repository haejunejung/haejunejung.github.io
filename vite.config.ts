import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import mdx from "@mdx-js/rollup";
import { VitePWA } from "vite-plugin-pwa";
import remarkGfm from "remark-gfm";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        providerImportSource: "@mdx-js/react",
        remarkPlugins: [remarkGfm],
      }),
    } as PluginOption,
    // https://vite-pwa-org.netlify.app/guide/#configuring-vite-plugin-pwa
    // VitePWA({
    //   registerType: "autoUpdate",
    //   injectRegister: "inline",
    //   devOptions: { enabled: true },
    //   workbox: {
    //     // globPatterns: ["/*"],
    //     globIgnores: ["**/node_modules/**/*", "sw.js", "workbox-*.js"],
    //   },
    // }),
    react({
      include: /\.(jsx|js|mdx|md|tsx|ts)$/,
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
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
