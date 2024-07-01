// /* eslint-disable no-unused-vars */
import Button from "../../components/UI/Button/Button";
import styles from "./Authorization.module.css";
import { RightOutlined } from "@ant-design/icons";
import { Typography, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const { Text, Title } = Typography;

const Authorization = () => {
  const navigate = useNavigate();
  const handleForm = (values) => {
    console.log("Success: ", values);
    navigate("/admin");
  };
  return (
    <div className={styles.AuthWindow}>
      <div className={styles.LogoContainer}>
        <img
          className={styles.LogoAuth}
          src="../../../src/assets/images/Logo.svg"
          alt="Logo"
        />
      </div>
      <div className={styles.Form}>
        <Form
          onFinish={handleForm}
          className={styles.FormControl}
          name={"FormControl"}
        >
          <Title className={styles.FormHeader}>Вход</Title>
          <Text type={"secondary"} className={styles.FormPar}>
            С возвращением!
          </Text>
          <Form.Item
            name={"Email"}
            rules={[{ required: true, message: "Введите свою почту!" }]}
          >
            <Input
              className={styles.InputAuth}
              placeholder={"Введите почту"}
              name={"input[email]"}
              required={true}
              type={"email"}
            />
          </Form.Item>
          <Form.Item name={"Password"}>
            <Input.Password
              className={styles.InputAuth}
              placeholder={"Пароль"}
              showCount={true}
              name={"input[password]"}
              type={"password"}
              required={true}
            />
          </Form.Item>
          <Form.Item>
            <div className={styles.FormBtn}>
              <Button className={"BtnInfo"}>
                Войти
                <span>
                  <RightOutlined className={styles.IconButton} />
                </span>
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Authorization;