import styles from "./sidebar.module.css";
import { Layout, Menu, ConfigProvider } from "antd";
import { Link } from "react-router-dom";
import {
  AppstoreFilled,
  BarChartOutlined,
  FileSearchOutlined,
  MessageFilled,
  UnorderedListOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = () => {
  const items = [
    {
      key: "1",
      label: <Link to={"/"}>Все заявки</Link>,
      icon: <AppstoreFilled />,
      className: styles.menu__item,
    },
    {
      key: "2",
      label: <Link to={"/drivers"}>Все водители</Link>,
      icon: <FileSearchOutlined />,
      className: styles.menu__item,
    },
    {
      key: "3",
      label: <Link to={"/employees"}>Сотрудники</Link>,
      icon: <FileSearchOutlined />,
      className: styles.menu__item,
    },
    {
      key: "4",
      label: <Link to={"/documents"}>Документы</Link>,
      icon: <UnorderedListOutlined />,
      className: styles.menu__item,
    },
    {
      key: "5",
      label: <Link to={"/chat"}>Сообщения</Link>,
      icon: <MessageFilled />,
      className: styles.menu__item,
    },
    {
      key: "6",
      label: <Link to={"analytics"}>Аналитика</Link>,
      icon: <BarChartOutlined />,
      className: styles.menu__item,
    },
  ];

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 0,
          },
          components: {
            Menu: {
              horizontalItemBorderRadius: 0,
            },
          },
        }}
      >
        <Sider
          theme={"light"}
          breakpoint="lg"
          collapsedWidth={0}
          className={styles.sidebar}
        >
          <Menu
            theme={"light"}
            mode={"inline"}
            defaultSelectedKeys={["1"]}
            items={items}
           />
        </Sider>
      </ConfigProvider>
    </>
  );
};

export default Sidebar;
