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
          name={"formAdmin[name]"}
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
          name={"formAdmin[dateBirth]"}
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
          name={"formAdmin[telephone]"}
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
          name={"formAdmin[oldPassword]"}
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
          name={"formAdmin[newPassword]"}
        />
      </Form.Item>
    </>
  );
};

export default AdminForm;
