import type { ReactNode } from "react";
import { Icon } from "./Icon";

const LayoutRoot = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex flex-col w-full max-w-[1024px] min-h-screen mx-auto p-4">
			{children}
		</div>
	);
};

const LayoutHeader = () => {
	return (
		<header className="sticky flex flex-row items-center justify-between w-full p-4">
			<div className="flex flex-row items-center">
				<p className="text-2xl font-bold">정해준이 정해준</p>
			</div>
		</header>
	);
};

const LayoutFooter = () => {
	return (
		<footer className="flex flex-row items-center mx-auto p-4 gap-8 mt-auto">
			<div className="flex flex-row items-center gap-4">
				<p className="text-sm">정해준</p>
				<p className="text-sm">© 2025</p>
			</div>
			<div className="flex flex-row items-center gap-4">
				<Icon name="github" />
				<Icon name="theme" />
			</div>
		</footer>
	);
};

export const Layout = Object.assign(LayoutRoot, {
	Root: LayoutRoot,
	Header: LayoutHeader,
	Footer: LayoutFooter,
});
