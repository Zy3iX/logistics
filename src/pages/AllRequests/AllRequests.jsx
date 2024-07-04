import { useEffect, useState } from "react";
import styles from "./AllRequests.module.css";
import { Button, ConfigProvider, Form, Input, Typography, Select } from "antd";
import ConsignorForm from "../../components/ConsignorForm/ConsignorForm";
import AdminForm from "../../components/AdminForm/AdminForm";

const { Title } = Typography;

const AllRequests = () => {
  const theme = {
    token: {
      colorPrimary: "#000",
      colorText: "#fff",
      controlHeightLG: 48,
      borderColorHover: "#000",
    },
  };

  const [role, setRole] = useState("Админ   ");

  useEffect(() => {
    console.log(role);
  });

  const handleSubmitForm = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className={styles.date__register}>
        <Title level={3}>Дата добавления: </Title>
      </div>

      <Form onFinish={handleSubmitForm} layout="vertical" name={"formEmployee"}>
        <Title level={4}>Выбрать роль</Title>
        <Form.Item
          name={"roles"}
          rules={[{ required: true, message: "Выберите роль!" }]}
        >
          <div className={styles.selectRoles}>
            <Select
              onChange={(val) => setRole(val)}
              defaultValue={role}
              options={[
                { value: "Экспедитор", label: "Экспедитор" },
                { value: "Админ", label: "Админ" },
              ]}
            />
          </div>
        </Form.Item>
        <Title level={3}>Данные сотрудника</Title>
        {role === "Админ" ? (
          <AdminForm />
        ) : (
          <ConsignorForm/>
        )}

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
