import styles from "./navbar.module.css";
import { Avatar, Button, Layout, Menu, Input, Image, notification } from "antd";
import { Link } from "react-router-dom";
import {
  BellOutlined,
  DownOutlined,
  LogoutOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { getCurrentUserData } from "../../helpers/currentUser";
import { clearStorage } from "../../services/Auth";
const { Header } = Layout;
const { Search } = Input;

const Navbar = () => {
  const userData = getCurrentUserData();
  const navigate = useNavigate();

  const logOutNotification = () => {
    notification.info({
      message: "Вы вышли из аккаунта",
    });
  };

  const handleLogOut = () => {
    clearStorage();
    logOutNotification();
    navigate(`/login`);
  };

  return (
    <>
      <Layout>
        <Header className={styles.header}>
          <Menu theme="light" mode="horizontal" className={styles.menu}>
            <div>
              <Link to={"/"}>
                <Image
                  preview={false}
                  width={150}
                  src="../../../src/assets/images/Logo.svg"
                />
              </Link>
            </div>
            <div className={styles.searchbar__container}>
              <Search
                allowClear
                enterButton={<SearchOutlined />}
                placeholder={"Найти..."}
                className={styles.searchbar}
              />
            </div>
            <Menu.Item key={"notification"}>
              <Link to={"/notifications"}>
                <BellOutlined />
              </Link>
            </Menu.Item>
            <Menu.Item className={styles.menu__user}>
              <Avatar size={32} icon={<UserOutlined />} />
              <span>{`${userData?.firstName} ${userData?.lastName}`}</span>
              <Button type="primary" danger onClick={handleLogOut}>
                Выйти
              </Button>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </>
  );
};

export default Navbar;
