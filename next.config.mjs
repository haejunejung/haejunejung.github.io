import createMdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
};

const withMdx = createMdx({
	extension: /\.(mdx)$/,
});

export default withMdx(nextConfig);
