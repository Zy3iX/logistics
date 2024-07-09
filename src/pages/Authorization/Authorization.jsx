// /* eslint-disable no-unused-vars */
import Button from "../../components/UI/Button/Button";
import styles from "./Authorization.module.css";
import { RightOutlined } from "@ant-design/icons";
import { Typography, Form, Input, Image } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getCurrentAccount, onLogin } from "../../services/Auth";
import { LocalStorageKeys } from "../../storage/localStorageKey";

const { Text, Title } = Typography;

const Authorization = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    onLogin(values)
      .then((res) => {
        if (res) {
          if (res.data?.id_token) {
            getCurrentAccount(res.data?.id_token).then((res) => {
              location.reload();
              localStorage.setItem(
                LocalStorageKeys.ACCOUNT_DATA,
                JSON.stringify(res.data)
              );
            });
            localStorage.setItem(
              LocalStorageKeys.LOGISTICS_ACCESS_TOKEN,
              res.data?.id_token
            );
          }
          notification.success({ message: "Добро пожаловать" });
        }
      })

      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (localStorage.getItem(LocalStorageKeys.LOGISTICS_ACCESS_TOKEN)) {
      navigate("/");
    }
  }, []);

  return (
    <div className={styles.AuthWindow}>
      <div className={styles.LogoContainer}>
        <Link to={"/"}>
          <Image
            preview={false}
            className={styles.LogoAuth}
            src="../../../src/assets/images/Logo.svg"
            alt="Logo"
          />
        </Link>
      </div>
      <div className={styles.Form}>
        <Form
          onFinish={onFinish}
          initialValues={{ remember: true }}
          className={styles.FormControl}
          name={"FormControl"}
          autoComplete="off"
        >
          <Title className={styles.FormHeader}>Вход</Title>
          <Text type={"secondary"} className={styles.FormPar}>
            С возвращением!
          </Text>
          <Form.Item
            name={"emile"} // emile - потому что на бэке так написали, как исправят поменяю на email
            rules={[
              { required: true, message: "Пожалуйста введите почту" },
              {
                type: "email",
                message: "Неправильная почта",
              },
            ]}
          >
            <Input
              className={styles.InputAuth}
              placeholder={"Введите почту"}
              type={"email"}
            />
          </Form.Item>
          <Form.Item
            name={"password"}
            validateFirst
            rules={[{ required: true, message: "Пожалуйста введите пароль" }]}
          >
            <Input.Password
              className={styles.InputAuth}
              placeholder={"Пароль"}
              showCount={true}
              type={"password"}
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
