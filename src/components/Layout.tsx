import { PropsWithChildren } from "react";
import styles from "./Layout.module.scss";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <main className={styles.layout}>{children}</main>;
};

export default Layout;
