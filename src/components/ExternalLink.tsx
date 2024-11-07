import { PropsWithChildren } from "react";

interface LinkProps {
  link: string;
}

const ExternalLink: React.FC<PropsWithChildren<LinkProps>> = ({
  children,
  link,
}) => {
  // 외부 하이퍼링크 보안 noopener, noreferrer
  // https://yozm.wishket.com/magazine/detail/1586/
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ExternalLink;
