import styles from "./List.module.scss";

interface ListProps<T> {
  items: T[];
  title: string;
  renderItem: (item: T) => React.ReactNode;
}

const List = <T,>({ items, title, renderItem }: ListProps<T>) => {
  return (
    <section>
      <h2>{title}</h2>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index}>{renderItem(item)}</li>
        ))}
      </ul>
    </section>
  );
};

export default List;
