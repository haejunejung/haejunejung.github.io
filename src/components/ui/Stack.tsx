import { css, SerializedStyles } from "@emotion/react";
import { HTMLAttributes, PropsWithChildren } from "react";

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  css?: SerializedStyles;
}

const VStackStyles = css({
  display: "flex",
  flexDirection: "column",
});

export const VStack = (props: PropsWithChildren<StackProps>) => {
  const { css: userCss, children, className, ...rest } = props;
  return (
    <div css={[VStackStyles, userCss]} className={className} {...rest}>
      {children}
    </div>
  );
};

const HStackStyles = css({
  display: "flex",
  flexDirection: "row",
});

export const HStack = (props: PropsWithChildren<StackProps>) => {
  const { children, ...rest } = props;
  return (
    <div css={HStackStyles} {...rest}>
      {children}
    </div>
  );
};
