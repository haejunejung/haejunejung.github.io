import { PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";

export const UnstyledLink = (
  props: PropsWithChildren<LinkProps> & React.RefAttributes<HTMLAnchorElement>
) => {
  const { children, ...rest } = props;
  return (
    <Link
      css={{
        textDecoration: "none",
        color: "inherit",
      }}
      {...rest}
    >
      {children}
    </Link>
  );
};
