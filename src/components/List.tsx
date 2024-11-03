import ExternalLink from "./ExternalLink";
import InternalLink from "./InternalLink";
import styles from "./List.module.scss";

interface ListProps {
  items: ListItemProps[];
  title: string;
}

const List: React.FC<Readonly<ListProps>> = ({ items, title }) => {
  return (
    <section>
      <h1>{title}</h1>
      <ul className={styles.list}>
        {items.map((item) => (
          <ListItem key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
};

interface ListItemProps {
  imgSrc?: string;
  link: string;
  linkType?: string;
  title: string;
  content?: string;
}

const ListItem: React.FC<Readonly<ListItemProps>> = ({
  imgSrc,
  link,
  title,
  linkType = "internal",
  content,
}) => {
  const isInternal = linkType === "internal";
  const LinkComponent = isInternal ? InternalLink : ExternalLink;

  return (
    <li className={styles.list__item}>
      {imgSrc && <img src={imgSrc} alt={title} loading="lazy" />}
      <LinkComponent link={link}>
        <h4>{title}</h4>
      </LinkComponent>
      {content && <p>{content}</p>}
    </li>
  );
};

export default List;
