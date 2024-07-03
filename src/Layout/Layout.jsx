import { Layout as LayoutAntD } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <LayoutAntD className={styles.layout}>
        <Navbar />
        <LayoutAntD>
          <Sidebar />
          <LayoutAntD className={styles.layout__content}>
            <Content className={styles.content}>
              <Outlet className={styles.outlet} />
            </Content>
          </LayoutAntD>
        </LayoutAntD>
      </LayoutAntD>
    </>
  );
};

export default Layout;
