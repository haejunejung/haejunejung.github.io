import { useThemeContext } from "@/contexts/theme/useThemeContext";
import { CSSProperties } from "react";

interface ThemeIconProps {
  imgSrc: string;
  alt: string;
  width: number;
  height: number;
  style?: CSSProperties;
  className?: string;
}

const ThemedIcon = ({
  imgSrc,
  alt,
  width,
  height,
  style,
  className,
}: ThemeIconProps) => {
  const theme = useThemeContext();

  const combinedClassName = `${className || ""} theme-icon`.trim();

  return (
    <img
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      style={{
        ...style,
        filter: theme.theme === "light" ? "none" : "invert(1)",
      }}
      className={combinedClassName}
    />
  );
};

export default ThemedIcon;
