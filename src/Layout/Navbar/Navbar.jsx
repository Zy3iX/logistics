import styles from "./Navbar.module.css";
import { Avatar, Button, Layout, Image, notification, Badge } from "antd";
import { Link } from "react-router-dom";
import { BellOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { getCurrentUserData } from "../../helpers/currentUser";
import { clearStorage } from "../../services/Auth";
const { Header } = Layout;

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
          <div className={styles.logo}>
            <Link>
              <Image
                preview={false}
                width={150}
                src="../../../src/assets/images/Logo.svg"
              />
            </Link>
          </div>
          <div className={styles.notifications}>
            <Badge dot>
              <BellOutlined />
            </Badge>
          </div>
          <div className={styles.user__profile}>
            <Link>
              <Avatar size={32} icon={<UserOutlined />} />
              <span
                className={styles.user__data}
              >{`${userData?.firstName} ${userData?.lastName}`}</span>
              <Button type={"primary"} onClick={handleLogOut} danger>
                Выйти
              </Button>
            </Link>
          </div>
        </Header>
      </Layout>
    </>
  );
};

export default Navbar;