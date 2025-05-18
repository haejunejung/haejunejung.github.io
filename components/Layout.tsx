import Image from "next/image";
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
		<header className="flex flex-row items-center w-full p-4 gap-4">
			<div className="relative w-16 h-16 shrink-0 overflow-hidden rounded-full">
				<Image src="/avatar.png" alt="Avatar" fill={true} />
			</div>
			<div className="flex flex-col gap-4">
				<p className="text-xl font-bold">정해준이 정해준</p>
				<div className="flex flex-row items-center gap-4">
					<Icon name="github" />
					<Icon name="linkedin" />
				</div>
			</div>
		</header>
	);
};

const LayoutFooter = () => {
	return (
		<footer className="flex flex-row items-center mx-auto p-4 gap-8 mt-auto">
			<div className="flex flex-row items-center gap-4">
				<p className="text-sm">© 2025. All rights reserved</p>
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
