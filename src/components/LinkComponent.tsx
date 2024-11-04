import { PropsWithChildren } from "react";
import { Link } from "wouter";
import styles from "./LinkComponent.module.scss";

interface LinkProps extends PropsWithChildren {
  link: string;
}

const ExternalLink: React.FC<LinkProps> = ({ children, link }) => {
  // 외부 하이퍼링크 보안 noopener, noreferrer
  // https://yozm.wishket.com/magazine/detail/1586/
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      {children}
    </a>
  );
};

const InternalLink: React.FC<LinkProps> = ({ children, link }) => {
  return (
    <Link to={link} className={styles.link}>
      {children}
    </Link>
  );
};

interface LinkComponentProps extends LinkProps {
  linkType?: string;
}

const LinkComponent: React.FC<LinkComponentProps> = ({
  children,
  link,
  linkType = "internal",
}) => {
  return linkType === "external" ? (
    <ExternalLink link={link}>{children}</ExternalLink>
  ) : (
    <InternalLink link={link}>{children}</InternalLink>
  );
};

export default LinkComponent;
