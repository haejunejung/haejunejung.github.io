import { Layout } from "@/components/Layout";
import type { ReactNode } from "react";

export default function ArticleLayout({ children }: { children: ReactNode }) {
	return (
		<Layout.Root>
			<Layout.Header />
			<main>{children}</main>
			<Layout.Footer />
		</Layout.Root>
	);
}
