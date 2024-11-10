import { PropsWithChildren } from "react";
import styles from "./Layout.module.scss";

const Layout = ({ children }: PropsWithChildren) => {
  return <main className={styles.layout}>{children}</main>;
};

export default Layout;
