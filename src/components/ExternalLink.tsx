import { PropsWithChildren } from "react";

interface ExternalLinkProps extends PropsWithChildren {
  link: string;
}

const ExternalLink: React.FC<Readonly<ExternalLinkProps>> = ({
  link,
  children,
}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ExternalLink;
