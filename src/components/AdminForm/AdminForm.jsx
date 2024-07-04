import styles from "./AdminForm.module.css";
import { Form, Input } from "antd";

const AdminForm = () => {
  return (
    <>
      <Form.Item
        name={"name"}
        rules={[
          {
            required: true,
            message: "Пожалуйста введите ФИО!",
          },
        ]}
      >
        <Input
          allowClear
          required={true}
          className={styles.formInput}
          placeholder={"ФИО"}
        />
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
        <Input
          allowClear
          required={true}
          className={styles.formInput}
          placeholder={"Дата рождения"}
        />
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
        <Input
          allowClear
          required={true}
          className={styles.formInput}
          placeholder={"Номер телефона"}
        />
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
        <Input.Password
          allowClear
          className={styles.formInput}
          placeholder={"Старый пароль"}
        />
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
        <Input.Password
          allowClear
          className={styles.formInput}
          placeholder={"Новый пароль"}
        />
      </Form.Item>
    </>
  );
};

export default AdminForm;
