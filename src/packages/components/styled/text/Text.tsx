import { CSSProperties } from "react";
import styled from "@emotion/styled";

type Typography =
  | "headline0"
  | "headline1"
  | "headline2"
  | "headline3"
  | "title"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption1"
  | "caption2";

type FontWeight = "regular" | "bold";

type TextAlign = "left" | "center" | "right";

interface TextProps {
  size: Typography;
  fontWeight?: FontWeight;
  lineHeight?: number;
  textAlign?: TextAlign;
  style?: CSSProperties;
}

const typographyMap: Record<Typography, number | `${number}px`> = {
  headline0: `28px`,
  headline1: `24px`,
  headline2: `22px`,
  headline3: `20px`,
  title: `18px`,
  subtitle1: `16px`,
  subtitle2: `15px`,
  body1: `14px`,
  body2: `13px`,
  caption1: `12px`,
  caption2: `11px`,
};

const fontWeightMap: Record<FontWeight, number> = {
  regular: 400,
  bold: 700,
};

// TODO: text-decoration, text-transform, letter-spacing
// https://www.daleseo.com/css-typography/
export const Text = styled.p<TextProps>`
  font-size: ${(props) => typographyMap[props.size]};
  font-weight: ${(props) => fontWeightMap[props.fontWeight ?? "regular"]};
  text-align: ${(props) => props.textAlign};
  line-height: ${(props) => `${props.lineHeight}px`};
  ${(props) => props.style && { ...props.style }};
`;
