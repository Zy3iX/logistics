import { DownOutlined, UserOutlined } from "@ant-design/icons";
import styles from "./Dropdown.module.css";
import { Avatar, Button } from "antd";
import { Link } from "react-router-dom";

const Dropdown = (props) => {
  return (
    <div className={styles.dropdown}>
      <Button className={styles.dropdownbtn}>
        {props.avatar ? <Avatar icon={<UserOutlined />} size={40} /> : null }
        {props.buttonText} <DownOutlined />
      </Button>
      <div className={styles.dropdownitems}>
        {props.items.map((item) => {
          return (
            <Link to={item.link} key={item.key}>
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
