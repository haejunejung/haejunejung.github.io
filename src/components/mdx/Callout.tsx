import type { PropsWithChildren } from "react";
import type { IconType } from "react-icons";
import {
	// LuXSquare,
	LuCheck,
	// LuSubtitles,
	LuFileQuestion,
	LuPencil,
	LuQuote,
} from "react-icons/lu";
import { Text } from "../ui";

interface CalloutProps {
	type: "note" | "quote" | "summary" | "question" | "success" | "warn";
	title: string;
	content: string;
}

const capitalize = <T extends string>(str: T): Capitalize<T> => {
	return (str.charAt(0).toUpperCase() +
		str.slice(1).toLowerCase()) as Capitalize<T>;
};

const calloutConfig: Record<
	CalloutProps["type"],
	{ color: string; bgColor: string; icon: IconType }
> = {
	note: { color: "#518bd3", bgColor: "#e6f0fc", icon: LuPencil },
	quote: { color: "#cccccc", bgColor: "#f5f5f5", icon: LuQuote },
	// summary: { color: "#3cb1ab", bgColor: "#e5f7f7", icon: LuSubtitles },
	question: { color: "#dcad87", bgColor: "#fdf1e5", icon: LuFileQuestion },
	success: { color: "#98c5ab", bgColor: "#e6f7ed", icon: LuCheck },
	// warn: { color: "#da8a97", bgColor: "#fdeaec", icon: LuXSquare },
};

export const Callout = ({
	type,
	title,
	children,
}: PropsWithChildren<CalloutProps>) => {
	const { color, bgColor, icon: CalloutTagIcon } = calloutConfig[type];

	return (
		<div
			css={{
				display: "flex",
				flexDirection: "column",
				padding: "var(--spacing7)",
				margin: "var(--spacing7) 0",
				borderRadius: "var(--radius2)",
				backgroundColor: bgColor,
			}}
		>
			<div
				css={{
					display: "inline-flex",
					flexDirection: "row",
					width: "fit-content",
					gap: "var(--spacing4)",
				}}
			>
				<CalloutTagIcon color={color} strokeWidth={2} fontWeight={18} />
				<Text size="subtitle1" fontWeight="bold" style={{ color: color }}>
					{capitalize(type)}
				</Text>
			</div>
			<div
				css={{
					display: "flex",
					flexDirection: "column",
					gap: "var(--spacing2)",
				}}
			>
				<Text
					size="subtitle1"
					fontWeight="bold"
					style={{ padding: 0, margin: 0 }}
				>
					{title}
				</Text>
				<Text size="body1" style={{ padding: 0, margin: 0 }}>
					{children}
				</Text>
			</div>
		</div>
	);
};
