import { PropsWithChildren } from "react";
import styles from "./Container.module.scss";

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};

export default Container;
