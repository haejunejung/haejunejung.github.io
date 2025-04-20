import { resolve } from "node:path";
import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";
import remarkGfm from "remark-gfm";
import { type PluginOption, defineConfig } from "vite";
import vercel from "vite-plugin-vercel";
import tailwindcss from "@tailwindcss/vite";

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
		}),
		vercel(),
		tailwindcss(),
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
