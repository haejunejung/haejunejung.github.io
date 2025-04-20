import { css } from "@emotion/react";
import type { SerializedStyles } from "@emotion/react";
import type { IndicatorRect, Variant } from "./types";

// TODO: outline tab -> code에서 사용할 예정

type VariantStyle = { [variant in Variant]: SerializedStyles };

export const getHeaderStyles = (variant: Variant) => {
	const baseStyles = css({
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		margin: "var(--spacing4)",
		gap: "var(--spacing4)",
		position: "relative",
	});

	const variantStyles: VariantStyle = {
		line: css({
			borderBottom: "1px solid var(--color-gray10)",
			isolation: "isolate",
		}),

		outline: css({}),
	};

	return css(baseStyles, variantStyles[variant]);
};

export const getTriggerStyles = (variant: Variant, isSelected: boolean) => {
	const baseStyles = css({
		cursor: "pointer",
		padding: "var(--spacing4)",
		fontSize: "16px",
		color: isSelected ? "black" : "var(--color-gray5)",
		fontWeight: isSelected ? 700 : 400,
		position: "relative",

		":hover": {
			fontWeight: 700,
		},
	});

	const variantStyles: VariantStyle = {
		line: css({
			border: "none",
			backgroundColor: "inherit",
		}),

		outline: css({}),
	};

	return css(baseStyles, variantStyles[variant]);
};

//* only for "line"
export const getIndicatorStyles = (indicatorRect: IndicatorRect) => {
	return css({
		position: "absolute",
		bottom: "-2px",
		left: indicatorRect.left,
		width: indicatorRect.width,
		height: "2px",
		backgroundColor: "black",
		transition: "all 0.3s ease",
	});
};

export const getContentStyles = css({
	display: "flex",
	flexDirection: "column",
	padding: "var(--spacing4)",
});
