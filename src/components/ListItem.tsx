import { PropsWithChildren } from "react";
import styles from "./ListItem.module.scss";
import ExternalLink from "./ExternalLink";

const ListItem = ({ children }: PropsWithChildren) => {
  return <li className={styles.item}>{children}</li>;
};

const Left = ({ children }: PropsWithChildren) => {
  return <div className={styles.item__left}>{children}</div>;
};

const Right = ({ children }: PropsWithChildren) => {
  return <div className={styles.item__right}>{children}</div>;
};

const Thumnail = ({ imgSrc, alt }: { imgSrc: string; alt: string }) => {
  return (
    <img src={`/blog/${imgSrc}`} alt={alt} className={styles.item__thumnail} />
  );
};

const TechLink = ({ link, name }: { link: string; name: string }) => {
  return (
    <ExternalLink link={link}>
      <h4 className={styles.item__name}>{name}</h4>
    </ExternalLink>
  );
};

const Title = ({ title }: { title: string }) => {
  return <h3 className={styles.item__title}>{title}</h3>;
};

const Summary = ({ summary }: { summary: string }) => {
  return <p className={styles.item__summary}>{summary}</p>;
};

ListItem.Thumnail = Thumnail;
ListItem.TechLink = TechLink;
ListItem.Title = Title;
ListItem.Summary = Summary;
ListItem.Left = Left;
ListItem.Right = Right;

export default ListItem;
