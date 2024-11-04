import styles from "./MDXComponents.module.scss";

export const H1: React.FC<React.HTMLProps<HTMLHeadingElement>> = (props) => (
  <h1 className={styles.H1} {...props} />
);
