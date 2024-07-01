import styles from "./Navbar.module.css";
import { Avatar, Dropdown, Layout, Menu, Space, Input, Image } from "antd";
import { Outlet, Link } from "react-router-dom";
import {
  BellOutlined,
  DownOutlined,
  LogoutOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Header } = Layout;
const { Search } = Input;

const Navbar = (props) => {
  const items = [
    {
      key: "1",
      icon: <SettingOutlined />,
      label: <Link to={"/admin"}>Admin panel</Link>,
    },
    {
      key: "2",
      icon: <LogoutOutlined />,
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Выйти
        </a>
      ),
      disabled: true,
    },
  ];

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
                placeholder={"Search..."}
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
              <Dropdown menu={{ items }}>
                <Link
                  to={"#"}
                  onClick={(e) => e.preventDefault()}
                  className={styles.profile}
                >
                  <Space>
                    <span className={styles.menu__username}>User</span>
                    <DownOutlined />
                  </Space>
                </Link>
              </Dropdown>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
      <Outlet />
    </>
  );
};

export default Navbar;
