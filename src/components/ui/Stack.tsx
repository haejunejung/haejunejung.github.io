import { css, type SerializedStyles } from "@emotion/react";
import type { HTMLAttributes, PropsWithChildren } from "react";

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  css?: SerializedStyles;
}

const vStackStyles = css({
  display: "flex",
  flexDirection: "column",
});

export const VStack = (props: PropsWithChildren<StackProps>) => {
  const { css: userCss, children, className, ...rest } = props;
  return (
    <div css={[vStackStyles, userCss]} className={className} {...rest}>
      {children}
    </div>
  );
};

const hStackStyles = css({
  display: "flex",
  flexDirection: "row",
});

export const HStack = (props: PropsWithChildren<StackProps>) => {
  const { children, ...rest } = props;
  return (
    <div css={hStackStyles} {...rest}>
      {children}
    </div>
  );
};
