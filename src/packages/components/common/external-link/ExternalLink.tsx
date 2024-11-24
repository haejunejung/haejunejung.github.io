import { PropsWithChildren } from "react";

interface ExternalLinkProps {
  href: string;
}

// TODO : 외부 하이퍼링크 보안 noopener, noreferrer
// https://yozm.wishket.com/magazine/detail/1586/
export const ExternalLink = ({
  children,
  href,
  rel,
  ...props
}: PropsWithChildren<ExternalLinkProps> &
  React.ComponentPropsWithoutRef<"a">) => {
  return (
    <a
      href={href}
      target="_blank"
      rel={`noopener noreferrer ${rel}`}
      {...props}
    >
      {children}
    </a>
  );
};
