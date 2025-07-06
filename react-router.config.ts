import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";
import { init } from "react-router-mdx/server";

const mdx = init({ path: "posts" });

export default {
	ssr: true,
	presets: [vercelPreset()],
	async prerender() {
		return ["/", ...(await mdx.paths())];
	},
} satisfies Config;
