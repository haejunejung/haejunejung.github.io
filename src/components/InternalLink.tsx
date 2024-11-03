import { PropsWithChildren } from "react";
import { Link } from "wouter";

interface InternalLinkProps extends PropsWithChildren {
  link: string;
}

const InternalLink: React.FC<InternalLinkProps> = ({ link, children }) => {
  return <Link to={link}>{children}</Link>;
};

export default InternalLink;
