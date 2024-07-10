import styles from "./navbar.module.css";
import { Avatar, Dropdown, Layout, Menu, Space, Input, Image } from "antd";
import { Link } from "react-router-dom";
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

const Navbar = () => {
  const items = [
    {
      key: "1",
      icon: <SettingOutlined />,
      label: <Link to={"/admin"}>Admin panel</Link>,
    },
    {
      key: "2",
      icon: <LogoutOutlined />,
      label: <Link to={"/"}>Выйти</Link>,
      disabled: true,
    },
  ];

  const menuItems = [
    {
      key: 1,
      label: (
        <Link to={"/notifications"}>
          <BellOutlined />
        </Link>
      ),
    },
    {
      key: 2,
      className: styles.menu__user,
      label: (
        <>
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
        </>
      ),
    },
  ];

  return (
    <>
      <Layout>
        <Header className={styles.header}>
          <Link to={"/"}>
            <Image
              preview={false}
              width={150}
              src="../../../src/assets/images/Logo.svg"
            />
          </Link>

          <div className={styles.searchbar__container}>
            <Search
              allowClear
              enterButton={<SearchOutlined />}
              placeholder={"Найти..."}
              className={styles.searchbar}
            />
          </div>
          <Menu
            theme="light"
            style={{
              minWidth: 0,
            }}
            mode="horizontal"
            className={styles.menu}
            items={menuItems}
          />
        </Header>
      </Layout>
    </>
  );
};

export default Navbar;
