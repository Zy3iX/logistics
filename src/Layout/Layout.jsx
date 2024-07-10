import { Layout as LayoutAntD } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./Layout.module.css";
import { LocalStorageKeys } from "../storage/localStorageKey";
import { useEffect } from "react";

const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const checkIfTokenIsValid = () => {
    const currentToken = localStorage.getItem(
      LocalStorageKeys.LOGISTICS_ACCESS_TOKEN
    );
    return !!currentToken;
  };

  useEffect(() => {
    if (!checkIfTokenIsValid()) {
      navigate("/login");
    }
  }, [pathname, navigate]);

  const currentPath = pathname;
  return (
    <div>
      {checkIfTokenIsValid() && (
        <LayoutAntD className={styles.layout}>
          <Navbar />
          <LayoutAntD>
            <Sidebar />
            <LayoutAntD className={styles.layout__content}>
              <Content className={styles.content}>
                <Outlet className={styles.outlet} />
                {currentPath !== "/" && <div>!!!</div>}
              </Content>
            </LayoutAntD>
          </LayoutAntD>
        </LayoutAntD>
      )}
    </div>
  );
};

export default Layout;
