import { ThemeProvider } from "@/contexts";
import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import "./globals.css";
import "./normalize.css";

export const metadata: Metadata = {
	title: "정해준이 정해준",
	description: "학습한 것들을 정리하는 개인적인 공간입니다.",
};

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressContentEditableWarning={true}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider>
					<main>{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
