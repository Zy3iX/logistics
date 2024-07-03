import styles from "./AllRequests.module.css";
import { Button, ConfigProvider, Form, Input, Typography } from "antd";
// import Dropdown from "../../components/Dropdown/Dropdown";

const { Text, Title } = Typography;

const AllRequests = () => {
  //   const itemsUser = [{ key: "1", link: "/", title: "Выход" }];

  //   const itemsRoles = [
  //     { key: "1", role: "Админ" },
  //     { key: "2", role: "Простолюдин" },
  //   ];

  const theme = {
    token: {
      colorPrimary: "#000",
      colorText: "#fff",
      controlHeightLG: 48,
      borderColorHover: "#000",
    },
  };

  const handleSubmitForm = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className={styles.date__register}>
        <Title level={3}>Дата добавления: </Title>
        <Text>02.07.2020</Text>
      </div>
      {/* <Form.Item>
        <Dropdown menu={itemsRoles }>
          <Link
            to={"#"}
            onClick={(e) => e.preventDefault()}
            className={styles.profile}
          >
            <Space>
              <span className={styles.menu__username}>User</span>
            </Space>
          </Link>
        </Dropdown>
      </Form.Item> */}

      <div className={styles.chooseRole}>
        <Title level={4}>Выбрать роль</Title>
        {/* <Dropdown></Dropdown> */}
      </div>

      <Form onFinish={handleSubmitForm} layout="vertical" name={"formEmployee"}>
        <Title level={3}>Данные сотрудника</Title>
        <Form.Item
          name={"name"}
          rules={[
            {
              required: true,
              message: "Пожалуйста введите ФИО!",
            },
          ]}
        >
          <Input className={styles.formInput} placeholder={"ФИО"} />
        </Form.Item>
        <Form.Item
          name={"dateBirth"}
          rules={[
            {
              required: true,
              message: "Пожалуйста введите дату рождения!",
            },
          ]}
        >
          <Input className={styles.formInput} placeholder={"Дата рождения"} />
        </Form.Item>
        <Form.Item
          name={"phoneNumber"}
          rules={[
            {
              required: true,
              message: "Пожалуйста введите номер телефона!",
            },
          ]}
        >
          <Input className={styles.formInput} placeholder={"Номер телефона"} />
        </Form.Item>
        <Form.Item
          name={"oldPassword"}
          rules={[
            {
              required: true,
              message: "Пожалуйста введите пароль!",
            },
          ]}
        >
          <Input className={styles.formInput} placeholder={"Старый пароль"} />
        </Form.Item>
        <Form.Item
          name={"newPassword"}
          rules={[
            {
              required: true,
              message: "Пожалуйста введите пароль!",
            },
          ]}
        >
          <Input className={styles.formInput} placeholder={"Новый пароль"} />
        </Form.Item>

        <ConfigProvider theme={theme}>
          <Button size={"large"} className={styles.formBtn} htmlType="submit">
            Сохранить
          </Button>
        </ConfigProvider>
      </Form>
    </>
  );
};

export default AllRequests;
